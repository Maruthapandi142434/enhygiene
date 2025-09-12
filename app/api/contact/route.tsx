import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"   // <-- import nodemailer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, firstName, lastName, email, phone, notes } = body

    // Validate required fields
    if (!businessName || !firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log the form submission (in production, you'd send this via SMTP)
    console.log("Contact form submission:", {
      businessName,
      firstName,
      lastName,
      email,
      phone,
      notes,
      timestamp: new Date().toISOString(),
    })

 
    // Example with nodemailer:
    
    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // ⚠️ disables cert validation
  },
})


    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'jrfsd1@sixthstar.in', // Replace with your receiving email
      subject: `New Consultation Request from ${businessName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Contact:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    })
  

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
