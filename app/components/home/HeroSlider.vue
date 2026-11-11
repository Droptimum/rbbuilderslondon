<script setup lang="ts">
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-vue-next'

const slides = [
  {
    image: '/images/projects/walk-in-shower.jpg',
    alt: 'Frameless walk-in shower with chrome towel rail',
    eyebrow: 'Bathrooms · Walthamstow',
    title: 'Bathrooms built to last',
    text: 'Complete bathroom and en-suite fit-outs, from strip-out and plumbing to the final tile.',
  },
  {
    image: '/images/projects/freestanding-bath.jpg',
    alt: 'Freestanding bath in a grey-tiled bathroom',
    eyebrow: 'Extensions & lofts',
    title: 'More room for the way you live',
    text: 'Rear extensions and loft conversions that add space and value to East London homes.',
  },
  {
    image: '/images/projects/marble-bathroom.jpg',
    alt: 'Marble-tiled bathroom with vessel basin and illuminated mirror',
    eyebrow: 'Kitchens & refurbishments',
    title: 'One team, start to finish',
    text: 'Kitchens and full refurbishments managed by one builder, so you have one point of contact.',
  },
  {
    image: '/images/projects/vanity-unit.jpg',
    alt: 'Gloss vanity unit with vessel basin',
    eyebrow: 'Free quotes',
    title: 'Quality work, honestly priced',
    text: 'A free visit, a clear itemised quote and a tidy site, every time.',
  },
]

const DURATION = 7000
const index = ref(0)
const paused = ref(false)
const hovering = ref(false)
const reduceMotion = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const playing = computed(() => !paused.value && !hovering.value && !reduceMotion.value)
const count = computed(() => String(slides.length).padStart(2, '0'))
const current = computed(() => String(index.value + 1).padStart(2, '0'))

function go(i: number) {
  index.value = (i + slides.length) % slides.length
  restart()
}

function restart() {
  clearInterval(timer)
  if (playing.value) timer = setInterval(() => (index.value = (index.value + 1) % slides.length), DURATION)
}

watch(playing, restart)

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  paused.value = reduceMotion.value
  restart()
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-ink-950 text-white"
    aria-roledescription="carousel"
    aria-label="Our work"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="hovering = true"
    @focusout="hovering = false"
  >
    <!-- Images: full-bleed on mobile, right-hand panel on desktop -->
    <div class="absolute inset-0 -z-10 lg:left-[38%]">
      <img
        v-for="(slide, i) in slides"
        :key="slide.image"
        :src="slide.image"
        :alt="i === index ? slide.alt : ''"
        width="800"
        height="600"
        :fetchpriority="i === 0 ? 'high' : 'low'"
        :loading="i === 0 ? 'eager' : 'lazy'"
        class="absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out"
        :class="i === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30 lg:bg-gradient-to-r lg:from-ink-950 lg:via-ink-950/40 lg:to-transparent" aria-hidden="true" />
    </div>
    <!-- Diagonal panel echoing the header -->
    <div
      class="absolute inset-y-0 left-0 -z-10 hidden w-[46%] bg-ink-950 lg:block"
      style="clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%)"
      aria-hidden="true"
    />
    <div
      class="absolute inset-y-0 left-[37.5%] -z-10 hidden w-[8.6%] bg-brand-400/90 lg:block"
      style="clip-path: polygon(92% 0, 100% 0, 8% 100%, 0 100%)"
      aria-hidden="true"
    />

    <div class="container-site flex min-h-[calc(100dvh-7.5rem)] flex-col justify-end pt-24 pb-10 md:min-h-[42rem] lg:justify-center lg:pt-24 lg:pb-36">
      <h1 class="sr-only">RB Builders London — builders and bathroom specialists in Walthamstow, East London</h1>
      <div class="relative max-w-xl">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          leave-active-class="transition duration-300 ease-in"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div :key="index" :aria-live="playing ? 'off' : 'polite'" role="group" aria-roledescription="slide" :aria-label="`${current} of ${count}`">
            <p class="eyebrow eyebrow-light">{{ slides[index]!.eyebrow }}</p>
            <p class="mt-5 font-display text-5xl leading-[0.95] font-semibold uppercase sm:text-6xl xl:text-7xl">
              {{ slides[index]!.title }}
            </p>
            <p class="mt-6 max-w-md text-lg text-ink-200">{{ slides[index]!.text }}</p>
          </div>
        </Transition>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/contact#quote" class="btn btn-accent">
            Get a free quote
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="/services" class="btn border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-ink-950">
            Our services
          </NuxtLink>
        </div>
      </div>

      <!-- Controls -->
      <div class="mt-12 flex items-center gap-3 pr-16 sm:gap-5 sm:pr-0 lg:absolute lg:bottom-24 lg:left-[max(2rem,calc(50%-38rem))] lg:mt-0">
        <p class="font-display text-lg whitespace-nowrap tabular-nums tracking-widest">
          <span class="text-white">{{ current }}</span>
          <span class="text-ink-300"> / {{ count }}</span>
        </p>
        <div class="relative h-0.5 w-12 shrink-0 bg-white/25 sm:w-40" aria-hidden="true">
          <div
            class="absolute inset-y-0 left-0 bg-brand-400 transition-[width] duration-500 ease-out"
            :style="{ width: `${((index + 1) / slides.length) * 100}%` }"
          />
        </div>
        <div class="flex items-center gap-1">
          <button type="button" class="grid size-11 place-items-center text-ink-200 hover:text-brand-400" @click="go(index - 1)">
            <ChevronLeft class="size-6" aria-hidden="true" />
            <span class="sr-only">Previous slide</span>
          </button>
          <button type="button" class="grid size-11 place-items-center text-ink-200 hover:text-brand-400" @click="go(index + 1)">
            <ChevronRight class="size-6" aria-hidden="true" />
            <span class="sr-only">Next slide</span>
          </button>
          <button
            type="button"
            class="grid size-11 place-items-center text-ink-200 hover:text-brand-400"
            :aria-pressed="paused"
            @click="paused = !paused"
          >
            <Play v-if="paused" class="size-5" aria-hidden="true" />
            <Pause v-else class="size-5" aria-hidden="true" />
            <span class="sr-only">{{ paused ? 'Play slideshow' : 'Pause slideshow' }}</span>
          </button>
        </div>
      </div>

      <!-- Scroll cue -->
      <a href="#intro" class="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-200 hover:text-white xl:flex">
        <span class="relative block h-9 w-6 rounded-full border-2 border-current" aria-hidden="true">
          <span class="absolute top-1.5 left-1/2 h-2 w-0.5 -translate-x-1/2 rounded bg-current motion-safe:animate-bounce" />
        </span>
        <span class="font-display text-xs uppercase tracking-[0.35em]">Scroll</span>
      </a>
    </div>
  </section>
</template>
