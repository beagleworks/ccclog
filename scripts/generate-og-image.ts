/**
 * OGP画像生成スクリプト
 *
 * SVGテンプレートからPNG形式のOGP画像(1200x630)を生成する。
 * ビルドパイプラインの一部として実行される。
 */
import sharp from 'sharp';
import path from 'node:path';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#16213e"/>
    </linearGradient>
  </defs>

  <!-- 背景 -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- 上部アクセントライン -->
  <rect x="0" y="0" width="${WIDTH}" height="4" fill="#58a6ff"/>

  <!-- CCC ロゴ -->
  <text
    x="${WIDTH / 2}" y="260"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="140" font-weight="bold"
    fill="#58a6ff" text-anchor="middle"
    letter-spacing="-4"
  >CCC</text>

  <!-- サブタイトル -->
  <text
    x="${WIDTH / 2}" y="340"
    font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    font-size="32" fill="#e6edf3" text-anchor="middle"
  >AI Coding Tools CHANGELOG Viewer</text>

  <!-- 下部の補足テキスト -->
  <text
    x="${WIDTH / 2}" y="400"
    font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
    font-size="22" fill="#8b949e" text-anchor="middle"
  >Claude Code / Codex</text>

  <!-- 下部アクセントライン -->
  <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="#58a6ff"/>

  <!-- カテゴリカラーバー（装飾） -->
  <rect x="340" y="460" width="80" height="6" rx="3" fill="#3fb950"/>
  <rect x="440" y="460" width="80" height="6" rx="3" fill="#f0883e"/>
  <rect x="540" y="460" width="80" height="6" rx="3" fill="#a371f7"/>
  <rect x="640" y="460" width="80" height="6" rx="3" fill="#79c0ff"/>
  <rect x="740" y="460" width="80" height="6" rx="3" fill="#8b949e"/>
  <!-- URL -->
  <text
  x="${WIDTH / 2}" y="540"
  font-family="'SF Mono', 'Fira Code', 'Consolas', monospace"
  font-size="20" fill="#8b949e" text-anchor="middle"
  >beagleworks.github.io/ccclog</text>
    
  <!-- URL -->
  <text
    x="${WIDTH / 2}" y="540"
    font-family="'SF Mono', 'Fira Code', 'Consolas', monospace"
    font-size="20" fill="#8b949e" text-anchor="middle"
  >beagleworks.github.io/ccclog</text>
</svg>`;

const outputPath = path.resolve('public/og-image.png');

await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log(`Generated: ${outputPath} (${WIDTH}x${HEIGHT})`);
