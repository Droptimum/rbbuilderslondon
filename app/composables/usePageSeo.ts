import { site } from '~/data/site'

/** Per-page title + description, mirrored into Open Graph (Twitter falls back to og:*). */
export function usePageSeo({ title, description }: { title: string; description: string }) {
  useSeoMeta({
    title,
    description,
    ogTitle: `${title} · ${site.name}`,
    ogDescription: description,
  })
}
