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

export function FeatureOrganization() {
    return (
        <section className="py-24 px-4 text-gray-900 border-t border-gray-100/50 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">

                {/* Left Side: Mockup UI */}
                <div className="w-full md:w-1/2 flex justify-center">
                    {/* Dashboard Class List Mockup */}
                    <div
                        className="relative w-full max-w-md rounded-2xl shadow-xl overflow-hidden aspect-[4/5] flex flex-col p-6"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                    >

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">My Classes</h3>
                                <p className="text-xs text-gray-500">Fall Semester 2024</p>
                            </div>
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </div>
                        </div>

                        {/* Class List Grid */}
                        <div className="grid grid-cols-1 gap-4 overflow-y-auto pr-1">

                            {/* Class Item 1 */}
                            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group">
                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">EE2026</h4>
                                    <p className="text-xs text-gray-500">Mon, Wed • 10:00 AM</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                                    12
                                </div>
                            </div>

                            {/* Class Item 2 */}
                            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-purple-200 hover:shadow-sm transition-all cursor-pointer group">
                                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">CS2113</h4>
                                    <p className="text-xs text-gray-500">Tue, Thu • 2:00 PM</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                                    8
                                </div>
                            </div>

                            {/* Class Item 3 */}
                            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-green-200 hover:shadow-sm transition-all cursor-pointer group">
                                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600">CS2107</h4>
                                    <p className="text-xs text-gray-500">Fri • 4:00 PM</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                                    15
                                </div>
                            </div>
                            {/* Class Item 4 (Faded hint of scrolling) */}
                            <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-gray-200 opacity-60">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-400">Add New Class</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className={`text-4xl md:text-5xl lg:text-5xl font-light tracking-tight mb-8 ${workSans.className}`}>
                        Stay organized. <br />
                        <span className="text-blue-600">Never miss a lecture.</span>
                    </h2>

                    <div className="space-y-10">
                        {/* Feature Point 1 */}
                        <div className="flex gap-4">
                            <span className="text-4xl font-light text-gray-200">01</span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Class-Specific Organization</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Create dedicated spaces for each subject. All your recordings, notes, and study guides are automatically sorted into the right class folder.
                                </p>
                            </div>
                        </div>

                        {/* Feature Point 2 */}
                        <div className="flex gap-4">
                            <span className="text-4xl font-light text-gray-200">02</span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Recall</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Search across every lecture instantly. Find that one specific example or definition from weeks ago in seconds.
                                </p>
                            </div>
                        </div>
                        {/* Feature Point 3 */}
                        <div className="flex gap-4">
                            <span className="text-4xl font-light text-gray-200">03</span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Knowledge Tracking</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Review past questions and quizzes to track your understanding over time. Your personal AI tutor remembers where you struggled.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
