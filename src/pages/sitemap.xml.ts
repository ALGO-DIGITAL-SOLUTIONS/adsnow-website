// lastmod se schimbă de mână când se schimbă conținutul paginii, nu la fiecare build.
import { SITE } from '../data/site';

const PAGES: [string, string][] = [
  ['/', '2026-09-29'],
  ['/creare-site-brasov', '2026-09-29'],
  ['/seo-local-brasov', '2026-09-29'],
  ['/social-media-foto-video', '2026-09-29'],
  ['/promovare-pensiuni', '2026-09-29'],
  ['/proiecte', '2026-09-29'],
  ['/audit-gratuit', '2026-09-29'],
  ['/politica-confidentialitate', '2026-09-29'],
];

export function GET() {
  const urls = PAGES.map(([p, d]) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
