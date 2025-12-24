"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { GradientButton } from "./GradientButton";
import localFont from "next/font/local";
import Aurora from "./Aurora";

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

export function CTASection() {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="relative w-full rounded-2xl md:rounded-[3rem] bg-blue-600 overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/25">

                    {/* Aurora Background */}
                    <div className="absolute inset-0 z-0">
                        <Aurora
                            colorStops={["#64A8EF", "#89C7FF", "#63a3e7"]}
                            blend={0.5}
                            amplitude={0.4}
                            speed={1.0}
                        />
                    </div>

                    {/* === 3D Radiating Circles === */}
                    {/* Centered vertically on the right edge - Hidden on mobile */}
                    <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-[35%] h-[150%] aspect-square items-center justify-center pointer-events-none">

                        {/* Circle 1 (Largest, Bottom) */}
                        <div className="absolute h-full w-full rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-[1px] shadow-2xl z-10" />

                        {/* Circle 2 */}
                        <div className="absolute h-[85%] w-[85%] rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-[2px] shadow-2xl z-20" />

                        {/* Circle 3 */}
                        <div className="absolute h-[70%] w-[70%] rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-[4px] shadow-2xl z-30" />

                        {/* Circle 4 */}
                        <div className="absolute h-[55%] w-[55%] rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/20 backdrop-blur-[8px] shadow-2xl z-40" />

                        {/* Circle 5 */}
                        <div className="absolute h-[40%] w-[40%] rounded-full bg-gradient-to-br from-white/25 to-white/5 border border-white/30 backdrop-blur-[12px] shadow-2xl z-50" />

                        {/* Circle 6 (Smallest, Lightest) */}
                        <div className="absolute h-[25%] w-[25%] rounded-full bg-gradient-to-br from-white/40 to-white/10 border border-white/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] z-50" />

                    </div>

                    {/* === Content === */}
                    <div className="relative z-[60] flex flex-col items-start justify-center px-8 py-20 md:p-24 max-w-2xl">
                        <h2 className={`text-4xl md:text-6xl font-light tracking-tight text-white mb-6 ${workSans.className}`}>
                            Stop stressing <br /> over notes.
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
                            ClassPartner handles the transcription and organization. You focus on learning. Start your free 7-day trial today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
                            <GradientButton
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setTimeout(() => {
                                        window.dispatchEvent(new CustomEvent('openWaitlistForm'));
                                    }, 300);
                                }}
                                variant="inverted"
                                className="group !p-4 !px-8 h-14"
                            >
                                Join Waitlist
                                <div className="bg-blue-100/50 rounded-full p-1 ml-2 group-hover:translate-x-1 transition-transform text-blue-600">
                                    <ChevronRight size={14} />
                                </div>
                            </GradientButton>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
