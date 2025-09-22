"use client"

import Image from "next/image"
import Layout from "@/components/layout"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  // Scroll-based zoom state
  // Use a non-transformed wrapper for measurements to avoid feedback loops
  const imgMeasureRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const isActiveRef = useRef(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setScale(1)
      return
    }

    const compute = () => {
      const el = imgMeasureRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1

      // Use the element center for smoother mapping
      const centerY = rect.top + rect.height / 2
      const start = vh * 0.95 // start zoom when center is near bottom
      const end = vh * 0.15 // complete zoom when center is near top
      const range = Math.max(start - end, 1)
      const raw = (start - centerY) / range
      const progress = Math.min(Math.max(raw, 0), 1)

      // Scale from 0.96 to 1.1 for a subtle effect
      const nextScale = 0.96 + progress * 0.14
      setScale(nextScale)
    }

    const schedule = () => {
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        compute()
      })
    }

    const handleScroll = () => {
      if (!isActiveRef.current) return
      schedule()
    }

    // Run once and attach listeners
    compute()

    // Observe visibility to avoid running when far off-screen
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isActiveRef.current = e.isIntersecting
          if (e.isIntersecting) schedule()
        })
      },
      { root: null, rootMargin: "200px 0px", threshold: [0, 0.1, 0.5, 1] }
    )
    if (imgMeasureRef.current) io.observe(imgMeasureRef.current)

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", compute)
      if (io && imgMeasureRef.current) io.unobserve(imgMeasureRef.current)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])
  return (
    <Layout>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 pb-2 text-center md:text-left">
            About EnHygiene
          </h2>
          <hr />
          <p className="text-lg md:text-2xl text-gray-600 mb-4 leading-relaxed pt-4 text-justify">
            We are professionals trained to identify and mitigate workplace hazards that can lead
            to health issues. Our goal is to create a safe, healthy, and productive workplaces to
            protect employees by applying scientific principles and methodologies to assess
            workplace environments, ensuring compliance with health regulations and industry
            standards.
          </p>

          <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed text-justify">
            <strong>Rajkumar Jayabalan</strong>, EnHygiene’s Principal Consultant, has over{" "}
            <strong>25 years of experience</strong> in Environmental Health and Industrial Hygiene.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <p className="text-base md:text-xl text-gray-600 mb-4 leading-relaxed text-justify">
                Raj is a <strong>Certified Industrial Hygienist (CIH)</strong> and holds a Masters
                of Science in Industrial Hygiene and Safety. Over his career, he has successfully
                led projects across diverse industries, ensuring compliance with health regulations
                and fostering safe, sustainable workplace practices.
              </p>

              <p className="text-base md:text-xl text-gray-600 mb-4 leading-relaxed text-justify">
                Recognized as a <strong>Subject Matter Expert (SME)</strong> in Industrial Hygiene
                Services, Raj specializes in occupational exposure assessment, risk management,
                workplace monitoring, and the development of tailored health and safety programs.
              </p>

              <ul className="text-base md:text-xl list-none space-y-3 text-gray-700">
                <li>
                  ➜ Assisting companies in developing new products and processes that emphasize{" "}
                  <strong>environmental sustainability</strong> and <strong>occupational health</strong>.
                </li>
                <li>➜ Investigating <strong>indoor environmental quality concerns</strong>.</li>
                <li>
                  ➜ Evaluating chemical and physical agents to determine potential
                  <strong> health risks</strong>.
                </li>
                <li>➜ Implementing <strong>prevention strategies</strong> for long-term workplace safety.</li>
              </ul>

              <p className="text-base md:text-xl text-gray-600 mt-6 leading-relaxed text-justify">
                At EnHygiene, we continues to drive excellence in Industrial Hygiene Services,
                mentoring teams, advising organizations, and advancing best practices in
                occupational health and environmental stewardship.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end p-7 order-1 md:order-2">
              {/* Non-transformed wrapper for measuring position */}
              <div ref={imgMeasureRef} className="w-full max-w-2xl">
                {/* Transformed inner container */}
                <div
                  className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                    transition: "transform 0.1s ease-out",
                    willChange: "transform",
                  }}
                >
                  <Image
                    src="/about.jpeg"
                    alt="Rajkumar Jayabalan - Principal Consultant"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
