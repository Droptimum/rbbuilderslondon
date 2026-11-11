<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-ink-900 py-20 text-white">
    <div class="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Flexible payment"
          title="Pay 70% now, spread the rest"
          intro="Short of the full budget? Pay 70% of the total and split the remaining 30% into monthly instalments over 6 to 12 months."
          tone="light"
        />
        <NuxtLink to="/contact#quote" class="btn btn-accent mt-8">
          Get a free quote
          <ArrowRight class="size-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div v-reveal>
        <div class="flex h-16 font-display text-lg font-semibold uppercase tracking-widest" aria-hidden="true">
          <div class="flex w-[70%] items-center bg-brand-400 px-5 text-ink-950">70%</div>
          <div class="flex w-[30%] items-center justify-center border-2 border-l-0 border-dashed border-brand-400 text-brand-400">30%</div>
        </div>
        <dl class="mt-6 grid grid-cols-2 gap-6">
          <div>
            <dt class="font-display text-sm uppercase tracking-[0.2em] text-ink-300">Upfront</dt>
            <dd class="mt-1 text-lg">70% of the agreed price</dd>
          </div>
          <div>
            <dt class="font-display text-sm uppercase tracking-[0.2em] text-ink-300">Monthly</dt>
            <dd class="mt-1 text-lg">30% over 6–12 months</dd>
          </div>
        </dl>
        <p class="mt-6 text-sm text-ink-300">No interest or fees. Subject to agreement.</p>
      </div>
    </div>
  </section>
</template>
