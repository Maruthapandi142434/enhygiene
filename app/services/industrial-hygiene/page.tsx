"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Activity, Wind, Headphones, Cast as Mask } from "lucide-react"
import Layout from "@/components/layout"
import Image from "next/image"
import Reveal from "@/components/reveal"
import Link from "next/link"

export default function IndustrialHygieneServicesPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <Reveal as="div" delayMs={140} className="max-w-3xl mx-auto text-center lg:text-left">
              <h1 className="text-2xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                Industrial Hygiene Services
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed text-justify">
              <span className="font-bold">Our services are managed by Certified Industrial Hygienists (CIH)</span>  who are helping organizations identify, evaluate, and control
                occupational health hazards to protect and enhance employee health and safety.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-stretch lg:justify-start gap-4">
                <Link href="/schedule-consultation">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base md:text-lg font-medium rounded-md w-full sm:w-auto">
                    Request Assessment
                  </Button>
                </Link>
                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100 px-6 py-3 text-base md:text-lg font-medium rounded-md w-full sm:w-auto">
                  Download Service Brochure
                </Button>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal as="div" delayMs={0} className="relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden rounded-xl shadow-md lg:justify-self-end">
              <Image
                src="/indurtial/Picture1.png"
                alt="Industrial Hygiene assessment in workplace"
                fill
                className="object-contain"
                priority
              />
             
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro and Quick Links */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            <div className="space-y-16">
              <section id="hra">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Left */}
                  <Reveal as="div" delayMs={0} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md">
                    <Image src="/indurtial/WhatsApp Image 2025-09-15 at 12.12.34.jpeg" alt="Workplace HRA" fill className="object-contain" />
                  </Reveal>
                  {/* Content Right */}
                  <Reveal as="div" delayMs={140}>
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Workplace Hazard Identification & Risk Assessment (HRA)</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      We conduct thorough on-site inspections and detailed hazard mapping to identify physical, chemical,
                      biological, and ergonomic risks present in your workplace environment. Our assessments consider
                      workplace processes, exposure durations, workforce configuration, and existing control measures. This
                      process helps uncover hidden risks and prioritize critical safety concerns.
                    </p>
                  </Reveal>
                </div>
              </section>

              <section id="exposure">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Left */}
                  <Reveal as="div" delayMs={0} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md">
                    <Image src="/indurtial/WhatsApp Image 2025-09-15 at 11.52.14.jpeg" alt="Exposure monitoring image" fill className="object-contain" />
                  </Reveal>
                  {/* Content Right */}
                  <Reveal as="div" delayMs={140}>
                    <div className="flex items-start gap-3 mb-4">
                      <Activity className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Exposure Monitoring</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify mb-6">
                      Our team performs quantitative testing and sampling for airborne contaminants including dust, fumes,
                      gases, vapors, and biological agents using advanced instrumentation. We also conduct noise level
                      evaluations and vibration assessments to prevent occupational illnesses such as hearing loss and
                      musculoskeletal disorders.
                    </p>
                  </Reveal>
                </div>
              </section>

              {/* Exposure Monitoring: full-width cards grid */}
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Reveal as="div" delayMs={0} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Hazardous Chem Compounds</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Total Volatile Organic Compounds (TVOC), Hydrogen Sulfide (H2S), Ammonia (NH3), Sulphur Dioxide (SO2),
                    Nitrogen Dioxide (NO2), Formaldehyde (CH2O), BTEX (Benzene, Toluene, Ethyl Benzene, Xylene)
                  </p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={80} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Occupational Parameters</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Carbon Monoxide (CO), Carbon Dioxide (CO2), Oxygen (O2), Ozone (O3), Temperature, Relative Humidity
                  </p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={160} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Dust Parameters</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">PM10, PM2.5, TSP</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={240} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Sound</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Noise Level</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={320} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Radon Exposure</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Radon Exposure Level</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={400} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Moisture Content</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Moisture Level</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={480} className="p-5 rounded-md border bg-white lg:col-span-3">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Illumination / Lighting of Work</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Light Level – Lux</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={560} className="p-5 rounded-md border bg-white lg:col-span-3">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Hazardous Metals Dusts/Fumes</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Aluminum (Al), Antimony (Sb), Arsenic (As), Barium (Ba), Beryllium (Be), Cadmium (Cd), Chromium (Cr),
                    Cobalt (Co), Copper (Cu), Iron (Fe), Lead (Pb), Magnesium (Mg), Manganese (Mn), Molybdenum (Mo),
                    Nickel (Ni), Potassium (K), Selenium (Se), Silver (Ag), Thallium (Tl), Titanium (Ti), Vanadium (V), Zinc (Zn)
                  </p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={640} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Asbestos</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Bulk Material Sample</p>
                  </Card>
                </Reveal>
                <Reveal as="div" delayMs={720} className="p-5 rounded-md border bg-white">
                  <Card className="p-0 border-0 shadow-none">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Microbiological</h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">Bacteria: Total Plate Count (TPC)</p>
                  </Card>
                </Reveal>
              </div>

              <section id="heat">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content Left */}
                  <Reveal as="div" delayMs={0} className="lg:order-1 order-2">
                    <div className="flex items-start gap-3 mb-4">
                      {/* <Wind className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" /> */}
                      <Activity className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Heat Stress Assessment</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      EnHygiene’s CIH will help your company assess an individual's heat tolerance and susceptibility to heat
                      stress, which can lead to various heat-related illnesses. The assessment involves monitoring vital
                      signs such as temperature, heart rate, and sweat rate. It helps identify individuals at risk of heat
                      intolerance and informs strategies for prevention and acclimatization.
                    </p>
                    <div className="mt-4">
                      <Card className="p-5 inline-block">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Heat Stress Parameters</h3>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">Heat Index, Temperature, Relative Humidity</p>
                      </Card>
                    </div>
                  </Reveal>
                  {/* Image Right */}
                  <Reveal as="div" delayMs={140} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md lg:order-2 order-1">
                    <Image src="/indurtial/WhatsApp Image 2025-09-17 at 16.19.57.jpeg" alt="Heat stress assessment" fill className="object-contain" />
                  </Reveal>
                </div>
              </section>

              <section id="ergonomics">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Left */}
                  <Reveal as="div" delayMs={0} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md">
                    <Image src="/indurtial/WhatsApp Image 2025-09-15 at 11.52.14.jpeg" alt="Ergonomic assessment" fill className="object-contain" />
                  </Reveal>
                  {/* Content Right */}
                  <Reveal as="div" delayMs={140}>
                    <div className="flex items-start gap-3 mb-4">
                    
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ergonomic Assessments</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      By analyzing workstations and task designs using recognized tools like RULA and REBA, we identify
                      ergonomic risks contributing to strain or injury. Our ergonomic interventions aim to enhance worker
                      comfort, reduce injury rates, and improve productivity.
                    </p>
                  </Reveal>
                </div>
              </section>

              <section id="control">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content Left */}
                  <Reveal as="div" delayMs={0} className="lg:order-1 order-2">
                    <div className="flex items-start gap-3 mb-4">
                    <Headphones className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Control Strategy Development & Implementation Support</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      Based on assessment data, we develop customized mitigation strategies which may include engineering
                      controls, administrative policies, personal protective equipment (PPE) recommendations, and procedural
                      changes. EnHygiene supports clients through the implementation phase to ensure effective hazard control.
                    </p>
                  </Reveal>
                  {/* Image Right */}
                  <Reveal as="div" delayMs={140} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md lg:order-2 order-1">
                    <Image src="/indurtial/WhatsApp Image 2025-09-20 at 15.22.36.jpeg" alt="Control strategy development" fill className="object-contain" />
                  </Reveal>
                </div>
              </section>

              <section id="reporting">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Left */}
                  <Reveal as="div" delayMs={0} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md">
                    <Image src="/indurtial/WhatsApp Image 2025-09-22 at 14.29.33.jpeg" alt="Reporting and monitoring" fill className="object-contain" />
                  </Reveal>
                  {/* Content Right */}
                  <Reveal as="div" delayMs={140}>
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Reporting & Continuous Monitoring</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      After detailed data collection, we provide comprehensive reports with seal and signature of Certified
                      Industrial Hygienist (CIH) highlighting findings, exposure levels, areas of concern, and prioritized
                      recommendations. EnHygiene also offers ongoing monitoring programs to track workplace conditions and
                      measure the effectiveness of implemented controls over time.
                    </p>
                  </Reveal>
                </div>
              </section>

              <section id="fit-testing">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content Left */}
                  <Reveal as="div" delayMs={0} className="lg:order-1 order-2">
                    <div className="flex items-start gap-3 mb-4">
                      <Mask className="w-10 h-10 text-blue-600 mt-1 flex-shrink-0" />
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Respiratory Fit Testing</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                      Fit testing is required for employees wearing tight-fitting respirators and it confirms a respirator
                      creates an adequate seal against the wearer's face, separating the user's respiratory system from
                      contaminated air. It verifies that the respirator will offer the necessary protection in a hazardous
                      environment and it is a crucial component of a comprehensive respiratory protection program.
                    </p>
                  </Reveal>
                  {/* Image Right */}
                  <Reveal as="div" delayMs={140} className="relative h-80 sm:h-96 lg:h-[520px] w-full overflow-hidden rounded-xl shadow-md lg:order-2 order-1">
                    <Image src="/indurtial/WhatsApp Image 2025-09-20 at 16.30.05.jpeg" alt="Respirator fit testing" fill className="object-contain" />
                  </Reveal>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  )
}

