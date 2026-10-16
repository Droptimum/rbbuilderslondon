<script setup lang="ts">
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-vue-next'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact us',
  description: 'Get a free quote from RB Builders London. Call, email, WhatsApp or send us a message about your project in Walthamstow or East London.',
})

const channels = [
  { icon: Phone, label: 'Call us', value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: site.whatsappHref, external: true },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Find us', value: site.area },
]
</script>

<template>
  <div>
    <PageHero
      title="Contact us"
      eyebrow="Get in touch"
      intro="We would love to hear from you. Tell us about your project and we’ll get back to you with next steps and a free quote."
      image="/images/projects/walk-in-shower.jpg"
    />

    <section class="py-20 md:py-28">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Talk to us" title="Let’s get started" />
          <p class="mt-5 text-lg text-ink-500">
            Reach us directly using the details below, or fill out the form and we’ll come back to you.
          </p>
          <ul class="mt-10 space-y-4">
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
        </div>

        <div id="quote" class="bg-white p-6 shadow-xl shadow-ink-950/10 ring-1 ring-ink-200 sm:p-10">
          <h2 class="text-3xl uppercase md:text-4xl">Request a free quote</h2>
          <p class="mt-2 mb-8 text-ink-500">We’ll get back to you as soon as we can.</p>
          <ContactForm />
        </div>
      </div>
    </section>

    <section aria-label="Map">
      <MapEmbed />
    </section>
  </div>
</template>
