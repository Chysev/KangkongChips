"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

export interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  direction?: "horizontal" | "vertical"
  vertical?: boolean
  speed?: number
}

export function Marquee({ children, className, reverse, pauseOnHover, vertical = false, speed = 1 }: MarqueeProps) {
  const duration = useRef(60 / speed)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  const xOffset = useMotionValue(0)
  const yOffset = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  useAnimationFrame((time, delta) => {
    if (!shouldAnimate) return

    let moveBy = time * 0.05 * (reverse ? -1 : 1)
    moveBy = vertical ? moveBy : -moveBy

    if (vertical) {
      yOffset.set(moveBy % (window.innerHeight / 2))
    } else {
      xOffset.set(moveBy % (window.innerWidth / 2))
    }
  })

  return (
    <div
      className={cn("group flex overflow-hidden", vertical ? "flex-col" : "", className)}
      onMouseEnter={() => pauseOnHover && setShouldAnimate(false)}
      onMouseLeave={() => pauseOnHover && setShouldAnimate(true)}
    >
      <motion.div
        className={cn("flex", vertical ? "flex-col" : "")}
        style={{
          x: vertical ? 0 : xOffset,
          y: vertical ? yOffset : 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn("flex", vertical ? "flex-col" : "")}
        style={{
          x: vertical ? 0 : xOffset,
          y: vertical ? yOffset : 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn("flex", vertical ? "flex-col" : "")}
        style={{
          x: vertical ? 0 : xOffset,
          y: vertical ? yOffset : 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn("flex", vertical ? "flex-col" : "")}
        style={{
          x: vertical ? 0 : xOffset,
          y: vertical ? yOffset : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
