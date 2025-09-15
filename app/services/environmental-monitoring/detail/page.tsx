import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnvironmentalMonitoringDetail() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/industrial-environmental-monitoring-equipment-and-.jpg"
                alt="Environmental Monitoring"
                className="w-full h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Environmental Monitoring</h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             EnHygiene’s environmental professionals provide expert measurement, reporting, and compliance assurance that help your company control pollution, adhere to legal standards, protect employees and the community, and build trust with stakeholders.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Services offered include:</h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Water and waste water sampling</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Ambient noise assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Ambient air quality assessments(Volatile Organic Compounds, NOx emissions, and particulate matter (PM10, PM2.5))</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-3 mt-1">→</span>
                <span className="text-gray-700">Soil sampling</span>
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
