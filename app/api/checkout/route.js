import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "101 Old Hints That Still Work - PDF" },
        unit_amount: 700,
      },
      quantity: 1,
    }],
    mode: "payment",
    success_url: "https://oldhint.com/ebook/success",
    cancel_url: "https://oldhint.com/ebook",
  });
  return Response.json({ url: session.url });
}
