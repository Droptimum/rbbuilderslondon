<script setup lang="ts">
import { testimonials } from '~/data/testimonials'

usePageSeo({
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
        <TestimonialInvite class="mt-16" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>
