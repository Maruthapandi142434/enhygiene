"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Layout from "@/components/layout"

export default function ServicesPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive environmental health and safety solutions tailored to protect your workforce and ensure
              regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industrial Hygiene Services */}
            <Link href="/services/industrial-hygiene/detail">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/industrial-worker-with-safety-equipment-and-hard-h.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">Industrial Hygiene Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's certified industrial hygienist (CIH) will help your organization identify, evaluate, and control occupational health hazards to protect and enhance the health and safety of your employees.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• COVID-19 cleaning verification surface testing</li>
                    <li>• Employee exposure monitoring</li>
                    <li>• Air sampling and analysis</li>
                    <li>• Noise dosimetry and surveys</li>
                    <li>• Respirator fit testing</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* NORM Services */}
            <Link href="/services/radiation-surveys">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/industrial-environmental-monitoring-equipment-and-.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">NORM Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Specialized surveys and assessments for Naturally Occurring Radioactive Material (NORM), including screening, risk evaluation, and compliance guidance.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Site surveys and screening</li>
                    <li>• Exposure assessment</li>
                    <li>• Control strategy recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Indoor Environment Quality (IEQ) Monitoring */}
            <Link href="/services/indoor-air-quality/detail">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/office-plant-indoor-air-quality-testing-environmen.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">Indoor Environment Quality (IEQ) Monitoring</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's IAQ professionals will help your organization identify indoor environmental contaminants and their sources, resolve building-related health issues, and prevent future occurrences.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Building evaluations</li>
                    <li>• USGBC LEED indoor air quality testing</li>
                    <li>• Mold and water intrusion investigations</li>
                    <li>• Volatile organic compounds (VOCs) testing and analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            

            {/* Industrial Hygiene Contract Services */}
            <Link href="/services/contract-services/detail">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/two-professionals-with-hard-hat-and-tablet-discuss.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">Industrial Hygiene Contract Services</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's certified industrial hygienist (CIH) and certified safety professional (CSP) will work side-by-side with clients in their place of business to ensure compliance on every level.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom analysis and measurement of environmental hazards</li>
                    <li>• Development of policies and procedures to reduce workplace hazards</li>
                    <li>• Auditing programs</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Compliance Assistance & Control Strategy Development */}
            <Link href="/services/compliance-assistance/detail">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/workers-in-safety-gear-with-tablets-and-equipment.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">Compliance Assistance & Control Strategy Development</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's compliance assistance & EHS professionals will help your organization target work practices and controls to reduce accidents, injuries, and productivity losses, and determine where additional resources should be applied.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• COVID-19 safety and control plans</li>
                    <li>• Job safety analysis (JSA)</li>
                    <li>• Respiratory protection program</li>
                    <li>• Hearing conservation program</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Environmental Monitoring */}
            <Link href="/services/environmental-monitoring/detail">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('/industrial-environmental-monitoring-equipment-and-.jpg')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">Environmental Monitoring</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enhygiene's environmental monitoring professionals will help your organization ensure that potential worksite pollutants do not exceed environmental quality standards and that established worksite controls are being applied and are effective.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Air quality assessments (e.g., ozone, NOx emissions, PM10)</li>
                    <li>• Community noise assessments</li>
                    <li>• Soil and water sampling</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our certified professionals today to discuss your environmental health and safety needs.
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium rounded-md">
            CALL OR TEXT (612) 296-2458
          </Button>
        </div>
      </section>

    </Layout>
  )
}
