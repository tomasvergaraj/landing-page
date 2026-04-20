import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { SEO_CONFIG } from './src/config.js';
import {
  buildStructuredData,
  getSocialLinks,
  normalizeAbsoluteUrl,
  normalizeSiteUrl,
} from './src/seo.js';

function buildRobots(siteUrl) {
  const lines = ['User-agent: *', 'Allow: /'];

  if (siteUrl) {
    lines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
  }

  return `${lines.join('\n')}\n`;
}

function buildSitemap(siteUrl) {
  const today = new Date().toISOString();

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    `    <loc>${siteUrl}/</loc>`,
    `    <lastmod>${today}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
    '</urlset>',
    '',
  ].join('\n');
}

function buildStaticStructuredData(siteUrl) {
  const canonicalUrl = `${siteUrl}/`;
  const logoUrl = normalizeAbsoluteUrl(SEO_CONFIG.organizationLogoPath, siteUrl);
  const imageUrl = normalizeAbsoluteUrl(SEO_CONFIG.ogImagePath, siteUrl);

  return JSON.stringify(
    buildStructuredData({
      canonicalUrl,
      logoUrl,
      imageUrl,
      socialLinks: getSocialLinks(),
    }),
  ).replace(/</g, '\\u003c');
}

function seoFilesPlugin(siteUrl) {
  return {
    name: 'seo-files',
    transformIndexHtml(html) {
      if (!siteUrl) {
        return html;
      }

      const absoluteLogoUrl = normalizeAbsoluteUrl(SEO_CONFIG.ogImagePath, siteUrl);
      const structuredData = buildStaticStructuredData(siteUrl);

      return html
        .replace(
          '<meta property="og:image" content="/logo.png" />',
          `<meta property="og:image" content="${absoluteLogoUrl}" />`,
        )
        .replace(
          '<meta property="og:image:secure_url" content="/logo.png" />',
          `<meta property="og:image:secure_url" content="${absoluteLogoUrl}" />`,
        )
        .replace(
          '<meta name="twitter:image" content="/logo.png" />',
          `<meta name="twitter:image" content="${absoluteLogoUrl}" />`,
        )
        .replace(
          '</head>',
          [
            `    <link rel="canonical" href="${siteUrl}/">`,
            `    <link rel="alternate" hreflang="es-CL" href="${siteUrl}/">`,
            `    <link rel="alternate" hreflang="x-default" href="${siteUrl}/">`,
            `    <meta property="og:url" content="${siteUrl}/">`,
            `    <script type="application/ld+json" data-seo-id="structured-data">${structuredData}</script>`,
            '  </head>',
          ].join('\n'),
        );
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');

      fs.writeFileSync(path.join(distDir, 'robots.txt'), buildRobots(siteUrl), 'utf8');

      if (siteUrl) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(siteUrl), 'utf8');
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL || env.SITE_URL);

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      minify: 'esbuild',
    },
  };
});
