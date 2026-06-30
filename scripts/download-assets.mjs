// Downloads all Ditto homepage assets (images, video, fonts, favicons) to public/.
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const FONT_BASE = "https://cdn.prod.website-files.com/674e3a7fec86042fe6cf1e43/";
const FONTS = [
  "67537e28e6b3698a2c550caf_ABCSocial-Regular.otf",
  "67537e2854a26661f3d24867_ABCSocial-Book.otf",
  "67537e28d60e4097dee9c9e5_ABCSocial-Bold.otf",
  "67537dca760816b897781cec_ABCSocialMono-Regular.otf",
  "67537de99ca6f644b1888f60_ABCSocialExtended-Regular.otf",
  "67537de88cd7874186372606_ABCSocialExtended-Bold.otf",
  "67537e1211d47dc7281bcb6e_ABCSocialCondensed-Black.otf",
];
const FONT_NAMES = {
  "67537e28e6b3698a2c550caf_ABCSocial-Regular.otf": "ABCSocial-Regular.otf",
  "67537e2854a26661f3d24867_ABCSocial-Book.otf": "ABCSocial-Book.otf",
  "67537e28d60e4097dee9c9e5_ABCSocial-Bold.otf": "ABCSocial-Bold.otf",
  "67537dca760816b897781cec_ABCSocialMono-Regular.otf": "ABCSocialMono-Regular.otf",
  "67537de99ca6f644b1888f60_ABCSocialExtended-Regular.otf": "ABCSocialExtended-Regular.otf",
  "67537de88cd7874186372606_ABCSocialExtended-Bold.otf": "ABCSocialExtended-Bold.otf",
  "67537e1211d47dc7281bcb6e_ABCSocialCondensed-Black.otf": "ABCSocialCondensed-Black.otf",
};
const FAVICONS = [
  ["68c1914636748fc834760132_favicon.png", "favicon.png"],
  ["6835304d874a0183acbe9ded_webclip.svg", "webclip.svg"],
];

// Clean a CDN filename -> local name (strip the webflow hash prefix, decode %20)
function localName(url) {
  let f = decodeURIComponent(url.split("/").pop().split("?")[0]);
  f = f.replace(/^[0-9a-f]{24}_/, ""); // strip 24-char hash prefix
  return f.replace(/\s+/g, "-");
}

async function dl(url, outPath) {
  if (existsSync(outPath)) return "skip";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buf);
  return `${(buf.length / 1024).toFixed(0)}kb`;
}

async function batch(items, n = 5) {
  const out = [];
  for (let i = 0; i < items.length; i += n) {
    const chunk = items.slice(i, i + n);
    const r = await Promise.allSettled(chunk.map((it) => dl(it.url, it.out)));
    r.forEach((res, j) => {
      const it = chunk[j];
      if (res.status === "fulfilled") out.push(`✓ ${it.out} (${res.value})`);
      else out.push(`✗ ${it.out} — ${res.reason.message}`);
    });
  }
  return out;
}

const data = JSON.parse(readFileSync(join(ROOT, "docs/research/dittowords/assets-full.json"), "utf8"));

const jobs = [];
// images
for (const url of [...new Set(data.images)]) {
  jobs.push({ url, out: join(ROOT, "public/images", localName(url)) });
}
// video
for (const v of data.videos) {
  if (v.src) jobs.push({ url: v.src, out: join(ROOT, "public/videos", localName(v.src)) });
}
// fonts
for (const f of FONTS) jobs.push({ url: FONT_BASE + f, out: join(ROOT, "public/fonts", FONT_NAMES[f]) });
// favicons
for (const [h, name] of FAVICONS) jobs.push({ url: FONT_BASE + h, out: join(ROOT, "public/seo", name) });

console.log(`Downloading ${jobs.length} assets...`);
const results = await batch(jobs, 6);
const ok = results.filter((r) => r.startsWith("✓")).length;
const fail = results.filter((r) => r.startsWith("✗"));
console.log(`Done: ${ok}/${jobs.length} ok`);
fail.forEach((f) => console.log(f));
