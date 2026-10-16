// v-reveal: fades an element up as it scrolls into view.
// Server-rendered HTML stays fully visible; the hidden state is only applied once JS runs.
export default defineNuxtPlugin((nuxtApp) => {
  const reduce = import.meta.server || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const observer = reduce
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer!.unobserve(entry.target)
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      )

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (!observer) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) return // already on screen — never hide it
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      el.classList.add('reveal')
      observer.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
