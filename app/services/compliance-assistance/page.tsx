"use client"

import { Phone, Mail, FileCheck, AlertTriangle, BookOpen, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"

export default function ComplianceAssistancePage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance">Compliance Assistance & EHS</h1>
            <p className="text-xl mb-8 text-balance leading-relaxed">
              Expert guidance to ensure your organization meets all regulatory requirements and maintains the highest
              environmental health and safety standards.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Compliance & EHS Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help organizations navigate complex regulatory requirements and build robust environmental health and
              safety programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <FileCheck className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive compliance assessments and ongoing support for OSHA, EPA, and other regulatory
                requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  OSHA compliance audits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  EPA regulatory support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Documentation review
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <AlertTriangle className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
              <p className="text-gray-600 mb-4">
                Systematic identification and evaluation of workplace hazards and environmental risks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Hazard identification
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Risk prioritization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mitigation strategies
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Program Development</h3>
              <p className="text-gray-600 mb-4">
                Custom EHS program development and implementation tailored to your industry and operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Policy development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Training programs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance metrics
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Compliance Support?</h2>
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
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
