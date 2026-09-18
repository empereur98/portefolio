<template>
  <section class="testimonials-trito" id="testimonials">
    <div class="trito_tm_testimonials">
      <div class="container">
        <div
          class="testimonials_list"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Testimonials Slider -->
          <ul class="testimonials-slider">
            <transition :name="slideDirection === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
              <li :key="currentIndex" class="slide-item">
                <!-- Left Column: Portrait with organic wavy frame & decorative purple dots -->
                <div class="left">
                  <div class="image">
                    <img
                      :src="currentTestimonial.image"
                      :alt="currentTestimonial.author"
                      class="person-img"
                    />
                    <!-- Decorative Purple Organic Cluster (Trito elements.svg) -->
                    <img
                      class="svg elements-svg"
                      src="/images/svg/elements.svg"
                      alt="Décoration"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <!-- Right Column: Big quote headline with quote mark backdrop, normal text, author info -->
                <div class="right">
                  <!-- Big Highlight with giant soft yellow Quote SVG in background -->
                  <div class="big">
                    <p>“{{ currentTestimonial.headline }}”</p>
                    <img
                      class="svg quote-svg"
                      src="/images/svg/quote.svg"
                      alt="Citation"
                      aria-hidden="true"
                    />
                  </div>

                  <!-- Normal detailed testimonial text -->
                  <div class="normal">
                    <p>“{{ currentTestimonial.text }}”</p>
                  </div>

                  <!-- Author Details -->
                  <div class="details">
                    <h3>- {{ currentTestimonial.author }}</h3>
                    <span>{{ currentTestimonial.role }}</span>
                  </div>
                </div>
              </li>
            </transition>
          </ul>

          <!-- Navigation Arrow Buttons (left / right) -->
          <button
            class="prev_button"
            type="button"
            aria-label="Témoignage précédent"
            @click="prevSlide"
          >
            <img class="svg" src="/images/svg/left.svg" alt="Précédent" />
          </button>

          <button
            class="next_button"
            type="button"
            aria-label="Témoignage suivant"
            @click="nextSlide"
          >
            <img class="svg" src="/images/svg/right.svg" alt="Suivant" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TestimonialItem {
  id: number
  image: string
  headline: string
  text: string
  author: string
  role: string
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    image: '/images/testimonials/3.png',
    headline: 'Une fidélité d\'intégration pixel-perfect et une vraie sensibilité produit.',
    text: 'C\'est rare de collaborer avec un développeur qui comprend aussi intimement les subtilités du design et de l\'ergonomie. Franck a transformé nos maquettes Figma les plus complexes en une application Nuxt ultra-fluide avec des micro-interactions impeccables. Travailler avec lui a été une expérience formidable !',
    author: 'Sarah Kouam',
    role: 'Lead Product Designer, Studio Moka'
  },
  {
    id: 2,
    image: '/images/testimonials/1.png',
    headline: 'Une maîtrise Full Stack impressionnante et un respect exemplaire des délais.',
    text: 'Franck a conçu et déployé l\'architecture complète de notre plateforme SaaS. De la modélisation de la base de données jusqu\'à l\'interface utilisateur réactive, tout a été exécuté avec une rigueur technique irréprochable. Notre plateforme a été mise en production deux semaines avant l\'échéance prévue.',
    author: 'Alexandre Ndiaye',
    role: 'CEO & Co-fondateur, Afritech Solutions'
  },
  {
    id: 3,
    image: '/images/testimonials/2.png',
    headline: 'Un code propre, modulaire et optimisé pour la performance et l\'échelle.',
    text: 'Franck est intervenu pour moderniser nos API et optimiser notre tableau de bord analytique. Résultat : une réduction de 60 % des temps de chargement et un code parfaitement modulaire qui a grandement facilité l\'onboarding de nos développeurs. Un atout majeur pour tout projet d\'envergure.',
    author: 'Claire Renard',
    role: 'Directrice Technique (CTO), DataPulse Labs'
  }
]

const currentIndex = ref(0)
const slideDirection = ref<'next' | 'prev'>('next')
const currentTestimonial = computed(() => testimonials[currentIndex.value] ?? testimonials[0]!)

const nextSlide = () => {
  slideDirection.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  slideDirection.value = 'prev'
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

// Touch swipe support
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0]?.screenX || 0
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0]?.screenX || 0
  if (touchStartX - touchEndX > 50) {
    nextSlide()
  } else if (touchEndX - touchStartX > 50) {
    prevSlide()
  }
}

// Autoplay
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, 7000)
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const resumeAutoplay = () => {
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  pauseAutoplay()
})
</script>

<style scoped>
/* ==========================================================================
   TESTIMONIALS SECTION — TRITO DESIGN SYSTEM
   Exact replication of https://marketifythemes.net/html/trito/index.html
   Structure, Typography, SVGs, Spacing, Colors & Micro-interactions
   ========================================================================== */

.testimonials-trito {
  position: relative;
  background-color: #FFFFFF;
  width: 100%;
  clear: both;
  overflow: hidden;
  z-index: 2;
}

