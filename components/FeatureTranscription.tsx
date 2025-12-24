"use client";

import React, { useState, useEffect } from "react";
import { Mic, CheckCircle2 } from "lucide-react";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import SvgRippleEffect from "./ui/svg-ripple-effect";
import Image from "next/image";

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

const fullText = "Today we're discussing how the cognitive revolution enabled humans to cooperate in large numbers through shared stories and myths.";
const words = fullText.split(" ");

export default function FeatureTranscription() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState<string[]>([]);

    // Start transcription when recording begins
    useEffect(() => {
        if (!isRecording) {
            setTranscript([]);
            return;
        }

        let cancelled = false;

        const runTranscription = async () => {
            // Stream words one by one
            for (let i = 0; i < words.length; i++) {
                if (cancelled) return;
                setTranscript(prev => [...prev, words[i]]);
                await new Promise(r => setTimeout(r, 120));
            }

            // Pause at the end
            await new Promise(r => setTimeout(r, 3000));

            if (cancelled) return;

            // Reset and loop
            setTranscript([]);
            runTranscription();
        };

        runTranscription();

        return () => { cancelled = true; };
    }, [isRecording]);

    const handleClick = () => {
        setIsRecording(!isRecording);
    };

    return (
        <section id="transcription" className="py-6 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <motion.div
                        className="order-2 lg:order-1 flex flex-col gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                                Transcription
                            </span>
                        </div>
                        <h2 className={`text-4xl md:text-5xl font-light tracking-tight text-gray-900 ${workSans.className}`}>
                            Fast transcriptions, <br />
                            <span className="text-blue-600">effortless learning.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Never miss a moment. ClassPartner listens, transcribes, and organizes every lecture in real-time.
                            While you focus on understanding the concept, we capture the details—complete with speaker detection
                            and keyword highlighting.
                        </p>

                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                "99% Transcription Accuracy",
                                "Real-time Keyword Detection",
                                "One-click 'I'm Lost' recap"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <CheckCircle2 size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>

                    {/* Right Side: Ripple Effect + Transcription UI */}
                    <motion.div
                        className="order-1 lg:order-2 flex flex-col items-center gap-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Ripple Effect Button */}
                        <button
                            onClick={handleClick}
                            className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer focus:outline-none overflow-visible"
                            aria-label={isRecording ? "Stop recording" : "Start recording"}
                        >
                            {/* SVG Ripple - only animates when recording */}
                            <div className={`absolute inset-0 transition-opacity duration-500 overflow-visible ${isRecording ? 'opacity-100' : 'opacity-60'}`}>
                                {isRecording ? (
                                    <SvgRippleEffect whileHover={false} />
                                ) : (
                                    <SvgRippleEffect whileHover={true} />
                                )}
                            </div>

                            {/* Center Logo */}
                            <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1E82E0] to-[#1C38EA] flex items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto ${isRecording ? 'scale-110 shadow-xl shadow-blue-500/40' : ''}`}>
                                    <Image
                                        src="/white.svg"
                                        alt="Class Partner"
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                    />
                                </div>
                            </div>
                        </button>

                        {/* Recording Status Text */}
                        <p className={`text-sm font-medium transition-colors duration-300 ${isRecording ? 'text-blue-600' : 'text-gray-400'}`}>
                            {isRecording ? 'Recording... Click to stop' : 'Click to start demo'}
                        </p>

                        {/* Transcription UI - appears when recording */}
                        <AnimatePresence>
                            {isRecording && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: 10, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-full max-w-md overflow-hidden"
                                >
                                    <div
                                        className="bg-white rounded-xl border border-gray-200 shadow-lg p-4 md:p-5"
                                        style={{
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                                        }}
                                    >
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Live Transcript</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <Mic size={12} />
                                                <span>Prof. Reynolds</span>
                                            </div>
                                        </div>

                                        {/* Transcript Text */}
                                        <div className="min-h-[100px] max-h-[150px] overflow-y-auto">
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                {transcript.map((word, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, y: 4 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                        className="inline-block mr-1"
                                                    >
                                                        {word}
                                                    </motion.span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
