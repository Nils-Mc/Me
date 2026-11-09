const html = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Über mich | Nils Mc</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #111615;
        --card: #1f2a24;
        --text: #f7f7f7;
        --muted: #b7c0ba;
        --accent: #7ee085;
      }

      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        background: radial-gradient(circle at top, #28372f 0%, var(--bg) 55%);
        color: var(--text);
      }

      .wrap {
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem 1rem 3rem;
      }

      .card {
        background: linear-gradient(180deg, #29372f, var(--card));
        border: 1px solid #3a4d41;
        border-radius: 20px;
        padding: 1.5rem;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
      }

      .hero {
        display: grid;
        gap: 1.5rem;
      }

      @media (min-width: 820px) {
        .hero {
          grid-template-columns: 220px 1fr;
          align-items: center;
        }
      }

      .avatar {
        width: 220px;
        max-width: 100%;
        border-radius: 20px;
        border: 2px solid #49614f;
      }

      h1 { margin: 0 0 .6rem; font-size: clamp(1.8rem, 4vw, 2.8rem); }
      p { margin: 0 0 1rem; color: var(--muted); line-height: 1.6; }

      .pill {
        display: inline-block;
        background: rgba(126, 224, 133, 0.12);
        color: var(--accent);
        border: 1px solid rgba(126, 224, 133, 0.35);
        border-radius: 999px;
        padding: .3rem .8rem;
        font-size: .9rem;
        margin-bottom: .8rem;
      }

      .logo {
        margin-top: 1rem;
        max-width: 180px;
      }

      .social {
        display: flex;
        flex-wrap: wrap;
        gap: .7rem;
        margin-top: .7rem;
      }

      .social a {
        text-decoration: none;
        color: var(--text);
        padding: .55rem .9rem;
        border-radius: 10px;
        border: 1px solid #4a6150;
        background: rgba(0, 0, 0, 0.2);
      }

      .social a:hover { border-color: var(--accent); }
    </style>
  </head>
  <body>
    <main class="wrap">
      <section class="card hero">
        <img class="avatar" src="/assets/profile-photo.png" alt="Profilfoto" />
        <div>
          <span class="pill">Cloudflare Worker</span>
          <h1>Hi, ich bin Nils 👋</h1>
          <p>
            Willkommen auf meiner kleinen Über-mich-Seite. Ich baue gerne Web-Projekte,
            experimentiere mit Cloudflare Workers und mag schlanke, schnelle Deployments.
          </p>
          <p>
            Diese Seite wird vollständig über einen Worker ausgeliefert und nutzt die
            vorhandenen Repository-Assets für Profilbild und Logo.
          </p>
          <div class="social">
            <a href="https://github.com/Nils-Mc" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
          <img class="logo" src="/assets/how2virus/default.png" alt="How2Virus Logo" />
        </div>
      </section>
    </main>
  </body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=60"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
