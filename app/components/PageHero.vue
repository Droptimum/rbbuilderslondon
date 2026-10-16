<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  title: string
  eyebrow?: string
  intro?: string
  image: string
}>()
</script>

<template>
  <section class="relative isolate overflow-hidden bg-ink-950 text-white">
    <img
      :src="image"
      alt=""
      width="800"
      height="600"
      class="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover opacity-40 lg:w-3/5 lg:opacity-70"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/30 lg:via-ink-950/80" aria-hidden="true" />
    <div class="container-site py-20 md:py-28">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-300">
        <ol class="flex items-center gap-2">
          <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
          <li aria-hidden="true"><ChevronRight class="size-4" /></li>
          <li aria-current="page" class="text-brand-400">{{ title }}</li>
        </ol>
      </nav>
      <p v-if="eyebrow" class="eyebrow eyebrow-light">{{ eyebrow }}</p>
      <h1 class="mt-4 max-w-3xl text-5xl uppercase md:text-7xl">{{ title }}</h1>
      <p v-if="intro" class="mt-6 max-w-xl text-lg text-ink-200">{{ intro }}</p>
    </div>
    <div class="absolute bottom-0 left-0 h-1.5 w-40 bg-brand-400" aria-hidden="true" />
  </section>
</template>
