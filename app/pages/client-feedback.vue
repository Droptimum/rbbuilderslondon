<script setup lang="ts">
import { MessageCircle, ArrowRight } from 'lucide-vue-next'
import { testimonials } from '~/data/testimonials'

useSeoMeta({
  title: 'Client feedback',
  description: 'What homeowners in Walthamstow and East London say about working with RB Builders London.',
})
</script>

<template>
  <div>
    <PageHero
      title="Client feedback"
      eyebrow="Reviews"
      intro="Here’s what homeowners across Walthamstow and East London say about working with us."
      image="/images/projects/marble-bathroom.jpg"
    />

    <section class="bg-stone-50 py-20 md:py-28">
      <div class="container-site">
        <div class="grid gap-6 md:grid-cols-2">
          <TestimonialCard v-for="(t, i) in testimonials" :key="i" v-reveal="(i % 2) * 80" :item="t" />
        </div>

        <div class="mt-16 flex flex-col items-start gap-6 bg-ink-900 p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div class="flex items-start gap-5">
            <MessageCircle class="size-10 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <h2 class="text-3xl uppercase">Worked with us?</h2>
              <p class="mt-2 max-w-xl text-ink-300">
                We’d love to hear how it went. Send us a few words about your project and we may feature it here.
              </p>
            </div>
          </div>
          <NuxtLink to="/contact#quote" class="btn btn-accent shrink-0">
            Leave feedback
            <ArrowRight class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>
