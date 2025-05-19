import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BusinessOpportunity() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative">
            <Image
              src="https://th.bing.com/th/id/OIP.4Bm23D4gUYwOZUDB4FNMvwHaHa?rs=1&pid=ImgDetMain"
              alt="Scientist with tablet checking product quality"
              width={600}
              height={450}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
              We Help You Build a Thriving Business with Nature Best Kangkong Chips!
            </h2>
            <p className="text-gray-600 md:text-lg">
              At KangKong, we believe in harnessing the power of natural ingredients and modern production techniques to
              create high-quality snack products. Our Kangkong Chips are crafted with the best organic ingredients,
              ensuring superior taste and sustainable business growth for our distributors.
            </p>
            <div className="flex">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-md">
                Become a Distributor Today
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Active Distributors</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">#1</div>
                <div className="text-sm text-gray-600">Distributor Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
