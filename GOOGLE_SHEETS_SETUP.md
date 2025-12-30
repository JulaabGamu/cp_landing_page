# Google Sheets Waitlist Setup Guide

## What You Need to Do

Follow these steps to complete the Google Sheets integration for your waitlist feature.

## Step 1: Get Your Service Account Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create one if you haven't)
3. Navigate to **IAM & Admin** → **Service Accounts**
4. Find your service account (the one you created)
5. Click on the service account email
6. Go to the **Keys** tab
7. Click **Add Key** → **Create New Key**
8. Select **JSON** format
9. Click **Create** - this will download a JSON file

## Step 2: Add the Credentials to Your Project

1. Rename the downloaded JSON file to `google-credentials.json`
2. Move it to your project root directory (same level as `package.json`)
   ```
   cp_landing_page/
   ├── google-credentials.json  ← Put it here
   ├── package.json
   ├── app/
   └── components/
   ```

**Important:** This file is already in `.gitignore` so it won't be committed to git.

## Step 3: Share Your Google Sheet with the Service Account

1. Open the JSON file you just added (`google-credentials.json`)
2. Find the `client_email` field - it looks like: `your-service@project-id.iam.gserviceaccount.com`
3. Copy this email address
4. Go to your [Google Sheet](https://docs.google.com/spreadsheets/d/1k0RjHzDKkIXizDXyxxYvorJsKofl--KUu3jlP8iA6Ms/edit)
5. Click the **Share** button (top right)
6. Paste the service account email
7. Make sure it has **Editor** permissions
8. Uncheck "Notify people" (it's a robot, not a person)
9. Click **Share**

## Step 4: Set Up Your Google Sheet Headers (Optional)

The API will automatically add headers if they don't exist, but you can set them up manually:

1. Open your Google Sheet
2. In the first row (Row 1), add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Role`
   - E1: `Excited About`

## Step 5: Verify Environment Variables

Check that your `.env.local` file has the correct values:

```env
GOOGLE_SHEET_ID=1k0RjHzDKkIXizDXyxxYvorJsKofl--KUu3jlP8iA6Ms
GOOGLE_SHEET_NAME=Sheet1
GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json
```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your app in the browser
3. Fill out the waitlist form
4. Submit it
5. Check your Google Sheet - you should see a new row with the data!

## Troubleshooting

### "Failed to initialize Google Sheets API"
- Make sure `google-credentials.json` exists in the project root
- Check that the file path in `.env.local` is correct: `./google-credentials.json`

### "Failed to save data to Google Sheets"
- Verify you shared the sheet with the service account email
- Make sure the service account has **Editor** permissions
- Check that the `GOOGLE_SHEET_ID` in `.env.local` is correct

### "Permission denied"
- The service account email must be added as an Editor in the Google Sheet
- Double-check the email in the Share settings

### Data not appearing in the sheet
- Check the browser console for errors
- Check your terminal/server logs for error messages
- Verify the sheet name matches `GOOGLE_SHEET_NAME` in `.env.local`

## For Production Deployment (Vercel, etc.)

When deploying to production:

1. Add environment variables in your hosting platform:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`
   - Instead of using the JSON file, you'll need to add individual variables:
     - `GOOGLE_SERVICE_ACCOUNT_EMAIL` - from `client_email` in the JSON
     - `GOOGLE_PRIVATE_KEY` - from `private_key` in the JSON (keep the `\n` characters)

2. Update `app/api/waitlist/route.ts` to use environment variables directly instead of the JSON file (let me know if you need help with this when you're ready to deploy)

## Security Checklist

- ✅ `google-credentials.json` is in `.gitignore`
- ✅ `.env.local` is in `.gitignore`
- ✅ Service account has minimal permissions (only access to this specific sheet)
- ✅ Google Sheet is private (not publicly accessible)

---

Need help? Check the error messages in your browser console and terminal logs.
