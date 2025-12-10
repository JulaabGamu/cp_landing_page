"use client";

import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { GradientButton } from "./GradientButton";
import Aurora from "./Aurora";
import HeroMockup from "./HeroMockup";

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

const mockupVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ClassPartnerHero() {
  return (
    <section className="relative min-h-screen w-full text-gray-900 flex flex-col items-center pt-28 md:pt-40 pb-24 px-4">
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
      <div className={`relative z-10 flex flex-col items-center max-w-5xl w-full text-center ${workSans.className}`}>

        {/* Headline - Word by word animation */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-[80px] leading-[0.95] font-light text-white tracking-tight mb-8 flex flex-wrap justify-center gap-x-[0.3em]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {["Learn", "actively.", "In", "every", "class."].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut" as const,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 font-sans tracking-wide"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          Transcribe every word, ask better questions, learn actively. AI-powered clarity for every class, privacy-first
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <GradientButton href="#">
            Get for Mac
          </GradientButton>
        </motion.div>

        {/* Mockup Container */}
        <motion.div
          className="mt-12 w-full max-w-6xl z-10"
          variants={mockupVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroMockup />
        </motion.div>

      </div>
    </section>
  );
}
