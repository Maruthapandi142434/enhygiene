"use client"

import type React from "react"

import { useState } from "react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          businessName: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          notes: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.businessName && formData.firstName && formData.lastName && formData.email

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Schedule a Consultation</h1>
            <p className="text-xl text-teal-100 text-balance">
              Get expert environmental and Industrial hygiene tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="space-y-6">
                
                  <p className="text-gray-600 text-justify">
                    We are based in the Chennai metropolitan area and we deliver industrial hygiene consulting services to clients throughout
                    the state of Tamilnadu.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone/Text</p>
                        <p className="text-gray-600">(+91) 95662 32442</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✉️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">raj@enhygiene.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Service Area</p>
                        <p className="text-gray-600">Chennai, INDIA
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <h3 className="font-semibold text-teal-900 mb-2">Need Immediate Assistance?</h3>
                    <p className="text-teal-700 mb-3">
                      Call or Whatsapp: <strong>(+91) 95662 32442</strong>
                    </p>
                    <p className="text-teal-700">
                      Or send an email to: <strong>raj@enhygiene.com</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Your Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Business Name */}
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                          Business Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="businessName"
                          name="businessName"
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Enter your business name"
                        />
                      </div>

                      {/* Contact Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Input
                              name="firstName"
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="First Name"
                            />
                          </div>
                          <div>
                            <Input
                              name="lastName"
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>

                      {/* Notes */}
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                          Notes
                        </label>
                        <Textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or consultation needs..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        {isSubmitting ? "Sending..." : "Send"}
                      </Button>

                      {/* Status Messages */}
                      {submitStatus === "success" && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-green-800">
                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                          </p>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-800">
                            Sorry, there was an error sending your message. Please try again or contact us directly.
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
