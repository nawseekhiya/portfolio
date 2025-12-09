"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoItem {
  node?: React.ReactNode
  src?: string
  alt?: string
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: "left" | "right" | "up" | "down"
  logoHeight?: number // Used for sizing
  gap?: number
  pauseOnHover?: boolean
  className?: string
}

export function LogoLoop({
  logos,
  speed = 40,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  className,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // For simplicity, we'll focus on horizontal scrolling as that's the primary use case
  // Vertical logic can be added if needed, but horizontal is standard for these logos.
  
  // Duplicate logos enough times to ensure smooth looping
  // A simple 2x duplication usually works if widths are handled, but specific marquee libs do more.
  // We'll map 3 times to be safe.
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div 
      ref={containerRef}
      className={cn(
        "group relative flex overflow-hidden user-select-none", 
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex shrink-0 flex-row items-center whitespace-nowrap"
        style={{ gap: `${gap}px` }}
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: (logos.length * 10) / (speed / 10), // Rough speed approximation
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="relative flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 hover:text-primary"
            style={{ height: logoHeight }}
          >
             {logo.href ? (
                <a 
                   href={logo.href} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   title={logo.title}
                   className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                   {logo.node ? (
                      <div className="text-4xl">{logo.node}</div> // Assuming react-icons
                   ) : (
                      <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
                   )}
                </a>
             ) : (
                <div className="flex items-center justify-center text-muted-foreground">
                   {logo.node ? (
                      <div className="text-4xl">{logo.node}</div>
                   ) : (
                      <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
                   )}
                </div>
             )}
          </div>
        ))}
      </motion.div>
      
      {/* Second identical div for seamless loop logic if using pure CSS, 
          but Framer Motion x: ["0%", "-50%"] is easier with one big strip if carefully calculated. 
          Here we used the x: 0 -> -33% with 3x content strategy. */}
    </div>
  )
}
