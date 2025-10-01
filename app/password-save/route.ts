// app/password-save/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Save your password</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; margin:0; background:#fafafa; color:#111; }
    .wrap { max-width: 28rem; margin: 18vh auto; padding: 2rem; background: #fff; border: 1px solid #eee; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.06); text-align:center; }
    .row { margin: .75rem 0; text-align:left; }
    .label { font-size: 11px; text-transform: uppercase; color: #666; letter-spacing:.04em; }
    input { width:100%; margin-top:.35rem; padding:.6rem .7rem; border:1px solid #ddd; border-radius:.6rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    a.btn { display:inline-block; margin-top:1rem; padding:.6rem 1rem; border:1px solid #ddd; border-radius:.6rem; text-decoration:none; color:#111; background:#fff; }
    form { margin-top: .5rem; }
  </style>
</head>
<body>
  <main class="wrap">
    <h1 style="margin:0 0 .5rem 0; font-size:1.25rem;">Almost done…</h1>
    <p style="margin:0 0 1rem 0; color:#555;">Your browser may prompt you to save the password now.</p>

    <!-- Visible standard form helps iOS Safari & Firefox detect credentials -->
    <form method="post" action="/password-save" autocomplete="on">
      <div class="row">
        <div class="label">Username</div>
        <input type="text" name="username" autocomplete="username" value="${esc(username)}" />
      </div>
      <div class="row">
        <div class="label">Password</div>
        <input type="password" name="password" autocomplete="current-password" value="${esc(password)}" />
      </div>
      <div class="row" style="text-align:center;">
        <button type="submit" class="btn">Save again</button>
      </div>
    </form>

    <a href="/courses" class="btn">Return to the app</a>
  </main>

  <script>
    (async () => {
      try {
        if (navigator.credentials && window.PasswordCredential) {
          const cred = new PasswordCredential({
            id: ${JSON.stringify(username)},
            password: ${JSON.stringify(password)},
            name: "Iqra Guest",
          });
          await navigator.credentials.store(cred);
        }
      } catch (e) { /* ignore */ }
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
