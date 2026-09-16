export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeSection = ref(sectionIds[0] || '')

  let observer: IntersectionObserver | null = null

  const initScrollSpy = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer!.observe(element)
      }
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    initScrollSpy()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
    scrollToSection,
  }
}
