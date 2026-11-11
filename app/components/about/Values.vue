<script setup lang="ts">
import { PencilRuler, HardHat, Sparkles, ShieldCheck, ClipboardList, Handshake } from 'lucide-vue-next'

const values = [
  { icon: PencilRuler, title: 'Custom designs', text: 'We work with you to create a space that suits your lifestyle, your home and your budget.' },
  { icon: HardHat, title: 'Precise installations', text: 'Our craftsmen handle every stage of the installation, so the result is seamless and built to last.' },
  { icon: Sparkles, title: 'Modern fixtures', text: 'We keep up with the latest fittings and technology, adding convenience and style to your home.' },
  { icon: ShieldCheck, title: 'Quality materials', text: 'We source durable, premium materials that keep looking good for years to come.' },
  { icon: ClipboardList, title: 'Efficient project management', text: 'We stick to agreed timelines and budgets, so your renovation stays stress-free.' },
  { icon: Handshake, title: 'A personal touch', text: 'Your satisfaction is our priority, and we go the extra mile to bring your vision to life.' },
]
</script>

<template>
  <section class="bg-ink-900 py-24 text-white">
    <div class="container-site">
      <SectionHeading eyebrow="Our standards" title="Highest standards, exceptional quality" tone="light" />
      <ul class="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(v, i) in values" :key="v.title" v-reveal="(i % 3) * 60" class="bg-ink-900 p-8 md:p-10">
          <component :is="v.icon" class="size-10 text-brand-400" aria-hidden="true" />
          <h3 class="mt-6 text-2xl uppercase">{{ v.title }}</h3>
          <p class="mt-3 text-ink-300">{{ v.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
