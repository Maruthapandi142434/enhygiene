import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0260a8] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Image
                  src="/final--enhygine--logo.png"
                  alt="Enhygiene Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </div>
             
            </Link>
            <p className="text-gray-400 leading-relaxed text-justify">
            Environmental and industrial hygiene solutions specialised in assessing, monitoring, and controlling workplace & environmental hazards.
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
                  Indoor Environment Quality (IEQ) Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/radiation-surveys"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  NORM Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance-assistance"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Compliance Assistance & Control Strategy Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-services"
                  className="hover:text-white transition-colors"
                  style={{ color: "#e5e7eb" }}
                >
                  Industrial Hygiene Contract Services
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
              
             
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2" style={{ color: "#e5e7eb" }}>
              <li>(+91) 95662 32442</li>
              <li>raj@enhygiene.com</li>
              <li>Chennai, IN</li>
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
          <p>&copy; 2025 Enhygiene Consultants private limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
