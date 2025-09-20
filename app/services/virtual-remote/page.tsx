"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Clock, CheckCircle } from "lucide-react"
import Layout from "@/components/layout"

export default function VirtualRemoteServicesPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Virtual & Remote Services</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional health and safety services delivered remotely by certified industrial hygienists (CIH) and
              certified safety professionals (CSP) without the need for on-site visits.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-md">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Remote Expertise, Real Results</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our virtual services combine cutting-edge technology with decades of experience to deliver comprehensive
                health and safety solutions from anywhere in the world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                  <span className="font-medium">Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-purple-600" />
                  <span className="font-medium">Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <span className="font-medium">Expert Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                  <span className="font-medium">Proven Results</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Virtual Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Cost-effective alternative to on-site visits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Immediate access to certified professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Flexible scheduling around your operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                  <span>Comprehensive documentation and reporting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Exposure Monitoring</h3>
              <p className="text-gray-600">
                Remote guidance for workplace exposure assessments and monitoring protocols.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Indoor Air Quality Evaluations</h3>
              <p className="text-gray-600">
                Virtual IAQ assessments and testing guidance for optimal indoor environments.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PPE Assessments</h3>
              <p className="text-gray-600">
                Remote evaluation of personal protective equipment needs and effectiveness.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Hazard Analysis</h3>
              <p className="text-gray-600">Comprehensive remote JHA development and workplace safety assessments.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect with our certified professionals today and discover how virtual services can meet your health and
            safety needs.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-md">
            CALL OR WHATSAPP
          </Button>
        </div>
      </section>

    </Layout>
  )
}
