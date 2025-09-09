import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "#0d9488",
                  color: "#ffffff",
                }}
              >
                <div className="font-bold text-sm">E</div>
              </div>
              <div>
                <div className="text-xl font-bold">Enhygiene</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Environmental Health & Safety</div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Environmental Health & Safety Solutions specializing in occupational and environmental health hazards.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/industrial-hygiene"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Industrial Hygiene Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/indoor-air-quality"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Indoor Air Quality Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/virtual-remote"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Virtual & Remote Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/environmental-monitoring"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Environmental Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-services"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Contract Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance-assistance"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Compliance Assistance & EHS
                </Link>
              </li>
              <li>
                <Link
                  href="/services/radiation-surveys"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Radiation Surveys & Assessments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors" style={{ color: "#e5e7eb" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors" style={{ color: "#e5e7eb" }}>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors" style={{ color: "#e5e7eb" }}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors" style={{ color: "#e5e7eb" }}>
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2" style={{ color: "#e5e7eb" }}>
              <li>(612) 296-2458</li>
              <li>caleb@Enhygieneconsulting.com</li>
              <li>Minneapolis, MN</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Enhygiene Environmental Health & Safety. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
