"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "./magicui/marquee"
import { Star } from "lucide-react"
import Image from "next/image"

// Kangkong chips themed testimonials
const reviews = [
  {
    name: "Maria Santos",
    username: "Food Enthusiast",
    body: "These kangkong chips are absolutely amazing! The crunch is perfect and the flavor is unlike anything I've tried before. Definitely my #1 snack choice.",
    img: "/testimonial-1.png",
  },
  {
    name: "John Rivera",
    username: "Fitness Coach",
    body: "I recommend these chips to all my clients. They're the perfect healthy snack with amazing flavor. No wonder they're rated #1 in the market!",
    img: "/testimonial-2.png",
  },
  {
    name: "Sophia Lee",
    username: "Food Blogger",
    body: "As someone who reviews snacks professionally, I can confidently say these kangkong chips are top-tier. The quality and taste are unmatched.",
    img: "/testimonial-3.png",
  },
  {
    name: "David Kim",
    username: "Chef",
    body: "The texture and flavor profile of these chips is exceptional. A truly gourmet snacking experience that I recommend to all my foodie friends.",
    img: "/testimonial-4.png",
  },
  {
    name: "Emma Thompson",
    username: "Nutritionist",
    body: "Finally a chip that's both delicious and nutritious! My clients love the health benefits and I love the taste. A perfect combination.",
    img: "/testimonial-5.png",
  },
  {
    name: "Michael Perez",
    username: "Snack Enthusiast",
    body: "I've tried every chip on the market, and these kangkong chips are definitely #1 in my book! The crunch and flavor are simply unbeatable.",
    img: "/testimonial-6.png",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-4 my-2",
        // Kangkong themed styles
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
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="mt-2 text-sm text-gray-600">{body}</blockquote>
    </figure>
  )
}

export function TestimonialsMarquee() {
  return (
    <section className="container mx-auto py-16 md:py-24 bg-green-50">
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

        <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden rounded-xl bg-white/50 p-4">
          <Marquee pauseOnHover className="[--duration:60s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:60s] mt-4">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
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
