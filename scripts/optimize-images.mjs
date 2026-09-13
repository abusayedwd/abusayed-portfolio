/**
 * One-off asset optimizer: converts large source images to sized WebP.
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "src", "assets");

const jobs = [
  // [source, destination, maxWidth, quality]
  ["projects/sports camp.png", "projects/sports-camp.webp", 1000, 78],
  ["projects/toyMarket.png", "projects/toy-market.webp", 1000, 78],
  ["projects/bdrecipe hub.png", "projects/recipe-hub.webp", 1000, 78],
  ["projects/trade.png", "projects/trading-business.webp", 1000, 78],
  ["projects/collegeB.png", "projects/college-booking.webp", 1000, 78],
  ["projects/electronic.png", "projects/electronics-hub.webp", 1000, 78],
  ["sayed-blck1.png", "portrait.webp", 720, 82],
];

for (const [src, dest, width, quality] of jobs) {
  const from = path.join(assets, src);
  const to = path.join(assets, dest);
  if (!fs.existsSync(from)) {
    console.warn(`skip (missing): ${src}`);
    continue;
  }
  await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(to);
  const before = (fs.statSync(from).size / 1024).toFixed(0);
  const after = (fs.statSync(to).size / 1024).toFixed(0);
  console.log(`${src}  ${before}KB -> ${after}KB  (${dest})`);
}
