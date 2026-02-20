import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_SUBMISSIONS = 3;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();

    // Clean old entries
    for (const [key, timestamp] of recentSubmissions) {
      if (now - timestamp > RATE_LIMIT_WINDOW) recentSubmissions.delete(key);
    }

    // Rate limit check
    const submissions = [...recentSubmissions.entries()].filter(
      ([key]) => key.startsWith(ip)
    ).length;
    if (submissions >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    recentSubmissions.set(`${ip}:${now}`, now);

    const { name, email, message, budget } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize subject line (prevent header injection)
    const safeName = name.replace(/[\r\n]/g, "").slice(0, 100);
    const safeBudget = budget?.replace(/[\r\n]/g, "").slice(0, 50);

    const smtpUser = process.env.SMTP_USER?.trim();
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASS?.trim(),
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      replyTo: email,
      to: smtpUser,
      subject: `New inquiry from ${safeName}${safeBudget ? ` — ${safeBudget}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget || "Not specified"}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
