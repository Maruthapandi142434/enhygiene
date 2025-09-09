"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Phone, Mail, Shield, Microscope, Wind, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function IndoorAirQualityPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Enhygiene</h1>
                <p className="text-sm text-gray-600 uppercase tracking-wide">Industrial Hygiene</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-2">
                      <Link href="/services/virtual-remote" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                        Virtual & Remote Services
                      </Link>
                      <Link
                        href="/services/industrial-hygiene"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Industrial Hygiene Services
                      </Link>
                      <Link
                        href="/services/indoor-air-quality"
                        className="block px-4 py-2 text-teal-600 bg-teal-50 font-medium"
                      >
                        Indoor Air Quality (IAQ)
                      </Link>
                      <Link
                        href="/services/contract-services"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Contract Services
                      </Link>
                      <Link
                        href="/services/compliance-assistance"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Compliance Assistance & EHS
                      </Link>
                      <Link
                        href="/services/environmental-monitoring"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Environmental Monitoring
                      </Link>
                      <Link
                        href="/services/radiation-surveys"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Radiation Surveys & Assessments
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium">
                About
              </Link>

              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium">
                SCHEDULE A CONSULTATION
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">Indoor Air Quality (IAQ) Testing</h1>
            <p className="text-xl mb-8 text-balance leading-relaxed">
              Comprehensive indoor air quality assessments to ensure healthy, safe environments for your employees and
              occupants.
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium">
              CALL OR TEXT (612) 296-2458
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IAQ Testing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive indoor air quality testing to identify contaminants and ensure healthy indoor
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Wind className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Air Sampling & Analysis</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive air sampling for various contaminants including mold, bacteria, chemicals, and
                particulates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mold spore testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  VOC analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Particulate matter assessment
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Microscope className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Microbial Testing</h3>
              <p className="text-gray-600 mb-4">
                Detection and identification of harmful microorganisms in indoor environments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Bacterial contamination
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fungal analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Allergen identification
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Shield className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">HVAC System Evaluation</h3>
              <p className="text-gray-600 mb-4">
                Assessment of ventilation systems and their impact on indoor air quality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Airflow measurements
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Filter efficiency testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Duct contamination assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Improve Your Indoor Air Quality?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium">
                <Phone className="w-5 h-5 mr-2" />
                Call (612) 296-2458
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg font-medium bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
