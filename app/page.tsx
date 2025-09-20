"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Layout from "@/components/layout"
import Reveal from "@/components/reveal"
import Link from "next/link"

export default function EnhygienePage() {
  // Scroll-based animations are handled by the <Reveal> component

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center relative overflow-hidden px-4 md:px-12 py-12 sm:py-20">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/WhatsApp Image 2025-09-20 at 09.33.49.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

          <div className="relative z-10 p-8 md:p-16">
            <div className="flex justify-center md:justify-end">
            <Reveal className="max-w-2xl text-white text-center md:text-right">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Environmental &<br />
                Industrial Hygiene Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-justify">
                Creating a safe, healthy, and productive workplace to protect employees
                by identifying, recognizing, evaluating, and controlling workplace hazards.
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transform hover:scale-105 transition-all duration-300">
                CALL OR WHATSAPP
              </Button>
            </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Environmental and Industrial Hygiene Services</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Industrial Hygiene Services Card */}
            <Reveal as="div" delayMs={0} className="h-full">
              <Link href="/services/industrial-hygiene" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/industrial-worker-with-safety-equipment-and-hard-h.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Industrial Hygiene Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    EnHygiene’s Certified Industrial hygienists(CIH) will help you to identify and mitigate workplace hazards that can lead to health issues by  applying scientific principles and methodologies to assess workplace environments, ensuring compliance with health regulations and industry standards. Their expertise ranges across various fields, including chemical exposure, noise control, ergonomic assessments, and indoor air quality.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Health Risk Assessment (HRA)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Employee Exposure monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Air Contaminant Monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Noise and Vibration Assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Heat stress Assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Ergonomic Assessments
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Respiratory Fit Testing
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>

            {/* Indoor Air Quality Card */}
            <Reveal as="div" delayMs={100} className="h-full">
              <Link href="/services/indoor-air-quality" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/office-plant-indoor-air-quality-testing-environmen.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Indoor Environment Quality (IEQ) Monitoring</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    EnHygiene’s IEQ Specialists will help you to evaluate the following conditions inside a building that affect the health, comfort, and well-being of its occupants to solve building related issues. This will prevent sick building syndrome and improves occupational health, productivity, and comfort by ensuring a safe and pleasant indoor environment.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Hazardous Chemical Compounds
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Occupational Parameters
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Dust Parameters
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Microbiological
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Sound
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Moisture Content
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                     Illumination / Lighting 
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>

            {/* NORM/NIR Services Card */}
            <Reveal as="div" delayMs={200} className="h-full">
              <Link href="/services/radiation-surveys" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/worker-in-safety-vest-using-technology-remote-serv.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">NORM/NIR Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                   Naturally Occurring Radioactive Materials (NORM) usually consists of industrial wastes or by-products enriched with radioactive elements that exist in the natural environment. This includes uranium, thorium, potassium, radium and radon.  EnHygiene’s Radiation Safety Professionals will help companies to identify potential hazards related to ionizing and non-ionizing radiation, develop suitable control methods to ensure worker protection.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      NORM Survey
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                     NORM Management Program 
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                     Training
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                     Non-ionizing radiation hazards(NIR)
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>

            <Reveal as="div" delayMs={300} className="h-full">
              <Link href="/services/compliance-assistance" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/workers-in-safety-gear-with-tablets-and-equipment.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Compliance Assistance & Control Strategy Development</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                   EnHygiene’s compliance assistance professionals will assist your organization to develop customized mitigation strategies and complying with related local regulations, as well as relevant international standards, facilitating audit readiness and minimizing legal risks.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Compliance register
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                     Hearing conservation program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Respiratory protection program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Chemical management program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      IAQ Management program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                     Other required programs.
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>

            <Reveal as="div" delayMs={400} className="h-full">
              <Link href="/services/contract-services" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/two-professionals-with-hard-hat-and-tablet-discuss.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Industrial Hygiene Contract Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                   EnHygiene’s Industrial Hygienist will work with clients in their location as part of long or short term contracts to assist contractors and companies ensure compliance by providing risk management through proactive hazard control recommendations.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Development of policies and procedures
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Exposure assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Audit and Inspection
                    </li>
                     <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                     Trainings.
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>

            <Reveal as="div" delayMs={500} className="h-full">
              <Link href="/services/environmental-monitoring" className="h-full">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer h-full flex flex-col"
                >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/industrial-environmental-monitoring-equipment-and-.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Environmental Monitoring</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    EnHygiene’s environmental professionals provide expert measurement, reporting, and compliance assurance that help your company control pollution, adhere to legal standards, protect employees and the community, and build trust with stakeholders.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Water and waste water sampling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Ambient noise assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                     Ambient air quality assessments(Volatile Organic Compounds, NOx emissions, and particulate matter (PM10, PM2.5)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Soil sampling
                    </li>
                  </ul>
                </CardContent>
                </Card>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
