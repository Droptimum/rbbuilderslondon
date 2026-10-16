<script setup lang="ts">
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { ProjectImage } from '~/data/projects'

const props = defineProps<{ items: ProjectImage[] }>()

const dialog = ref<HTMLDialogElement>()
const active = ref(0)

function open(i: number) {
  active.value = i
  dialog.value?.showModal()
}
function step(d: number) {
  active.value = (active.value + d + props.items.length) % props.items.length
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}
</script>

<template>
  <div>
    <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      <li v-for="(p, i) in items" :key="p.src" v-reveal="(i % 3) * 60">
        <button
          type="button"
          class="group relative block aspect-[4/3] w-full overflow-hidden bg-ink-900"
          @click="open(i)"
        >
          <img
            :src="p.src"
            :alt="p.alt"
            width="800"
            height="600"
            loading="lazy"
            class="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-4 pt-10 text-left font-display text-sm font-semibold uppercase tracking-[0.15em] text-white md:text-base">
            {{ p.caption }}
          </span>
          <span class="sr-only">— view larger</span>
        </button>
      </li>
    </ul>

    <dialog
      ref="dialog"
      class="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink-950/90"
      aria-label="Project photo"
      @keydown="onKey"
      @click.self="dialog?.close()"
    >
      <div class="relative w-[min(92vw,64rem)]">
        <img :src="items[active]!.src" :alt="items[active]!.alt" width="800" height="600" class="w-full" />
        <p class="mt-3 font-display text-lg uppercase tracking-[0.15em] text-white">
          {{ items[active]!.caption }}
          <span class="text-ink-300"> · {{ active + 1 }} / {{ items.length }}</span>
        </p>
        <div class="absolute -top-14 right-0 flex gap-2">
          <button type="button" class="grid size-12 place-items-center bg-white/10 text-white hover:bg-white/20" @click="step(-1)">
            <ChevronLeft class="size-6" aria-hidden="true" /><span class="sr-only">Previous photo</span>
          </button>
          <button type="button" class="grid size-12 place-items-center bg-white/10 text-white hover:bg-white/20" @click="step(1)">
            <ChevronRight class="size-6" aria-hidden="true" /><span class="sr-only">Next photo</span>
          </button>
          <button type="button" class="grid size-12 place-items-center bg-brand-400 text-ink-950 hover:bg-brand-300" autofocus @click="dialog?.close()">
            <X class="size-6" aria-hidden="true" /><span class="sr-only">Close</span>
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>
