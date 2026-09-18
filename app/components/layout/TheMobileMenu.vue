<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--open': isOpen }">
    <div class="mobile-menu__backdrop" @click="$emit('close')"></div>

    <div class="mobile-menu__content">
      <div class="mobile-menu__header">
        <span class="mobile-menu__logo"><span style="color: var(--color-trito-yellow, #FFD15C);">.</span>Tegue Franck</span>
        <button class="mobile-menu__close" aria-label="Fermer le menu" @click="$emit('close')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <nav class="mobile-menu__nav">
        <ul class="mobile-menu__list">
          <li v-for="item in navItems" :key="item.id" class="mobile-menu__item">
            <a
              :href="`#${item.id}`"
              class="mobile-menu__link"
              :class="{ active: activeSection === item.id }"
              @click="$emit('close')"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="mobile-menu__footer">
        <a href="#contact" class="btn btn--primary btn--full" @click="$emit('close')">
          Télécharger CV
        </a>
        <p class="mobile-menu__copy">© 2025 TEGUE Franck. Tous droits réservés.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  activeSection: string
}>()

defineEmits<{
  (e: 'close'): void
}>()

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projets' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
]
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  pointer-events: none;
  visibility: hidden;
  transition: visibility var(--duration-normal);
}

.mobile-menu--open {
  pointer-events: auto;
  visibility: visible;
}

.mobile-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.mobile-menu--open .mobile-menu__backdrop {
  opacity: 1;
}

.mobile-menu__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 85%;
  max-width: 360px;
  background: var(--color-bg-secondary);
  border-left: 1px solid var(--color-border);
  padding: var(--space-2xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-out);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.mobile-menu--open .mobile-menu__content {
  transform: translateX(0);
}

.mobile-menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-2xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.mobile-menu__logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
}

.mobile-menu__close {
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.mobile-menu__close:hover {
  color: var(--color-accent);
}

.mobile-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.mobile-menu__link {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: var(--fw-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  display: inline-block;
  transition: all var(--duration-fast);
}

.mobile-menu__link:hover,
.mobile-menu__link.active {
  color: var(--color-accent);
  transform: translateX(6px);
}

.mobile-menu__footer {
  margin-top: var(--space-2xl);
}

.mobile-menu__copy {
  margin-top: var(--space-lg);
  font-size: var(--fs-tiny);
  color: var(--color-text-tertiary);
  text-align: center;
}
</style>
