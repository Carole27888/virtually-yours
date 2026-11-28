/**
 * Daily rebuild, run by Vercel Cron (see "crons" in vercel.json).
 *
 * Scheduled blog posts only appear when the site is rebuilt, so every
 * morning Vercel calls this function, which asks Vercel to rebuild the
 * site through its deploy hook.
 *
 * Needs two environment variables in Vercel (Settings > Environment Variables):
 *   VERCEL_DEPLOY_HOOK  the deploy hook URL (Settings > Git > Deploy Hooks)
 *   CRON_SECRET         any long random text. Vercel sends it with each cron
 *                       call, so nobody else can trigger rebuilds.
 */
export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const hook = process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) return new Response("VERCEL_DEPLOY_HOOK is not set", { status: 500 });

  const res = await fetch(hook, { method: "POST" });
  return res.ok
    ? new Response("Rebuild started")
    : new Response(`Deploy hook failed with status ${res.status}`, { status: 502 });
}
