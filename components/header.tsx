"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // 300ms delay before closing
  }

  const serviceItems = [
    { name: "Virtual & Remote Services", href: "/services/virtual-remote" },
    { name: "Industrial Hygiene Services", href: "/services/industrial-hygiene" },
    { name: "Indoor Air Quality (IAQ)", href: "/services/indoor-air-quality" },
    { name: "Contract Services", href: "/services/contract-services" },
    { name: "Compliance Assistance & EHS", href: "/services/compliance-assistance" },
    { name: "Environmental Monitoring", href: "/services/environmental-monitoring" },
    { name: "Radiation Surveys & Assessments", href: "/services/radiation-surveys" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative ">
              <Image
                src="/enhygiene-logo.jpg"
                alt="Enhygiene Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            {/* <div>
              <div className="text-2xl font-bold text-gray-900">Enhygiene</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">Environmental Health & Safety</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-200 ${
                  isServicesOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>

            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md font-medium">
                SCHEDULE A CONSULTATION
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="text-left text-gray-700 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/contact">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full">SCHEDULE A CONSULTATION</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export { Header }
