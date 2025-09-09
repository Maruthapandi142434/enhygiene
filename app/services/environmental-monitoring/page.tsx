"use client"

import { Phone, Mail, Activity, BarChart3, Thermometer, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"

export default function EnvironmentalMonitoringPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">Environmental Monitoring</h1>
            <p className="text-xl mb-8 text-balance leading-relaxed">
              Comprehensive environmental monitoring services to track, analyze, and report on workplace and
              environmental conditions.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Environmental Monitoring Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide continuous monitoring and assessment of environmental conditions to ensure compliance and
              protect health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Activity className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Continuous monitoring systems for immediate detection of environmental changes and hazards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 monitoring systems
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Automated alerts
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Remote data access
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <BarChart3 className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Analysis & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of environmental data with detailed reporting and trend analysis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Statistical analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Trend identification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Compliance reporting
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Thermometer className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-Parameter Testing</h3>
              <p className="text-gray-600 mb-4">
                Monitoring of various environmental parameters including air quality, noise, temperature, and more.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Air quality monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Noise level assessment
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Temperature & humidity
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Environmental Monitoring?</h2>
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
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
