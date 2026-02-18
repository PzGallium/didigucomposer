const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'favicon.svg');
const icoPath = path.join(publicDir, 'favicon.ico');

async function main() {
  const svg = fs.readFileSync(svgPath);
  const sizes = [16, 32];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svg).resize(size, size).png().toBuffer()
    )
  );
  const ico = await toIco(pngBuffers);
  fs.writeFileSync(icoPath, ico);
  console.log('Generated', icoPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
