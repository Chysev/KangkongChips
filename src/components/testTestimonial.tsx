"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Maria S.",
    username: "Food Enthusiast",
    body: "These kangkong chips are absolutely amazing! The crunch is perfect and the flavor is unlike anything I've tried before.",
    img: "/testimonial-1.png",
    stars: 5,
  },
  {
    name: "John R.",
    username: "Fitness Coach",
    body: "I recommend these chips to all my clients. They're the perfect healthy snack with amazing flavor.",
    img: "/testimonial-2.png",
    stars: 5,
  },
  {
    name: "Sophia L.",
    username: "Food Blogger",
    body: "As someone who reviews snacks professionally, I can confidently say these kangkong chips are top-tier.",
    img: "/testimonial-3.png",
    stars: 5,
  },
  {
    name: "David K.",
    username: "Chef",
    body: "The texture and flavor profile of these chips is exceptional. A truly gourmet snacking experience.",
    img: "/testimonial-4.png",
    stars: 5,
  },
  {
    name: "Emma T.",
    username: "Nutritionist",
    body: "Finally a chip that's both delicious and nutritious! My clients love the health benefits.",
    img: "/testimonial-5.png",
    stars: 5,
  },
  {
    name: "Michael P.",
    username: "Snack Enthusiast",
    body: "I've tried every chip on the market, and these kangkong chips are definitely #1 in my book!",
    img: "/testimonial-6.png",
    stars: 5,
  },
]

// Split reviews into rows for the marquee effect
const firstRow = reviews.slice(0, 2)
const secondRow = reviews.slice(2, 4)
const thirdRow = reviews.slice(4, 6)

const ReviewCard = ({
  img,
  name,
  username,
  body,
  stars,
}: {
  img: string
  name: string
  username: string
  body: string
  stars: number
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mb-4 mx-2",
        // light styles
        "border-green-600/20 bg-white hover:bg-green-50/50 shadow-md hover:shadow-lg transition-all duration-300",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            className="rounded-full object-cover"
            width={40}
            height={40}
            alt={name}
            src={img || "/placeholder.svg"}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-green-800">{name}</figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <div className="flex mt-2 mb-2">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="mt-2 text-sm text-gray-600">{body}</blockquote>
    </figure>
  )
}

export function Testimonials3D() {
  return (
    <section className="w-full py-16 md:py-24 bg-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
            Customer Reviews
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our <span className="text-green-600">#1 Fans</span> Say
          </h2>
          <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
            Don&apos;t just take our word for it - see why customers rate us as their top choice
          </p>
        </div>

        <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:800px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-50px) translateY(0px) translateZ(-100px) rotateX(10deg) rotateY(-10deg) rotateZ(5deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:20s]" vertical>
              {thirdRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-green-50"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-green-50"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-green-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-green-50"></div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-green-100 rounded-full px-4 py-2">
            <div className="flex space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-green-800">4.9/5 average rating from 2,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
