<script setup lang="ts">
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-vue-next'
import { site } from '~/data/site'

const channels = [
  { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: site.whatsappHref, external: true },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Find us', value: site.area },
]
</script>

<template>
  <ul class="space-y-4">
    <li v-for="c in channels" :key="c.label">
      <component
        :is="c.href ? 'a' : 'div'"
        :href="c.href"
        :target="c.external ? '_blank' : undefined"
        :rel="c.external ? 'noopener' : undefined"
        class="group flex items-center gap-5 bg-stone-50 p-5 ring-1 ring-ink-200 transition-colors"
        :class="c.href && 'hover:bg-ink-900 hover:ring-ink-900'"
      >
        <span class="grid size-12 shrink-0 place-items-center bg-ink-900 text-brand-400 transition-colors group-hover:bg-brand-400 group-hover:text-ink-950">
          <component :is="c.icon" class="size-5" aria-hidden="true" />
        </span>
        <span class="min-w-0">
          <span class="block font-display text-sm uppercase tracking-[0.2em] text-ink-500" :class="c.href && 'group-hover:text-ink-300'">{{ c.label }}</span>
          <span class="block font-semibold break-words text-ink-900" :class="c.href && 'group-hover:text-white'">{{ c.value }}</span>
        </span>
      </component>
    </li>
  </ul>
</template>
