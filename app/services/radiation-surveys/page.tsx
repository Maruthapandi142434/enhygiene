"use client"

import Image from "next/image"
import Layout from "@/components/layout"
import Reveal from "@/components/reveal"

export default function RadiationSurveysPage() {
  return (
    <Layout>
      {/* Mobile-first: hero image on top */}
      <Reveal as="section" delayMs={80} className="relative w-full h-[60vh] sm:h-[65vh] md:hidden" style={{ marginBottom: 5 }}>
        <Image
          src="/workers-in-safety-gear-with-tablets-and-equipment.jpg"
          alt="Naturally Occurring Radioactive Materials (NORMs)"
          fill
          className="object-cover"
          priority
        />
      </Reveal>
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <Reveal as="div" delayMs={0} className="relative w-full h-72 md:h-[480px] lg:h-[640px] rounded-2xl overflow-hidden shadow hidden md:block">
              <Image
                src="/workers-in-safety-gear-with-tablets-and-equipment.jpg"
                alt="Naturally Occurring Radioactive Materials (NORMs)"
                fill
                className="object-cover"
                priority
              />
            </Reveal>

            {/* Right: Content */}
            <Reveal as="div" delayMs={120}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Naturally Occurring Radioactive Materials (NORMs)
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                Naturally Occurring Radioactive Materials (NORM) usually consists of industrial wastes or by-products enriched with radioactive elements that exist in the natural environment. This includes uranium, thorium, potassium, radium and radon. EnHygiene’s Radiation Safety Professionals will help companies to identify potential hazards related to ionizing and non-ionizing radiation, develop suitable control methods to ensure worker protection.
              </p>
              <ul className="space-y-3 text-gray-800 text-lg list-disc pl-5">
                <li>NORM Survey</li>
                <li>NORM Management Program</li>
                <li>Training</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
