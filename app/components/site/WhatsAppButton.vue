<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <a
    :href="site.whatsappHref"
    target="_blank"
    rel="noopener"
    class="group fixed right-4 bottom-4 z-30 flex items-center gap-3 rounded-full bg-[#1f8f4a] py-2.5 pr-5 pl-3 text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
  >
    <svg viewBox="0 0 32 32" class="size-9 shrink-0" aria-hidden="true" fill="currentColor">
      <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.3-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.6 5 2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z" />
    </svg>
    <span class="hidden leading-tight sm:block">
      <span class="block font-semibold">WhatsApp</span>
      <span class="block text-sm text-white/90">{{ site.phone }}</span>
    </span>
    <span class="sr-only sm:hidden">Message us on WhatsApp (opens in a new tab)</span>
  </a>
</template>
