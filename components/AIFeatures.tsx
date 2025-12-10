import React from "react";
import localFont from "next/font/local";

const workSans = localFont({
    src: [
        { path: "../public/fonts/WorkSans-ExtraLight.woff2", weight: "200", style: "normal" },
        { path: "../public/fonts/WorkSans-Light.woff2", weight: "300", style: "normal" },
        { path: "../public/fonts/WorkSans-Regular.woff2", weight: "400", style: "normal" },
        { path: "../public/fonts/WorkSans-Medium.woff2", weight: "500", style: "normal" },
        { path: "../public/fonts/WorkSans-SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../public/fonts/WorkSans-Bold.woff2", weight: "700", style: "normal" },
    ],
});

export function AIFeatures() {
    return (
        <section className="py-24 px-4 text-gray-900 relative">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${workSans.className}`}>
                        Intelligent storage. <br />
                        <span className="text-blue-600">Personalized AI.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your data stays local and your AI behaves exactly how you want. Customize the model&apos;s context and keep your transcripts secure.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Feature 1: Local Vector Storage */}
                    <div
                        className="rounded-3xl p-8 lg:p-10 flex flex-col h-full"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Local Vector Storage</h3>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Every word is timestamped and embedded locally. Search hours of lectures instantly without uploading data to the cloud.
                        </p>

                        {/* Visualization Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-grow flex flex-col justify-between relative overflow-hidden">

                            {/* Transcription Line */}
                            <div className="flex flex-wrap gap-x-2 gap-y-4 mb-12 text-lg font-medium text-gray-800 relative z-10">
                                <span>The</span>
                                <span className="relative">
                                    mitochondria
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-200"></span>
                                    {/* Connection Line to Table Row 1 */}
                                    <svg className="absolute top-full left-1/2 w-px h-px overflow-visible pointer-events-none text-blue-300 z-0">
                                        <path d="M0,0 C0,40 -20,40 -40,90" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <span>is</span>
                                <span>the</span>
                                <span className="relative">
                                    powerhouse
                                    {/* Connection Line to Table Row 2 */}
                                    <svg className="absolute top-full left-1/2 w-px h-px overflow-visible pointer-events-none text-blue-300 z-0">
                                        <path d="M0,0 C0,50 -80,50 -160,130" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                {/* Cursor Removed */}
                            </div>

                            {/* Data Table */}
                            <div className="bg-gray-50 rounded-lg border border-gray-100 p-4 text-xs font-mono relative z-10">
                                <div className="grid grid-cols-4 gap-4 text-gray-400 mb-2 uppercase tracking-wider text-[10px]">
                                    <div className="col-span-1">Token</div>
                                    <div className="col-span-1">Timestamp</div>
                                    <div className="col-span-2">Vector</div>
                                </div>
                                {/* Row 1 */}
                                <div className="grid grid-cols-4 gap-4 py-2 border-b border-gray-200 text-gray-700">
                                    <div className="col-span-1 text-blue-600 font-semibold">mitochondria</div>
                                    <div className="col-span-1">02:12:45</div>
                                    <div className="col-span-2 text-gray-400">[0.12, -0.4, ...]</div>
                                </div>
                                {/* Row 2 */}
                                <div className="grid grid-cols-4 gap-4 py-2 text-gray-700">
                                    <div className="col-span-1 font-semibold">powerhouse</div>
                                    <div className="col-span-1">02:12:47</div>
                                    <div className="col-span-2 text-gray-400">[0.88, 0.41, ...]</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Tag */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 bg-white py-2 px-4 rounded-full border border-gray-100 self-center shadow-sm">
                            <span className="block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Keep recording for up to 3 hours
                        </div>
                    </div>

                    {/* Feature 2: Custom Model Context */}
                    <div
                        className="rounded-3xl p-8 lg:p-10 flex flex-col h-full"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Custom Model Context</h3>
                        </div>
                        <p className="text-gray-600 mb-8">
                            Tailor how the AI summarizes and answers. Upload reference files and set global guidelines for every class.
                        </p>

                        {/* UI Mockup */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-grow flex flex-col">

                            {/* Header inside Mockup */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-blue-500 bg-blue-50 p-1.5 rounded-md">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">Global guidelines</h4>
                                    <p className="text-xs text-gray-500">Instructions that apply to every transcript.</p>
                                </div>
                            </div>

                            {/* Text Area Mock */}
                            <div className="space-y-1 mb-6">
                                <label className="text-xs font-medium text-gray-500">Prompt</label>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 font-mono leading-relaxed">
                                    Summarise the lecture in clear sections: recap previous material, key concepts, demonstrations...
                                </div>
                            </div>

                            {/* Toggles */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="border border-gray-100 rounded-lg p-3 flex gap-3 items-start">
                                    <div className="mt-0.5 relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-blue-600">
                                        <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">Include action items</p>
                                        <p className="text-[10px] text-gray-500 leading-tight mt-1">Generate tasks & pipelines.</p>
                                    </div>
                                </div>
                                <div className="border border-gray-100 rounded-lg p-3 flex gap-3 items-start">
                                    <div className="mt-0.5 relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-blue-600">
                                        <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">Emphasise key terms</p>
                                        <p className="text-[10px] text-gray-500 leading-tight mt-1">Highlight formulas & references.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-50">
                                <button className="flex items-center gap-2 bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3V15" /></svg>
                                    Save model context
                                </button>
                                <button className="text-xs text-gray-500 flex items-center gap-1 hover:text-gray-700">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    Reset to defaults
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
