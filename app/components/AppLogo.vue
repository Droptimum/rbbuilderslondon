<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })
</script>

<template>
  <span
    class="inline-flex items-center gap-3 whitespace-nowrap"
    :class="tone === 'light' ? 'text-white' : 'text-ink-900'"
  >
    <svg viewBox="0 0 48 48" class="size-11 shrink-0" aria-hidden="true">
      <path d="M5 19 24 5l19 14" fill="none" class="stroke-brand-400" stroke-width="4" />
      <g fill="none" stroke="currentColor" stroke-width="3.5">
        <path d="M12 42V22h7a5 5 0 0 1 0 10h-7M18 32l5 10" />
        <path d="M27 42V22h6a4.5 4.5 0 0 1 0 9h-6m0 0h7a5.5 5.5 0 0 1 0 11h-7" />
      </g>
    </svg>
    <span class="flex flex-col leading-none">
      <span class="font-display text-[1.6rem] font-bold uppercase tracking-[0.06em]">RB Builders</span>
      <span class="mt-1 flex items-center gap-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.42em]">
        <span class="h-px w-6 bg-brand-400" />
        <span :class="tone === 'light' ? 'text-ink-300' : 'text-ink-500'">London</span>
      </span>
    </span>
    <span class="sr-only">RB Builders London</span>
  </span>
</template>