.trito_tm_testimonials {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding: 110px 0 110px;
  position: relative;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

.testimonials_list {
  width: 100%;
  height: auto;
  clear: both;
  position: relative;
}

/* Slider list */
.testimonials-slider {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

.slide-item {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
}

/* ---- Left Column (Image & Purple Elements) ---- */
.left {
  width: 50%;
  padding-right: 25px;
  display: flex;
  justify-content: center;
}

.image {
  position: relative;
  display: inline-block;
}

.person-img {
  max-height: 500px;
  width: auto;
  max-width: 100%;
  display: block;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 15px 30px rgba(36, 49, 94, 0.08));
}

.image:hover .person-img {
  transform: scale(1.02);
}

/* Decorative Purple Elements Cluster (elements.svg) */
.elements-svg {
  position: absolute;
  bottom: -20px;
  right: 70px;
  z-index: 1;
  width: 130px;
  height: 130px;
  pointer-events: none;
  animation: floatDots 6s ease-in-out infinite;
}

@keyframes floatDots {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(1.5deg);
  }
}

/* ---- Right Column (Content) ---- */
.right {
  width: 50%;
  padding-left: 25px;
}

/* Big Headline with giant Quote SVG */
.big {
  width: 100%;
  float: left;
  position: relative;
}

.big p {
  color: #24315E;
  font-weight: 700;
  font-size: 24px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 34px;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
  margin: 0;
}

.quote-svg {
  position: absolute;
  left: 0px;
  width: 200px;
  height: 200px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -10px;
  pointer-events: none;
  z-index: 0;
}

/* Normal paragraph text */
.normal {
  width: 100%;
  float: left;
  margin-top: 25px;
  margin-bottom: 35px;
}

.normal p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #505A7E;
  margin: 0;
  font-weight: 400;
}

/* Author Details */
.details {
  width: 100%;
  float: left;
}

.details h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #24315E;
  margin: 0 0 6px 0;
  letter-spacing: -0.01em;
}

.details span {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #505A7E;
  display: block;
}

/* ---- Navigation Arrow Buttons ---- */
.prev_button,
.next_button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}

.prev_button {
  left: -100px;
}

.next_button {
  right: -100px;
}

.prev_button .svg,
.next_button .svg {
  width: 30px;
  height: 30px;
  display: block;
  stroke: #12141D;
  transition: stroke 0.2s ease;
}

.prev_button:hover {
  transform: translateY(-50%) translateX(-5px);
}

.next_button:hover {
  transform: translateY(-50%) translateX(5px);
}

/* ---- Smooth Slide Transitions ---- */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* ---- Responsive Breakpoints ---- */
@media (max-width: 1440px) {
  .prev_button {
    left: -60px;
  }
  .next_button {
    right: -60px;
  }
}

@media (max-width: 1200px) {
  .prev_button {
    left: -35px;
  }
  .next_button {
    right: -35px;
  }

  .big p {
    font-size: 22px;
    line-height: 32px;
  }

  .normal p {
    font-size: 17px;
    line-height: 30px;
  }
}

@media (max-width: 1040px) {
  .trito_tm_testimonials {
    padding: 85px 0;
  }

  .slide-item {
    flex-direction: column;
    align-items: center;
    text-align: left;
  }

  .left {
    width: 100%;
    padding-right: 0;
    margin-bottom: 45px;
  }

  .right {
    width: 100%;
    padding-left: 0;
  }

  .big p {
    font-size: 21px;
    line-height: 30px;
  }

  .big .quote-svg {
    width: 140px;
    height: 140px;
  }

  .prev_button {
    left: -20px;
  }

  .next_button {
    right: -20px;
  }
}

@media (max-width: 768px) {
  .trito_tm_testimonials {
    padding: 65px 0 85px;
  }

  .container {
    padding: 0 24px;
  }

  .person-img {
    max-height: 380px;
  }

  .elements-svg {
    right: 25px;
    bottom: -15px;
    width: 95px;
    height: 95px;
  }

  .big p {
    font-size: 19px;
    line-height: 28px;
  }

  .normal {
    margin-top: 18px;
    margin-bottom: 25px;
  }

  .normal p {
    font-size: 16px;
    line-height: 28px;
  }

  .details h3 {
    font-size: 19px;
  }

  .details span {
    font-size: 16px;
  }

  /* Reposition arrows neatly on mobile below content */
  .prev_button,
  .next_button {
    top: auto;
    bottom: -60px;
    transform: none;
  }

  .prev_button {
    left: calc(50% - 55px);
  }

  .next_button {
    right: calc(50% - 55px);
  }

  .prev_button:hover {
    transform: translateX(-4px);
  }

  .next_button:hover {
    transform: translateX(4px);
  }
}

@media (max-width: 480px) {
  .person-img {
    max-height: 300px;
  }

  .elements-svg {
    right: 10px;
    width: 75px;
    height: 75px;
  }

  .big p {
    font-size: 18px;
    line-height: 26px;
  }

  .normal p {
    font-size: 15px;
    line-height: 26px;
  }
}
</style>
