<template>
  <section class="py-20 md:py-28">
    <div class="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
      <div v-reveal>
        <SectionHeading eyebrow="Our story" title="Built on craftsmanship and trust" />
        <div class="mt-8 space-y-5 text-lg text-ink-700">
          <p>
            RB Builders London is based in Walthamstow, E17. We started out as bathroom and plumbing specialists, and over the years
            we’ve grown to take on kitchens, extensions, loft conversions and full refurbishments for homeowners across East London.
          </p>
          <p>
            Whatever the size of the job, our approach is the same: listen carefully, quote clearly, and deliver work we’re proud
            to put our name to. We combine thoughtful design with flawless installation to create spaces that are functional,
            beautiful and made to last.
          </p>
          <p>
            You deal with one team from the first visit to the final clean, and we keep you updated at every stage.
          </p>
        </div>
      </div>
      <div v-reveal="100" class="grid grid-cols-2 gap-4 self-start">
        <img src="/images/projects/vanity-unit.jpg" alt="Gloss vanity unit with vessel basin" width="800" height="600" loading="lazy" class="col-span-2 aspect-[4/3] w-full object-cover" />
        <img src="/images/projects/mosaic-basin.jpg" alt="Navy mosaic cloakroom with square basin" width="800" height="600" loading="lazy" class="aspect-square w-full object-cover" />
        <img src="/images/projects/stone-basin.jpg" alt="Stone-clad basin plinth" width="800" height="600" loading="lazy" class="aspect-square w-full object-cover" />
      </div>
    </div>
  </section>
</template>
