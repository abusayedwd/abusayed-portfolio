/**
 * Generates the social-share (Open Graph) image at public/og.png.
 * Run with: node scripts/make-og-image.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0f19"/>
  <rect x="0" y="0" width="1200" height="6" fill="#2563eb"/>
  <text x="80" y="150" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26"
        letter-spacing="4" fill="#6b7280">FULL-STACK DEVELOPER</text>
  <text x="78" y="300" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="112"
        font-weight="700" fill="#ffffff">Abu Sayed</text>
  <text x="80" y="380" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="40"
        fill="#9ca3af">I build web applications with React, Node.js &amp; MongoDB.</text>
  <text x="80" y="560" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="28"
        fill="#2563eb">github.com/abusayedwd</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(path.join(root, "public", "og.png"));
console.log("wrote public/og.png");
