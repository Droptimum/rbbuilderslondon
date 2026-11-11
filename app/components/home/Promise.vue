<script setup lang="ts">
import { Handshake, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-ink-950 py-20 text-white">
    <div class="container-site grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
      <div class="flex gap-4 text-brand-400" aria-hidden="true">
        <Handshake class="size-14" />
        <Sparkles class="size-14" />
      </div>
      <p class="max-w-3xl font-display text-3xl leading-tight uppercase md:text-4xl">
        Your satisfaction is our priority. We go the extra mile so the finished space is a true reflection of your vision.
      </p>
    </div>
  </section>
</template>
