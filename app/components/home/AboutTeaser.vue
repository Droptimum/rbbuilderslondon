<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'

const promises = ['Free, no-obligation quotes', 'Itemised written pricing', 'One team for every trade', 'Tidy, respectful sites']
</script>

<template>
  <section class="bg-stone-50 pt-20 pb-24 lg:pt-6">
    <div class="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div v-reveal class="relative">
        <NuxtPicture
          src="/images/projects/marble-cloakroom.jpg"
          alt="Marble cloakroom with vessel basin and illuminated mirror"
          width="800"
          height="600"
          loading="lazy"
          sizes="xs:100vw lg:600px"
          :img-attrs="{ class: 'aspect-[4/3] w-full object-cover' }"
        />
        <div class="absolute -right-3 -bottom-6 hidden bg-ink-900 p-6 text-white sm:block lg:-right-10">
          <p class="font-display text-4xl font-semibold uppercase text-brand-400">E17</p>
          <p class="mt-1 font-display text-sm uppercase tracking-[0.25em] text-ink-200">Walthamstow based</p>
        </div>
        <div class="absolute -top-4 -left-4 -z-10 size-32 border-4 border-brand-400" aria-hidden="true" />
      </div>
      <div v-reveal="100">
        <SectionHeading eyebrow="Welcome to RB Builders" title="Your local builder in Walthamstow" />
        <div class="mt-6 space-y-4 text-lg text-ink-700">
          <p>
            We are a Walthamstow-based building company specialising in bathrooms, kitchens, extensions, loft conversions and
            full refurbishments across East London.
          </p>
          <p>
            We take pride in careful craftsmanship and a personal service, from the first visit to the final clean. One team, one
            point of contact, and a finish you will be proud of.
          </p>
        </div>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2">
          <li v-for="t in promises" :key="t" class="flex items-center gap-3 font-semibold">
            <span class="grid size-6 place-items-center bg-brand-600 text-white"><Check class="size-4" aria-hidden="true" /></span>
            {{ t }}
          </li>
        </ul>
        <NuxtLink to="/about" class="btn btn-outline-dark mt-10">
          More about us
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
