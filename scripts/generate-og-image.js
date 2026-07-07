const sharp = require("sharp");
const fs = require("fs");

const width = 1200;
const height = 630;

const background = "#e3dcd4";
const primary = "#b58c74";
const text = "#0a0705";

const portraitPath = "public/images/portrait.png";
const outputPath = "public/og-image.jpg";

async function createOG() {
  if (!fs.existsSync(portraitPath)) {
    throw new Error(`Portrait not found at ${portraitPath}`);
  }

  const portraitBuffer = await sharp(portraitPath)
    .resize({ width: 460, height: 590, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${background}" />

  <rect x="60" y="60" width="160" height="52" rx="18" fill="${primary}" />
  <text x="80" y="98" font-family="Inter, Helvetica, Arial, sans-serif" font-size="28" fill="#ffffff" font-weight="700">AD</text>

  <text x="60" y="170" font-family="Fraunces, Inter, Helvetica, Arial, sans-serif" font-size="72" font-weight="800" fill="${text}">Ashlea Davies</text>

  <text x="60" y="242" font-family="Inter, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="${text}">Business Analyst</text>
  <text x="60" y="292" font-family="Inter, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="${text}">Business Transformation Consultant</text>
  <text x="60" y="342" font-family="Inter, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="${text}">Operational Readiness Specialist</text>

  <text x="60" y="420" font-family="Inter, Helvetica, Arial, sans-serif" font-size="24" fill="${text}" opacity="0.85">ashleadavies.au</text>
  <text x="60" y="470" font-family="Inter, Helvetica, Arial, sans-serif" font-size="16" fill="${text}" opacity="0.75" font-weight="400">Salesforce • Genesys Cloud • Operational Readiness • Business Analysis</text>

  <rect x="700" y="100" width="1" height="420" fill="${primary}" fill-opacity="0.2" />
</svg>`;

  const svgBuffer = Buffer.from(svg);

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background,
    },
  })
    .composite([
      { input: svgBuffer, top: 0, left: 0 },
      { input: portraitBuffer, top: 70, left: 740 },
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log(`Created ${outputPath}`);
}

createOG().catch((error) => {
  console.error(error);
  process.exit(1);
});