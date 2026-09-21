import { site } from '../site.config';
export const GET = () => new Response(`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
