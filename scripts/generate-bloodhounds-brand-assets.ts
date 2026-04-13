import { mkdir, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");
const brandDir = join(root, "public", "brand", "bloodhounds");
const execFileAsync = promisify(execFile);

const colors = {
  ink: "#08090d",
  steel: "#10141c",
  slate: "#1a2330",
  lime: "#9fe870",
  crimson: "#8a2435",
  bone: "#f3f4ee",
  mist: "#dbe0d7",
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
      <stop offset="0%" stop-color="${colors.ink}" />
      <stop offset="100%" stop-color="${colors.steel}" />
    </linearGradient>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${colors.lime}" />
      <stop offset="100%" stop-color="${colors.crimson}" />
    </linearGradient>
  </defs>
  ${body}
</svg>`;

const markSvg = svgTemplate({
  width: 512,
  height: 512,
  body: `
    <rect width="512" height="512" fill="url(#bg)" />
    <rect x="56" y="56" width="400" height="400" rx="28" fill="#0d1016" stroke="rgba(255,255,255,0.12)" />
    <path d="M132 376 L132 144 L216 144 C280 144 318 176 318 226 C318 264 298 292 264 304 L330 376 L260 376 L204 314 L192 314 L192 376 Z" fill="${colors.bone}" />
    <path d="M356 132 L388 164 L388 260 C388 314 342 360 286 360 L254 360 L254 304 L286 304 C311 304 328 286 328 260 L328 188 L296 156 Z" fill="${colors.lime}" />
    <rect x="124" y="398" width="264" height="8" fill="url(#line)" />
    <text x="256" y="104" fill="${colors.mist}" font-size="28" letter-spacing="10" text-anchor="middle" font-family="Arial, Helvetica, sans-serif">BH</text>
  `,
});

const logoSvg = svgTemplate({
  width: 1400,
  height: 420,
  body: `
    <rect width="1400" height="420" fill="${colors.ink}" />
    <g transform="translate(48 42) scale(0.66)">
      <rect width="512" height="512" fill="url(#bg)" />
      <rect x="56" y="56" width="400" height="400" rx="28" fill="#0d1016" stroke="rgba(255,255,255,0.12)" />
      <path d="M132 376 L132 144 L216 144 C280 144 318 176 318 226 C318 264 298 292 264 304 L330 376 L260 376 L204 314 L192 314 L192 376 Z" fill="${colors.bone}" />
      <path d="M356 132 L388 164 L388 260 C388 314 342 360 286 360 L254 360 L254 304 L286 304 C311 304 328 286 328 260 L328 188 L296 156 Z" fill="${colors.lime}" />
      <rect x="124" y="398" width="264" height="8" fill="url(#line)" />
    </g>
    <text x="430" y="196" fill="${colors.bone}" font-size="148" letter-spacing="8" font-family="Arial Black, Arial, Helvetica, sans-serif">BLOODHOUNDS</text>
    <text x="434" y="264" fill="${colors.mist}" font-size="30" letter-spacing="12" font-family="Arial, Helvetica, sans-serif">UNOFFICIAL NETFLIX GUIDE</text>
    <rect x="436" y="304" width="460" height="8" fill="${colors.crimson}" />
    <rect x="916" y="304" width="178" height="8" fill="${colors.lime}" />
  `,
});

const heroSvg = svgTemplate({
  width: 1600,
  height: 2000,
  body: `
    <rect width="1600" height="2000" fill="url(#bg)" />
    <rect x="0" y="1260" width="1600" height="740" fill="#07080b" />
    <rect x="100" y="150" width="1400" height="1700" fill="none" stroke="rgba(255,255,255,0.08)" />
    <rect x="1060" y="0" width="140" height="2000" fill="rgba(159,232,112,0.06)" />
    <rect x="1140" y="0" width="12" height="2000" fill="${colors.lime}" opacity="0.6" />
    <rect x="210" y="260" width="12" height="1420" fill="${colors.crimson}" opacity="0.85" />
    <path d="M330 1500 C420 1190 560 930 724 760 C810 676 892 640 954 640 C1088 640 1150 806 1150 964 C1150 1188 1018 1390 834 1500 Z" fill="#121821" />
    <path d="M760 640 C844 640 906 572 906 486 C906 404 842 338 760 338 C680 338 614 404 614 486 C614 572 676 640 760 640 Z" fill="#171d28" />
    <path d="M882 1522 C980 1238 1114 1012 1248 904 C1312 852 1384 832 1450 842 L1450 1522 Z" fill="#121821" />
    <path d="M1208 880 C1280 880 1340 822 1340 750 C1340 676 1280 616 1208 616 C1134 616 1076 676 1076 750 C1076 822 1134 880 1208 880 Z" fill="#171d28" />
    <path d="M0 1496 L1600 1112 L1600 1194 L0 1580 Z" fill="rgba(138,36,53,0.45)" />
    <path d="M0 1586 L1600 1202 L1600 1260 L0 1640 Z" fill="rgba(255,255,255,0.06)" />
    <rect x="132" y="140" width="284" height="40" fill="${colors.lime}" />
    <text x="140" y="1090" fill="${colors.bone}" font-size="260" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">BLOOD</text>
    <text x="140" y="1336" fill="${colors.bone}" font-size="260" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="8">HOUNDS</text>
    <text x="144" y="1418" fill="${colors.mist}" font-size="44" font-family="Arial, Helvetica, sans-serif" letter-spacing="12">DEBT. DISCIPLINE. BROTHERHOOD.</text>
    <rect x="144" y="1454" width="640" height="10" fill="${colors.crimson}" />
    <rect x="804" y="1454" width="180" height="10" fill="${colors.lime}" />
    <g fill="rgba(255,255,255,0.12)">
      <rect x="160" y="1700" width="130" height="180" />
      <rect x="320" y="1640" width="88" height="240" />
      <rect x="430" y="1720" width="120" height="160" />
      <rect x="580" y="1580" width="144" height="300" />
      <rect x="760" y="1660" width="110" height="220" />
      <rect x="900" y="1540" width="166" height="340" />
      <rect x="1100" y="1620" width="120" height="260" />
      <rect x="1250" y="1680" width="170" height="200" />
    </g>
  `,
});

const brotherhoodSvg = svgTemplate({
  width: 1200,
  height: 1500,
  body: `
    <rect width="1200" height="1500" fill="${colors.steel}" />
    <rect x="72" y="72" width="1056" height="1356" fill="${colors.ink}" stroke="rgba(255,255,255,0.08)" />
    <rect x="92" y="92" width="18" height="1316" fill="${colors.lime}" opacity="0.75" />
    <rect x="1078" y="92" width="18" height="1316" fill="${colors.crimson}" opacity="0.75" />
    <path d="M254 1180 C320 860 402 650 516 504 C570 438 620 408 668 408 C728 408 780 458 804 538 C838 650 836 846 776 1180 Z" fill="#141b27" />
    <path d="M812 1200 C872 930 958 736 1040 640 C1078 594 1114 572 1142 570 L1142 1200 Z" fill="#10161f" />
    <path d="M540 402 C620 402 684 338 684 260 C684 180 620 116 540 116 C462 116 396 180 396 260 C396 338 462 402 540 402 Z" fill="#1d2632" />
    <path d="M934 574 C1000 574 1054 520 1054 454 C1054 388 1000 334 934 334 C866 334 814 388 814 454 C814 520 866 574 934 574 Z" fill="#1d2632" />
    <text x="154" y="1122" fill="${colors.bone}" font-size="146" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">TWO</text>
    <text x="154" y="1256" fill="${colors.bone}" font-size="146" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">STAND</text>
    <rect x="154" y="1290" width="370" height="8" fill="${colors.lime}" />
    <text x="154" y="1362" fill="${colors.mist}" font-size="34" font-family="Arial, Helvetica, sans-serif" letter-spacing="10">LOYALTY BUILT UNDER PRESSURE</text>
  `,
});

const ledgerSvg = svgTemplate({
  width: 1200,
  height: 1500,
  body: `
    <rect width="1200" height="1500" fill="${colors.ink}" />
    <rect x="88" y="88" width="1024" height="1324" fill="#0f141c" stroke="rgba(255,255,255,0.08)" />
    <rect x="88" y="88" width="1024" height="184" fill="#131a23" />
    <text x="132" y="188" fill="${colors.bone}" font-size="98" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">LEDGER</text>
    <text x="136" y="244" fill="${colors.mist}" font-size="26" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">SEOUL / NIGHT / ACCOUNTS RECEIVABLE</text>
    <rect x="132" y="284" width="934" height="8" fill="${colors.lime}" />
    ${Array.from({ length: 9 })
      .map((_, index) => {
        const y = 404 + index * 104;
        const fill = index % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)";
        const status = index % 3 === 0 ? colors.crimson : colors.lime;
        return `
          <rect x="132" y="${y}" width="936" height="72" fill="${fill}" />
          <rect x="156" y="${y + 22}" width="178" height="10" fill="rgba(255,255,255,0.18)" />
          <rect x="370" y="${y + 22}" width="264" height="10" fill="rgba(255,255,255,0.12)" />
          <rect x="770" y="${y + 22}" width="120" height="10" fill="${status}" />
          <rect x="924" y="${y + 22}" width="118" height="10" fill="rgba(255,255,255,0.16)" />
        `;
      })
      .join("")}
    <path d="M876 1024 C918 826 984 684 1068 580 C1096 548 1122 528 1140 526 L1140 1208 L824 1208 C828 1144 844 1084 876 1024 Z" fill="rgba(138,36,53,0.45)" />
    <text x="132" y="1360" fill="${colors.bone}" font-size="104" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">DEBT</text>
    <text x="486" y="1360" fill="${colors.lime}" font-size="104" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">MAP</text>
  `,
});

const ogSvg = svgTemplate({
  width: 1200,
  height: 630,
  body: `
    <rect width="1200" height="630" fill="${colors.ink}" />
    <rect x="0" y="0" width="180" height="630" fill="rgba(159,232,112,0.09)" />
    <rect x="148" y="0" width="8" height="630" fill="${colors.lime}" />
    <path d="M748 598 C788 426 858 298 950 212 C994 170 1040 148 1084 148 C1110 148 1144 160 1172 188 L1172 598 Z" fill="#141b27" />
    <path d="M430 598 C476 394 552 248 646 172 C692 134 736 118 774 118 C840 118 896 176 918 270 C946 390 924 494 886 598 Z" fill="#1b2431" />
    <text x="226" y="286" fill="${colors.bone}" font-size="120" font-family="Arial Black, Arial, Helvetica, sans-serif" letter-spacing="6">BLOODHOUNDS</text>
    <text x="228" y="350" fill="${colors.mist}" font-size="26" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">CAST / EPISODES / SEASON 2 / WHERE TO WATCH</text>
    <rect x="226" y="390" width="430" height="8" fill="${colors.crimson}" />
    <rect x="676" y="390" width="170" height="8" fill="${colors.lime}" />
    <text x="228" y="462" fill="${colors.bone}" font-size="34" font-family="Arial, Helvetica, sans-serif">An unofficial Netflix guide built for search, speed, and clean context.</text>
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

  await writeSvgAndPng("bloodhounds-mark", markSvg, { width: 512, height: 512 });
  await writeSvgAndPng("bloodhounds-logo", logoSvg, { width: 1400 });
  await writeSvgAndPng("bloodhounds-hero", heroSvg, { width: 1600 });
  await writeSvgAndPng("bloodhounds-brotherhood", brotherhoodSvg, { width: 1200 });
  await writeSvgAndPng("bloodhounds-ledger", ledgerSvg, { width: 1200 });
  await writeSvgAndPng("bloodhounds-og", ogSvg, { width: 1200, height: 630 });

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
