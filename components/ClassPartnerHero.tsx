"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import { AnimatedShinyButton } from "./ui/animated-shiny-button";
import Aurora from "./Aurora";
import HeroMockup from "./HeroMockup";
import TextRotate from "./fancy/text/text-rotate";
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
  useExpandableScreen,
} from "./ui/expandable-screen";
import { CheckCircle, Loader2 } from "lucide-react";

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

const ROTATING_TEXTS = ["anytime", "anywhere", "ClassPartner"];

function RotatingHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Show logo whenever we are at index 2 ("anything")
  const isLogoActive = currentIndex === 2;

  return (
    <LayoutGroup>
      <motion.h1
        className="text-4xl md:text-7xl lg:text-[80px] leading-[1.2] md:leading-[1.1] font-light text-white tracking-tight mb-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Line 1 on mobile, inline on desktop */}
        <motion.span
          className="pt-1 md:pt-2 whitespace-nowrap"
          layout
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          Listen once,
        </motion.span>

        {/* Line 2 on mobile: "ask [rotating word]" */}
        <motion.span className="flex flex-nowrap whitespace-pre items-center" layout>
          <motion.span
            className="pt-1 md:pt-2 hidden md:inline"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            {" "}
          </motion.span>
          <motion.span
            className="pt-1 md:pt-2 mr-2 md:mr-3"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            ask
          </motion.span>
          <motion.span
            layout
            className="flex items-center text-white px-4 py-2.5 md:px-5 md:py-3 overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-[#1E82E0] to-[#1C38EA]"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <TextRotate
              texts={ROTATING_TEXTS}
              mainClassName="text-white"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden py-1 md:py-2 pr-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
              onNext={(index) => setCurrentIndex(index)}
              animatePresenceMode="popLayout"
            />
            {/* Logo animation: Smooth width expansion with fixed values */}
            <motion.span
              animate={{
                width: isLogoActive ? 48 : 0,
                opacity: isLogoActive ? 1 : 0,
                marginLeft: isLogoActive ? 6 : 0,
              }}
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                opacity: { duration: 0.15 }
              }}
              style={{ overflow: "hidden" }}
              className="flex-shrink-0 flex items-center md:hidden"
            >
              <Image
                src="/white.svg"
                alt="Class Partner logo"
                width={80}
                height={80}
                className="w-[48px] h-[48px] object-contain"
                priority
              />
            </motion.span>
            {/* Medium screens */}
            <motion.span
              animate={{
                width: isLogoActive ? 64 : 0,
                opacity: isLogoActive ? 1 : 0,
                marginLeft: isLogoActive ? 8 : 0,
              }}
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                opacity: { duration: 0.15 }
              }}
              style={{ overflow: "hidden" }}
              className="flex-shrink-0 items-center hidden md:flex lg:hidden"
            >
              <Image
                src="/white.svg"
                alt="Class Partner logo"
                width={96}
                height={96}
                className="w-[64px] h-[64px] object-contain"
                priority
              />
            </motion.span>
            {/* Large screens */}
            <motion.span
              animate={{
                width: isLogoActive ? 80 : 0,
                opacity: isLogoActive ? 1 : 0,
                marginLeft: isLogoActive ? 10 : 0,
              }}
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                opacity: { duration: 0.15 }
              }}
              style={{ overflow: "hidden" }}
              className="flex-shrink-0 items-center hidden lg:flex"
            >
              <Image
                src="/white.svg"
                alt="Class Partner logo"
                width={128}
                height={128}
                className="w-[80px] h-[80px] object-contain"
                priority
              />
            </motion.span>
          </motion.span>
        </motion.span>
      </motion.h1>
    </LayoutGroup>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

