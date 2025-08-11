// scripts/optimize-public-images.mjs
import { globby } from 'globby';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const OUT_DIR = path.join(PUBLIC_DIR, '_optimized');
const widths = [480, 768, 1200, 1600, 2000];

const patterns = [
  `${PUBLIC_DIR}/**/*.{jpg,jpeg,png,webp}`,
  `!${PUBLIC_DIR}/_optimized/**`,
  `!${PUBLIC_DIR}/**/*.{svg,gif}`
];

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = await globby(patterns);
if (!files.length) {
  console.log('No images found in /public.');
  process.exit(0);
}

for (const file of files) {
  const rel = path.relative(PUBLIC_DIR, file);
  const ext = path.extname(rel);
  const baseNoExt = rel.slice(0, -ext.length);
  const outBase = path.join(OUT_DIR, baseNoExt);
  fs.mkdirSync(path.dirname(outBase), { recursive: true });

  const input = fs.readFileSync(file);

  // LQIP placeholder
  const lqip = await sharp(input).resize(24).webp({ quality: 30 }).toBuffer();
  fs.writeFileSync(`${outBase}-lqip.webp`, lqip);

  for (const w of widths) {
    await sharp(input).resize({ width: w }).avif({ quality: 50 }).toFile(`${outBase}-${w}.avif`);
    await sharp(input).resize({ width: w }).webp({ quality: 64 }).toFile(`${outBase}-${w}.webp`);
    await sharp(input).resize({ width: w }).jpeg({ quality: 72, mozjpeg: true }).toFile(`${outBase}-${w}.jpg`);
  }

  console.log('Optimized:', rel);
}

console.log('\nDone. Files written to /public/_optimized/');
