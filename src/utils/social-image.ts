import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { site } from '../site.config';
const require = createRequire(import.meta.url);
const font = readFileSync(require.resolve('@fontsource/inter/files/inter-latin-600-normal.woff'));

// This runs at build time, producing a real PNG for each post. No image API needed.
export async function socialImage(title: string, label = 'Notes & experiments') {
  const svg = await satori({ type: 'div', props: {
    style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fff', color: '#171717', width: '100%', height: '100%', padding: '72px', fontFamily: 'Inter', borderTop: '8px solid #171717' },
    children: [
      { type: 'div', props: { style: { fontSize: 24, color: '#666' }, children: label } },
      { type: 'div', props: { style: { fontSize: title.length > 100 ? 44 : title.length > 65 ? 54 : 72, lineHeight: 1.12, letterSpacing: '-3px' }, children: title } },
      { type: 'div', props: { style: { display: 'flex', justifyContent: 'space-between', fontSize: 24, borderTop: '1px solid #e5e5e5', paddingTop: '28px' }, children: [
        { type: 'span', props: { children: site.name } },
        { type: 'span', props: { style: { color: '#666' }, children: new URL(site.url).hostname } },
      ] } },
    ],
  } }, { width: 1200, height: 630, fonts: [{ name: 'Inter', data: font, weight: 600, style: 'normal' }] });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
