<script setup lang="ts">
import { Phone, Mail, MapPin } from 'lucide-vue-next'
import { site, nav } from '~/data/site'
import { services } from '~/data/services'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink-950 text-ink-300">
    <div class="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div>
        <NuxtLink to="/" aria-label="RB Builders London, home" class="inline-block">
          <AppLogo />
        </NuxtLink>
        <p class="mt-6 max-w-xs">
          Bathrooms, kitchens, extensions, loft conversions and refurbishments across {{ site.coverage }}.
        </p>
      </div>

      <nav aria-label="Footer">
        <h2 class="font-display text-lg uppercase tracking-[0.2em] text-white">Explore</h2>
        <ul class="mt-5 space-y-1">
          <li v-for="item in nav" :key="item.to">
            <NuxtLink :to="item.to" class="inline-block py-1.5 hover:text-brand-400">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="font-display text-lg uppercase tracking-[0.2em] text-white">Services</h2>
        <ul class="mt-5 space-y-1">
          <li v-for="s in services" :key="s.id">
            <NuxtLink :to="`/services#${s.id}`" class="inline-block py-1.5 hover:text-brand-400">{{ s.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-display text-lg uppercase tracking-[0.2em] text-white">Get in touch</h2>
        <ul class="mt-5 space-y-4">
          <li>
            <a :href="site.phoneHref" class="flex items-center gap-3 hover:text-brand-400">
              <Phone class="size-5 text-brand-400" aria-hidden="true" />
              {{ site.phone }}
            </a>
          </li>
          <li>
            <a :href="`mailto:${site.email}`" class="flex items-center gap-3 break-all hover:text-brand-400">
              <Mail class="size-5 shrink-0 text-brand-400" aria-hidden="true" />
              {{ site.email }}
            </a>
          </li>
          <li class="flex items-center gap-3">
            <MapPin class="size-5 text-brand-400" aria-hidden="true" />
            {{ site.area }}
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-site flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>Walthamstow · East London</p>
      </div>
    </div>
  </footer>
</template>
