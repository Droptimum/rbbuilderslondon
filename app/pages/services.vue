<script setup lang="ts">
import { services } from '~/data/services'
import { projects } from '~/data/projects'

usePageSeo({
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

    <ServicesJumpNav />

    <ServicesDetail v-for="(s, i) in services" :key="s.id" :service="s" :index="i" :total="services.length" />

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
