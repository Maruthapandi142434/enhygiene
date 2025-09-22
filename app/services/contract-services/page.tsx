"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Reveal from "@/components/reveal"

export default function ContractServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Mobile-first: hero image on top */}
      <Reveal as="section" delayMs={80} className="relative w-full h-[40vh] sm:h-[50vh] md:hidden" style={{ marginBottom: 5 }}>
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
          alt="Team discussing health & safety programs"
          fill
          className="object-cover"
          unoptimized
          priority
        />
      </Reveal>

      {/* Hero: Text left, Image right */}
      <section className="mt-20 py-16 bg-[#fdecec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <Reveal as="div" delayMs={0} className="max-w-2xl">
              {/* <span className="inline-block text-xs tracking-wide uppercase bg-white/70 text-teal-700 px-3 py-1 rounded-full mb-4">Capabilities</span> */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">Contract Services</h1>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 text-justify">
                EnHygiene’s contract services provide expert industrial hygiene support by certified professionals to
                identify, evaluate, and control workplace environmental hazards through exposure monitoring, hazard
                assessments, indoor air quality surveys, noise monitoring, chemical evaluations, ergonomic assessments,
                and development of health and safety programs. Our services can range from regular site visits for
                sampling and audits to development of customized safety strategies and compliance support.
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">EnHygiene’s contract services include:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-justify">
                <li>Custom analysis and measurement of environmental hazards</li>
                <li>Exposure assessment monitoring for chemicals, dusts, fumes, noise, and biological agents</li>
                <li>Indoor air quality assessment and control</li>
                <li>Ergonomic evaluations and workstation design</li>
                <li>Program and policy development for hazard reduction</li>
                <li>Regular audits and inspections</li>
                <li>Training and consultation on health and safety compliance</li>
              </ul>
            </Reveal>

            {/* Right: Image with rounded/masked shape */}
            <Reveal as="div" delayMs={140} className="relative h-64 sm:h-80 lg:h-[420px] w-full hidden md:block">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-md">
                <Image
                  src="/indurtial/WhatsApp Image 2025-09-22 at 14.32.58.jpeg"
                  alt="Team discussing health & safety programs"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
              {/* Decorative corner cutout to mimic reference shape */}
              <div className="hidden lg:block absolute -left-10 top-10 w-12 h-24 bg-[#fdecec] rounded-r-[2rem]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* End hero */}

      <Footer />
    </div>
  )
}

