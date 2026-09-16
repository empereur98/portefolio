<template>
  <div class="portfolio-page">
    <!-- Navigation Header -->
    <LayoutTheHeader
      :active-section="activeSection"
      :mobile-menu-open="mobileMenuOpen"
      @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
    />

    <!-- Mobile Drawer Menu -->
    <LayoutTheMobileMenu
      :is-open="mobileMenuOpen"
      :active-section="activeSection"
      @close="mobileMenuOpen = false"
    />

    <!-- Main Content Sections -->
    <main>
      <!-- Hero Section -->
      <SectionsHeroSection />

      <!-- Features Section -->
      <SectionsFeaturesSection />

      <!-- Skills Section -->
      <SectionsSkillsSection />

      <!-- About Section -->
      <SectionsAboutSection />

      <!-- Services Section -->
      <SectionsServicesSection />

      <!-- Projects / Works Section -->
      <SectionsProjectsSection />

      <!-- Testimonials Section -->
      <SectionsTestimonialsSection />

      <!-- Technical Articles / Blog Section -->
      <SectionsBlogSection />

      <!-- Freelance Banner Section -->
      <SectionsFreelanceSection />

      <!-- Contact Section -->
      <SectionsContactSection />
    </main>

    <!-- Footer -->
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
const sectionIds = [
  'home',
  'skills',
  'about',
  'services',
  'projects',
  'testimonials',
  'blog',
  'contact'
]

const { activeSection } = useScrollSpy(sectionIds)
useAnimateOnScroll()

const mobileMenuOpen = ref(false)

// Close mobile menu on Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  position: relative;
  overflow-x: hidden;
}

main {
  flex: 1;
}
</style>
