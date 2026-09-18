<template>
  <section class="about-trito" id="about">
    <!-- Topographic / Plissements de terrain contour lines background overlay -->
    <div class="about-trito__topo-bg" aria-hidden="true">
      <svg class="about-trito__topo-svg" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <!-- Terrain contour curves with subtle relief lines -->
        <path d="M-50 120 C 200 80, 450 180, 750 110 C 1050 40, 1250 160, 1500 100" stroke="rgba(36, 49, 94, 0.07)" stroke-width="1.8" fill="none"/>
        <path d="M-50 170 C 180 130, 420 230, 720 160 C 1020 90, 1280 210, 1500 150" stroke="rgba(36, 49, 94, 0.08)" stroke-width="1.5" fill="none"/>
        <path d="M-50 220 C 220 170, 470 280, 770 210 C 1070 140, 1260 260, 1500 200" stroke="rgba(36, 49, 94, 0.07)" stroke-width="1.5" fill="none"/>
        <path d="M-50 270 C 190 220, 440 330, 740 260 C 1040 190, 1300 310, 1500 250" stroke="rgba(36, 49, 94, 0.08)" stroke-width="1.8" fill="none"/>
        <path d="M-50 330 C 230 270, 480 390, 790 310 C 1100 230, 1270 370, 1500 310" stroke="rgba(36, 49, 94, 0.07)" stroke-width="1.5" fill="none"/>
        <path d="M-50 390 C 170 330, 430 440, 730 370 C 1030 300, 1310 420, 1500 360" stroke="rgba(36, 49, 94, 0.08)" stroke-width="1.5" fill="none"/>
        <path d="M-50 450 C 210 390, 460 500, 780 420 C 1090 340, 1280 480, 1500 420" stroke="rgba(36, 49, 94, 0.07)" stroke-width="1.8" fill="none"/>
        <path d="M-50 510 C 180 450, 440 560, 740 480 C 1040 400, 1320 530, 1500 480" stroke="rgba(36, 49, 94, 0.08)" stroke-width="1.5" fill="none"/>
        <path d="M-50 570 C 220 510, 470 620, 770 540 C 1070 460, 1290 590, 1500 540" stroke="rgba(36, 49, 94, 0.07)" stroke-width="1.5" fill="none"/>
        <path d="M-50 630 C 190 570, 450 670, 750 600 C 1050 530, 1310 650, 1500 600" stroke="rgba(36, 49, 94, 0.08)" stroke-width="1.8" fill="none"/>
      </svg>
    </div>

    <!-- Decorative White Brush Strokes / Petals (Left element3.svg) -->
    <div class="about-trito__shape-left" aria-hidden="true">
      <svg width="180" height="260" viewBox="0 0 217 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.458 57.9402C55.2091 64.2829 54.0418 71.4882 55.1219 78.5323C55.582 81.4083 61.5641 79.9128 62.7912 79.376C72.7614 75.1578 79.7021 64.0373 75.4456 53.3769C73.8734 49.5422 62.9062 52.7634 64.3251 56.368C66.8176 62.6185 65.2071 71.7066 58.3814 74.6977L66.0507 75.5413C65.1018 69.6495 65.9992 63.6085 68.6199 58.247C70.9974 53.4537 59.9152 54.604 58.2663 57.9402H58.458Z" fill="white"/>
        <path d="M128.746 62.57C128.324 67.9385 127.863 73.3071 127.442 78.6756C127.097 82.9321 132.925 83.0855 135.61 81.7817C138.079 80.6645 140.3 79.0646 142.142 77.0762C143.984 75.0878 145.41 72.7511 146.336 70.2035C147.261 67.6559 147.667 64.9488 147.531 62.2417C147.395 59.5346 146.718 56.8822 145.541 54.4405C143.241 49.7238 132.734 53.9804 135.418 59.4256C136.668 62.1287 136.861 65.2017 135.96 68.0402C135.059 70.8787 133.128 73.2773 130.548 74.7643L138.716 77.9086C139.176 72.5401 139.598 67.1716 140.019 61.8414C140.518 55.8593 129.167 57.2015 128.746 62.5317V62.57Z" fill="white"/>
        <path d="M80.5071 117.911C82.8846 122.628 77.5927 126.884 79.4334 131.754C80.9672 135.895 85.4922 135.397 89.0584 134.438C94.6187 132.943 96.7277 129.3 99.1052 124.507C102.109 118.768 104.76 112.852 107.043 106.79C107.618 105.295 104.589 105.487 103.937 105.525C96.9195 106.023 88.2531 109.359 88.023 117.566C88.023 119.291 99.0669 117.834 99.1436 114.613C99.0975 113.498 99.335 112.39 99.8338 111.392C101.47 109.858 101.24 109.398 99.1436 110.011L96.0758 108.746C94.5036 112.887 92.8163 116.952 90.899 120.94C89.4418 123.97 87.3328 130.757 84.3417 132.444L89.6336 130.565C91.9727 130.22 90.4772 128.801 90.2471 127.613C90.0864 125.91 90.4052 124.197 91.1674 122.666C91.7909 121.495 92.1515 120.202 92.2244 118.878C92.2972 117.553 92.0806 116.229 91.5893 114.996C90.2088 112.274 79.5867 116.185 80.5071 117.949V117.911Z" fill="white"/>
        <path d="M3.62107 115.23C1.6469 117.587 0.324871 120.421 -0.213367 123.449C-0.751605 126.476 -0.487335 129.592 0.553262 132.486C1.58862 135.323 6.45865 134.441 8.2226 133.559C13.6179 131.337 18.1423 127.418 21.1107 122.395C24.079 117.371 25.3297 111.517 24.6734 105.719C24.2132 102.268 17.004 104.186 15.5852 105.336L6.15196 112.43C0.131533 116.955 9.44972 118.987 13.1694 116.265L22.6026 109.171L13.5528 108.787C14.1449 112.693 13.5159 116.687 11.7518 120.222C9.9878 123.757 7.17484 126.66 3.69772 128.536L11.3671 129.61C10.4751 127.309 10.2252 124.809 10.644 122.378C11.0627 119.946 12.1344 117.674 13.7445 115.805C15.4701 113.657 12.249 112.277 10.6385 112.162C9.25579 112.068 7.87069 112.304 6.59724 112.851C5.32379 113.397 4.19847 114.239 3.31423 115.306L3.62107 115.23Z" fill="white"/>
      </svg>
    </div>

    <!-- Decorative White Brush Strokes / Petals (Right element3.svg) -->
    <div class="about-trito__shape-right" aria-hidden="true">
      <svg width="180" height="260" viewBox="0 0 217 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.812 167.189C25.9121 175.554 22.7803 184.256 20.4554 193.188C19.305 197.521 29.1985 194.108 30.3872 193.188C35.6791 189.252 39.8358 183.986 42.4354 177.925C45.035 171.864 45.985 165.223 45.1891 158.676C44.8056 155.569 37.5198 157.87 36.216 158.676L30.8857 162.127C24.6352 166.192 34.337 167.227 37.6732 165.041L43.0417 161.59H34.0686C34.8181 167.264 34.0569 173.035 31.862 178.32C29.667 183.606 26.1159 188.218 21.5675 191.692H31.4993C33.8372 182.747 36.9818 174.032 40.8943 165.655C42.3131 162.664 31.4226 163.737 29.812 167.189V167.189Z" fill="white"/>
        <path d="M121.769 166.566C119.736 173.951 119.124 181.654 119.966 189.267C120.427 193.562 129.4 189.536 130.703 187.925C134.082 183.801 136.564 179.018 137.99 173.881C139.416 168.745 139.755 163.367 138.986 158.091C138.449 154.257 127.291 156.826 127.866 161.044C128.53 165.77 128.191 170.583 126.869 175.168C125.548 179.754 123.274 184.009 120.196 187.657L130.933 186.315C130.187 179.221 130.798 172.05 132.736 165.186C133.848 161.351 122.689 162.731 121.615 166.566H121.769Z" fill="white"/>
        <path d="M149.914 113.233C148.413 116.347 147.557 119.732 147.399 123.186C147.241 126.639 147.783 130.089 148.994 133.327C149.914 135.819 157.43 132.866 158.811 131.984C164.448 128.15 171.963 122.705 171.196 114.997C170.43 107.289 163.949 105.257 157.545 106.331C156.318 106.522 151.026 107.634 151.026 109.36Z" fill="white"/>
      </svg>
    </div>

    <div class="about-trito__container">
      <div class="about-trito__inner">
        <!-- Left Column: Polygon visual with smart illustrations & experience badge -->
        <div class="about-trito__left animate-on-scroll fade-left">
          <div class="about-trito__visual-wrap">
            
            <!-- Octagon purple shape background with navy border -->
            <div class="about-trito__octagon-bg">
              <svg viewBox="0 0 440 520" fill="none" xmlns="http://www.w3.org/2000/svg" class="about-trito__octagon-svg">
                <!-- Exact Octagon path filled with user specified #a586ff -->
                <polygon points="128,10 312,10 430,128 430,392 312,510 128,510 10,392 10,128" fill="#a586ff" stroke="#24315E" stroke-width="2.5"/>
              </svg>
            </div>

            <!-- Smart Illustration 1: Dark Navy Arc above head -->
            <div class="about-trito__doodle-arc" aria-hidden="true">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                <path d="M 12 36 C 30 6, 70 6, 88 36" stroke="#24315E" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>

            <!-- Smart Illustration 2: White Spiral / Loop doodle on upper right inside purple polygon -->
            <div class="about-trito__doodle-loop" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M 10 38 C 22 45, 38 42, 38 28 C 38 16, 22 14, 22 28 C 22 36, 42 36, 52 24" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Portrait of Developer emerging from polygon -->
            <div class="about-trito__portrait-frame">
              <img
                src="/images/hero-avatar.png"
                alt="Tegue Franck - Développeur FullStack"
                class="about-trito__portrait-img"
              />
            </div>

            <!-- Floating Experience Badge (White, sharp navy border, Calistoga number) -->
            <div class="about-trito__experience animate-on-scroll fade-up animate-delay-2">
              <h3 class="about-trito__exp-number">3+</h3>
              <span class="about-trito__exp-label">Années d'<br />expérience</span>
            </div>

          </div>
        </div>

        <!-- Right Column: Text content, headings and CTA button -->
        <div class="about-trito__right animate-on-scroll fade-right">
          <!-- Small Label with coral decorator lines -->
          <div class="about-trito__label-wrap">
            <span class="about-trito__label-line-left"></span>
            <span class="about-trito__label">À Propos de Moi</span>
            <span class="about-trito__label-line-right"></span>
          </div>

          <!-- Main Heading in Space Grotesk Bold -->
          <h2 class="about-trito__heading">
            Je développe des solutions qui aident les gens
          </h2>

          <!-- Paragraphs in Inter -->
          <div class="about-trito__text">
            <p>
              Développeur Full Stack passionné par l'ingénierie logicielle et basé au Cameroun, je conçois des solutions numériques complètes alliant puissance backend (Java, Spring Boot) et ergonomie frontend moderne (Vue.js 3, Nuxt 4).
            </p>
            <p>
              Avec une expertise transversale allant des applications de gestion métier (ERP, billetterie, gestion bancaire) aux systèmes d'information géographique (SIG & géomatique), j'aide les entreprises et porteurs de projets à bâtir des architectures modulaires, sécurisées et prêtes pour la montée en charge.
            </p>
            <p>
              Mon engagement envers chaque client : une écoute rigoureuse de vos enjeux, un code propre et maintenable, et un respect strict des délais de livraison.
            </p>
          </div>

          <!-- Extra CTA Button -->
          <div class="about-trito__btn-wrap">
            <a href="#contact" class="about-trito__btn">
              Me Recruter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Section À propos — Reproduction fidèle du design Trito
