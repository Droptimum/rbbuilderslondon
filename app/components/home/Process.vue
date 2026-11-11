<script setup lang="ts">
const steps = [
  { title: 'Free visit', text: 'We come round, look at the space and listen to what you want.' },
  { title: 'Clear quote', text: 'You get an itemised written quote and a realistic timeline. No surprises.' },
  { title: 'The build', text: 'One team handles every trade, keeping you updated as work progresses.' },
  { title: 'Handover', text: 'We snag, clean up and walk you through the finished job.' },
]
</script>

<template>
  <section class="bg-stone-100 py-24">
    <div class="container-site">
      <SectionHeading eyebrow="How it works" title="Simple from start to finish" align="center" />
      <ol class="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 80" class="relative">
          <div class="flex items-center gap-4">
            <span class="grid size-14 shrink-0 place-items-center bg-ink-900 font-display text-2xl font-semibold text-brand-400">
              {{ i + 1 }}
            </span>
            <span v-if="i < steps.length - 1" class="hidden h-0.5 flex-1 bg-ink-200 lg:block" aria-hidden="true" />
          </div>
          <h3 class="mt-6 text-2xl uppercase">{{ s.title }}</h3>
          <p class="mt-2 text-ink-500">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
