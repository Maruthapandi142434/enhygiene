import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndoorAirQualityDetail() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/office-plant-indoor-air-quality-testing-environmen.jpg"
                alt="Indoor Air Quality Testing"
                className="w-full h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">2.Indoor Environment Quality (IEQ) Monitoring</h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             EnHygiene’s IEQ Specialists will help you to evaluate the following conditions inside a building that affect the health, comfort, and well-being of its occupants to solve building related issues. This will prevent sick building syndrome and improves occupational health, productivity, and comfort by ensuring a safe and pleasant indoor environment.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services offered include:</h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Hazardous Chemical Compounds</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Occupational Parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Dust Parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Microbiological</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Sound</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Moisture Content</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Illumination / Lighting </span>
              </li>
            </ul>

            <div className="flex gap-4">
              <Link href="/contact">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">Schedule Consultation</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="px-8 py-3 bg-transparent">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
