<script setup lang="ts">
import { Check, ArrowRight } from 'lucide-vue-next'
import { services } from '~/data/services'
import { projects } from '~/data/projects'

useSeoMeta({
  title: 'Services',
  description:
    'Bathrooms, kitchens, extensions, loft conversions and refurbishments in Walthamstow and East London, delivered by one team from start to finish.',
})
</script>

<template>
  <div>
    <PageHero
      title="Our services"
      eyebrow="What we do"
      intro="From a new bathroom to a whole-house renovation, one team handles every stage of the build."
      image="/images/projects/freestanding-bath.jpg"
    />

    <!-- Jump links -->
    <nav aria-label="Services on this page" class="sticky top-[7.5rem] z-20 border-b border-ink-200 bg-white/95 backdrop-blur">
      <ul class="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
        <li v-for="s in services" :key="s.id" class="shrink-0">
          <a :href="`#${s.id}`" class="flex min-h-11 items-center gap-2 px-4 font-display text-sm font-semibold uppercase tracking-[0.15em] text-ink-700 ring-1 ring-ink-200 hover:bg-ink-900 hover:text-white">
            <component :is="s.icon" class="size-4" aria-hidden="true" />
            {{ s.title }}
          </a>
        </li>
      </ul>
    </nav>

    <section
      v-for="(s, i) in services"
      :id="s.id"
      :key="s.id"
      :class="i % 2 ? 'bg-stone-50' : 'bg-white'"
      class="py-20 md:py-28"
    >
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:gap-20" :class="i % 2 && 'lg:[&>*:first-child]:order-2'">
        <div v-reveal>
          <div class="flex items-center gap-4">
            <span class="grid size-16 place-items-center bg-ink-900 text-brand-400">
              <component :is="s.icon" class="size-8" aria-hidden="true" />
            </span>
            <span class="font-display text-lg tracking-[0.25em] text-ink-500">0{{ i + 1 }} / 0{{ services.length }}</span>
          </div>
          <h2 class="mt-8 text-4xl uppercase md:text-5xl">{{ s.title }}</h2>
          <p class="mt-6 text-lg text-ink-700">{{ s.description }}</p>
          <NuxtLink to="/contact#quote" class="btn btn-primary mt-10">
            Get a {{ s.title.toLowerCase() }} quote
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div v-reveal="100">
          <img
            v-if="s.image"
            :src="s.image.src"
            :alt="s.image.alt"
            width="800"
            height="600"
            loading="lazy"
            class="mb-8 aspect-[4/3] w-full object-cover"
          />
          <div class="bg-ink-900 p-8 text-white md:p-10">
            <h3 class="font-display text-xl uppercase tracking-[0.2em] text-brand-400">What’s included</h3>
            <ul class="mt-6 space-y-4">
              <li v-for="item in s.includes" :key="item" class="flex gap-3">
                <Check class="mt-1 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                <span class="text-ink-200">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="container-site">
        <SectionHeading eyebrow="Gallery" title="Bathroom projects" intro="A selection of bathrooms, cloakrooms and showers we have completed." />
        <div class="mt-12">
          <ProjectGallery :items="projects" />
        </div>
      </div>
    </section>

    <CtaBand title="Not sure where to start?" text="Tell us about your home and what you want to change. We’ll suggest the best approach and give you a free quote." />
  </div>
</template>
