"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Phone, Mail, Shield, Microscope, Wind, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

export default function IndoorAirQualityPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    
    <div className="min-h-screen bg-white">
   <Header />

      {/* Mobile-first: show hero image first */}
      <Reveal as="section" delayMs={80} className="relative w-full h-[40vh] sm:h-[50vh] md:hidden">
        <Image
          src="/WhatsApp Image 2025-09-22 at 12.29.21.jpeg"
          alt="Indoor environment quality"
          fill
          className="object-cover"
          priority
        />
      </Reveal>

      {/* Hero Section: Text first */}
      <Reveal as="section" delayMs={0} className="pt-24 md:pt-32 pb-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" delayMs={100} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight text-balance">
              Indoor Environment Quality (IEQ) Monitoring
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Proper air quality, ventilation, lighting, temperature, and humidity are vital for healthy indoor
              workplaces. We evaluate these factors to ensure optimal environmental conditions and implement
              recommendations aligned with industry standards.
            </p>
          </Reveal>
        </div>
      </Reveal>

      {/* Full-width image under hero: desktop/tablet only */}
      <Reveal as="section" delayMs={200} className="relative w-full h-[60vh] sm:h-[70vh] hidden md:block mt-6">
        <Image
          src="/WhatsApp Image 2025-09-22 at 12.29.21.jpeg"
          alt="Indoor environment quality"
          fill
          className="object-cover"
          priority
        />
      </Reveal>

     

      {/* IEQ Parameters Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal as="div" delayMs={0} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">IEQ Parameters We Assess</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EnHygiene’s IEQ professionals will help your organization identify and monitor key indoor environmental
              factors and contaminants.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal as="div" delayMs={0} className="bg-white p-6 rounded-lg shadow-sm border">
              <Wind className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Hazardous Chem Compounds</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Total Volatile Organic Compounds (TVOC), Hydrogen Sulfide (H2S), Ammonia (NH3), Sulphur Dioxide (SO2),
                Nitrogen Dioxide (NO2), Formaldehyde (CH2O), BTEX (Benzene, Toluene, Ethyl Benzene, Xylene)
              </p>
            </Reveal>
            <Reveal as="div" delayMs={80} className="bg-white p-6 rounded-lg shadow-sm border">
              <Microscope className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Occupational Parameters</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Carbon Monoxide (CO), Carbon Dioxide (CO2), Oxygen (O2), Ozone (O3), Temp, RH
              </p>
            </Reveal>
            <Reveal as="div" delayMs={160} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Dust Parameters</h3>
              <p className="text-gray-700 text-sm leading-relaxed">PM10, PM2.5, TSP</p>
            </Reveal>
            <Reveal as="div" delayMs={240} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Sound</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Noise Level</p>
            </Reveal>
            <Reveal as="div" delayMs={320} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Radon Exposure</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Radon Exposure Level</p>
            </Reveal>
            <Reveal as="div" delayMs={400} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Moisture Content</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Moisture Level</p>
            </Reveal>
            <Reveal as="div" delayMs={480} className="bg-white p-6 rounded-lg shadow-sm border md:col-span-2">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Illumination / Lighting of Work</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Light Level – Lux</p>
            </Reveal>
            {/* <Reveal as="div" delayMs={560} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Asbestos</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Bulk Material Sample</p>
            </Reveal> */}
            <Reveal as="div" delayMs={640} className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Microbiological</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Bacteria: Total Plate Count (TPC)</p>
            </Reveal>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <Footer />
    </div>
  )
}
