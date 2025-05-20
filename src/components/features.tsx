import { CheckCircle, Award, Star, TrendingUp } from "lucide-react"

export default function Features() {
  // Define an array of enhanced gradients for each card
  const cardGradients = [
    "bg-green-600 hover:bg-gradient-to-r from-[#1EB055] to-[#1EB055] via-[#016630]",
    "bg-green-600 hover:bg-gradient-to-r from-[#1EB055] to-[#1EB055] via-[#016630]",
    "bg-green-600 hover:bg-gradient-to-r from-[#1EB055] to-[#1EB055] via-[#016630]",
    "bg-green-600 hover:bg-gradient-to-r from-[#1EB055] to-[#1EB055] via-[#016630]",
  ]

  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Premium Quality",
      description: "Only the finest ingredients make it into our #1 rated chips",
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Award Winning",
      description: "Recognized as the top chip brand three years running",
    },
    {
      icon: <Star className="h-10 w-10 text-white" />,
      title: "5-Star Taste",
      description: "Perfect crunch and flavor in every bite",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Market Leader",
      description: "The #1 selling kangkong chip in the country",
    },
  ]

  return (
    <section className=" py-12 md:py-24 bg-green-50 relative w-full mx-auto">

      <div className="absolute -bottom-30 left-0 w-[200px] hover:animate-bounce z-49 rotate-25">
        <img src="/featureImage.png" alt="featureImage" />
      </div>
      <div className="absolute top-30 right-20 w-[500px]  z-0  -rotate-25">
        <img src="/featureImage.png" alt="featureImage" className="blur-lg" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Why We're #1</div>
          <h2

            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
            The Features That Make Us Number One
          </h2>
          <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
            Our kangkong chips lead the market with these unbeatable qualities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex cursor-pointer flex-col items-center z-30 text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${cardGradients[index]} hover:scale-[1.02] group`}
            >
              <div className="mb-4 bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
