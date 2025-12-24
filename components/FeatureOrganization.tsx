"use client";

import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { AnimatedList } from "./ui/animated-list";

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

interface ClassCardProps {
    code: string;
    name: string;
    schedule: string;
    count: number;
    icon: string;
}

function ClassCard({ code, name, schedule, count, icon }: ClassCardProps) {
    return (
        <div
            className="w-[300px] md:w-[360px] flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/50 backdrop-blur-sm border border-blue-100/60 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-200/80 transition-all duration-300 cursor-pointer group"
        >
            {/* Icon */}
            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-blue-500 shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                </svg>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-blue-700 transition-colors">
                        {code}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100">
                        {count} sessions
                    </span>
                </div>
                <p className="text-sm text-gray-600 truncate">{name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{schedule}</p>
            </div>

            {/* Arrow */}
            <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
}

const classes: ClassCardProps[] = [
    {
        code: "EE2026",
        name: "Digital Design",
        schedule: "Mon, Wed • 10:00 AM",
        count: 12,
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        code: "CS2113",
        name: "Software Engineering",
        schedule: "Tue, Thu • 2:00 PM",
        count: 8,
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
        code: "CS2107",
        name: "Computer Security",
        schedule: "Fri • 4:00 PM",
        count: 15,
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        code: "MA2101",
        name: "Linear Algebra II",
        schedule: "Mon, Thu • 9:00 AM",
        count: 10,
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
    {
        code: "CS3230",
        name: "Design & Analysis of Algorithms",
        schedule: "Wed, Fri • 11:00 AM",
        count: 6,
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    },
];

const featurePoints = [
    {
        num: "01",
        title: "Class-Specific Organization",
        desc: "Create dedicated spaces for each subject. All your recordings, notes, and study guides are automatically sorted into the right class folder.",
    },
    {
        num: "02",
        title: "Instant Recall",
        desc: "Search across every lecture instantly. Find that one specific example or definition from weeks ago in seconds.",
    },
    {
        num: "03",
        title: "Knowledge Tracking",
        desc: "Review past questions and quizzes to track your understanding over time. Your personal AI tutor remembers where you struggled.",
    },
];

export function FeatureOrganization() {
    return (
        <section id="organization" className="py-24 md:py-32 px-4 text-gray-900 relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative z-10">

                {/* Left Side: Animated List Mockup - hidden on mobile, visible on desktop */}
                <div className="w-full lg:w-1/2 justify-center overflow-visible hidden lg:flex">
                    {/* Container aligned to match right column content */}
                    <div className="relative h-[580px] w-full max-w-[420px] flex items-center justify-center overflow-visible">
                        {/* The Animated List */}
                        <AnimatedList
                            stackGap={14}
                            columnGap={115}
                            scaleFactor={0.025}
                            formationDuration={0.6}
                            hoverTrigger={true}
                        >
                            {classes.map((cls) => (
                                <ClassCard key={cls.code} {...cls} />
                            ))}
                        </AnimatedList>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Organization
                        </span>
                    </motion.div>

                    <motion.h2
                        className={`text-4xl md:text-5xl lg:text-[56px] font-light tracking-tight leading-[1.1] mb-8 ${workSans.className}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Stay organized.{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            Never miss a lecture.
                        </span>
                    </motion.h2>

                    <div className="space-y-8">
                        {featurePoints.map((point, i) => (
                            <motion.div
                                key={point.num}
                                className="flex gap-5 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            >
                                <span className="text-5xl font-extralight text-gray-200 select-none">
                                    {point.num}
                                </span>
                                <div className="pt-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-gray-700 transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-[15px]">{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Static Cards Display */}
                <div className="w-full lg:hidden flex flex-col items-center gap-3 mt-4">
                    {classes.slice(0, 3).map((cls, i) => (
                        <motion.div
                            key={cls.code}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ClassCard {...cls} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
