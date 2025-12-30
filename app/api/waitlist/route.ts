import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Type for the waitlist form data
interface WaitlistData {
  name: string;
  email: string;
  role: string;
  excited: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw new Error('Failed to initialize Google Sheets API');
  }
}

// Append data to Google Sheet
async function appendToSheet(data: WaitlistData) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID is not configured');
  }

  // Format the timestamp
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Prepare the row data
  const values = [
    [
      timestamp,
      data.name,
      data.email,
      data.role,
      data.excited || 'N/A',
    ],
  ];

  try {
    // First, check if headers exist, if not, add them
    const range = `${sheetName}!A1:E1`;
    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // If no headers, add them
    if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Timestamp', 'Name', 'Email', 'Role', 'Excited About']],
        },
      });
    }

    // Append the new row
    const appendRange = `${sheetName}!A:E`;
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: appendRange,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw new Error('Failed to save data to Google Sheets');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: WaitlistData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.role) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and role are required' },
        { status: 400 }
      );
    }

    // Validate name (not empty and reasonable length)
    if (body.name.trim().length < 2 || body.name.trim().length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate role is one of the expected values
    const validRoles = ['student', 'professor', 'ta', 'other'];
    if (!validRoles.includes(body.role)) {
      return NextResponse.json(
        { error: 'Invalid role selected' },
        { status: 400 }
      );
    }

    // Sanitize the excited field (optional field)
    const excited = body.excited ? body.excited.trim().slice(0, 500) : '';

    // Append to Google Sheets
    await appendToSheet({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      role: body.role,
      excited,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);

    // Return appropriate error response
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
