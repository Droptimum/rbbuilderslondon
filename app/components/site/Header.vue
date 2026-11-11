<script setup lang="ts">
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-vue-next'
import { site, nav } from '~/data/site'

const open = ref(false)
const route = useRoute()
const menuButton = ref<HTMLButtonElement>()

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

watch(() => route.fullPath, () => (open.value = false))

function close() {
  open.value = false
  menuButton.value?.focus()
}

onMounted(() => {
  const onKey = (e: KeyboardEvent) => e.key === 'Escape' && open.value && close()
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})

watch(open, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header class="sticky top-0 z-40">
    <!-- Utility bar -->
    <div class="bg-brand-600 text-white">
      <div class="container-site flex h-10 items-center justify-between gap-4 text-sm">
        <p class="hidden items-center gap-2 sm:flex">
          <MapPin class="size-4" aria-hidden="true" />
          Serving {{ site.coverage }}
        </p>
        <div class="flex w-full items-center justify-between gap-6 sm:w-auto sm:justify-end">
          <a :href="site.phoneHref" class="flex items-center gap-2 font-semibold hover:underline">
            <Phone class="size-4" aria-hidden="true" />
            {{ site.phone }}
          </a>
          <a :href="`mailto:${site.email}`" class="flex items-center gap-2 hover:underline">
            <Mail class="size-4" aria-hidden="true" />
            <span class="hidden md:inline">{{ site.email }}</span>
            <span class="md:hidden">Email us</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main bar -->
    <div class="relative bg-ink-900 text-white shadow-[0_1px_0_0_rgb(255_255_255/0.06)]">
      <div class="pointer-events-none absolute inset-y-0 left-0 hidden w-[calc(50%-24rem)] bg-ink-950 lg:block" aria-hidden="true" />
      <div class="container-site relative flex h-20 items-center justify-between gap-6">
        <NuxtLink
          to="/"
          class="relative -ml-4 flex h-full items-center bg-ink-950 pl-4 pr-14 sm:-ml-6 sm:pl-6 lg:-ml-8 lg:pl-8 slant-panel"
          aria-label="RB Builders London, home"
        >
          <AppLogo />
        </NuxtLink>

        <nav aria-label="Main" class="hidden lg:block">
          <ul class="flex items-center xl:gap-2">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="relative block px-2.5 py-2 whitespace-nowrap text-base text-ink-200 xl:px-3 xl:text-[1.05rem] transition-colors duration-200 hover:text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
                :class="isActive(item.to) && '!text-white after:!scale-x-100'"
                :aria-current="isActive(item.to) ? 'page' : undefined"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink to="/contact#quote" class="btn btn-outline-light hidden whitespace-nowrap sm:inline-flex lg:hidden xl:inline-flex">
            Get a quote
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
          <button
            ref="menuButton"
            type="button"
            class="grid size-12 place-items-center text-white lg:hidden"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            @click="open = !open"
          >
            <Menu v-if="!open" class="size-7" aria-hidden="true" />
            <X v-else class="size-7" aria-hidden="true" />
            <span class="sr-only">{{ open ? 'Close menu' : 'Open menu' }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-200 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="open"
          id="mobile-menu"
          class="absolute inset-x-0 top-full h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-white/10 bg-ink-900 lg:hidden"
        >
          <nav aria-label="Mobile" class="container-site py-6">
            <ul class="divide-y divide-white/10">
              <li v-for="item in nav" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="flex min-h-14 items-center justify-between font-display text-2xl font-semibold uppercase tracking-wide text-ink-200 hover:text-white"
                  :class="isActive(item.to) && '!text-brand-400'"
                  :aria-current="isActive(item.to) ? 'page' : undefined"
                >
                  {{ item.label }}
                  <ArrowRight class="size-5" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
            <NuxtLink to="/contact#quote" class="btn btn-accent mt-8 w-full">Get a free quote</NuxtLink>
            <a :href="site.phoneHref" class="btn btn-outline-light mt-3 w-full">
              <Phone class="size-4" aria-hidden="true" />
              {{ site.phone }}
            </a>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>
