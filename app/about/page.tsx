"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"
import Layout from "@/components/layout"

export default function AboutPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Enhygiene</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading environmental health and safety consulting firm dedicated to protecting workplaces and communities
              through expert industrial hygiene services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Enhygiene, we are committed to creating safer, healthier work environments through comprehensive
                industrial hygiene and environmental health services. Our certified professionals bring decades of
                experience in identifying, evaluating, and controlling occupational and environmental health hazards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every worker deserves a safe and healthy workplace, and every organization deserves
                expert guidance in maintaining regulatory compliance while protecting their most valuable asset - their
                people.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Certified Experts</h3>
                <p className="text-sm text-gray-600">CIH and CSP certified professionals</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">500+ Clients</h3>
                <p className="text-sm text-gray-600">Trusted by organizations nationwide</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">15+ Years</h3>
                <p className="text-sm text-gray-600">Experience in industrial hygiene</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">100% Compliant</h3>
                <p className="text-sm text-gray-600">Regulatory compliance guarantee</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in environmental health and
              safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                We prioritize the health and safety of workers above all else, ensuring comprehensive protection through
                rigorous assessment and control measures.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional excellence through continuous education,
                certification, and adherence to industry best practices.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work collaboratively with our clients as trusted partners, providing tailored solutions that meet
                their unique needs and challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our certified professionals help you create a safer, healthier workplace for your team.
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium rounded-md">
            CALL OR TEXT (612) 296-2458
          </Button>
        </div>
      </section>
    </Layout>
  )
}
