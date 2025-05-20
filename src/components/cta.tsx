"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Info, ArrowRight } from "lucide-react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"

export default function ElegantCta() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  // Stats with animated counters
  const stats = [
    { value: "#1", label: "In Sales", endValue: 1 },
    { value: "10k+", label: "Reviews", endValue: 10000 },
    { value: "5★", label: "Rating", endValue: 5 },
  ]

  // Counters for stats animation
  const [counters, setCounters] = useState([0, 0, 0])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      // Animate counters
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          let allDone = true

          newCounters[0] = 1 // For #1, just set it directly

          // For 10k+
          if (newCounters[1] < 10000) {
            newCounters[1] = Math.min(newCounters[1] + 500, 10000)
            allDone = false
          }

          // For 5★
          if (newCounters[2] < 5) {
            newCounters[2] = Math.min(newCounters[2] + 0.25, 5)
            allDone = false
          }

          if (allDone) clearInterval(interval)
          return newCounters
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isInView, controls])

  // Format counter values for display
  const formatCounter = (index: number, value: number) => {
    if (index === 0) return "#1"
    if (index === 1) return value === 10000 ? "10k+" : `${Math.floor(value / 1000)}k+`
    if (index === 2) return `${value}★`
    return value
  }

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  }

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  }

  const statItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const backgroundPatternVariants = {
    initial: {
      backgroundPosition: "0% 0%",
    },
    animate: {
      backgroundPosition: "100% 100%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full py-16 md:py-24 mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"
        initial="initial"
        animate="animate"
      />

      {/* Main content container with gradient */}
      <div className="relative z-10 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-800/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container px-6 md:px-10 py-16 md:py-20">
          <div className="flex flex-col items-center justify-center space-y-8 text-center relative z-10">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="rounded-full bg-white px-5 py-2 text-sm text-green-800 font-bold shadow-md border border-white/20 backdrop-blur-sm">
                LIMITED TIME OFFER
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md max-w-3xl"
            >
              Experience the dsfasdfa<span className="text-yellow-300">#1</span> Kangkong Chips Today
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-[800px] text-green-50 md:text-xl/relaxed">
              Join thousands of satisfied customers and discover why were rated number one in taste and quality
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 min-[400px]:flex-row">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setIsHovered("shop")}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Button
                  size="lg"
                  className="bg-white max-md:grid max-md:grid-cols-2 text-green-600 hover:bg-green-50 font-bold py-7 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-3 overflow-hidden group"
                >
                  <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Shop Now</span>
                  <AnimatePresence>
                    {isHovered === "shop" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5 ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setIsHovered("learn")}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-bold py-7 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-3 group"
                >
                  <Info className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Learn More</span>
                  <AnimatePresence>
                    {isHovered === "learn" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5 ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={statsContainerVariants}
              className="mt-12 grid grid-cols-3 sm:grid-cols-3 gap-8 sm:gap-4 w-full max-w-3xl"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={statItemVariants} className="flex flex-col items-center relative">
                  <div className="relative">
                    <motion.span
                      className="text-5xl font-bold text-white"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    >
                      {formatCounter(index, counters[index])}
                    </motion.span>
                    {index === 2 && (
                      <motion.div
                        className="absolute -right-6 -top-3"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 2 }}
                      >
                        <div className="bg-yellow-400 text-xs text-black font-bold px-2 py-1 rounded-full transform rotate-12">
                          PERFECT!
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <motion.span
                    className="text-base text-green-100 mt-2 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    {stat.label}
                  </motion.span>
                  {index < 2 && (
                    <motion.div
                      className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 64, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                      style={{
                        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
