<script setup lang="ts">
import { projects } from '~/data/projects'

usePageSeo({
  title: 'Builders in Walthamstow, East London',
  description:
    'RB Builders London — bathrooms, kitchens, extensions, loft conversions and refurbishments in Walthamstow and East London. Free visits and itemised quotes.',
})
</script>

<template>
  <div>
    <HomeHeroSlider />
    <HomeStrengths />
    <HomeAboutTeaser />
    <HomeServices />

    <section class="py-24">
      <div class="container-site">
        <SectionHeading eyebrow="Recent work" title="A few of our finished bathrooms" intro="Click any photo to see it larger." />
        <div class="mt-12">
          <ProjectGallery :items="projects.slice(0, 6)" />
        </div>
      </div>
    </section>

    <HomeProcess />
    <HomeTestimonials />
    <HomePromise />
    <CtaBand />
  </div>
</template>
