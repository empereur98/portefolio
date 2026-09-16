<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__container">
      <!-- Logo in Trito signature style: Yellow dot + Name -->
      <a href="#home" class="header__logo">
        <span class="header__logo-dot">.</span>
        <span class="header__logo-text">Tegue Franck</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="header__nav" aria-label="Navigation principale">
        <ul class="header__nav-list">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="header__nav-link"
              :class="{ active: activeSection === item.id }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Header CTA & Mobile Toggle -->
      <div class="header__actions">
        <a href="#contact" class="header__cta">
          Télécharger CV
        </a>

        <button
          class="header__burger"
          :class="{ active: mobileMenuOpen }"
          aria-label="Ouvrir le menu de navigation"
          @click="$emit('toggle-mobile-menu')"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  activeSection: string
  mobileMenuOpen: boolean
}>()

defineEmits<{
  (e: 'toggle-mobile-menu'): void
}>()

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projets' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
]

const isScrolled = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 40
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  padding: 24px 0;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: transparent;
}

.header--scrolled {
  background: rgba(10, 10, 26, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.35);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.header__logo {
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
}

.header__logo-dot {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-trito-yellow, #FFD15C);
  line-height: 1;
}

.header__logo-text {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 800;
  color: var(--color-trito-navy, #24315E);
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
}

.header--scrolled .header__logo-text {
  color: #FFFFFF;
}

/* Navigation */
.header__nav {
  display: none;
}

.header__nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__nav-link {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-trito-navy, #24315E);
  text-decoration: none;
  position: relative;
  padding: 6px 0;
  transition: color 0.25s ease;
}

.header--scrolled .header__nav-link {
  color: #a0a0c0;
}

.header__nav-link:hover,
.header__nav-link.active {
  color: var(--color-trito-coral, #FF4612);
}

.header--scrolled .header__nav-link.active {
  color: var(--color-accent);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-trito-coral, #FF4612);
  transition: width 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.header--scrolled .header__nav-link::after {
  background: var(--color-accent);
}

.header__nav-link:hover::after,
.header__nav-link.active::after {
  width: 100%;
}

/* Header Actions & Button */
.header__actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__cta {
  display: none;
  background-color: var(--color-trito-navy, #24315E);
  color: #FFFFFF !important;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  padding: 13px 30px;
  border-radius: 0;
  text-decoration: none;
  border: 1.5px solid var(--color-trito-navy, #24315E);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 14px rgba(36, 49, 94, 0.15);
}

.header__cta:hover {
  background-color: #FFFFFF !important;
  color: var(--color-trito-navy, #24315E) !important;
  border-color: var(--color-trito-navy, #24315E) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(36, 49, 94, 0.25);
}

.header--scrolled .header__cta {
  background-color: var(--color-accent);
  color: var(--color-bg-primary) !important;
  border-color: var(--color-accent);
}

.header--scrolled .header__cta:hover {
  background-color: #FFFFFF !important;
  color: var(--color-bg-primary) !important;
  border-color: #FFFFFF !important;
}

/* Hamburger Mobile Toggle */
.header__burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: var(--z-modal);
}

.header__burger span {
  display: block;
  height: 2.5px;
  width: 100%;
  background: var(--color-trito-navy, #24315E);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.header--scrolled .header__burger span {
  background: #FFFFFF;
}

.header__burger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background: var(--color-trito-coral, #FF4612);
}

.header__burger.active span:nth-child(2) {
  opacity: 0;
}

.header__burger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background: var(--color-trito-coral, #FF4612);
}

@media (min-width: 992px) {
  .header__nav {
    display: block;
  }

  .header__cta {
    display: inline-flex;
  }

  .header__burger {
    display: none;
  }
}
</style>
