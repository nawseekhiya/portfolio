import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = await request.json()

    // Here we would typically send an email or save to DB
    console.log("Contact form submission:", body)

    return NextResponse.json({ success: true, message: "Message sent successfully" })
}
