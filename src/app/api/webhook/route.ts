import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import Stripe from "stripe";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!.trim()
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleCheckoutComplete(session);
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.error(
        "Payment failed:",
        paymentIntent.id,
        paymentIntent.last_payment_error?.message
      );
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const customerEmail = session.customer_details?.email;
  const amountPaid = session.amount_total
    ? `$${(session.amount_total / 100).toFixed(2)}`
    : "Unknown";

  console.log(
    `Payment received: ${amountPaid} from ${customerEmail || "unknown"}`
  );

  // Notify yourself of the new order
  try {
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
      to: smtpUser,
      subject: `New order: ${amountPaid} from ${customerEmail || "unknown"}`,
      html: `
        <h2>New Deploy Janitor Order</h2>
        <p><strong>Amount:</strong> ${amountPaid}</p>
        <p><strong>Customer Email:</strong> ${customerEmail || "Not provided"}</p>
        <p><strong>Session ID:</strong> ${session.id}</p>
        <p><strong>Payment Status:</strong> ${session.payment_status}</p>
        <hr />
        <p>Log in to <a href="https://dashboard.stripe.com">Stripe Dashboard</a> for full details.</p>
      `,
    });
  } catch (err) {
    console.error("Failed to send order notification email:", err);
  }
}
