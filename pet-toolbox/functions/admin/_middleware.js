// functions/admin/_middleware.js
//
// Protects every route under /admin/* (this file + everything in this folder).
// Verifies the Cf-Access-Jwt-Assertion header that Cloudflare Access injects once
// you put this Pages project behind an Access application.
//
// SETUP (one-time, in the Cloudflare dashboard, not in code):
//   1. Zero Trust > Access > Applications > Add an application > Self-hosted
//   2. Application domain: your-domain.com, path: /admin
//   3. Add a policy: Include > Emails > your-admin-email@example.com
//      (this gives the "log in via emailed one-time code/link" flow described in the spec)
//   4. Session duration: 24 hours (or as preferred)
//
// Required env vars for this middleware:
//   CF_ACCESS_TEAM_DOMAIN   e.g. "yourteam.cloudflareaccess.com"
//   CF_ACCESS_AUD           the "Audience" tag shown on the Access application page
//
// If these env vars are not set, the middleware fails CLOSED (denies access) rather
// than silently allowing requests through, since this guards the entire admin surface.

export async function onRequest(context) {
  const { request, env, next } = context;

  if (!env.CF_ACCESS_TEAM_DOMAIN || !env.CF_ACCESS_AUD) {
    return new Response("Admin access is not configured (missing CF_ACCESS_TEAM_DOMAIN/AUD).", { status: 503 });
  }

  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) {
    return new Response("Unauthorized — no Access token. Visit this path through the protected domain.", { status: 401 });
  }

  try {
    const payload = await verifyAccessJwt(token, env.CF_ACCESS_TEAM_DOMAIN, env.CF_ACCESS_AUD);
    context.data.adminEmail = payload.email;
  } catch (e) {
    return new Response("Unauthorized — invalid Access token: " + e.message, { status: 401 });
  }

  return next();
}

async function verifyAccessJwt(token, teamDomain, aud) {
  const [headerB64, payloadB64, sigB64] = token.split(".");
  if (!headerB64 || !payloadB64 || !sigB64) throw new Error("malformed token");

  const header = JSON.parse(base64UrlDecode(headerB64));
  const payload = JSON.parse(base64UrlDecode(payloadB64));

  if (payload.aud && !payload.aud.includes(aud)) throw new Error("audience mismatch");
  if (payload.exp && Date.now() / 1000 > payload.exp) throw new Error("token expired");

  const certsResp = await fetch(`https://${teamDomain}/cdn-cgi/access/certs`);
  const certs = await certsResp.json();
  const key = certs.keys.find(k => k.kid === header.kid);
  if (!key) throw new Error("signing key not found");

  const cryptoKey = await crypto.subtle.importKey(
    "jwk", key, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]
  );

  const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
  const sig = base64UrlToUint8Array(sigB64);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", cryptoKey, sig, data);
  if (!valid) throw new Error("bad signature");

  return payload; // includes payload.email
}

function base64UrlDecode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  return atob(str);
}
function base64UrlToUint8Array(str) {
  const decoded = base64UrlDecode(str);
  const arr = new Uint8Array(decoded.length);
  for (let i = 0; i < decoded.length; i++) arr[i] = decoded.charCodeAt(i);
  return arr;
}
