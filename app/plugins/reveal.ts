export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '-80px 0px' },
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      const direction = binding.arg || 'up'
      const delay = typeof binding.value === 'number' ? binding.value : 0

      el.classList.add('reveal', `reveal-${direction}`)
      if (delay) el.style.transitionDelay = `${delay}s`

      observer?.observe(el)
    },
  })
})
