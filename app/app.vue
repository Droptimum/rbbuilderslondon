<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()
// No trailing slash, matching the NuxtLink URLs used across the site
const canonical = computed(() => site.url + (route.path === '/' ? '/' : route.path.replace(/\/+$/, '')))
const ogImage = `${site.url}/images/projects/walk-in-shower.jpg`

// Site-wide defaults; each page sets its own title/description via usePageSeo()
useSeoMeta({
  ogType: 'website',
  ogSiteName: site.name,
  ogLocale: 'en_GB',
  ogUrl: canonical,
  ogImage,
  ogImageWidth: 800,
  ogImageHeight: 600,
  ogImageAlt: 'Frameless glass walk-in shower fitted by RB Builders London',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        name: site.name,
        url: site.url,
        telephone: '+447906572127',
        email: site.email,
        image: `${site.url}/images/projects/walk-in-shower.jpg`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Walthamstow, London',
          postalCode: 'E17',
          addressCountry: 'GB',
        },
        areaServed: 'East London',
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
