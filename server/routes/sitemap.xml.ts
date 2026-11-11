import { nav, site } from '../../app/data/site'

// Prerendered at build time (see nitro.prerender.routes); add new pages to `nav` to list them here.
export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  const urls = nav
    .map(({ to }) => `  <url><loc>${site.url}${to}</loc><changefreq>monthly</changefreq><priority>${to === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
