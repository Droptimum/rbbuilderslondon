<script setup lang="ts">
useSeoMeta({
  title: 'About us',
  description:
    'RB Builders London is a Walthamstow building company delivering bathrooms, kitchens, extensions, lofts and refurbishments across East London.',
})
</script>

<template>
  <div>
    <PageHero
      title="About us"
      eyebrow="Who we are"
      intro="A local building team focused on careful, high-quality work across Walthamstow and East London."
      image="/images/projects/tiled-niches.jpg"
    />
    <AboutStory />
    <AboutValues />
    <AboutAreas />
    <CtaBand />
  </div>
</template>
