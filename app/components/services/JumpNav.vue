<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <nav aria-label="Services on this page" class="sticky top-[7.5rem] z-20 border-b border-ink-200 bg-white/95 backdrop-blur">
    <ul class="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
      <li v-for="s in services" :key="s.id" class="shrink-0">
        <a :href="`#${s.id}`" class="flex min-h-11 items-center gap-2 px-4 font-display text-sm font-semibold uppercase tracking-[0.15em] text-ink-700 ring-1 ring-ink-200 hover:bg-ink-900 hover:text-white">
          <component :is="s.icon" class="size-4" aria-hidden="true" />
          {{ s.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>
