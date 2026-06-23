// functions/api/create-checkout-session.js
// POST { priceLabel, lang } -> { url }
//
// Required environment bindings (set in Cloudflare Pages > Settings > Environment variables):
//   STRIPE_SECRET_KEY      - your Stripe secret key (sk_live_... / sk_test_...)
//   SITE_URL                - e.g. https://your-domain.com (no trailing slash)
// Required KV namespace binding:
//   PET_KV                  - Workers KV namespace used for everything in this project
//
// This reads the price schedule from KV key "pricing_schedule" if the admin panel has
// saved one there, otherwise falls back to /pricing-schedule.json bundled with the site.

export async function onRequestPost(context) {
  const { request, env } = context;

  let body = {};
  try { body = await request.json(); } catch (_) {}

  if (!env.STRIPE_SECRET_KEY) {
    return json({ error: "Stripe is not configured yet on this deployment." }, 500);
  }

  // Resolve which Stripe Price ID is currently active.
  let schedule;
  try {
    const stored = env.PET_KV ? await env.PET_KV.get("pricing_schedule") : null;
    schedule = stored ? JSON.parse(stored) : await (await fetch(new URL("/pricing-schedule.json", request.url))).json();
  } catch (e) {
    return json({ error: "Could not resolve pricing schedule." }, 500);
  }

  const now = new Date();
  const active = schedule.schedule.find(s => {
    const start = new Date(s.startsAt);
    const end = new Date(start.getTime() + s.durationDays * 86400000);
    return now >= start && now < end;
  }) || schedule.schedule[schedule.schedule.length - 1];

  const siteUrl = env.SITE_URL || new URL(request.url).origin;

  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append("line_items[0][price]", active.stripePriceId);
  params.append("line_items[0][quantity]", "1");
  params.append("success_url", `${siteUrl}/?purchase=success&session_id={CHECKOUT_SESSION_ID}`);
  params.append("cancel_url", `${siteUrl}/?purchase=cancelled`);
  params.append("customer_email_collection", "required"); // Stripe always requires email when billing_address_collection or via customer creation below
  params.append("billing_address_collection", "auto");
  params.append("consent_collection[promotions]", "auto"); // shows an unchecked, optional marketing opt-in checkbox
  params.append("locale", body.lang === "zh-CN" ? "zh" : body.lang === "zh-TW" ? "zh-TW" : "en");
  params.append("metadata[price_label]", active.label);
  params.append("metadata[price_usd]", String(active.priceUsd));
  params.append("metadata[site]", "pet-age-toolbox");

  const resp = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await resp.json();
  if (!resp.ok) {
    return json({ error: data.error?.message || "Stripe error" }, 400);
  }

  return json({ url: data.url });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
