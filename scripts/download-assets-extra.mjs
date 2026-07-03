// Downloads fonts + images + videos for programa & jasper into public/<host>/.
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = process.cwd();

const FONTS = {
  jasper: [
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e6f1bb4c3114f43c7773d_ABC%20ROM%20-%20Regular.woff2", "ABCROM-Regular.woff2"],
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e6f1b9bf5c756898300bd_ABC%20ROM%20-%20Book.woff2", "ABCROM-Book.woff2"],
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e6f1b5b46e544920b120b_ABC%20ROM%20-%20Medium.woff2", "ABCROM-Medium.woff2"],
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e6f1b81991652a5490b89_ABC%20ROM%20-%20Bold.woff2", "ABCROM-Bold.woff2"],
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e7224138b8d02bcc4f364_ABCROMMono-Book.woff2", "ABCROMMono.woff2"],
    ["https://cdn.prod.website-files.com/6807ee8d73c233fb82842313/680e72729f546840cd17798a_FeatureHeadline-Upright-VF_wght_wdth_opsz.ttf", "Feature-Upright.ttf"],
  ],
  programa: [
    ["https://programa.design/fonts/rhymes-display-regular.ttf", "RhymesDisplay-Regular.ttf"],
  ],
};

function localName(url) {
  let f = decodeURIComponent(url.split("/").pop().split("?")[0]);
  f = f.replace(/^[0-9a-f]{24}_/, "");
  return f.replace(/\s+/g, "-").replace(/%20/g, "-");
}

async function dl(url, out) {
  if (existsSync(out)) return "skip";
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buf);
  return `${(buf.length / 1024).toFixed(0)}kb`;
}

async function batch(items, n = 8) {
  let ok = 0;
  const fails = [];
  for (let i = 0; i < items.length; i += n) {
    const chunk = items.slice(i, i + n);
    const r = await Promise.allSettled(chunk.map((it) => dl(it.url, it.out)));
    r.forEach((res, j) => {
      if (res.status === "fulfilled") ok++;
      else fails.push(`${chunk[j].url.slice(-40)} — ${res.reason.message}`);
    });
  }
  return { ok, fails };
}

for (const host of ["programa", "jasper"]) {
  const data = JSON.parse(readFileSync(join(ROOT, `docs/research/${host}/asset-discovery.json`), "utf8"));
  const jobs = [];
  for (const [url, name] of FONTS[host]) jobs.push({ url, out: join(ROOT, `public/${host}/fonts`, name) });
  for (const url of [...new Set(data.images)]) {
    // skip data URIs and tracking pixels
    if (!/^https?:/.test(url)) continue;
    jobs.push({ url, out: join(ROOT, `public/${host}/images`, localName(url)) });
  }
  for (const v of data.videos || []) {
    const src = v.webm || v.src;
    if (src) jobs.push({ url: src, out: join(ROOT, `public/${host}/videos`, localName(src)) });
  }
  const { ok, fails } = await batch(jobs);
  console.log(`${host}: ${ok}/${jobs.length} ok, ${fails.length} failed`);
  fails.slice(0, 8).forEach((f) => console.log("   ✗", f));
}
