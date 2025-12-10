"use client";

import React, { useState, useEffect, useRef } from "react";
import localFont from "next/font/local";
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

export function FeatureOrganization() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleClasses, setVisibleClasses] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const classes = [
        { code: "EE2026", schedule: "Mon, Wed • 10:00 AM", count: 12, color: "blue", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { code: "CS2113", schedule: "Tue, Thu • 2:00 PM", count: 8, color: "purple", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { code: "CS2107", schedule: "Fri • 4:00 PM", count: 15, color: "green", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    ];

    const colorMap: Record<string, { bg: string; text: string; hoverBorder: string; hoverText: string }> = {
        blue: { bg: "bg-blue-100", text: "text-blue-600", hoverBorder: "hover:border-blue-200", hoverText: "group-hover:text-blue-600" },
        purple: { bg: "bg-purple-100", text: "text-purple-600", hoverBorder: "hover:border-purple-200", hoverText: "group-hover:text-purple-600" },
        green: { bg: "bg-green-100", text: "text-green-600", hoverBorder: "hover:border-green-200", hoverText: "group-hover:text-green-600" },
    };

    const featurePoints = [
        { num: "01", title: "Class-Specific Organization", desc: "Create dedicated spaces for each subject. All your recordings, notes, and study guides are automatically sorted into the right class folder." },
        { num: "02", title: "Instant Recall", desc: "Search across every lecture instantly. Find that one specific example or definition from weeks ago in seconds." },
        { num: "03", title: "Knowledge Tracking", desc: "Review past questions and quizzes to track your understanding over time. Your personal AI tutor remembers where you struggled." },
    ];

    // Intersection Observer to detect when section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    // Start adding classes one by one
                    let classCount = 0;
                    const classInterval = setInterval(() => {
                        classCount++;
                        setVisibleClasses(classCount);
                        if (classCount >= classes.length + 1) {
                            clearInterval(classInterval);
                        }
                    }, 200);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, classes.length]);

    return (
        <section ref={sectionRef} className="py-24 px-4 text-gray-900 border-t border-gray-100/50 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

                {/* Left Side: Mockup UI */}
                <div className="w-full md:w-1/2 flex justify-center">
                    {/* Dashboard Class List Mockup */}
                    <div
                        className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-xl overflow-hidden md:aspect-[4/5] flex flex-col p-4 md:p-6"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
                            border: "1px solid rgba(255,255,255,0.5)"
                        }}
                    >

                        {/* Header */}
                        <div className="flex justify-between items-center mb-4 md:mb-6">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900">My Classes</h3>
                                <p className="text-[10px] md:text-xs text-gray-500">Fall Semester 2024</p>
                            </div>
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </div>
                        </div>

                        {/* Class List Grid */}
                        <div className="grid grid-cols-1 gap-3 md:gap-4 overflow-y-auto pr-1">

                            {classes.slice(0, visibleClasses).map((cls) => (
                                <div
                                    key={cls.code}
                                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-gray-100 bg-gray-50 ${colorMap[cls.color].hoverBorder} hover:shadow-sm transition-all cursor-pointer group animate-in fade-in duration-300`}
                                >
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${colorMap[cls.color].bg} flex items-center justify-center ${colorMap[cls.color].text}`}>
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cls.icon} /></svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-semibold text-sm md:text-base text-gray-900 ${colorMap[cls.color].hoverText}`}>{cls.code}</h4>
                                        <p className="text-[10px] md:text-xs text-gray-500 truncate">{cls.schedule}</p>
                                    </div>
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-600 shadow-sm shrink-0">
                                        {cls.count}
                                    </div>
                                </div>
                            ))}

                            {/* Add New Class (Faded) - shown after all classes */}
                            {visibleClasses > classes.length && (
                                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-dashed border-gray-200 opacity-60 animate-in fade-in duration-300">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm md:text-base text-gray-400">Add New Class</h4>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2">
                    <motion.h2
                        className={`text-4xl md:text-5xl lg:text-5xl font-light tracking-tight mb-8 ${workSans.className}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Stay organized. <br />
                        <span className="text-blue-600">Never miss a lecture.</span>
                    </motion.h2>

                    <div className="space-y-10">
                        {featurePoints.map((point, i) => (
                            <motion.div
                                key={point.num}
                                className="flex gap-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                            >
                                <span className="text-4xl font-light text-gray-200">{point.num}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
