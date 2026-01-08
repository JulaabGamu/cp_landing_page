"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "./ui/header-2";
import Aurora from "./Aurora";

// Dynamic import for Lanyard to avoid SSR issues
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

// Single badge container component with name on hover
function BadgeContainer({ name }: { name: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full h-full flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full overflow-hidden">
                <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>
            {/* Animated name on hover */}
            <div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${isHovered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                    }`}
            >
                <p className="text-gray-700 text-lg font-medium whitespace-nowrap">
                    {name}
                </p>
            </div>
        </div>
    );
}

export default function Badge3D() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Aurora Background matching hero section */}
            <div className="absolute inset-0 z-0">
                <Aurora
                    colorStops={["#64A8EF", "#89C7FF", "#63a3e7"]}
                    blend={0.5}
                    amplitude={0.4}
                    speed={1.0}
                />
            </div>

            {/* Header/Navbar */}
            <Header />

            {/* Content - Centered */}
            <div className="relative z-10 px-8 pt-28 pb-16 flex flex-col items-center">
                {/* Intro Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-4">
                        Our Team
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        The humans behind the AI. We&apos;re students and engineers who believe learning should be effortless.
                    </p>
                </div>

                {/* Top row - 3 badges */}
                <div className="grid grid-cols-3 gap-8 mb-16 max-w-5xl w-full">
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Pranav" />
                    </div>
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Hamdhan" />
                    </div>
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Karthik" />
                    </div>
                </div>

                {/* Bottom row - 3 badges centered */}
                <div className="grid grid-cols-3 gap-8 max-w-5xl w-full">
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Bala" />
                    </div>
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Anjali" />
                    </div>
                    <div className="aspect-[3/4] h-[400px]">
                        <BadgeContainer name="Arunav" />
                    </div>
                </div>

                {/* Overlay instruction */}
                <div className="text-center mt-16 pointer-events-none">
                    <p className="text-gray-500 text-sm font-light tracking-wide">
                        Drag any badge to interact
                    </p>
                </div>
            </div>
        </div>
    );
}
