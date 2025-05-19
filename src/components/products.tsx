"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

export default function ElegantProducts() {
  // Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  // State for active slide and hover
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  // Refs for animations
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Navigation functions
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index)

  // Product data
  const products = [
    {
      id: 1,
      name: "Original",
      description: "Our #1 bestseller with the perfect balance of flavor",
      price: "₱139.00",
      image: "/classicImage.png",
      badge: "BEST SELLER",
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      name: "Chocolate",
      description: "Rich cocoa flavor with a hint of sweetness",
      price: "₱139.00",
      image: "https://img.lazcdn.com/g/ff/kf/S3a051e7bd3874e83ae4aea142f0dcaadG.jpg_720x720q80.jpg",
      badge: "POPULAR",
      color: "from-amber-600 to-amber-700",
    },
    {
      id: 3,
      name: "Cheese",
      description: "A sophisticated blend of premium cheese flavors",
      price: "₱139.00",
      image: "/cheeseImage.png",
      badge: "NEW",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 4,
      name: "Spicy BBQ",
      description: "Bold flavors with a spicy kick for adventurous snackers",
      price: "₱139.00",
      image: "https://th.bing.com/th/id/OIP.eB7TJNbY4XyaiMY3q1ye0gHaHa?rs=1&pid=ImgDetMain",
      badge: "HOT",
      color: "from-red-500 to-red-600",
    },
    {
      id: 5,
      name: "Sour Cream & Onion",
      description: "Creamy and tangy flavor that's always a crowd pleaser",
      price: "₱139.00",
      image: "https://img.lazcdn.com/g/ff/kf/S3a051e7bd3874e83ae4aea142f0dcaadG.jpg_720x720q80.jpg",
      badge: "CLASSIC",
      color: "from-teal-500 to-teal-600",
    },
  ]

  // Initialize and handle carousel events
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect() // Set initial index

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !carouselRef.current) return

    // Animate heading elements
    const headingElements = headingRef.current.querySelectorAll("*")

    gsap.fromTo(
      headingElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate carousel
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 75%",
        },
      },
    )

    return () => {
      gsap.killTweensOf([headingElements, carouselRef.current])
    }
  }, [])

  // Card hover animations with Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },
  }

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } },
  }

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-28 overflow-hidden bg-gradient-to-b from-white to-green-50">
      <div className="absolute -bottom-0 right-0 w-[200px] hover:animate-bounce z-49 -rotate-25">
        <img src="/featureImage.png" alt="featureImage" />
      </div>
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={headingRef} className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800">
            Our Premium Collection
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
            #1 Rated Flavors
          </h2>
          <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
            Discover our artisanal kangkong chip varieties, crafted for discerning tastes
          </p>
        </div>

        <div ref={carouselRef} className="relative mx-auto max-w-7xl">
          {/* Elegant Carousel Navigation */}
          <div className="absolute top-1/2 -left-5 md:-left-10 -translate-y-1/2 z-10">
            <Button
              onClick={scrollPrev}
              size="icon"
              variant="ghost"
              className="h-14 w-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 border border-green-100"
            >
              <ChevronLeft className="h-6 w-6 text-green-800" />
              <span className="sr-only">Previous products</span>
            </Button>
          </div>
          <div className="absolute top-1/2 -right-5 md:-right-10 -translate-y-1/2 z-10">
            <Button
              onClick={scrollNext}
              size="icon"
              variant="ghost"
              className="h-14 w-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 border border-green-100"
            >
              <ChevronRight className="h-6 w-6 text-green-800" />
              <span className="sr-only">Next products</span>
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex py-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 md:pl-6 pr-4 md:pr-6"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <motion.div
                    className="h-full bg-white rounded-2xl overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                    style={{
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div className="relative">
                      {/* Product badge */}
                      {product.badge && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge
                            className={`bg-gradient-to-r ${product.color} text-white font-medium px-3 py-1.5 rounded-full`}
                          >
                            {product.badge}
                          </Badge>
                        </div>
                      )}

                      {/* #1 badge */}
                      {product.id === 1 && (
                        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                          #1
                        </div>
                      )}

                      {/* Product image with gradient overlay */}
                      <div
                        className={`relative h-100 w-full overflow-hidden bg-gradient-to-b from-transparent to-${product.color.split(" ")[1]}/10`}
                      >
                        <motion.div variants={imageVariants} className="h-full w-full">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Product details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{product.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-green-600">{product.price}</span>

                        <AnimatePresence>
                          {(hoveredProduct === product.id || activeIndex === products.indexOf(product)) && (
                            <motion.div variants={buttonVariants} initial="hidden" animate="visible" exit="hidden">
                              <Button className="bg-green-600 hover:bg-green-700 rounded-full">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
