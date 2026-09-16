<template>
  <section class="about section" id="about">
    <div class="about__bg"></div>
    <div class="container">
      <div class="about__inner">
        <div class="about__left animate-on-scroll fade-left">
          <div class="about__image">
            <div class="about__image-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1" opacity="0.4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div class="about__experience">
            <h3>3+</h3>
            <span>Années<br />d'expérience</span>
          </div>
        </div>

        <div class="about__right">
          <UiSectionTitle
            label="À Propos de Moi"
            title="Je développe des solutions<br />qui aident les gens"
            class="animate-on-scroll fade-up"
          />
          <div class="about__text animate-on-scroll fade-up animate-delay-1">
            <p>
              Développeur Full Stack passionné, je conçois et développe des applications web modernes avec une attention particulière portée à l'expérience utilisateur et à la qualité du code.
            </p>
            <p>
              Mon approche combine créativité technique et rigueur méthodologique. Je m'investis dans chaque projet comme s'il était le mien, en cherchant toujours la solution la plus élégante et performante.
            </p>
          </div>
          <div class="about__cta animate-on-scroll fade-up animate-delay-2">
            <a href="#contact" class="btn btn-primary">
              Me Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  overflow: hidden;
}

.about__bg {
  position: absolute;
  inset: 0;
  background: var(--color-bg-secondary);
  z-index: var(--z-behind);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-4xl);
  align-items: center;
}

.about__left {
  position: relative;
}

.about__image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 3/4;
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
}

.about__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(ellipse at 50% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 70%);
}

.about__experience {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--color-accent);
  color: var(--color-bg-primary);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-glow-lg);
}

.about__experience h3 {
  font-family: var(--font-heading);
  font-size: var(--fs-h1);
  font-weight: var(--fw-bold);
  color: var(--color-bg-primary);
  line-height: 1;
}

.about__experience span {
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: rgba(10, 10, 26, 0.7);
  display: block;
  margin-top: var(--space-xs);
}

.about__text {
  margin-bottom: var(--space-xl);
}

.about__text p {
  font-size: var(--fs-body-lg);
}

@media (max-width: 768px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .about__left {
    max-width: 350px;
    margin: 0 auto;
  }

  .about__experience {
    right: -10px;
    bottom: -10px;
    padding: var(--space-lg);
  }

  .about__experience h3 {
    font-size: var(--fs-h2);
  }
}
</style>
