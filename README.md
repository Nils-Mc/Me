# Me — Über-mich-Website auf Cloudflare Workers

## Analyse der vorhandenen Dateien

Vor dem Aufbau der Seite wurden die bestehenden Dateien geprüft:

- `IMG_0484.png`: Profilbild (PNG, 2160x1620)
- `How2Virus-logo.zip`: Logo-Paket mit PNG- und SVG-Varianten (`default.png`, `cover.png`, `profile.png`, `vector/*`)
- `README.md`: bisher nur Platzhalter

Diese Assets werden jetzt in der Seite genutzt.

## Projektstruktur

- `src/index.js` — Worker mit HTML-Ausgabe für die Über-mich-Seite
- `public/assets/profile-photo.png` — Profilbild
- `public/assets/how2virus/*` — entpackte Logo-Dateien
- `wrangler.toml` — Cloudflare-Worker-Konfiguration inkl. Assets-Binding

## Lokal starten

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```
