<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '~/data/services'
</script>

<template>
  <section class="bg-ink-900 py-24 text-white">
    <div class="container-site">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="What we do" title="Our services" tone="light" intro="Everything from a single bathroom to a whole-house renovation." />
        <NuxtLink to="/services" class="btn btn-outline-light self-start md:self-auto">
          All services
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
      </div>
      <ul class="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
        <li v-for="(s, i) in services" :key="s.id" v-reveal="i * 60" class="bg-ink-900">
          <NuxtLink
            :to="`/services#${s.id}`"
            class="group relative flex h-full flex-col p-8 transition-colors duration-300 hover:bg-ink-800"
          >
            <span class="font-display text-sm tracking-[0.25em] text-ink-300">0{{ i + 1 }}</span>
            <component :is="s.icon" class="mt-6 size-10 text-brand-400" aria-hidden="true" />
            <h3 class="mt-6 text-2xl uppercase">{{ s.title }}</h3>
            <p class="mt-3 flex-1 text-ink-300">{{ s.summary }}</p>
            <span class="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Learn more
              <ArrowRight class="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-400 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