</script>

<style scoped>
/* ==========================================================================
   ABOUT SECTION — TRITO DESIGN SYSTEM
   Background: #fbd73b (User specified sunny yellow) with terrain plissements
   Polygon: #a586ff (User specified violet) with #24315E navy 2.5px border
   Badge: #FFFFFF with 2px #24315E border, #fe675c Calistoga 48px number
   Headings: Space Grotesk 700 navy #24315E | Body: Inter #505A7E
   Borders: 1px solid #24315E top & bottom
   ========================================================================== */

.about-trito {
  position: relative;
  background-color: #fbd73b;
  border-top: 1px solid #24315E;
  border-bottom: 1px solid #24315E;
  padding: 120px 0 130px;
  overflow: hidden;
  z-index: 2;
}

/* Plissements de terrain contour lines background */
.about-trito__topo-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.about-trito__topo-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* White organic brush splash shapes (element3.svg) */
.about-trito__shape-left {
  position: absolute;
  top: 90px;
  left: -20px;
  z-index: 2;
  pointer-events: none;
  opacity: 0.9;
}

.about-trito__shape-right {
  position: absolute;
  bottom: 50px;
  right: -20px;
  z-index: 2;
  pointer-events: none;
  opacity: 0.9;
}

/* Container */
.about-trito__container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 3;
}

