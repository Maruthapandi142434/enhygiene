"use client"

import Image from "next/image"
import Layout from "@/components/layout"
import Reveal from "@/components/reveal"

export default function EnvironmentalMonitoringPage() {
  return (
    <Layout>
      {/* Mobile-first: hero image on top */}
      <Reveal as="section" delayMs={80} className="relative w-full h-[60vh] sm:h-[65vh] md:hidden" style={{ marginBottom: 5 }}>
        <Image
          src="/industrial-environmental-monitoring-equipment-and-.jpg"
          alt="Environmental monitoring equipment"
          fill
          className="object-cover"
          priority
        />
      </Reveal>
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <Reveal as="div" delayMs={0}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Environmental Monitoring</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EnHygiene’s environmental professionals provide expert measurement, reporting, and compliance assurance
                that help your company control pollution, adhere to legal standards, protect employees and the
                community, and build trust with stakeholders.
              </p>
              <ul className="space-y-3 text-gray-800 text-lg list-disc pl-5">
                <li>Water and waste water sampling</li>
                <li>Ambient noise assessment</li>
                <li>Ambient air quality assessments (Volatile Organic Compounds, NOx emissions, and particulate matter (PM10, PM2.5))</li>
                <li>Soil sampling</li>
              </ul>
            </Reveal>

            {/* Right: Image */}
            <Reveal as="div" delayMs={120} className="relative w-full h-72 md:h-[480px] lg:h-[640px] rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <Image
                src="/industrial-environmental-monitoring-equipment-and-.jpg"
                alt="Environmental monitoring equipment"
                fill
                className="object-cover"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
