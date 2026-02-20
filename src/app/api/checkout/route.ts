import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();

    const priceMap: Record<string, string | undefined> = {
      starter: process.env.STRIPE_PRICE_ID_STARTER,
      professional: process.env.STRIPE_PRICE_ID_PROFESSIONAL,
    };

    const stripePriceId = priceMap[priceId];
    if (!stripePriceId) {
      return NextResponse.json({ error: "Invalid price tier" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: stripePriceId, quantity: 1 }],
      allow_promotion_codes: true,
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