function WaitlistForm() {
  const { collapse } = useExpandableScreen();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [excited, setExcited] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role,
          excited,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");

      // Auto-close after success
      setTimeout(() => {
        collapse();
        // Reset form
        setEmail("");
        setName("");
        setRole("");
        setExcited("");
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.");

      // Reset to idle after showing error for 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center col-span-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-gray-600">We&apos;ll notify you when Class Partner is ready.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Message */}
      {status === "error" && errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-sm text-red-600">{errorMessage}</p>
        </motion.div>
      )}
      {/* Full Name */}
      <div>
        <label htmlFor="waitlist-name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Full Name <span className="text-gray-400">*</span>
        </label>
        <input
          id="waitlist-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="waitlist-email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Email <span className="text-gray-400">*</span>
        </label>
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
      </div>

      {/* Role Selection */}
      <div>
        <label htmlFor="waitlist-role" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          I am a...
        </label>
        <select
          id="waitlist-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full px-4 py-3.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
        >
          <option value="" disabled className="bg-white text-gray-400">Select</option>
          <option value="student" className="bg-white text-gray-900">Student</option>
          <option value="professor" className="bg-white text-gray-900">Professor / Instructor</option>
          <option value="ta" className="bg-white text-gray-900">Teaching Assistant</option>
          <option value="other" className="bg-white text-gray-900">Other</option>
        </select>
      </div>

      {/* What are you most excited about? */}
      <div>
        <label htmlFor="waitlist-excited" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          What are you most excited about?
        </label>
        <textarea
          id="waitlist-excited"
          value={excited}
          onChange={(e) => setExcited(e.target.value)}
          rows={3}
          className="w-full px-4 py-3.5 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center font-sans font-semibold text-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{
          backgroundImage: "radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30, 130, 224) 0px, rgb(28, 56, 234) 100%)",
          boxShadow: `
            rgba(12, 57, 237, 0) 0px 62px 17px 0px, 
            rgba(12, 57, 237, 0.03) 0px 40px 16px 0px, 
            rgba(12, 57, 237, 0.09) 0px 22px 13px 0px, 
            rgba(12, 57, 237, 0.15) 0px 10px 10px 0px, 
            rgba(12, 57, 237, 0.17) 0px 2px 5px 0px, 
            rgba(148, 172, 243, 0.4) 0px 8px 24px 0px, 
            rgba(191, 229, 251, 0.4) -3px -3px 4px 0px inset, 
            rgba(19, 26, 228, 0.1) 4px 4px 4px 0px inset
          `,
          color: "white",
          borderRadius: "12px",
          padding: "14px 32px",
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Joining...
          </>
        ) : (
          "Join waitlist"
        )}
      </button>
    </form>
  );
}

function WaitlistFormContent() {
  const { collapse } = useExpandableScreen();

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-gray-100 rounded-3xl">
      {/* Aurora Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Aurora
          colorStops={["#64A8EF", "#89C7FF", "#63a3e7"]}
          blend={0.3}
          amplitude={0.3}
          speed={0.8}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={collapse}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-colors"
        aria-label="Close"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 w-full min-h-full flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20">

        {/* Mobile Headline - Centered, shown above form on mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`lg:hidden text-3xl md:text-4xl font-light text-gray-900 tracking-tight text-center mb-8 ${workSans.className}`}
        >
          Get early access
        </motion.h1>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">

          {/* Left Column - Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Desktop Headline - Hidden on mobile */}
            <h1 className={`hidden lg:block text-5xl font-light text-gray-900 tracking-tight ${workSans.className}`}>
              Get early access
            </h1>

            {/* Benefits - Hidden on very small screens, visible from sm up */}
            <div className="hidden sm:block space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-600 pt-1 md:pt-2">
                  Automatic transcription of every lecture — never miss a word again.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-600 pt-1 md:pt-2">
                  AI-powered insights and answers to help you understand complex topics in real-time.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-600 pt-1 md:pt-2">
                  Privacy-first design — your lectures stay on your device.
                </p>
              </div>
            </div>

            {/* Testimonial - Hidden on mobile */}
            <div className="hidden md:block pt-6 border-t border-gray-300/50">
              <blockquote className="text-lg lg:text-2xl text-gray-900 font-light leading-relaxed mb-4 lg:mb-6">
                &ldquo;Class Partner completely changed how I study. I can finally focus on understanding instead of frantic note-taking.&rdquo;
              </blockquote>
              <div className="text-center">
                <p className="font-medium text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-500">Computer Science Student, Stanford</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <WaitlistForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

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
      <div className={`relative z-10 flex flex-col items-center max-w-7xl w-full text-center ${workSans.className}`}>

        {/* Headline with rotating text */}
        <RotatingHeadline />

        {/* Subhead */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 font-sans tracking-wide"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          Transcribe every lecture, then ask your AI partner about any topic — anytime you need it. Privacy-first.
        </motion.p>

        {/* CTA Button with Expandable Waitlist Form */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <ExpandableScreen
            layoutId="waitlist-form"
            triggerRadius="12px"
            contentRadius="24px"
            animationDuration={0.4}
            globalEventName="openWaitlistForm"
          >
            <ExpandableScreenTrigger>
              <AnimatedShinyButton>
                Join Waitlist
              </AnimatedShinyButton>
            </ExpandableScreenTrigger>

            <ExpandableScreenContent
              className="!p-0"
              showCloseButton={false}
            >
              <WaitlistFormContent />
            </ExpandableScreenContent>
          </ExpandableScreen>
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
