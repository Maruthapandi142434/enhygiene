"use client"

import Image from "next/image"
import Layout from "@/components/layout"

export default function AboutPage() {
  return (
    <Layout>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 pb-2 text-center md:text-left">
            About EnHygiene
          </h2>
          <hr />
          <p className="text-base md:text-xl text-gray-600 mb-4 leading-relaxed pt-4">
            We are professionals trained to identify and mitigate workplace hazards that can lead
            to health issues. Our goal is to create a safe, healthy, and productive workplaces to
            protect employees by applying scientific principles and methodologies to assess
            workplace environments, ensuring compliance with health regulations and industry
            standards.
          </p>

          <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed">
            <strong>Rajkumar Jayabalan</strong>, EnHygiene’s Principal Consultant, has over{" "}
            <strong>25 years of experience</strong> in Environmental Health and Industrial Hygiene.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <p className="text-base md:text-xl text-gray-600 mb-4 leading-relaxed">
                Raj is a <strong>Certified Industrial Hygienist (CIH)</strong> and holds a Masters
                of Science in Industrial Hygiene and Safety. Over his career, he has successfully
                led projects across diverse industries, ensuring compliance with health regulations
                and fostering safe, sustainable workplace practices.
              </p>

              <p className="text-base md:text-xl text-gray-600 mb-4 leading-relaxed">
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

              <p className="text-base md:text-xl text-gray-600 mt-6 leading-relaxed">
                At EnHygiene, Raj continues to drive excellence in Industrial Hygiene Services,
                mentoring teams, advising organizations, and advancing best practices in
                occupational health and environmental stewardship.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end p-7 order-1 md:order-2">
              <div className="relative w-full max-w-2xl h-[600px] rounded-2xl overflow-hidden shadow-xl">
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
      </section>
    </Layout>
  )
}
