// În previzualizare site-ul se închide complet pentru motoare; pe producție e deschis.
import { PREVIEW, SITE } from '../data/site';

export function GET() {
  const body = PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
