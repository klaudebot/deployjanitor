import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PRICE_MAP: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_ID_STARTER,
  professional: process.env.STRIPE_PRICE_ID_PROFESSIONAL,
};

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    const stripePriceId = PRICE_MAP[priceId];
    if (!stripePriceId) {
      return NextResponse.json({ error: "Invalid price tier" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: stripePriceId, quantity: 1 }],
      success_url: `${baseUrl}/?checkout=success`,
      cancel_url: `${baseUrl}/?checkout=canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
