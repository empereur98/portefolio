export function useAnimateOnScroll(threshold = 0.15) {
  let observer: IntersectionObserver | null = null

  const initAnimations = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer!.observe(el))
  }

  onMounted(() => {
    nextTick(() => {
      initAnimations()
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    reinit: initAnimations,
  }
}
