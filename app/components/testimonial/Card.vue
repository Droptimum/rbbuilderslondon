<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next'
import type { Testimonial } from '~/data/testimonials'

defineProps<{ item: Testimonial }>()
</script>

<template>
  <figure class="relative flex h-full flex-col bg-white p-8 ring-1 ring-ink-200">
    <span
      v-if="item.placeholder"
      class="absolute top-4 right-4 bg-amber-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-900"
    >
      Sample review
    </span>
    <Quote class="size-10 text-brand-600" aria-hidden="true" />
    <div class="mt-4 flex gap-1 text-brand-600" role="img" :aria-label="`Rated ${item.rating} out of 5`">
      <Star v-for="n in item.rating" :key="n" class="size-4 fill-current" aria-hidden="true" />
    </div>
    <blockquote class="mt-4 flex-1 text-lg text-ink-700">“{{ item.quote }}”</blockquote>
    <figcaption class="mt-6 border-t border-ink-200 pt-5">
      <span class="block font-display text-lg font-semibold uppercase tracking-wide text-ink-900">{{ item.name }}</span>
      <span class="block text-sm text-ink-500">{{ item.project }} · {{ item.location }}</span>
    </figcaption>
  </figure>
</template>
