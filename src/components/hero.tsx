"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { motion } from "framer-motion"

export default function Hero() {
  // Refs for GSAP animations
  const heroRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const statsRef = useRef(null)
  const imageWrapperRef = useRef(null)
  const numberOneBadgeRef = useRef(null)
  const topRatedBadgeRef = useRef(null)

  // GSAP animations
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Set initial states
    gsap.set([badgeRef.current, titleRef.current, descriptionRef.current, buttonsRef.current, statsRef.current], {
      opacity: 0,
      y: 30,
    })

    gsap.set(imageWrapperRef.current, {
      opacity: 0,
      x: 50,
    })

    gsap.set([numberOneBadgeRef.current, topRatedBadgeRef.current], {
      opacity: 0,
      scale: 0.5,
    })

    // Animation sequence
    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2,
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.3",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5",
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.4",
      )
      .to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3",
      )
      .to(
        imageWrapperRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
        },
        "-=0.6",
      )
      .to(
        numberOneBadgeRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      )
      .to(
        topRatedBadgeRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      )

    // Continuous animations
    gsap.to(imageWrapperRef.current, {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    gsap.to(numberOneBadgeRef.current, {
      rotate: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Clean up animations on component unmount
    return () => {
      tl.kill()
      gsap.killTweensOf([imageWrapperRef.current, numberOneBadgeRef.current])
    }
  }, [])

  // Framer Motion variants
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
    },
  }

  const glowVariants = {
    initial: {
      opacity: 0.3,
    },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section ref={heroRef} className="relative w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-md:hidden">
        <div className="absolute top-0 md:left-[200] left-50 ">
          <motion.img initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}

            src="/animationLogo.png"
            alt="Kangkong Chips"
            width={100}
            height={100}
            className="w-[200px]"
          />
        </div>
      </div>

      <div className="max-md:hidden">
        <div className="absolute top-0 md:right-[100] z-48 ">
          <motion.img initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}

            src="/animationLogo.png"
            alt="Kangkong Chips"
            width={100}
            height={100}
            className="w-[200px]"
          />

        </div>
      </div>
      <div className="absolute bottom-10 md:left-[400]  z-0 ">
        <motion.img initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}

          src="/animationLogo.png"
          alt="Kangkong Chips"
          width={100}
          height={100}
          className="w-[200px]"
        />
      </div>

      <div className="absolute top-0 md:left-[400] z-0  ">
        <motion.img initial={{ y: 0, opacity: 0 }} whileInView={{ y: 20, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}

          src="/animationLogo.png"
          alt="Kangkong Chips"
          width={100}
          height={100}
          className="w-[600px] blur-lg"
        />
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100 rounded-bl-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-100 rounded-tr-full"
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div ref={badgeRef}>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 text-sm">
                #1 Best Selling Chips
              </Badge>
            </div>

            <h1 ref={titleRef} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The <span className="text-green-600">Number One</span> Kangkong <span className="text-[#FDC700]">Chips</span>
            </h1>

            <p ref={descriptionRef} className="max-w-[600px] text-gray-600 md:text-xl">
              Experience why were rated #1 in taste, quality, and nutrition. Our premium kangkong chips are the market
              leader for a reason.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-md w-full sm:w-auto"
                >
                  Shop Now
                </Button>
              </motion.div>

              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 font-bold py-6 px-8 rounded-md w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>

            <div ref={statsRef} className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-bold text-green-800"
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-sm text-gray-600"
              >
                <span className="font-bold">10,000+</span> happy customers
              </motion.div>
            </div>
          </div>

          <div ref={imageWrapperRef} className="relative lg:ml-auto">
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="absolute -inset-4 bg-green-100 rounded-full blur-2xl"
            ></motion.div>

            <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
              <motion.div
                ref={numberOneBadgeRef}
                className="absolute -top-6 -left-6 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg"
              >
                #1
              </motion.div>

              <Image
                src="https://i.pinimg.com/736x/34/fe/c1/34fec1f0053b81464bb993c96bdb8ea9.jpg"
                alt="Number One Kangkong Chips"
                width={500}
                height={500}
                className="rounded-xl object-cover"
                priority
              />

              <motion.div
                ref={topRatedBadgeRef}
                className="absolute -bottom-4 -right-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12"
              >
                TOP RATED
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
