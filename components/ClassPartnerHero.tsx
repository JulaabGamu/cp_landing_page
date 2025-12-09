"use client";

import React from "react";
import { EB_Garamond } from "next/font/google";
import { GradientButton } from "./GradientButton";
import Aurora from "./Aurora";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ClassPartnerHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-gray-900 flex flex-col items-center pt-40 px-4">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#64A8EF", "#89C7FF", "#63a3e7"]}
          blend={0.5}
          amplitude={0.4}
          speed={1.0}
        />
      </div>



      {/* Content Container */}
      <div className={`relative z-10 flex flex-col items-center max-w-5xl w-full text-center ${ebGaramond.className}`}>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[0.95] font-medium text-white tracking-tight mb-8">
          Learn actively. In every class.
        </h1>

        {/* Subhead / Description (Approximated from site context) */}
        {/* Subhead / Description (Approximated from site context) */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 font-sans tracking-wide">
          Transcribe every word, ask better questions, learn actively. AI-powered clarity for every class, privacy-first
        </p>

        {/* CTA Button */}
        <GradientButton href="#">
          Get for Mac
        </GradientButton>

        {/* Glassmorphic App Board / UI Frame */}
        <div className="mt-20 w-full relative group">
          {/* The Glass Frame */}
          <div
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-2xl transition-all duration-500 ease-out flex items-center justify-center"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 245, 0.8) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05) inset"
            }}
          >
            {/* App UI Screenshot */}
            <img
              src="/hero.jpg"
              alt="App Screenshot"
              className="w-full h-full object-cover"
            />

            {/* Decorative Elements on top of glass (like reflection highlights) */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50" />
          </div>

          {/* Glow behind the frame */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-transparent blur-3xl opacity-50 -z-10 rounded-[3rem]" />
        </div>

      </div>
    </section>
  );
}
