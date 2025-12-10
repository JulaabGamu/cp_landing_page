"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mic, StopCircle, Settings, Download, X, Minus, Square, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroMockup() {
    const [transcript, setTranscript] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [showAIResponse, setShowAIResponse] = useState(false);
    const [viewState, setViewState] = useState<"idle" | "zoomed-input" | "zoomed-answer">("idle");

    // Simulation Sequence
    useEffect(() => {
        const fullTranscript = "The cognitive revolution wasn't about bigger brains, but better stories. We learned to share myths which allowed us to cooperate in large numbers. We could build trust with strangers just by believing in the same fictional entities.";
        const words = fullTranscript.split(" ");
        let cancel = false;

        const runSimulation = async () => {
            // 1. Stream Transcript
            for (let i = 0; i < words.length; i++) {
                if (cancel) return;
                setTranscript(prev => [...prev, words[i]]);
                await new Promise(r => setTimeout(r, 20)); // Faster typing speed
            }

            await new Promise(r => setTimeout(r, 500));

            // 2. Zoom in to Input
            setViewState("zoomed-input");
            await new Promise(r => setTimeout(r, 800));

            // 3. Type Question
            const question = "How did myths help cooperation?";
            for (let i = 0; i < question.length; i++) {
                if (cancel) return;
                setInputValue(question.slice(0, i + 1));
                await new Promise(r => setTimeout(r, 40));
            }

            await new Promise(r => setTimeout(r, 500));

            // 4. Send (Simulate Click)
            setInputValue("");
            // visual feedback of send could be added here

            // 5. Zoom out / Pan to AI
            setViewState("idle");

            await new Promise(r => setTimeout(r, 500));
            setShowAIResponse(true);

            // Reset Loop - Long delay to keep result visible
            await new Promise(r => setTimeout(r, 20000));
            if (cancel) return;

            // Reset state for loop
            setTranscript([]);
            setShowAIResponse(false);
            setViewState("idle");
            runSimulation();
        };

        runSimulation();

        return () => { cancel = true; };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center p-4 perspective-1000">
            <div
                className="relative w-full max-w-[900px] p-3 rounded-2xl"
                style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                    border: "1px solid rgba(255,255,255,0.5)"
                }}
            >
                <div className="w-full h-[500px] md:h-auto md:aspect-video bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden relative font-sans text-left">
                    <motion.div
                        className="w-full h-full flex flex-col"
                        animate={{
                            scale: viewState === "zoomed-input" ? 1.25 : 1,
                            x: viewState === "zoomed-input" ? "0%" : "0%",
                            y: viewState === "zoomed-input" ? "-2%" : "0%", // Lift slightly to show bottom border
                            transformOrigin: "0% 100%", // Pivot near the input box
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* === Title Bar === */}
                        <div className="h-10 border-b border-gray-100 flex items-center justify-between px-3 bg-white shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5 group">
                                    <div className="w-3 h-3 rounded-full bg-red-400/20 group-hover:bg-red-500 border border-red-200 group-hover:border-red-600 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 group-hover:bg-yellow-500 border border-yellow-200 group-hover:border-yellow-600 transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/20 group-hover:bg-green-500 border border-green-200 group-hover:border-green-600 transition-colors" />
                                </div>
                                <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-gray-50 border border-gray-100 text-[10px] text-gray-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    REC
                                </div>
                            </div>
                            <div className="text-xs font-medium text-gray-400 tracking-wide">CLASSPARTNER</div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Minus size={12} />
                                <Square size={10} />
                                <X size={12} />
                            </div>
                        </div>

                        {/* === Toolbar === */}
                        <div className="h-12 md:h-14 border-b border-gray-100 flex items-center justify-between px-3 md:px-4 bg-white shrink-0">
                            <div className="flex items-center gap-2 md:gap-3">
                                <button className="h-7 md:h-8 px-3 md:px-4 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-100 rounded-md text-xs font-medium flex items-center gap-1.5 md:gap-2 transition-all">
                                    <StopCircle size={12} className="md:w-3.5 md:h-3.5" /> Stop
                                </button>
                                <div className="hidden md:block h-8 w-px bg-gray-100 mx-1" />
                                <button className="hidden md:flex h-8 w-8 items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-all">
                                    <Download size={14} />
                                </button>
                                <button className="hidden md:flex h-8 w-8 items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-all">
                                    <Settings size={14} />
                                </button>
                                <button className="h-7 md:h-8 px-2 md:px-3 bg-blue-50 text-blue-600 border border-blue-100 rounded-md text-xs font-medium flex items-center gap-1 md:gap-2">
                                    I&apos;m lost
                                    <span className="hidden md:inline bg-blue-100/50 px-1 py-0.5 rounded text-[9px]">⌘L</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-2 md:gap-4">
                                <div className="hidden sm:flex items-center gap-2">
                                    <Mic size={14} className="text-gray-400" />
                                    <div className="w-16 md:w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-green-500"
                                            animate={{ width: ["30%", "70%", "40%", "80%"] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        />
                                    </div>
                                </div>
                                <div className="px-2 py-1 bg-green-50 border border-green-100 text-green-600 text-[10px] font-medium rounded-full flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="hidden sm:inline">Connected</span>
                                </div>
                            </div>
                        </div>

                        {/* === Main Content Grid === */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-gray-50/50">

                            {/* Left: Transcript & Chat */}
                            <div className="col-span-1 md:col-span-8 flex flex-col border-r border-gray-100 bg-white">
                                {/* Transcript Area */}
                                <div className="flex-1 p-4 md:p-6 font-sans text-xs md:text-base leading-relaxed text-gray-800 relative overflow-auto">
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4 text-[9px] md:text-[10px] text-gray-400 font-mono">LIVE TRANSCRIPT</div>

                                    <div className="flex gap-3 md:gap-4">
                                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-blue-600 shrink-0 mt-1">
                                            PR
                                        </div>
                                        <div>
                                            <div className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1">Prof. Reynolds</div>
                                            <p>
                                                {transcript.map((word, i) => {
                                                    // Indices to highlight when AI Responds
                                                    // Updated for shorter transcript:
                                                    // "share myths": 13-14
                                                    // "cooperate in large numbers": 19-22
                                                    // "build trust with strangers": 25-28
                                                    // "believing in the same fictional entities": 31-36
                                                    const isHighlighted = showAIResponse && (
                                                        (i >= 13 && i <= 14) ||
                                                        (i >= 19 && i <= 22) ||
                                                        (i >= 25 && i <= 28) ||
                                                        (i >= 31 && i <= 36)
                                                    );

                                                    const isNextHighlighted = showAIResponse && (
                                                        (i + 1 >= 13 && i + 1 <= 14) ||
                                                        (i + 1 >= 19 && i + 1 <= 22) ||
                                                        (i + 1 >= 25 && i + 1 <= 28) ||
                                                        (i + 1 >= 31 && i + 1 <= 36)
                                                    );

                                                    const isPrevHighlighted = showAIResponse && (
                                                        (i - 1 >= 13 && i - 1 <= 14) ||
                                                        (i - 1 >= 19 && i - 1 <= 22) ||
                                                        (i - 1 >= 25 && i - 1 <= 28) ||
                                                        (i - 1 >= 31 && i - 1 <= 36)
                                                    );

                                                    // Determine classes for seamless highlighting
                                                    let spacingClass = "mr-1";
                                                    if (isHighlighted && isNextHighlighted) spacingClass = "mr-0";

                                                    // Apply rounded corners only to the start/end of the highlight block
                                                    let roundedClass = "";
                                                    if (isHighlighted) {
                                                        if (!isPrevHighlighted) roundedClass += "rounded-l ";
                                                        if (!isNextHighlighted) roundedClass += "rounded-r ";
                                                    }

                                                    return (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, y: 5 }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                backgroundColor: isHighlighted ? "rgba(219, 234, 254, 1)" : "rgba(255, 255, 255, 0)",
                                                                color: isHighlighted ? "#2563eb" : "inherit"
                                                            }}
                                                            className={`inline-block py-0.5 ${spacingClass} ${isHighlighted ? `${roundedClass} transition-colors duration-500` : ""}`}
                                                        >
                                                            {word}{isHighlighted && isNextHighlighted ? "\u00A0" : ""}
                                                        </motion.span>
                                                    );
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Input Area */}
                                <div className="h-[100px] md:h-[140px] border-t border-gray-100 bg-gray-50/30 p-3 md:p-4 flex flex-col gap-1 md:gap-2">
                                    <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
                                        <span>Ask the lecture</span>
                                        <span className="hidden md:flex items-center gap-1">Shift + Enter to submit</span>
                                    </div>
                                    <div className="flex-1 bg-white border border-gray-200 rounded-lg p-2 md:p-3 relative group focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all shadow-sm">
                                        <textarea
                                            value={inputValue}
                                            readOnly
                                            placeholder="Ask about what was just said..."
                                            className="w-full h-full bg-transparent border-none outline-none text-xs md:text-sm text-gray-900 placeholder:text-gray-400 resize-none font-sans"
                                        />
                                        <AnimatePresence>
                                            {inputValue.length > 0 && (
                                                <motion.button
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    className="absolute bottom-2 md:bottom-3 right-2 md:right-3 p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                                                >
                                                    <Send size={14} />
                                                </motion.button>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="hidden md:block text-[10px] text-gray-400 pl-1">
                                        Ask about recent moments to see AI answers and snippets.
                                    </div>
                                </div>
                            </div>

                            {/* Right: AI Insights - Hidden on mobile */}
                            <div className="hidden md:flex md:col-span-4 bg-gray-50 flex-col border-l border-gray-100">
                                <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-white/50">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                        <Sparkles size={10} className="text-blue-500" />
                                        AI Insights
                                    </span>
                                </div>

                                <div className="flex-1 p-4 space-y-6 overflow-y-auto">

                                    {/* Summary Section */}
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-400 mb-2 uppercase">Summary</h4>
                                        {showAIResponse ? (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="text-xs text-gray-600 leading-relaxed bg-white p-3 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden"
                                            >
                                                {/* Blue Shine Animation */}
                                                <motion.div
                                                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100/50 to-transparent pointer-events-none"
                                                    initial={{ x: "-100%" }}
                                                    animate={{ x: "100%" }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                />
                                                <span className="text-blue-600 font-medium block mb-1">Answer:</span>
                                                Shared myths like religion or nations create an &quot;inter-subjective&quot; reality. This belief system allows strangers to trust each other and cooperate without personal relationships.
                                            </motion.div>
                                        ) : (
                                            <div className="text-xs text-gray-400 italic">Waiting for conversation...</div>
                                        )}
                                    </div>

                                    {/* Action Items */}
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-400 mb-2 uppercase">Action Items</h4>
                                        {showAIResponse ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="space-y-2 relative"
                                            >
                                                <div className="flex items-start gap-2 text-xs text-gray-600 bg-white p-2 rounded border border-gray-100 shadow-sm relative overflow-hidden">
                                                    {/* Blue Shine Animation */}
                                                    <motion.div
                                                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-100/50 to-transparent pointer-events-none"
                                                        initial={{ x: "-100%" }}
                                                        animate={{ x: "100%" }}
                                                        transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                                                    />
                                                    <CheckCircle2 size={12} className="text-blue-600 mt-0.5" />
                                                    <span>Review &quot;Cognitive Revolution&quot; chapter.</span>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <div className="h-8 bg-gray-100 rounded border border-gray-200 flex items-center px-3 text-[10px] text-gray-400">
                                                No action items detected
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
