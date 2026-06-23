// functions/api/stripe-webhook.js
// Stripe sends checkout.session.completed here after a successful payment.
//
// Required env vars: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
// Required KV binding: PET_KV
//
// Set this URL as the webhook endpoint in the Stripe Dashboard:
//   https://your-domain.com/api/stripe-webhook
// and select event: checkout.session.completed

export async function onRequestPost(context) {
  const { request, env } = context;
  const sig = request.headers.get("stripe-signature");
  const payload = await request.text();

  if (!env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const valid = await verifyStripeSignature(payload, sig, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(payload);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;
    const orderId = session.id;
    const authCode = crypto.randomUUID();
    const marketingOptIn = !!(session.consent && session.consent.promotions === "opt_in");

    const record = {
      email,
      stripeOrderId: orderId,
      authCode,
      purchasedAt: new Date().toISOString(),
      site: "pet-age-toolbox",
      priceLabel: session.metadata?.price_label || "unknown",
      priceUsd: session.metadata?.price_usd || "unknown",
      marketingOptIn,
      status: "active", // "active" | "revoked"
    };

    if (env.PET_KV) {
      // Primary record keyed by auth code (what the device stores)
      await env.PET_KV.put(`auth:${authCode}`, JSON.stringify(record));
      // Lookup index by email+order for "restore purchase" flow
      await env.PET_KV.put(`order:${email.toLowerCase()}:${orderId}`, authCode);
      // Marketing list membership (only if opted in)
      if (marketingOptIn) {
        await env.PET_KV.put(`subscriber:${email.toLowerCase()}`, JSON.stringify({ email, optedInAt: record.purchasedAt }));
      }
      await logAdminAction(env, "purchase_completed", { email, orderId, authCode });
    }

    // Send receipt email (placeholder — wire up your transactional email provider, e.g. Resend, Postmark, SES)
    // await sendReceiptEmail(env, email, { authCode, orderId, priceLabel: record.priceLabel });
  }

  return new Response("ok", { status: 200 });
}

async function verifyStripeSignature(payload, sigHeader, secret) {
  if (!sigHeader) return false;
  const parts = Object.fromEntries(sigHeader.split(",").map(p => p.split("=")));
  const signedPayload = `${parts.t}.${payload}`;
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signedPayload));
  const expected = [...new Uint8Array(sigBuffer)].map(b => b.toString(16).padStart(2, "0")).join("");
  return expected === parts.v1;
}

async function logAdminAction(env, action, details) {
  const entry = { action, details, at: new Date().toISOString() };
  const key = `log:${Date.now()}:${crypto.randomUUID()}`;
  await env.PET_KV.put(key, JSON.stringify(entry));
}
