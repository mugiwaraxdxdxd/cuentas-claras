export function useIsScrolled(threshold = 50) {
  const isScrolled = ref(false)

  if (import.meta.client) {
    const onScroll = () => {
      isScrolled.value = window.scrollY > threshold
    }
    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  }

  return isScrolled
}

export function useScrollProgress() {
  const progress = ref(0)

  if (import.meta.client) {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      progress.value = scrollHeight > 0 ? Math.min(window.scrollY / scrollHeight, 1) : 0
    }
    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
  }

  return progress
}
