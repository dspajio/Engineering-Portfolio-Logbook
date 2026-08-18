// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // TODO: 上线前替换为你的正式域名（Cloudflare Pages 分配）
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  // 构建时静默，查看公开图片占用以控制体积
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});