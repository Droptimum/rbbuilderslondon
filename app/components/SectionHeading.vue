<script setup lang="ts">
withDefaults(
  defineProps<{ eyebrow?: string; title: string; intro?: string; tone?: 'light' | 'dark'; align?: 'left' | 'center' }>(),
  { tone: 'dark', align: 'left' },
)
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="eyebrow" :class="tone === 'light' && 'eyebrow-light'">{{ eyebrow }}</p>
    <h2 class="mt-4 text-4xl uppercase md:text-5xl" :class="tone === 'light' ? 'text-white' : 'text-ink-900'">
      {{ title }}
    </h2>
    <p v-if="intro" class="mt-5 text-lg" :class="tone === 'light' ? 'text-ink-300' : 'text-ink-500'">{{ intro }}</p>
  </div>
</template>
