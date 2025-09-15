import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndustrialHygieneDetail() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/industrial-worker-with-safety-equipment-and-hard-h.jpg"
                alt="Industrial Hygiene Services"
                className="w-full h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Industrial Hygiene Services</h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EnHygiene’s Certified Industrial hygienists(CIH) will help you to identify and mitigate workplace hazards that can lead to health issues by  applying scientific principles and methodologies to assess workplace environments, ensuring compliance with health regulations and industry standards. Their expertise ranges across various fields, including chemical exposure, noise control, ergonomic assessments, and indoor air quality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services offered include:</h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Health Risk Assessment (HRA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Employee Exposure Monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Air Contaminant Monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Noise and Vibration Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Heat stress Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Ergonomic Assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Respiratory Fit Testing</span>
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
