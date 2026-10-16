<script setup lang="ts">
import { ArrowRight, PencilRuler, ClipboardList, HardHat, ShieldCheck, Handshake, Sparkles, Check } from 'lucide-vue-next'
import { services } from '~/data/services'
import { projects } from '~/data/projects'
import { testimonials } from '~/data/testimonials'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Builders in Walthamstow, East London',
  titleTemplate: '%s · RB Builders London',
  description:
    'RB Builders London — bathrooms, kitchens, extensions, loft conversions and refurbishments in Walthamstow and East London. Free visits and itemised quotes.',
  ogTitle: 'RB Builders London',
  ogDescription: 'Bathrooms, kitchens, extensions, loft conversions and refurbishments in Walthamstow and East London.',
  ogImage: `${site.url}/images/projects/walk-in-shower.jpg`,
})

const strengths = [
  { icon: PencilRuler, title: 'Designed around you', text: 'We plan layouts and finishes with you, so the space fits how you actually live.' },
  { icon: HardHat, title: 'Precise workmanship', text: 'Straight lines, clean grout, sealed joints. The details that make a job last.' },
  { icon: ShieldCheck, title: 'Quality materials', text: 'We source durable, good-looking materials and fit them properly the first time.' },
  { icon: ClipboardList, title: 'Organised projects', text: 'A clear schedule, regular updates and a tidy site from day one to handover.' },
]

const steps = [
  { title: 'Free visit', text: 'We come round, look at the space and listen to what you want.' },
  { title: 'Clear quote', text: 'You get an itemised written quote and a realistic timeline. No surprises.' },
  { title: 'The build', text: 'One team handles every trade, keeping you updated as work progresses.' },
  { title: 'Handover', text: 'We snag, clean up and walk you through the finished job.' },
]
</script>

<template>
  <div>
    <HeroSlider />

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

    <!-- About teaser -->
    <section class="bg-stone-50 pt-20 pb-24 lg:pt-6">
      <div class="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div v-reveal class="relative">
          <img
            src="/images/projects/marble-cloakroom.jpg"
            alt="Marble cloakroom with vessel basin and illuminated mirror"
            width="800"
            height="600"
            loading="lazy"
            class="aspect-[4/3] w-full object-cover"
          />
          <div class="absolute -right-3 -bottom-6 hidden bg-ink-900 p-6 text-white sm:block lg:-right-10">
            <p class="font-display text-4xl font-semibold uppercase text-brand-400">E17</p>
            <p class="mt-1 font-display text-sm uppercase tracking-[0.25em] text-ink-200">Walthamstow based</p>
          </div>
          <div class="absolute -top-4 -left-4 -z-10 size-32 border-4 border-brand-400" aria-hidden="true" />
        </div>
        <div v-reveal="100">
          <SectionHeading
            eyebrow="Welcome to RB Builders"
            title="Your local builder in Walthamstow"
          />
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
            <li v-for="t in ['Free, no-obligation quotes', 'Itemised written pricing', 'One team for every trade', 'Tidy, respectful sites']" :key="t" class="flex items-center gap-3 font-semibold">
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

    <!-- Services -->
    <section class="bg-ink-900 py-24 text-white">
      <div class="container-site">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="What we do" title="Our services" tone="light" intro="Everything from a single bathroom to a whole-house renovation." />
          <NuxtLink to="/services" class="btn btn-outline-light self-start md:self-auto">
            All services
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <ul class="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          <li v-for="(s, i) in services" :key="s.id" v-reveal="i * 60" class="bg-ink-900">
            <NuxtLink
              :to="`/services#${s.id}`"
              class="group relative flex h-full flex-col p-8 transition-colors duration-300 hover:bg-ink-800"
            >
              <span class="font-display text-sm tracking-[0.25em] text-ink-300">0{{ i + 1 }}</span>
              <component :is="s.icon" class="mt-6 size-10 text-brand-400" aria-hidden="true" />
              <h3 class="mt-6 text-2xl uppercase">{{ s.title }}</h3>
              <p class="mt-3 flex-1 text-ink-300">{{ s.summary }}</p>
              <span class="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
                Learn more
                <ArrowRight class="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <span class="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-400 transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Recent work -->
    <section class="py-24">
      <div class="container-site">
        <SectionHeading eyebrow="Recent work" title="A few of our finished bathrooms" intro="Click any photo to see it larger." />
        <div class="mt-12">
          <ProjectGallery :items="projects.slice(0, 6)" />
        </div>
      </div>
    </section>

    <!-- Process -->
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

    <!-- Feedback teaser -->
    <section class="py-24">
      <div class="container-site">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Client feedback" title="What our clients say" />
          <NuxtLink to="/client-feedback" class="btn btn-outline-dark self-start md:self-auto">
            Read more
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <TestimonialCard v-for="(t, i) in testimonials.slice(0, 3)" :key="i" v-reveal="i * 80" :item="t" />
        </div>
      </div>
    </section>

    <!-- Personal touch -->
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

    <CtaBand />
  </div>
</template>
