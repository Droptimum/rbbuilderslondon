<script setup lang="ts">
import { PencilRuler, ClipboardList, HardHat, ShieldCheck } from 'lucide-vue-next'

const strengths = [
  { icon: PencilRuler, title: 'Designed around you', text: 'We plan layouts and finishes with you, so the space fits how you actually live.' },
  { icon: HardHat, title: 'Precise workmanship', text: 'Straight lines, clean grout, sealed joints. The details that make a job last.' },
  { icon: ShieldCheck, title: 'Quality materials', text: 'We source durable, good-looking materials and fit them properly the first time.' },
  { icon: ClipboardList, title: 'Organised projects', text: 'A clear schedule, regular updates and a tidy site from day one to handover.' },
]
</script>

<template>
  <!-- Strengths strip, overlapping the hero like a spec sheet -->
  <section id="intro" aria-label="Why choose us" class="relative z-10 bg-stone-50">
    <div class="container-site">
      <ul class="grid -translate-y-0 bg-white shadow-xl shadow-ink-950/10 sm:grid-cols-2 lg:-translate-y-14 lg:grid-cols-4">
        <li
          v-for="s in strengths"
          :key="s.title"
          class="border-ink-200 p-8 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
        >
          <component :is="s.icon" class="size-9 text-brand-600" aria-hidden="true" />
          <h2 class="mt-5 text-2xl uppercase">{{ s.title }}</h2>
          <p class="mt-2 text-ink-500">{{ s.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
