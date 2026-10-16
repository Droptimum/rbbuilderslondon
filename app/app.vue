<script setup lang="ts">
import { site } from '~/data/site'

useHead({
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
