"use client";

import React, { useRef } from "react";
import localFont from "next/font/local";
import { motion, useInView } from "framer-motion";

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

// Animated Toggle Component
function AnimatedToggle({ delay = 0, isInView }: { delay?: number; isInView: boolean }) {
    return (
        <motion.div
            className="mt-0.5 relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent"
            initial={{ backgroundColor: "#e5e7eb" }}
            animate={{ backgroundColor: isInView ? "#2563eb" : "#e5e7eb" }}
            transition={{ duration: 0.3, delay: delay + 0.5 }}
        >
            <motion.span
                className="pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow ring-0"
                initial={{ x: 0 }}
                animate={{ x: isInView ? 16 : 0 }}
                transition={{ type: "spring" as const, stiffness: 500, damping: 30, delay: delay + 0.5 }}
            />
        </motion.div>
    );
}

export function AIFeatures() {
    const togglesRef = useRef(null);
    const isTogglesInView = useInView(togglesRef, { once: true, margin: "-50px" });
    return (
        <section id="ai-features" className="py-24 px-4 text-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider mb-6">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        AI Intelligence
                    </span>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${workSans.className}`}>
                        Intelligent storage. <br />
                        <span className="text-blue-600">Personalized AI.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your data stays local and your AI behaves exactly how you want. Customize the model&apos;s context and keep your transcripts secure.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Feature 1: Local Vector Storage */}
                    <motion.div
                        className="rounded-3xl p-8 lg:p-10 flex flex-col h-full"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
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

                        {/* Animated Visualization */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-grow relative overflow-hidden">

                            {/* Animated SVG Lines - hidden on mobile */}
                            <div className="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex">
                                <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                                    {/* Animated flowing lines */}
                                    <style>
                                        {`
                                            @keyframes flowLine1 {
                                                0% { stroke-dashoffset: 200; }
                                                50% { stroke-dashoffset: 0; }
                                                100% { stroke-dashoffset: -200; }
                                            }
                                            @keyframes flowLine2 {
                                                0% { stroke-dashoffset: 180; }
                                                50% { stroke-dashoffset: 0; }
                                                100% { stroke-dashoffset: -180; }
                                            }
                                            @keyframes flowLine3 {
                                                0% { stroke-dashoffset: 160; }
                                                50% { stroke-dashoffset: 0; }
                                                100% { stroke-dashoffset: -160; }
                                            }
                                            .flow-line-1 {
                                                stroke-dasharray: 20 180;
                                                animation: flowLine1 3s ease-in-out infinite;
                                            }
                                            .flow-line-2 {
                                                stroke-dasharray: 20 160;
                                                animation: flowLine2 3.5s ease-in-out infinite;
                                                animation-delay: 0.5s;
                                            }
                                            .flow-line-3 {
                                                stroke-dasharray: 20 140;
                                                animation: flowLine3 4s ease-in-out infinite;
                                                animation-delay: 1s;
                                            }
                                        `}
                                    </style>

                                    {/* Static path lines (gray) */}
                                    <path d="M 60 50 Q 120 50 180 100 T 340 100" stroke="#e5e7eb" strokeWidth="1.5" fill="none" />
                                    <path d="M 60 100 Q 140 100 200 100 T 340 120" stroke="#e5e7eb" strokeWidth="1.5" fill="none" />
                                    <path d="M 60 150 Q 120 150 180 100 T 340 140" stroke="#e5e7eb" strokeWidth="1.5" fill="none" />

                                    {/* Animated gradient lines (blue) with glow */}
                                    <path className="flow-line-1" d="M 60 50 Q 120 50 180 100 T 340 100" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow)" />
                                    <path className="flow-line-2" d="M 60 100 Q 140 100 200 100 T 340 120" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow)" />
                                    <path className="flow-line-3" d="M 60 150 Q 120 150 180 100 T 340 140" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow)" />

                                    <defs>
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Content overlay */}
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 h-full py-4 md:py-0">

                                {/* Left: Transcript Words */}
                                <div className="flex flex-row md:flex-col gap-2 md:gap-4 flex-wrap justify-center">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                                        mitochondria
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                                        powerhouse
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                                        cellular
                                    </div>
                                </div>

                                {/* Mobile: Arrow indicator between words and vector db */}
                                <div className="flex md:hidden items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>

                                {/* Right: Vector Store */}
                                <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full md:w-auto">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-white/80"></div>
                                        <span className="text-[10px] md:text-xs font-semibold text-white uppercase tracking-wider">Vector DB</span>
                                    </div>
                                    {/* Rows */}
                                    <div className="divide-y divide-gray-100">
                                        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-blue-50/50">
                                            <span className="text-[10px] md:text-xs font-bold text-blue-500 w-5 md:w-6">[0]</span>
                                            <span className="font-mono text-[10px] md:text-[11px] text-gray-600">[0.12, -0.4, 0.8...]</span>
                                        </div>
                                        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5">
                                            <span className="text-[10px] md:text-xs font-bold text-blue-500 w-5 md:w-6">[1]</span>
                                            <span className="font-mono text-[10px] md:text-[11px] text-gray-600">[0.88, 0.41, -0.2...]</span>
                                        </div>
                                        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 bg-blue-50/50">
                                            <span className="text-[10px] md:text-xs font-bold text-blue-500 w-5 md:w-6">[2]</span>
                                            <span className="font-mono text-[10px] md:text-[11px] text-gray-600">[-0.3, 0.67, 0.1...]</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Tag */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 bg-white py-2 px-4 rounded-full border border-gray-100 self-center shadow-sm">
                            <span className="block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Keep recording for up to 3 hours
                        </div>
                    </motion.div>

                    {/* Feature 2: Custom Model Context */}
                    <motion.div
                        className="rounded-3xl p-8 lg:p-10 flex flex-col h-full"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
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
                            <div ref={togglesRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="border border-gray-100 rounded-lg p-3 flex gap-3 items-start">
                                    <AnimatedToggle delay={0} isInView={isTogglesInView} />
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">Include action items</p>
                                        <p className="text-[10px] text-gray-500 leading-tight mt-1">Generate tasks & pipelines.</p>
                                    </div>
                                </div>
                                <div className="border border-gray-100 rounded-lg p-3 flex gap-3 items-start">
                                    <AnimatedToggle delay={0.15} isInView={isTogglesInView} />
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
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
