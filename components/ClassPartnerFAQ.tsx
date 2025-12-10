"use client";

import React from "react";
import localFont from "next/font/local";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

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

export function ClassPartnerFAQ() {
    const faqItems = [
        {
            id: "item-1",
            question: "Is my data stored locally?",
            answer: "Yes. We prioritize your privacy. All transcriptions and vector embeddings are stored locally on your device by default, meaning your personal lecture notes never leave your computer unless you choose to sync them.",
        },
        {
            id: "item-2",
            question: "How accurate is the transcription?",
            answer: "We use state-of-the-art speech-to-text models that achieve over 95% accuracy in clear audio conditions. The AI is fine-tuned to understand academic terminology across various subjects.",
        },
        {
            id: "item-3",
            question: "Can I customize the AI's behavior?",
            answer: "Absolutely. You can set global guidelines for how the AI summarizes lectures, answers questions, or formats notes. You can also upload reference materials to give it specific context for your classes.",
        },
        {
            id: "item-4",
            question: "What languages do you support?",
            answer: "We currently support real-time transcription and translation for over 12 languages, including English, Spanish, French, German, and Chinese.",
        },
        {
            id: "item-5",
            question: "Does it work with recorded files?",
            answer: "Yes, you can import existing audio or video files (mp3, wav, mp4) and ClassPartner will process them just like a live lecture.",
        },
    ];

    return (
        <section className="py-24 px-4 text-gray-900 border-t border-gray-100/50 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={`text-4xl md:text-5xl font-light tracking-tight mb-6 ${workSans.className}`}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about ClassPartner.
                    </p>
                </motion.div>

                <motion.div
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                        background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                        border: "1px solid rgba(255,255,255,0.5)"
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item) => (
                            <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 last:border-0 px-2">
                                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-blue-600 hover:no-underline py-5 text-left transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
