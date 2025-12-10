"use client";

import React from "react";
import { EB_Garamond } from "next/font/google";
import { GradientButton } from "./GradientButton";
import Aurora from "./Aurora";
import HeroMockup from "./HeroMockup";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ClassPartnerHero() {
  return (
    <section className="relative min-h-screen w-full text-gray-900 flex flex-col items-center pt-40 pb-24 px-4">
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
        {/* Mockup Container */}
        <div className="mt-12 w-full max-w-6xl z-10">
          <HeroMockup />
        </div>

      </div>
    </section>
  );
}
