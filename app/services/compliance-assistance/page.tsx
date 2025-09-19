"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Layout from "@/components/layout"
import Reveal from "@/components/reveal"

export default function ComplianceAssistancePage() {
  return (
    <Layout>

      {/* Hero Section: Image left, content right */}
      <section className="pt-20 md:pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image */}
            <Reveal as="div" delayMs={0} className="relative h-96 sm:h-[520px] lg:h-[640px] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Compliance and EHS documentation review"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </Reveal>

            {/* Right: Content */}
            <Reveal as="div" delayMs={140} className="self-start">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 underline underline-offset-8 decoration-2 leading-tight">
                Compliance Assistance & EHS
              </h1>
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl">
                <p>
                  Navigating complex occupational health and safety regulations can be challenging. EnHygiene’s
                  professionals will assist your organization in complying with Indian laws such as the Factories Act and
                  Pollution Control Board guidelines, as well as relevant international standards, facilitating audit
                  readiness and minimizing legal risks.
                </p>
                <p>
                  EnHygiene’s certified professionals will help your organization to develop the control strategy by applying
                  the hierarchy of controls including elimination, substitution, engineering controls, administrative controls,
                  and personal protective equipment (PPE) to mitigate or eliminate identified hazards. Our services include
                  the development of the following:
                </p>
                <h3 className="text-lg md:text-xl font-semibold mt-1">Programs we develop include:</h3>
                <ul className="space-y-2 mt-1">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Compliance register</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Industrial Hygiene Program</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Hearing conservation program</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Respiratory protection program</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Chemical management program</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>IEQ Management program</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-1 text-gray-800" /> <span>Other programs based on identified hazards</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </Layout>
  )
}

