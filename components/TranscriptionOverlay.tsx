"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Send, Keyboard } from "lucide-react";

export default function TranscriptionOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false); // "Instructions Mode"
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        // Cmd+J (or Ctrl+J) toggles overlay open/close
        if ((e.metaKey || e.ctrlKey) && e.key === "j") {
            e.preventDefault();
            setIsOpen(prev => !prev);
            // Reset hidden state when opening
            if (!isOpen) {
                setIsHidden(false);
            }
        }

        // Cmd+K (or Ctrl+K) toggles instructions mode (only when overlay is open)
        if ((e.metaKey || e.ctrlKey) && e.key === "k" && isOpen) {
            e.preventDefault();
            setIsHidden(prev => !prev);
        }

        // Escape closes the overlay
        if (e.key === "Escape" && isOpen) {
            e.preventDefault();
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Prevent body scroll when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ backgroundColor: "rgba(10, 10, 15, 0.95)" }}
                >
                    {/* Instructions Mode */}
                    {isHidden ? (
                        <motion.div
                            key="instructions"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="text-center"
                        >
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Keyboard className="w-8 h-8 text-white/40" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-white/60 text-lg font-light">
                                        Chat is hidden
                                    </p>
                                    <p className="text-white/40 text-sm">
                                        Press <kbd className="px-2 py-1 bg-white/10 rounded text-white/70 font-mono text-xs">⌘K</kbd> to show chat
                                    </p>
                                    <p className="text-white/30 text-xs mt-4">
                                        Press <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-white/50 font-mono text-xs">⌘J</kbd> or <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-white/50 font-mono text-xs">Esc</kbd> to close overlay
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* Chat Mode */
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="w-full max-w-2xl mx-4"
                        >
                            {/* Chat Card */}
                            <div className="bg-[#1a1a1f] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                            <MessageSquare className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-sm">AI Chat</h3>
                                            <p className="text-white/40 text-xs">Ask anything about your lecture</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setIsHidden(true)}
                                            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white/60"
                                            title="Hide chat (⌘K)"
                                        >
                                            <Keyboard className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white/60"
                                            title="Close (Esc)"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Chat Area (placeholder) */}
                                <div className="min-h-[300px] max-h-[50vh] overflow-y-auto p-5">
                                    <div className="flex flex-col items-center justify-center h-full min-h-[250px] text-center">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                            <MessageSquare className="w-5 h-5 text-white/30" />
                                        </div>
                                        <p className="text-white/40 text-sm">
                                            Start a conversation with AI
                                        </p>
                                        <p className="text-white/25 text-xs mt-1">
                                            Ask questions about your lecture content
                                        </p>
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="px-5 py-4 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Ask a question..."
                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                                        />
                                        <button
                                            className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                                            disabled={!inputValue.trim()}
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center gap-4 mt-3 text-xs text-white/30">
                                        <span>
                                            <kbd className="px-1.5 py-0.5 bg-white/5 rounded font-mono">⌘K</kbd> hide
                                        </span>
                                        <span>
                                            <kbd className="px-1.5 py-0.5 bg-white/5 rounded font-mono">Esc</kbd> close
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
