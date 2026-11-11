<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import { serviceAreas, site } from '~/data/site'
</script>

<template>
  <section class="py-24">
    <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
      <SectionHeading
        eyebrow="Where we work"
        title="Walthamstow & East London"
        :intro="`Based in ${site.area}, we work across the surrounding boroughs. If you’re nearby and don’t see your area, just ask.`"
      />
      <ul class="flex flex-wrap gap-3">
        <li
          v-for="a in serviceAreas"
          :key="a"
          class="flex min-h-11 items-center gap-2 bg-stone-100 px-4 font-semibold text-ink-800"
        >
          <MapPin class="size-4 text-brand-600" aria-hidden="true" />
          {{ a }}
        </li>
      </ul>
    </div>
  </section>
</template>