.about-trito__inner {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 70px;
  align-items: center;
}

/* ---- Left Column (Visual + Octagon + Badges) ---- */
.about-trito__left {
  position: relative;
}

.about-trito__visual-wrap {
  position: relative;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
}

/* Octagon Background SVG */
.about-trito__octagon-bg {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 2;
}

.about-trito__octagon-svg {
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(0 15px 25px rgba(36, 49, 94, 0.08));
}

/* Smart Illustration: Navy Arc above head */
.about-trito__doodle-arc {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  pointer-events: none;
}

/* Smart Illustration: White Loop doodle */
.about-trito__doodle-loop {
  position: absolute;
  top: 90px;
  right: 25px;
  z-index: 5;
  pointer-events: none;
}

/* Portrait Image Container */
.about-trito__portrait-frame {
  position: relative;
  z-index: 4;
  height: 520px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.about-trito__portrait-img {
  width: 88%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  object-position: bottom center;
  filter: drop-shadow(0 12px 24px rgba(36, 49, 94, 0.15));
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.about-trito__visual-wrap:hover .about-trito__portrait-img {
  transform: scale(1.03);
}

/* Experience Floating Badge */
.about-trito__experience {
  position: absolute;
  bottom: 30px;
  left: -25px;
  background-color: #FFFFFF;
  border: 2px solid #24315E;
  border-radius: 0px;
  padding: 18px 28px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 12px 30px rgba(36, 49, 94, 0.12);
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-trito__experience:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(36, 49, 94, 0.18);
}

.about-trito__exp-number {
  font-family: 'Calistoga', serif;
  font-size: 48px;
  font-weight: 400;
  color: #fe675c;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.02em;
}

.about-trito__exp-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: #24315E;
  line-height: 1.18;
  display: block;
}

/* ---- Right Column (Content) ---- */
.about-trito__right {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

/* Small Label with coral decorator lines */
.about-trito__label-wrap {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.about-trito__label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fe675c;
  letter-spacing: 0.01em;
}

.about-trito__label-line-left {
  display: inline-block;
  width: 24px;
  height: 1.5px;
  background-color: #fe675c;
}

.about-trito__label-line-right {
  display: inline-block;
  width: 65px;
  height: 1.5px;
  background-color: #fe675c;
}

/* Main Heading */
.about-trito__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 54px;
  font-weight: 700;
  color: #24315E;
  line-height: 1.14;
  letter-spacing: -0.02em;
  margin: 0 0 28px 0;
}

/* Paragraphs */
.about-trito__text p {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.8;
  color: #505A7E;
  margin: 0 0 20px 0;
}

.about-trito__text p:last-child {
  margin-bottom: 36px;
}

/* Action Button */
.about-trito__btn-wrap {
  display: flex;
  align-items: center;
}

.about-trito__btn {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #24315E;
  border: 2px solid #24315E;
  border-radius: 0px;
  padding: 16px 42px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(36, 49, 94, 0.15);
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

.about-trito__btn:hover {
  background-color: #FFFFFF;
  color: #24315E;
  border-color: #24315E;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(36, 49, 94, 0.2);
}

/* ---- Responsive Styles ---- */
@media (max-width: 1200px) {
  .about-trito__inner {
    grid-template-columns: 420px 1fr;
    gap: 40px;
  }

  .about-trito__heading {
    font-size: 46px;
  }

  .about-trito__portrait-frame {
    height: 470px;
  }
}

@media (max-width: 992px) {
  .about-trito {
    padding: 85px 0 95px;
  }

  .about-trito__inner {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .about-trito__left {
    max-width: 420px;
    margin: 0 auto;
  }

  .about-trito__right {
    padding-left: 0;
    text-align: left;
  }

  .about-trito__heading {
    font-size: 38px;
  }

  .about-trito__experience {
    left: 0px;
    bottom: 10px;
  }

  .about-trito__shape-left,
  .about-trito__shape-right {
    display: none;
  }
}

@media (max-width: 576px) {
  .about-trito__container {
    padding: 0 20px;
  }

  .about-trito__heading {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .about-trito__text p {
    font-size: 15px;
    line-height: 1.7;
  }

  .about-trito__portrait-frame {
    height: 390px;
  }

  .about-trito__experience {
    padding: 14px 20px;
    gap: 12px;
  }

  .about-trito__exp-number {
    font-size: 38px;
  }

  .about-trito__exp-label {
    font-size: 16px;
  }

  .about-trito__btn {
    width: 100%;
    text-align: center;
    padding: 15px 25px;
  }
}
</style>
