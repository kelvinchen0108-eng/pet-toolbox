// functions/api/restore-purchase.js
// POST { email, order } -> { authCode } or { error }
// Requires KV binding: PET_KV

export async function onRequestPost(context) {
  const { request, env } = context;
  let body = {};
  try { body = await request.json(); } catch (_) {}

  const email = (body.email || "").trim().toLowerCase();
  const order = (body.order || "").trim();

  if (!email || !order) {
    return json({ error: "Missing email or order number." }, 400);
  }
  if (!env.PET_KV) {
    return json({ error: "Storage not configured." }, 500);
  }

  const authCode = await env.PET_KV.get(`order:${email}:${order}`);
  if (!authCode) {
    return json({ error: "No matching purchase found." }, 404);
  }

  const recordRaw = await env.PET_KV.get(`auth:${authCode}`);
  if (!recordRaw) {
    return json({ error: "No matching purchase found." }, 404);
  }
  const record = JSON.parse(recordRaw);
  if (record.status === "revoked") {
    return json({ error: "This purchase's access has been revoked. Contact support." }, 403);
  }

  return json({ authCode });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}
