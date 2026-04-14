import { mkdir, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const brandDir = join(root, "public", "brand", "musk-xchat");
const execFileAsync = promisify(execFile);

const colors = {
  obsidian: "#060606",
  graphite: "#111111",
  metal: "#1f1f1f",
  pearl: "#f6f4ee",
  mint: "#82ffb6",
  coral: "#ff5853",
  silver: "#bfc5c0",
};

const svgTemplate = ({
  width,
  height,
  body,
}: {
  width: number;
  height: number;
  body: string;
}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.obsidian}" />
      <stop offset="55%" stop-color="${colors.graphite}" />
      <stop offset="100%" stop-color="#0c1410" />
    </linearGradient>
    <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${colors.mint}" />
      <stop offset="100%" stop-color="${colors.coral}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  ${body}
</svg>`;

const lattice = ({
  x,
  y,
  width,
  height,
  opacity,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
}) => `
  <g opacity="${opacity}">
    <path d="M ${x} ${y + height * 0.15} L ${x + width * 0.46} ${y + height * 0.15} L ${x + width} ${y + height * 0.72}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    <path d="M ${x + width * 0.14} ${y + height} L ${x + width * 0.54} ${y + height * 0.48} L ${x + width} ${y + height * 0.48}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
    <circle cx="${x + width * 0.46}" cy="${y + height * 0.15}" r="8" fill="${colors.mint}" />
    <circle cx="${x + width * 0.54}" cy="${y + height * 0.48}" r="8" fill="${colors.coral}" />
    <circle cx="${x + width}" cy="${y + height * 0.72}" r="8" fill="${colors.pearl}" />
  </g>`;

const markSvg = svgTemplate({
  width: 512,
  height: 512,
  body: `
    <rect width="512" height="512" fill="url(#bg)" />
    <rect x="48" y="48" width="416" height="416" rx="24" fill="#0b0b0b" stroke="rgba(255,255,255,0.12)" />
    <path d="M128 132 L208 132 L258 216 L306 132 L384 132 L300 256 L388 384 L308 384 L258 296 L206 384 L126 384 L214 256 Z" fill="${colors.pearl}" />
    <path d="M128 102 L196 102" stroke="${colors.mint}" stroke-width="10" stroke-linecap="square" />
    <path d="M316 410 L384 410" stroke="${colors.coral}" stroke-width="10" stroke-linecap="square" />
    <circle cx="104" cy="102" r="10" fill="${colors.mint}" />
    <circle cx="408" cy="410" r="10" fill="${colors.coral}" />
    <path d="M96 256 L152 256" stroke="rgba(255,255,255,0.22)" stroke-width="3" />
    <path d="M360 256 L416 256" stroke="rgba(255,255,255,0.22)" stroke-width="3" />
  `,
});

const logoSvg = svgTemplate({
  width: 1480,
  height: 420,
  body: `
    <rect width="1480" height="420" fill="${colors.obsidian}" />
    <g transform="translate(44 42) scale(0.66)">
      <rect width="512" height="512" fill="url(#bg)" />
      <rect x="48" y="48" width="416" height="416" rx="24" fill="#0b0b0b" stroke="rgba(255,255,255,0.12)" />
      <path d="M128 132 L208 132 L258 216 L306 132 L384 132 L300 256 L388 384 L308 384 L258 296 L206 384 L126 384 L214 256 Z" fill="${colors.pearl}" />
      <path d="M128 102 L196 102" stroke="${colors.mint}" stroke-width="10" stroke-linecap="square" />
      <path d="M316 410 L384 410" stroke="${colors.coral}" stroke-width="10" stroke-linecap="square" />
      <circle cx="104" cy="102" r="10" fill="${colors.mint}" />
      <circle cx="408" cy="410" r="10" fill="${colors.coral}" />
    </g>
    <text x="428" y="178" fill="${colors.pearl}" font-size="148" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">MUSK XCHAT</text>
    <text x="432" y="248" fill="${colors.silver}" font-size="28" font-family="Arial, Helvetica, sans-serif" letter-spacing="10">INDEPENDENT X MESSAGING GUIDE</text>
    <rect x="432" y="288" width="486" height="8" fill="${colors.mint}" />
    <rect x="934" y="288" width="176" height="8" fill="${colors.coral}" />
  `,
});

const heroSvg = svgTemplate({
  width: 1600,
  height: 1800,
  body: `
    <rect width="1600" height="1800" fill="url(#bg)" />
    <rect x="0" y="0" width="1600" height="1800" fill="url(#bg)" />
    <rect x="90" y="90" width="1420" height="1620" fill="none" stroke="rgba(255,255,255,0.08)" />
    <rect x="118" y="118" width="144" height="12" fill="${colors.mint}" />
    <rect x="1340" y="1670" width="144" height="12" fill="${colors.coral}" />
    ${lattice({ x: 150, y: 180, width: 1240, height: 760, opacity: 1 })}
    ${lattice({ x: 220, y: 820, width: 1040, height: 560, opacity: 0.8 })}
    <path d="M180 1260 L620 1260 L862 840 L1114 1260 L1420 1260" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="6" />
    <path d="M240 1328 L544 1328 L862 932 L1184 1328 L1360 1328" fill="none" stroke="url(#pulse)" stroke-width="8" filter="url(#glow)" />
    <circle cx="862" cy="932" r="24" fill="${colors.pearl}" />
    <circle cx="544" cy="1328" r="18" fill="${colors.mint}" />
    <circle cx="1184" cy="1328" r="18" fill="${colors.coral}" />
    <text x="148" y="1486" fill="${colors.pearl}" font-size="214" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">MUSK</text>
    <text x="148" y="1698" fill="${colors.pearl}" font-size="214" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">XCHAT</text>
    <text x="156" y="1760" fill="${colors.silver}" font-size="34" font-family="Arial, Helvetica, sans-serif" letter-spacing="10">ROLL OUT, TRUST GAP, MESSAGING AMBITION</text>
  `,
});

const networkSvg = svgTemplate({
  width: 1200,
  height: 1500,
  body: `
    <rect width="1200" height="1500" fill="${colors.obsidian}" />
    <rect x="72" y="72" width="1056" height="1356" fill="#0d0d0d" stroke="rgba(255,255,255,0.08)" />
    <rect x="100" y="100" width="220" height="10" fill="${colors.mint}" />
    <rect x="880" y="1390" width="220" height="10" fill="${colors.coral}" />
    <path d="M162 310 L438 210 L746 430 L1020 240" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="4" />
    <path d="M162 598 L384 720 L624 502 L980 634" fill="none" stroke="url(#pulse)" stroke-width="6" />
    <path d="M220 1100 L462 930 L710 1098 L992 920" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="4" />
    <circle cx="438" cy="210" r="18" fill="${colors.mint}" />
    <circle cx="746" cy="430" r="18" fill="${colors.pearl}" />
    <circle cx="980" cy="634" r="18" fill="${colors.coral}" />
    <circle cx="462" cy="930" r="18" fill="${colors.mint}" />
    <circle cx="710" cy="1098" r="18" fill="${colors.pearl}" />
    <circle cx="992" cy="920" r="18" fill="${colors.coral}" />
    <text x="148" y="1290" fill="${colors.pearl}" font-size="128" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">SIGNAL</text>
    <text x="148" y="1400" fill="${colors.silver}" font-size="42" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">IDENTITY / MEDIA / CHAT / DISTRIBUTION</text>
  `,
});

const privacySvg = svgTemplate({
  width: 1200,
  height: 1500,
  body: `
    <rect width="1200" height="1500" fill="${colors.graphite}" />
    <rect x="84" y="84" width="1032" height="1332" fill="#0b0b0b" stroke="rgba(255,255,255,0.08)" />
    <path d="M600 268 L896 388 L896 760 C896 938 780 1082 600 1176 C420 1082 304 938 304 760 L304 388 Z" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="8" />
    <path d="M600 334 L832 428 L832 736 C832 888 742 998 600 1082 C458 998 368 888 368 736 L368 428 Z" fill="rgba(130,255,182,0.08)" />
    <path d="M488 702 L566 780 L722 608" fill="none" stroke="${colors.mint}" stroke-width="18" stroke-linecap="square" stroke-linejoin="miter" filter="url(#glow)" />
    <rect x="150" y="212" width="312" height="12" fill="${colors.coral}" />
    <rect x="734" y="1292" width="312" height="12" fill="${colors.mint}" />
    <text x="150" y="1260" fill="${colors.pearl}" font-size="126" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">TRUST</text>
    <text x="150" y="1370" fill="${colors.silver}" font-size="42" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">CLAIMS / SKEPTICISM / VALIDATION</text>
  `,
});

const callsSvg = svgTemplate({
  width: 1200,
  height: 1500,
  body: `
    <rect width="1200" height="1500" fill="${colors.obsidian}" />
    <rect x="84" y="84" width="1032" height="1332" fill="#0d0d0d" stroke="rgba(255,255,255,0.08)" />
    <circle cx="352" cy="560" r="116" fill="rgba(130,255,182,0.12)" stroke="${colors.mint}" stroke-width="4" />
    <circle cx="850" cy="560" r="116" fill="rgba(255,88,83,0.12)" stroke="${colors.coral}" stroke-width="4" />
    <path d="M466 560 C548 488 656 488 736 560" fill="none" stroke="${colors.pearl}" stroke-width="10" />
    <path d="M472 640 C550 716 652 716 732 640" fill="none" stroke="${colors.pearl}" stroke-width="10" />
    <path d="M232 888 L320 820 L420 916 L530 780 L644 960 L760 832 L920 954" fill="none" stroke="url(#pulse)" stroke-width="10" filter="url(#glow)" />
    <rect x="150" y="204" width="212" height="12" fill="${colors.mint}" />
    <rect x="838" y="1286" width="212" height="12" fill="${colors.coral}" />
    <text x="150" y="1228" fill="${colors.pearl}" font-size="126" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">CALLS</text>
    <text x="150" y="1340" fill="${colors.silver}" font-size="42" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">VOICE / VIDEO / FILES / SESSION FLOW</text>
  `,
});

const ogSvg = svgTemplate({
  width: 1200,
  height: 630,
  body: `
    <rect width="1200" height="630" fill="${colors.obsidian}" />
    <rect x="0" y="0" width="1200" height="630" fill="url(#bg)" />
    <path d="M92 86 L378 86 L600 260 L864 126 L1108 280" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="4" />
    <path d="M94 182 L336 300 L590 160 L876 330 L1080 186" fill="none" stroke="url(#pulse)" stroke-width="6" filter="url(#glow)" />
    <circle cx="600" cy="260" r="14" fill="${colors.pearl}" />
    <circle cx="876" cy="330" r="12" fill="${colors.coral}" />
    <circle cx="336" cy="300" r="12" fill="${colors.mint}" />
    <text x="94" y="442" fill="${colors.pearl}" font-size="124" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">MUSK XCHAT</text>
    <text x="98" y="502" fill="${colors.silver}" font-size="24" font-family="Arial, Helvetica, sans-serif" letter-spacing="7">WHAT XCHAT IS / ROLLOUT / TRUST GAP / ALTERNATIVES</text>
    <rect x="98" y="534" width="420" height="8" fill="${colors.mint}" />
    <rect x="534" y="534" width="160" height="8" fill="${colors.coral}" />
  `,
});

async function writeSvgAndPng(
  name: string,
  svg: string,
  options?: { width?: number; height?: number }
) {
  const svgPath = join(brandDir, `${name}.svg`);
  const pngPath = join(brandDir, `${name}.png`);

  await writeFile(svgPath, svg, "utf8");

  const args = ["-o", pngPath];
  if (options?.width) {
    args.push("-w", String(options.width));
  }
  if (options?.height) {
    args.push("-h", String(options.height));
  }
  args.push(svgPath);

  await execFileAsync("rsvg-convert", args);
}

async function main() {
  await mkdir(brandDir, { recursive: true });

  await writeSvgAndPng("musk-xchat-mark", markSvg, { width: 512, height: 512 });
  await writeSvgAndPng("musk-xchat-logo", logoSvg, { width: 1480 });
  await writeSvgAndPng("musk-xchat-hero", heroSvg, { width: 1600 });
  await writeSvgAndPng("musk-xchat-network", networkSvg, { width: 1200 });
  await writeSvgAndPng("musk-xchat-privacy", privacySvg, { width: 1200 });
  await writeSvgAndPng("musk-xchat-calls", callsSvg, { width: 1200 });
  await writeSvgAndPng("musk-xchat-og", ogSvg, { width: 1200, height: 630 });

  await writeFile(join(root, "public", "favicon.svg"), markSvg, "utf8");
  await execFileAsync("rsvg-convert", [
    join(root, "public", "favicon.svg"),
    "-o",
    join(root, "public", "favicon.png"),
    "-w",
    "512",
    "-h",
    "512",
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
