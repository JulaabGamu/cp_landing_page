"use client";

import React, { useState, useEffect } from "react";
import { GradientButton } from "./GradientButton";
import { Mic, Send, GripHorizontal, StopCircle, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
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

export default function FeatureTranscription() {
    const [visibleWords, setVisibleWords] = useState<string[]>([]);
    const [activeInsight, setActiveInsight] = useState<number | null>(null);
    const [highlightedRanges, setHighlightedRanges] = useState<{ start: number, end: number }[]>([]);

    const fullText = "So today we're discussing the cognitive revolution. It wasn't just about bigger brains, but about how we started sharing complex myths and stories. This ability to gossip—effectively—allowed us to cooperate in large numbers. Unlike other species, we could build trust with strangers just by believing in the same fictional entities, like money or nations.";
    const words = fullText.split(" ");

    // Define insights with their corresponding word ranges in the transcript
    const insights = [
        {
            title: "Key Concept",
            text: "Cognitive Revolution enabled large-scale human cooperation.",
            wordRange: { start: 4, end: 9 } // "the cognitive revolution"
        },
        {
            title: "Mechanism",
            text: "Language evolved for gossip, enabling social trust.",
            wordRange: { start: 22, end: 32 } // "gossip—effectively—allowed us to cooperate in large numbers"
        },
        {
            title: "Important Detail",
            text: "Shared myths and fictional entities (money, nations) build trust.",
            wordRange: { start: 46, end: 58 } // "fictional entities, like money or nations"
        }
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < words.length) {
                setVisibleWords(words.slice(0, index + 1));
                index++;

                // Trigger first insight
                if (index === 10) {
                    setActiveInsight(0);
                    setHighlightedRanges([insights[0].wordRange]);
                }

                // Trigger second insight
                if (index === 35) {
                    setActiveInsight(1);
                    setHighlightedRanges([insights[0].wordRange, insights[1].wordRange]);
                }

                // Trigger third insight
                if (index === 58) {
                    setActiveInsight(2);
                    setHighlightedRanges([insights[0].wordRange, insights[1].wordRange, insights[2].wordRange]);
                }
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    // Check if a word index is in any highlighted range
    const isHighlighted = (wordIndex: number) => {
        return highlightedRanges.some(range => wordIndex >= range.start && wordIndex <= range.end);
    };

    return (
        <section className="py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Description Paragraph (On the Left) */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6">
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

                        <div className="mt-6">
                            <GradientButton href="#">Try Live Demo</GradientButton>
                        </div>
                    </div>

                    {/* UI Mockup (On the Right) */}
                    <div className="order-1 lg:order-2 relative group">
                        {/* Decorative blob behind */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-amber-50 rounded-[2rem] blur-2xl opacity-60 -z-10" />

                        {/* Glass Window Border */}
                        <div
                            className="p-3 rounded-2xl"
                            style={{
                                background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                                backdropFilter: "blur(12px)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                                border: "1px solid rgba(255,255,255,0.5)"
                            }}
                        >
                            {/* Main App Window Frame */}
                            <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden flex flex-col h-[500px] w-full max-w-xl mx-auto lg:mx-0 transition-all">

                                {/* App Header */}
                                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
                                    <div className="flex items-center gap-3">
                                        <Button size="sm" variant="destructive" className="h-8 rounded-full px-3 text-xs font-medium gap-2 bg-red-500 hover:bg-red-600 text-white shadow-sm">
                                            <StopCircle size={14} fill="currentColor" /> Stop
                                        </Button>
                                        <div className="h-8 px-3 rounded-full bg-white border border-gray-200 flex items-center gap-2 shadow-sm cursor-pointer hover:border-blue-200 transition-colors">
                                            <span className="text-xs font-semibold text-blue-600">I'm lost ⌘L</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3 py-1.5 shadow-sm">
                                            <Mic size={14} className="text-gray-400" />
                                            <div className="w-20 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 w-2/3 animate-pulse" />
                                            </div>
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_0_rgba(34,197,94,0.6)]" />
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1 flex overflow-hidden">
                                    {/* Live Transcript Panel */}
                                    <div className="flex-1 p-6 flex flex-col gap-4 relative">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Live Transcript</h3>

                                        <div className="space-y-4 font-sans text-sm leading-relaxed text-gray-800">
                                            <div className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">
                                                    PR
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-semibold text-xs text-blue-600">Prof. Reynolds</p>
                                                    <p className="leading-relaxed">
                                                        {visibleWords.map((word, i) => {
                                                            const highlighted = isHighlighted(i);
                                                            const prevHighlighted = isHighlighted(i - 1);
                                                            const nextHighlighted = isHighlighted(i + 1);

                                                            // Determine rounding and padding based on neighbors
                                                            let highlightClasses = "";
                                                            if (highlighted) {
                                                                highlightClasses = "bg-blue-100 text-blue-700 font-medium py-0.5 my-[1px]"; // Vertical padding/margin for line-height fix

                                                                if (!prevHighlighted) highlightClasses += " rounded-l-md pl-1 ml-0.5";
                                                                if (!nextHighlighted) highlightClasses += " rounded-r-md pr-1 mr-1";
                                                                if (nextHighlighted) highlightClasses += " mr-0"; // Connect to next word
                                                                if (prevHighlighted && nextHighlighted) highlightClasses += " mx-0";
                                                            } else {
                                                                highlightClasses = "mr-1";
                                                            }

                                                            return (
                                                                <span
                                                                    key={i}
                                                                    className={`animate-in fade-in slide-in-from-bottom-1 duration-300 inline-block transition-all ${highlightClasses}`}
                                                                >
                                                                    {word}{!highlighted || !nextHighlighted ? "" : "\u00A0"}
                                                                </span>
                                                            );
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating 'Ask' Bar at bottom of transcript */}
                                        <div className="mt-auto pt-4 relative z-10">
                                            <div className="bg-white border border-gray-200 p-1 pl-4 rounded-full shadow-lg flex items-center gap-3 transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300">
                                                <input
                                                    type="text"
                                                    placeholder="Ask about what was just said..."
                                                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400 py-2 h-9"
                                                />
                                                <Button size="icon" className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white shrink-0">
                                                    <Send size={14} />
                                                </Button>
                                            </div>
                                            <div className="mt-2 text-[10px] text-gray-400 px-4 text-center">
                                                Press <kbd className="font-sans border border-gray-200 rounded px-1">Shift</kbd> + <kbd className="font-sans border border-gray-200 rounded px-1">Enter</kbd> to submit
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Sidebar - AI Insights */}
                                    <div className="w-48 border-l border-gray-100 bg-gray-50/30 p-4 hidden sm:flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Insights</span>
                                            <RefreshCw size={12} className="text-gray-400" />
                                        </div>

                                        <div className="space-y-3">
                                            {insights.map((insight, index) => (
                                                <div
                                                    key={index}
                                                    className={`bg-white p-3 rounded-lg border shadow-sm transition-all duration-500 ${activeInsight !== null && activeInsight >= index
                                                        ? "opacity-100 translate-y-0 border-blue-200 animate-in fade-in slide-in-from-right-2"
                                                        : "opacity-0 translate-y-2"
                                                        }`}
                                                >
                                                    <p className="text-[10px] font-semibold text-blue-600 mb-1">{insight.title}</p>
                                                    <p className="text-xs text-gray-800 leading-snug">{insight.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
