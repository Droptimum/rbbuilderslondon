<script setup lang="ts">
usePageSeo({
  title: 'Contact us',
  description: 'Get a free quote from RB Builders London. Call, email, WhatsApp or send us a message about your project in Walthamstow or East London.',
})
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
          <ContactChannels class="mt-10" />
        </div>

        <div id="quote" class="bg-white p-6 shadow-xl shadow-ink-950/10 ring-1 ring-ink-200 sm:p-10">
          <h2 class="text-3xl uppercase md:text-4xl">Request a free quote</h2>
          <p class="mt-2 text-ink-500">We’ll get back to you as soon as we can.</p>
          <p class="mt-4 mb-8 border-l-4 border-brand-600 bg-stone-50 px-4 py-3 text-ink-700">
            Short of the full budget? Pay 70% upfront and the remaining 30% in monthly instalments over 6–12 months, with no interest or fees.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>

    <section aria-label="Map">
      <ContactMap />
    </section>
  </div>
</template>
