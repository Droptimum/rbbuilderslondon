<script setup lang="ts">
import { site } from '~/data/site'

const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`
</script>

<template>
  <div class="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-[16/7]">
    <iframe
      :src="src"
      title="Map showing Walthamstow, London E17"
      class="absolute inset-0 size-full border-0 grayscale-[35%]"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    />
  </div>
</template>
