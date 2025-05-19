"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">#1</span>
              <span className="ml-2 text-xl font-bold">KangKong</span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <nav className="flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                Products
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Shop Now - Right */}
          <div className="hidden md:block flex-shrink-0">
            <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
          </div>

          {/* Mobile Menu - Right */}
          <div className="md:hidden flex-shrink-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="mt-6 mb-8">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">#1</span>
                    <span className="ml-2 text-xl font-bold">KangKong</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-5">
                  <Link href="#" className="text-base font-medium hover:text-green-600 transition-colors">
                    Home
                  </Link>
                  <Link href="#" className="text-base font-medium hover:text-green-600 transition-colors">
                    Products
                  </Link>
                  <Link href="#" className="text-base font-medium hover:text-green-600 transition-colors">
                    About
                  </Link>
                  <Link href="#" className="text-base font-medium hover:text-green-600 transition-colors">
                    Contact
                  </Link>
                  <Button className="bg-green-600 hover:bg-green-700 w-full mt-4">Shop Now</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
