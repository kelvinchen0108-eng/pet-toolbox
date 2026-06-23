# Pet Age Toolbox — build notes & deployment guide

## What's actually in this folder

```
public/                  → the static site (deploy this as your Cloudflare Pages "build output")
  index.html             → all free-tier tools, 3-language UI, ad zones, paywall/restore modals
  app.js                 → i18n strings (en/zh-CN/zh-TW) + every calculator's logic + ads/paywall wiring
  styles.css             → full visual design (moss/sand/coral palette, Fraunces+Inter+JetBrains Mono)
  data/data.json         → embedded dataset: age curves, toxic foods/plants, vaccine schedule, import rules
  ads-config.json        → default ad-slot config (admin panel can override a copy in KV)
  pricing-schedule.json  → default early-bird/standard price cycle (admin panel can override a copy in KV)
  admin/index.html       → admin dashboard UI (served under /admin, must sit behind Cloudflare Access — see below)

functions/               → Cloudflare Pages Functions (your backend, no separate server needed)
  api/create-checkout-session.js  → builds a Stripe Checkout session using the active price
  api/stripe-webhook.js           → on successful payment: issues a permanent auth code into KV
  api/restore-purchase.js         → email + order number → auth code, for cross-device restore
  admin/_middleware.js            → verifies Cloudflare Access JWT on everything under /admin/*
  admin/api.js                    → admin actions: revoke auth, view logs, export subscribers, edit ads/price config
```

## What is genuinely done and working

- All 7 free-tier tools from the spec, in three languages with correct UI strings: age translator (dog by size class + cat, with up to 3 free batch pets), calorie calculator, food/plant/household toxicity checker, vaccine + deworming schedule, monthly cost estimator, basic import-rule lookup for 5 countries.
- The "early bird ⇄ standard price" cycling logic, read from `pricing-schedule.json` (or its KV override), with old purchasers' price locked at their `priceLabel`/`priceUsd` stored at purchase time (never re-derived from the current schedule).
- The ad system's plumbing: 4 ad-slot zones, a marquee, mutual exclusivity between Google Vignette and the private interstitial, frequency capping via localStorage, and **complete removal of every ad zone the moment `petToolbox_premium` is set** — this is enforced in `app.js`'s `renderAds()`/CSS and is the one rule everything else depends on.
- The admin panel: ads/pricing JSON editors, auth lookup + one-click revoke, subscriber CSV export, and an operations log — all backed by Workers KV, all protected by Cloudflare Access.
- Stripe checkout session creation with a **default-unchecked** marketing consent checkbox (`consent_collection[promotions]`), satisfying the spec's "don't auto-subscribe people" requirement.

## What is stubbed and needs real work before launch

Being direct about this rather than letting it look more finished than it is:

1. **Ad network tags.** `renderAds()` currently always shows the private creative as a safe fallback. You still need to paste in your real AdSense/Ezoic/PropellerAds snippets and the actual rotation logic for "show whichever network currently pays best" — that requires live RPM data feeding back into a rotation weight, which none of these networks expose for free, so most sites resolve this with simple time-sliced rotation rather than true real-time optimization.
2. **PDF export** (vaccine plan, travel compliance report) **and Excel export** (annual cost report) — section nine of the spec. These aren't implemented. They're a meaningfully sized feature on their own (PDF/XLSX generation either client-side with a library or server-side via a Worker) and I'd build them as a follow-up rather than guess at a half-working version here.
3. **Transactional email** (purchase receipt, restore-purchase link) — `stripe-webhook.js` has a commented-out call where you'd wire in Resend/Postmark/SES. Right now a successful payment issues the auth code into KV correctly, but no email actually goes out yet.
4. **Cloud-saved pet profiles** (premium, point 9.2) — the free tier's batch list is in-memory only (per spec, behind a page reload it resets). Persisting it for premium users needs a small KV-backed save/load endpoint, similar in shape to `admin/api.js`.
5. The three import-rule entries I included (US/UK/Australia/Japan/EU) are illustrative starting data, not a maintained legal database — flag clearly to users that they must confirm with the official authority, which the UI already does.

## Deployment steps (things only you can do, since they need your accounts)

1. **Cloudflare Pages**: create a project, connect this repo (or drag-and-drop `public/` + `functions/`), build command: none needed (static + Functions).
2. **KV namespace**: create one (e.g. `pet-toolbox-kv`) in Cloudflare dashboard → bind it to the Pages project as `PET_KV`.
3. **Stripe**: create two Prices ($4.99 and $2.99 one-time) on one Product → put their real `price_...` IDs into `pricing-schedule.json` (replacing the `price_REPLACE_*` placeholders) → set env vars `STRIPE_SECRET_KEY` and (after adding the webhook below) `STRIPE_WEBHOOK_SECRET`.
4. **Stripe webhook**: in the Stripe dashboard, add endpoint `https://your-domain.com/api/stripe-webhook`, event `checkout.session.completed`.
5. **Cloudflare Access** (for `/admin`): Zero Trust → Access → Applications → self-hosted app on path `/admin`, policy = your email only. Copy the Application's "Audience (AUD) tag" and your team domain into env vars `CF_ACCESS_AUD` and `CF_ACCESS_TEAM_DOMAIN`.
6. Set `SITE_URL` env var to your final domain (no trailing slash).
7. Replace placeholder image paths in `ads-config.json` (`/assets/ads/placeholder-*.jpg`) with real creative, and the AdSense `ca-pub-XXXXXXXXXXXXXXXX` client ID.
8. Update the two footer links in `index.html` to your real student-toolbox and used-car-toolbox URLs.

## Local testing

```
npm install -g wrangler
wrangler pages dev public --kv PET_KV
```
