<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section class="py-24">
    <div class="container-site">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Client feedback" title="What our clients say" />
        <NuxtLink to="/client-feedback" class="btn btn-outline-dark self-start md:self-auto">
          Read all reviews
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <TestimonialCard v-for="(t, i) in testimonials.slice(0, 3)" :key="i" v-reveal="i * 80" :item="t" />
      </div>
    </div>
  </section>
</template>
