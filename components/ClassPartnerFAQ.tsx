"use client";

import React from "react";
import { EB_Garamond } from "next/font/google";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
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
        <section className="py-24 px-4 bg-white text-gray-900 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-6 ${ebGaramond.className}`}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about ClassPartner.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
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
                </div>
            </div>
        </section>
    );
}
