// lastmod se schimbă de mână când se schimbă conținutul paginii.
import { SITE } from '../data/site';
const PAGES: [string, string][] = [
  ['/', '2026-11-26'],
  ['/creare-site-brasov', '2026-11-26'],
  ['/seo-local-brasov', '2026-11-26'],
  ['/social-media-foto-video', '2026-11-26'],
  ['/automatizari', '2026-11-26'],
  ['/proiecte', '2026-11-26'],
  ['/preturi', '2026-11-26'],
  ['/audit-gratuit', '2026-11-26'],
  ['/politica-confidentialitate', '2026-11-26'],
];
export function GET() {
  const urls = PAGES.map(([p, d]) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
