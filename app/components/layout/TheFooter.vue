<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="#home" class="footer__logo">
            <span style="color: var(--color-trito-yellow, #FFD15C);">.</span>Tegue Franck
          </a>
          <p class="footer__tagline">
            Conception et développement d'applications web modernes et performantes.
          </p>
        </div>

        <nav class="footer__nav">
          <a href="#home" class="footer__nav-link">Accueil</a>
          <a href="#about" class="footer__nav-link">À propos</a>
          <a href="#skills" class="footer__nav-link">Compétences</a>
          <a href="#services" class="footer__nav-link">Services</a>
          <a href="#projects" class="footer__nav-link">Projets</a>
          <a href="#contact" class="footer__nav-link">Contact</a>
        </nav>

        <button class="footer__back-to-top" aria-label="Back to top" @click="scrollToTop">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">
          Conçu & Développé avec <span class="footer__heart">♥</span> avec Nuxt 4 & Vue 3.
        </p>
        <p class="footer__rights">
          © {{ currentYear }} TEGUE Franck. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.footer {
  background: var(--color-bg-primary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-3xl) 0 var(--space-xl);
}

.footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
}

.footer__brand {
  max-width: 300px;
}

.footer__logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
  text-decoration: none;
  display: inline-block;
  margin-bottom: var(--space-xs);
}

.footer__tagline {
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
  margin-bottom: 0;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.footer__nav-link {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast);
}

.footer__nav-link:hover {
  color: var(--color-accent);
}

.footer__back-to-top {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-circle);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.footer__back-to-top:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg-primary);
  transform: translateY(-3px);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  padding-top: var(--space-xl);
  font-size: var(--fs-tiny);
  color: var(--color-text-tertiary);
}

.footer__bottom p {
  margin: 0;
}

.footer__heart {
  color: #ff4757;
}

@media (max-width: 768px) {
  .footer__top {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
}
</style>
