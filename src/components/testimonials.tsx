import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-800">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-green-900">
            <span className="font-medium">Loved</span> by Connoisseurs
          </h2>
          <p className="max-w-[700px] text-lg text-green-800/70">
            Discover what our distinguished customers have to say about our premium kangkong chips.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sophia Chen",
              role: "Food Critic",
              image: "/testimonial-1.png",
              quote:
                "The delicate balance of flavors and the perfect crunch make these kangkong chips truly exceptional. A sophisticated snack for discerning palates.",
            },
            {
              name: "James Wilson",
              role: "Executive Chef",
              image: "/testimonial-2.png",
              quote:
                "As a chef, I appreciate the attention to detail in these chips. The natural flavors shine through, making them perfect for pairing with fine wines.",
            },
            {
              name: "Elena Rodriguez",
              role: "Wellness Coach",
              image: "/testimonial-3.png",
              quote:
                "Finally, a premium snack that's both nutritious and indulgent. My clients love how these chips satisfy cravings without compromising on health.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <blockquote className="text-green-800/80 italic mb-6">{testimonial.quote}</blockquote>
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-green-900">{testimonial.name}</p>
                  <p className="text-sm text-green-700/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
