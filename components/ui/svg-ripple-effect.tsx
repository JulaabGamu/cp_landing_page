"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface SvgRippleEffectProps {
  transition?: {
    duration?: number
    repeat?: number
    repeatDelay?: number
  }
  fade?: ("top" | "bottom")[]
  whileHover?: boolean
  image?: string
}

export default function SvgRippleEffect({
  transition = {
    duration: 0.75,
    repeat: Infinity,
    repeatDelay: 1.25,
  },
  fade = [],
  whileHover = false,
  image,
}: SvgRippleEffectProps) {
  return (
    <motion.div
      className="group bg-transparent overflow-visible"
      initial="idle"
      animate={whileHover ? "idle" : "active"}
      whileHover={whileHover ? "active" : undefined}
      variants={{ idle: {}, active: {} }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        className="col-start-1 row-start-1 size-full overflow-visible"
        style={{ overflow: 'visible' }}
      >
        {Array.from(Array(15).keys()).map((n) => (
          <motion.circle
            variants={{
              idle: {
                scale: 1,
                strokeOpacity: 0.25,
                stroke: "#4b5563",
              },
              active: {
                scale: [1, 1.08, 1],
                strokeOpacity: [0.25, 0.7, 0.25],
                stroke: ["#4b5563", "#1C38EA", "#4b5563"],
                transition: { ...transition, delay: n * 0.05 },
              },
            }}
            key={n}
            cx="250"
            cy="250"
            r={n * 14 + 4}
            strokeWidth={1}
          />
        ))}
      </svg>
      {fade.includes("top") && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[50%]" />
      )}
      {fade.includes("bottom") && (
        <div className="absolute inset-0 bg-linear-to-t from-transparent to-[50%]" />
      )}
      {image && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className="h-6 w-6 rounded-full bg-transparent object-cover sm:h-8 sm:w-8"
          />
        </div>
      )}
    </motion.div>
  )
}

