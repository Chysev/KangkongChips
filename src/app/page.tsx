import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Products from "@/components/products"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import BusinessOpportunity from "@/components/business-opportunity"

export default function Home() {
  return (
    <div className="min-h-screen bg-white  ">

      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <Hero />
        <Features />
        <Products />
        <BusinessOpportunity />
        <Cta />
      </main>

      <Footer />

    </div>
  )
}
