"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Activity, Wind, Headphones, Cast as Mask } from "lucide-react"
import Layout from "@/components/layout"

export default function IndustrialHygieneServicesPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Industrial Hygiene Services</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Certified industrial hygienists (CIH) helping organizations identify, evaluate, and control occupational
              health hazards to protect and enhance employee health and safety.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-md">
              Request Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Industrial Hygiene Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certified professionals provide expert assessment and control of workplace hazards to ensure
              regulatory compliance and employee safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">COVID-19 Cleaning Verification</h3>
              <p className="text-gray-600">
                Surface testing and verification protocols to ensure effective cleaning and disinfection procedures.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Exposure Monitoring</h3>
              <p className="text-gray-600">
                Comprehensive monitoring of workplace exposures to chemicals, noise, and other occupational hazards.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Air Sampling & Analysis</h3>
              <p className="text-gray-600">
                Professional air quality testing and analysis to identify airborne contaminants and exposure risks.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Noise Dosimetry & Surveys</h3>
              <p className="text-gray-600">
                Comprehensive noise assessments and hearing conservation program development and implementation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Mask className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respirator Fit Testing</h3>
              <p className="text-gray-600">
                Professional fit testing services to ensure proper respiratory protection for your workforce.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hazard Assessment & Control</h3>
              <p className="text-gray-600">
                Systematic identification and evaluation of workplace hazards with practical control recommendations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Protect Your Workforce Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with our certified industrial hygienists to create a safer, healthier workplace for your employees.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-md">
            CALL OR TEXT (612) 296-2458
          </Button>
        </div>
      </section>
    </Layout>
  )
}
