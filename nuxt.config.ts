import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  // Self-hosted at build time: no render-blocking request to Google Fonts
  fonts: {
    families: [
      { name: 'Barlow', provider: 'google', weights: [400, 500, 600] },
      { name: 'Barlow Condensed', provider: 'google', weights: [500, 600, 700] },
    ],
    defaults: { subsets: ['latin'], styles: ['normal'] },
  },
  // Screens are Tailwind's defaults (built in) plus `xs`, the mobile-first base for `sizes`:
  // a bare `sizes="100vw"` is read as a 1px screen in @nuxt/image v2, so always prefix with `xs:`.
  // Sources are 800px wide; IPX never upscales, so larger srcset widths just reuse 800px.
  image: {
    format: ['avif', 'webp'],
    quality: 60,
    screens: { xs: 320 },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      titleTemplate: '%s · RB Builders London',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#15181a' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/services', '/client-feedback', '/about', '/contact', '/sitemap.xml', '/robots.txt'],
    },
  },
})
