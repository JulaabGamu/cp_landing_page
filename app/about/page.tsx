"use client";

import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import Aurora from "@/components/Aurora";

const workSans = localFont({
  src: [
    { path: "../../public/fonts/WorkSans-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/WorkSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/WorkSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/WorkSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/WorkSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/WorkSans-Bold.woff2", weight: "700", style: "normal" },
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

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Co-Founder & CEO",
    image: "/team/member1.jpg",
    description: "Passionate about transforming education through technology and AI innovation."
  },
  {
    name: "Team Member 2",
    role: "Co-Founder & CTO",
    image: "/team/member2.jpg",
    description: "Building privacy-first AI solutions with a focus on user experience."
  },
  {
    name: "Team Member 3",
    role: "Head of Product",
    image: "/team/member3.jpg",
    description: "Designing intuitive interfaces that make learning accessible to everyone."
  },
  {
    name: "Team Member 4",
    role: "Lead Engineer",
    image: "/team/member4.jpg",
    description: "Crafting robust and scalable systems for the next generation of learners."
  },
  {
    name: "Team Member 5",
    role: "AI Research Lead",
    image: "/team/member5.jpg",
    description: "Pioneering local-first AI models that prioritize student privacy."
  },
  {
    name: "Team Member 6",
    role: "Head of Design",
    image: "/team/member6.jpg",
    description: "Creating beautiful, functional designs that enhance the learning experience."
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
        border: "1px solid rgba(255,255,255,0.5)"
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index * 0.1}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 right-0 h-[75vh] z-0">
        <Aurora
          colorStops={["#64A8EF", "#89C7FF", "#63a3e7"]}
          blend={0.5}
          amplitude={0.4}
          speed={1.0}
        />
      </div>

      {/* Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] bg-indigo-300/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[40%] bg-blue-300/20 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[10%] w-[30%] h-[30%] bg-sky-200/30 blur-[100px] rounded-full mix-blend-multiply opacity-40"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[30%] bg-blue-100/40 blur-[100px] rounded-full mix-blend-multiply opacity-40"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className={`relative pt-32 md:pt-40 pb-16 px-4 ${workSans.className}`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 text-xs font-medium uppercase tracking-wider mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Meet the Team
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Building the future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              learning
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            We&apos;re a team of educators, engineers, and designers passionate about making education
            more accessible and effective through privacy-first AI technology.
          </motion.p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`relative py-24 px-4 ${workSans.className}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)",
              border: "1px solid rgba(255,255,255,0.5)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">Our Mission</h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At ClassPartner, we believe that every student deserves access to powerful learning tools
              that respect their privacy. Our mission is to revolutionize education by combining
              cutting-edge AI technology with a privacy-first approach.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We&apos;re building tools that help students learn more effectively, retain information better,
              and achieve their academic goals—all while keeping their data safe and secure on their own devices.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
