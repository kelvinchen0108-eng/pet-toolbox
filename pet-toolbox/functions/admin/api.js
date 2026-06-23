// functions/admin/api.js  ->  available at /admin/api
// Protected by functions/admin/_middleware.js (Cloudflare Access)
//
// POST body: { action: "...", ...params }
// Actions:
//   lookup_auth          { email } or { authCode}      -> record(s)
//   revoke_auth          { authCode }                  -> ok
//   export_subscribers   {}                            -> [{email, optedInAt}]
//   list_logs            { limit }                     -> [log entries]
//   get_ads_config        {}                            -> current ads-config.json contents (from KV override or default)
//   set_ads_config        { config }                     -> ok, stored in KV "ads_config"
//   get_pricing_schedule  {}                            -> current pricing-schedule.json contents
//   set_pricing_schedule  { schedule }                   -> ok, stored in KV "pricing_schedule"

export async function onRequestPost(context) {
  const { request, env, data } = context;
  if (!env.PET_KV) return json({ error: "KV not bound" }, 500);

  let body = {};
  try { body = await request.json(); } catch (_) {}
  const { action } = body;

  switch (action) {
    case "lookup_auth": return await lookupAuth(env, body);
    case "revoke_auth": return await revokeAuth(env, body, data.adminEmail);
    case "export_subscribers": return await exportSubscribers(env);
    case "list_logs": return await listLogs(env, body);
    case "get_ads_config": return await getKvOrNull(env, "ads_config");
    case "set_ads_config": return await setKvAndLog(env, "ads_config", body.config, "ads_config_updated", data.adminEmail);
    case "get_pricing_schedule": return await getKvOrNull(env, "pricing_schedule");
    case "set_pricing_schedule": return await setKvAndLog(env, "pricing_schedule", body.schedule, "pricing_schedule_updated", data.adminEmail);
    default: return json({ error: "Unknown action" }, 400);
  }
}

async function lookupAuth(env, body) {
  if (body.authCode) {
    const raw = await env.PET_KV.get(`auth:${body.authCode}`);
    return json({ record: raw ? JSON.parse(raw) : null });
  }
  if (body.email) {
    const email = body.email.toLowerCase();
    const list = await env.PET_KV.list({ prefix: `order:${email}:` });
    const records = [];
    for (const k of list.keys) {
      const authCode = await env.PET_KV.get(k.name);
      const raw = await env.PET_KV.get(`auth:${authCode}`);
      if (raw) records.push(JSON.parse(raw));
    }
    return json({ records });
  }
  return json({ error: "Provide email or authCode" }, 400);
}

async function revokeAuth(env, body, adminEmail) {
  const raw = await env.PET_KV.get(`auth:${body.authCode}`);
  if (!raw) return json({ error: "Not found" }, 404);
  const record = JSON.parse(raw);
  record.status = "revoked";
  record.revokedAt = new Date().toISOString();
  record.revokedBy = adminEmail;
  await env.PET_KV.put(`auth:${body.authCode}`, JSON.stringify(record));
  await log(env, "auth_revoked", { authCode: body.authCode, email: record.email, by: adminEmail });
  return json({ ok: true });
}

async function exportSubscribers(env) {
  const list = await env.PET_KV.list({ prefix: "subscriber:" });
  const out = [];
  for (const k of list.keys) {
    const raw = await env.PET_KV.get(k.name);
    if (raw) out.push(JSON.parse(raw));
  }
  return json({ subscribers: out });
}

async function listLogs(env, body) {
  const limit = Math.min(body.limit || 100, 500);
  const list = await env.PET_KV.list({ prefix: "log:", limit });
  const out = [];
  for (const k of list.keys) {
    const raw = await env.PET_KV.get(k.name);
    if (raw) out.push(JSON.parse(raw));
  }
  out.sort((a, b) => new Date(b.at) - new Date(a.at));
  return json({ logs: out });
}

async function getKvOrNull(env, key) {
  const raw = await env.PET_KV.get(key);
  return json({ value: raw ? JSON.parse(raw) : null });
}

async function setKvAndLog(env, key, value, actionName, adminEmail) {
  if (value === undefined) return json({ error: "Missing value" }, 400);
  await env.PET_KV.put(key, JSON.stringify(value));
  await log(env, actionName, { by: adminEmail });
  return json({ ok: true });
}

async function log(env, action, details) {
  const entry = { action, details, at: new Date().toISOString() };
  await env.PET_KV.put(`log:${Date.now()}:${crypto.randomUUID()}`, JSON.stringify(entry));
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}
