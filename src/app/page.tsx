import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Products from "@/components/products"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import BusinessOpportunity from "@/components/business-opportunity"
import { TestimonialsMarquee } from "@/components/testimonials-3d"
// import Testimonials from "@/components/testimonials"


export default function Home() {
  return (
    <div className="min-h-screen bg-white  ">

      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <Hero />
        <Features />
        <Products />
        <BusinessOpportunity />
        <TestimonialsMarquee />
        {/* <Testimonials /> */}
        <Cta />
      </main>

      <Footer />

    </div>
  )
}
