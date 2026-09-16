<template>
  <section class="trito-hero" id="home">
    <!-- Wavy texture overlay -->
    <div class="trito-hero__texture" aria-hidden="true">
      <svg class="trito-hero__texture-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 200 C 300 100, 600 400, 1100 250 C 1300 190, 1500 300, 1600 280" stroke="rgba(255, 255, 255, 0.14)" stroke-width="2" fill="none"/>
        <path d="M-50 350 C 350 250, 650 550, 1150 400 C 1350 340, 1550 450, 1650 430" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1.5" fill="none"/>
        <path d="M-80 500 C 320 400, 620 700, 1120 550 C 1320 490, 1520 600, 1620 580" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" fill="none"/>
        <path d="M-100 680 C 300 580, 600 880, 1100 730 C 1300 670, 1500 780, 1600 760" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1.5" fill="none"/>
      </svg>
    </div>

    <div class="container trito-hero__container">
      <div class="trito-hero__row">
        <!-- Left Content Column -->
        <div class="trito-hero__content">
          <span class="trito-hero__greeting animate-on-scroll fade-up">
            Bonjour, je suis
          </span>

          <h1 class="trito-hero__name animate-on-scroll fade-up animate-delay-1">
            TEGUE Franck
          </h1>

          <p class="trito-hero__role animate-on-scroll fade-up animate-delay-2">
            Développeur FullStack basé au Cameroun
          </p>

          <div class="trito-hero__actions animate-on-scroll fade-up animate-delay-3">
            <a href="#contact" class="trito-hero__btn-primary">
              Me contacter
            </a>
            <a href="#projects" class="trito-hero__btn-secondary">
              Mes projets
            </a>
          </div>

          <!-- Bottom Quote Box with Gold Double Quote -->
          <div class="trito-hero__quote animate-on-scroll fade-up animate-delay-4">
            <div class="trito-hero__quote-mark">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD15C">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p class="trito-hero__quote-text">
              « Je transforme vos besoins techniques en solutions logicielles performantes, élégantes et pérennes. »
            </p>
          </div>
        </div>

        <!-- Right Visual Column with Avatar & Integrated Trito Decorations -->
        <div class="trito-hero__visual animate-on-scroll fade-left">
          <div class="trito-hero__visual-wrapper">
            <!-- Decorative Organic Gold Splash (Left behind the torso) -->
            <div class="trito-hero__shape-splash" aria-hidden="true">
              <svg width="260" height="260" viewBox="0 0 200 200" fill="#FFD15C">
                <path d="M42.7,-64.8C54.4,-57.1,62.3,-43.8,68.8,-29.8C75.2,-15.8,80.1,-1.1,77.5,12.7C74.9,26.5,64.8,39.3,53.2,50.1C41.6,60.9,28.6,69.7,14.6,72.6C0.7,75.5,-14.2,72.6,-28.3,66.5C-42.5,60.4,-55.9,51.1,-65.4,38.3C-74.8,25.4,-80.4,9,-78.9,-6.7C-77.4,-22.4,-68.9,-37.4,-57.2,-45.7C-45.5,-54,-30.7,-55.6,-16.9,-61.8C-3.1,-68,9.7,-78.8,22.9,-75.4C36.1,-72,41.9,-54.4,42.7,-64.8Z" transform="translate(100 100)"/>
              </svg>
            </div>

            <!-- Transparent Cutout Avatar (No white card/frame) -->
            <div class="trito-hero__avatar-frame">
              <img
                src="/images/hero-avatar.png"
                alt="TEGUE Franck - Développeur FullStack"
                class="trito-hero__avatar-img"
              />
            </div>

            <!-- Decorative White Arc (Top Right wrapping head/shoulder) -->
            <div class="trito-hero__shape-arc" aria-hidden="true">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                <path d="M 15 90 A 75 75 0 0 1 90 15" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
              </svg>
            </div>

            <!-- Decorative 3 White Wavy Lines (Bottom Left) -->
            <div class="trito-hero__shape-waves" aria-hidden="true">
              <svg width="100" height="45" viewBox="0 0 100 45" fill="none">
                <path d="M5 8 C 30 2, 50 14, 75 8 C 88 4, 95 8, 95 8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M5 20 C 30 14, 50 26, 75 20 C 88 16, 95 20, 95 20" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M5 32 C 30 26, 50 38, 75 32 C 88 28, 95 32, 95 32" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>

            <!-- Floating White Circular Social Badges (Bottom Right) -->
            <div class="trito-hero__socials">
              <a
                href="https://github.com/empereur98"
                target="_blank"
                rel="noopener noreferrer"
                class="trito-hero__social-btn"
                aria-label="Profil GitHub de Franck Tegue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/franck-tegue-bbb650234/"
                target="_blank"
                rel="noopener noreferrer"
                class="trito-hero__social-btn"
                aria-label="Profil LinkedIn de Franck Tegue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://x.com/franckkeng98?s=11"
                target="_blank"
                rel="noopener noreferrer"
                class="trito-hero__social-btn"
                aria-label="Profil X (Twitter) de Franck Tegue"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.trito-hero {
  position: relative;
  background-color: var(--color-trito-green, #05CE91);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 70px;
  overflow: hidden;
}

.trito-hero__texture {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.trito-hero__texture-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trito-hero__container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.trito-hero__row {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

/* Left Column */
.trito-hero__content {
  max-width: 580px;
}

.trito-hero__greeting {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-trito-navy, #24315E);
  margin-bottom: 8px;
  display: block;
}

.trito-hero__name {
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 5.5vw, 4.75rem);
  font-weight: 800;
  color: var(--color-trito-navy, #24315E);
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin-bottom: 18px;
  text-transform: none;
}

.trito-hero__role {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-trito-navy, #24315E);
  margin-bottom: 38px;
  line-height: 1.4;
}

/* Button Actions */
.trito-hero__actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 45px;
}

.trito-hero__btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-trito-white, #FFFFFF);
  color: var(--color-trito-navy, #24315E);
  border: 2px solid var(--color-trito-navy, #24315E);
  padding: 16px 42px;
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.2px;
  border-radius: 0;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(36, 49, 94, 0.08);
}

.trito-hero__btn-primary:hover {
  background-color: var(--color-trito-navy, #24315E);
  color: #FFFFFF;
  border-color: var(--color-trito-navy, #24315E);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(36, 49, 94, 0.2);
}

.trito-hero__btn-secondary {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-trito-navy, #24315E);
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 1.5px;
  transition: color 0.25s ease, text-underline-offset 0.25s ease;
}

.trito-hero__btn-secondary:hover {
  color: var(--color-trito-coral, #FF4612);
  text-underline-offset: 8px;
}

/* Quote */
.trito-hero__quote {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  max-width: 480px;
  padding-top: 10px;
  border-top: 1px solid rgba(36, 49, 94, 0.18);
}

.trito-hero__quote-mark {
  flex-shrink: 0;
  margin-top: 2px;
}

.trito-hero__quote-text {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-style: italic;
  font-weight: 400;
  color: var(--color-trito-navy, #24315E);
  line-height: 1.6;
  margin: 0;
}

/* Right Visual Column */
.trito-hero__visual {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}

.trito-hero__visual-wrapper {
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
}

/* Splash positioned organically to the left of the developer's torso */
.trito-hero__shape-splash {
  position: absolute;
  top: 25%;
  left: -40px;
  z-index: 1;
  pointer-events: none;
  animation: rotateSubtle 16s linear infinite;
}

/* Transparent cutout avatar: No box background, no border-radius, pure multiply blend */
.trito-hero__avatar-frame {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 440px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
}

.trito-hero__avatar-img {
  width: 100%;
  height: auto;
  max-height: 570px;
  object-fit: contain;
  object-position: bottom center;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.trito-hero__visual-wrapper:hover .trito-hero__avatar-img {
  transform: scale(1.02);
}

/* White arc wrapping around top-right */
.trito-hero__shape-arc {
  position: absolute;
  top: -25px;
  right: -20px;
  z-index: 3;
  pointer-events: none;
  animation: floatSlow 6s ease-in-out infinite alternate;
}

/* White wavy lines at bottom left */
.trito-hero__shape-waves {
  position: absolute;
  bottom: 25px;
  left: -20px;
  z-index: 3;
  pointer-events: none;
}

/* Social Buttons at bottom right */
.trito-hero__socials {
  position: absolute;
  bottom: 15px;
  right: -15px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.trito-hero__social-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: var(--color-trito-navy, #24315E);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(36, 49, 94, 0.15);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.trito-hero__social-btn:hover {
  background-color: var(--color-trito-navy, #24315E);
  color: #FFFFFF;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 22px rgba(36, 49, 94, 0.25);
}

@keyframes floatSlow {
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(-8px) rotate(3deg);
  }
}

@keyframes rotateSubtle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
  .trito-hero {
    padding-top: 120px;
    padding-bottom: 60px;
  }

  .trito-hero__row {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
    text-align: left;
  }

  .trito-hero__content {
    max-width: 100%;
  }

  .trito-hero__visual-wrapper {
    max-width: 380px;
    margin: 0 auto;
  }

  .trito-hero__socials {
    right: 0px;
  }
}

@media (max-width: 640px) {
  .trito-hero__actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .trito-hero__btn-secondary {
    margin-left: 0;
  }

  .trito-hero__visual-wrapper {
    max-width: 320px;
  }

  .trito-hero__socials {
    flex-direction: row;
    bottom: -20px;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
