"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Layout from "@/components/layout"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export default function EnhygienePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [sectionTitleVisible, setSectionTitleVisible] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const sectionTitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger hero animation immediately
    setTimeout(() => setHeroVisible(true), 300)
    
    // Trigger section title animation
    setTimeout(() => setSectionTitleVisible(true), 800)
  }, [])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/health-safety-environment-moss-background.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={heroRef}
            className={`max-w-2xl text-white transition-all duration-1000 transform ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Environmental Health &<br />
              Safety Solutions
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Specializing in identifying, evaluating, and controlling occupational and environmental health hazards.
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium rounded-md transform hover:scale-105 transition-all duration-300">
              CALL OR TEXT (612) 296-2458
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={sectionTitleRef}
            className={`text-center mb-16 transition-all duration-800 transform ${
              sectionTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Industrial Hygiene & Safety Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Industrial Hygiene Services Card */}
            <Link href="/services/industrial-hygiene/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
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
                    Enhygiene's certified industrial hygienist (CIH) will help your organization identify, evaluate, and
                    control occupational health hazards to protect and enhance the health and safety of your employees.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      COVID-19 cleaning verification surface testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Employee exposure monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Air sampling and analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Noise dosimetry and surveys
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Respirator fit testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Indoor Air Quality Card */}
            <Link href="/services/indoor-air-quality/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/office-plant-indoor-air-quality-testing-environmen.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Indoor Air Quality (IAQ) Testing</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's IAQ professionals will help your organization identify indoor environmental contaminants
                    and their sources, resolve building-related health issues, and prevent future occurrences.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Building evaluations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      USGBC LEED indoor air quality testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Mold and water intrusion investigations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Volatile organic compounds (VOCs) testing and analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Virtual & Remote Services Card */}
            <Link href="/services/virtual-remote/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/worker-in-safety-vest-using-technology-remote-serv.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Virtual & Remote Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    Enhygiene provides remote services to assist you, on either a scheduled and/or as-needed basis. Our
                    virtual health and safety services are always conducted by a certified industrial hygienist (CIH)
                    and certified safety professional (CSP) without the need for a site visit.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Employee Exposure Monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Indoor Air Quality (IAQ) Evaluations & Testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      PPE Assessments
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Job Hazard Analysis (JHA)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/compliance-assistance/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/workers-in-safety-gear-with-tablets-and-equipment.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Compliance Assistance & EHS</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's compliance assistance & EHS professionals will help your organization target work
                    practices and controls to reduce accidents, injuries, and productivity losses, and determine where
                    additional resources should be applied.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      COVID-19 safety and control plans
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Job safety analysis (JSA)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Respiratory protection program
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Hearing conservation program
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/contract-services/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/two-professionals-with-hard-hat-and-tablet-discuss.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Health & Safety Contract Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's certified industrial hygienist (CIH) and certified safety professional (CSP) will work
                    side-by-side with clients in their place of business to ensure compliance on every level.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Custom analysis and measurement of environmental hazards
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Development of policies and procedures to reduce workplace hazards
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      Auditing programs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/environmental-monitoring/detail" className="h-full">
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer opacity-100 translate-y-0 h-full flex flex-col"
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
                    Enhygiene's environmental monitoring professionals will help your organization ensure that potential
                    worksite pollutants do not exceed environmental quality standards and that established worksite
                    controls are being applied and are effective.
                  </p>
                  <ul className="space-y-2 text-sm flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Air quality assessments (e.g., ozone, NOx emissions, PM10)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Community noise assessments
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Soil and water sampling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
