<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="sr-only z-50 bg-brand-400 px-4 py-3 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
    >
      Skip to main content
    </a>
    <SiteHeader />
    <main id="main" class="flex-1" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
    <WhatsAppButton />
  </div>
</template>
