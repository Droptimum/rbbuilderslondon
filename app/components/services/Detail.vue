<script setup lang="ts">
import { Check, ArrowRight } from 'lucide-vue-next'
import type { Service } from '~/data/services'

defineProps<{ service: Service; index: number; total: number }>()
</script>

<template>
  <section :id="service.id" :class="index % 2 ? 'bg-stone-50' : 'bg-white'" class="py-20 md:py-28">
    <div class="container-site grid gap-12 lg:grid-cols-2 lg:gap-20" :class="index % 2 && 'lg:[&>*:first-child]:order-2'">
      <div v-reveal>
        <div class="flex items-center gap-4">
          <span class="grid size-16 place-items-center bg-ink-900 text-brand-400">
            <component :is="service.icon" class="size-8" aria-hidden="true" />
          </span>
          <span class="font-display text-lg tracking-[0.25em] text-ink-500">0{{ index + 1 }} / 0{{ total }}</span>
        </div>
        <h2 class="mt-8 text-4xl uppercase md:text-5xl">{{ service.title }}</h2>
        <p class="mt-6 text-lg text-ink-700">{{ service.description }}</p>
        <NuxtLink to="/contact#quote" class="btn btn-primary mt-10">
          Get a {{ service.title.toLowerCase() }} quote
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div v-reveal="100">
        <NuxtPicture
          v-if="service.image"
          :src="service.image.src"
          :alt="service.image.alt"
          width="800"
          height="600"
          loading="lazy"
          sizes="xs:100vw lg:600px"
          :img-attrs="{ class: 'mb-8 aspect-[4/3] w-full object-cover' }"
        />
        <div class="bg-ink-900 p-8 text-white md:p-10">
          <h3 class="font-display text-xl uppercase tracking-[0.2em] text-brand-400">What’s included</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="item in service.includes" :key="item" class="flex gap-3">
              <Check class="mt-1 size-5 shrink-0 text-brand-400" aria-hidden="true" />
              <span class="text-ink-200">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
