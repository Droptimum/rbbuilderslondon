<script setup lang="ts">
import { PencilRuler, HardHat, Sparkles, ShieldCheck, ClipboardList, Handshake, MapPin } from 'lucide-vue-next'
import { serviceAreas, site } from '~/data/site'

useSeoMeta({
  title: 'About us',
  description:
    'RB Builders London is a Walthamstow building company delivering bathrooms, kitchens, extensions, lofts and refurbishments across East London.',
})

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
  <div>
    <PageHero
      title="About us"
      eyebrow="Who we are"
      intro="A local building team focused on careful, high-quality work across Walthamstow and East London."
      image="/images/projects/tiled-niches.jpg"
    />

    <section class="py-20 md:py-28">
      <div class="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div v-reveal>
          <SectionHeading eyebrow="Our story" title="Built on craftsmanship and trust" />
          <div class="mt-8 space-y-5 text-lg text-ink-700">
            <p>
              RB Builders London is based in Walthamstow, E17. We started out as bathroom and plumbing specialists, and over the years
              we’ve grown to take on kitchens, extensions, loft conversions and full refurbishments for homeowners across East London.
            </p>
            <p>
              Whatever the size of the job, our approach is the same: listen carefully, quote clearly, and deliver work we’re proud
              to put our name to. We combine thoughtful design with flawless installation to create spaces that are functional,
              beautiful and made to last.
            </p>
            <p>
              You deal with one team from the first visit to the final clean, and we keep you updated at every stage.
            </p>
          </div>
        </div>
        <div v-reveal="100" class="grid grid-cols-2 gap-4 self-start">
          <img src="/images/projects/vanity-unit.jpg" alt="Gloss vanity unit with vessel basin" width="800" height="600" loading="lazy" class="col-span-2 aspect-[4/3] w-full object-cover" />
          <img src="/images/projects/mosaic-basin.jpg" alt="Navy mosaic cloakroom with square basin" width="800" height="600" loading="lazy" class="aspect-square w-full object-cover" />
          <img src="/images/projects/stone-basin.jpg" alt="Stone-clad basin plinth" width="800" height="600" loading="lazy" class="aspect-square w-full object-cover" />
        </div>
      </div>
    </section>

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

    <section class="py-24">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Where we work"
          title="Walthamstow & East London"
          :intro="`Based in ${site.area}, we work across the surrounding boroughs. If you’re nearby and don’t see your area, just ask.`"
        />
        <ul class="flex flex-wrap gap-3">
          <li
            v-for="a in serviceAreas"
            :key="a"
            class="flex min-h-11 items-center gap-2 bg-stone-100 px-4 font-semibold text-ink-800"
          >
            <MapPin class="size-4 text-brand-600" aria-hidden="true" />
            {{ a }}
          </li>
        </ul>
      </div>
    </section>

    <CtaBand />
  </div>
</template>
