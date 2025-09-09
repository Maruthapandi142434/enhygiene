"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
