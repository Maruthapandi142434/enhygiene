"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContractServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 mt-20 overflow-hidden"
        style={{
          background: "#0d9488",
          minHeight: "400px",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="text-5xl font-bold mb-6 text-balance"
              style={{
                color: "#ffffff",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Contract Services
            </h1>
            <p
              className="text-xl mb-8 text-balance leading-relaxed"
              style={{
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Flexible contract solutions for ongoing industrial hygiene and environmental health support tailored to
              your organization's needs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Contract Service Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible contract arrangements to provide ongoing support for your industrial hygiene and safety
              programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">On-Site Support</h3>
              <p className="text-gray-600 mb-4">
                Dedicated industrial hygienist support at your facility on a regular schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Weekly/monthly visits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Routine monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Staff training
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Retainer Services</h3>
              <p className="text-gray-600 mb-4">
                Priority access to our services with guaranteed response times and reduced rates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority scheduling
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Discounted rates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Emergency response
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Management</h3>
              <p className="text-gray-600 mb-4">Complete management of your industrial hygiene and safety programs.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Program development
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Compliance tracking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  Documentation management
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Discuss Contract Options?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium">
                📞 Call (612) 296-2458
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg font-medium bg-transparent"
              >
                ✉️ Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
