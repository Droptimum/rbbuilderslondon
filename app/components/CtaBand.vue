<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
import { site } from '~/data/site'

withDefaults(defineProps<{ title?: string; text?: string }>(), {
  title: 'Planning a project? Let’s talk.',
  text: 'Tell us what you have in mind and we will arrange a free visit and a clear, itemised quote.',
})
</script>

<template>
  <section class="relative overflow-hidden bg-brand-700 text-white">
    <svg class="absolute -right-16 -bottom-24 h-[28rem] text-brand-600" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M2 22 24 6l22 16" fill="none" stroke="currentColor" stroke-width="3" />
    </svg>
    <div class="container-site relative flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
      <div class="max-w-2xl">
        <h2 class="text-4xl uppercase md:text-5xl">{{ title }}</h2>
        <p class="mt-4 text-lg text-white/90">{{ text }}</p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row md:shrink-0">
        <NuxtLink to="/contact#quote" class="btn bg-white text-ink-900 hover:bg-stone-100">
          Get a free quote
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
        <a :href="site.phoneHref" class="btn border-2 border-white text-white hover:bg-white hover:text-ink-900">
          <Phone class="size-4" aria-hidden="true" />
          {{ site.phone }}
        </a>
      </div>
    </div>
  </section>
</template>
