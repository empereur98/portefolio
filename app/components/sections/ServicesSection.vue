<template>
  <section class="orido_tm_service" id="services">
    <div class="container">
      <!-- Section Main Title in Orido Signature Style -->
      <div class="orido_tm_main_title animate-on-scroll fade-up">
        <h3><span>Services<br />Que Je Propose</span></h3>
      </div>

      <!-- Service Interactive List with Sliding Purple Pill -->
      <div class="service_list animate-on-scroll fade-up" @mouseleave="onMouseLeave">
        <!-- The signature Orido sliding background pill (.ccc) -->
        <span
          class="ccc"
          :style="{
            top: `${cccTop}px`,
            height: `${cccHeight}px`,
            opacity: isInitialized ? 1 : 0
          }"
          aria-hidden="true"
        ></span>

        <ul>
          <li
            v-for="(service, index) in services"
            :key="service.number"
            :ref="(el) => setItemRef(el, index)"
            :class="{ current: hoveredIndex === index }"
            @mouseenter="onMouseEnter(index)"
            @click="openModal(service, index)"
          >
            <div class="list_inner">
              <!-- Left Column: Number + Service Title -->
              <div class="left">
                <span class="number">{{ service.number }}</span>
                <h3 class="title">{{ service.title }}</h3>
              </div>

              <!-- Right Column: Short Summary + Angled Top-Arrow -->
              <div class="right">
                <div class="text">
                  <p>{{ service.summary }}</p>
                </div>
                <div class="arrow">
                  <img class="svg" src="/images/svg/top-arrow.svg" alt="Détails" aria-hidden="true" />
                </div>
              </div>

              <!-- Clickable full overlay link button -->
              <button
                type="button"
                class="orido_tm_full_link"
                :aria-label="`Voir les détails pour ${service.title}`"
              ></button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Orido Signature Modal Box -->
    <Teleport to="body">
      <div
        class="orido_tm_modalbox"
        :class="{ opened: isModalOpen }"
        role="dialog"
        aria-modal="true"
        @click.self="closeModal"
      >
        <div class="box_inner">
          <!-- Close Button -->
          <div class="close">
            <button
              type="button"
              class="close_btn"
              aria-label="Fermer la fenêtre"
              @click="closeModal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Modal Content with Image, Title and Detailed Description -->
          <div class="description_wrap" v-if="selectedService">
            <div class="service_popup_informations">
              <div class="image">
                <img :src="selectedService.image" :alt="selectedService.title" class="popup_banner_img" />
              </div>
              <div class="main_title">
                <h3>{{ selectedService.title }}</h3>
              </div>
              <div class="descriptions">
                <p v-for="(paragraph, pIdx) in selectedService.details" :key="pIdx">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
interface ServiceItem {
  number: string
  title: string
  summary: string
  image: string
  details: string[]
}

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Frontend & Nuxt.js',
    summary: 'Conception d\'interfaces web ultra-réactives, accessibles et performantes avec Vue 3, Nuxt 4, TypeScript et dashboards interactifs.',
    image: '/images/service/1.jpg',
    details: [
      'En tant que développeur spécialisé dans l\'écosystème Vue et Nuxt, je conçois des interfaces utilisateur modernes qui allient esthétique visuelle haut de gamme, réactivité instantanée et accessibilité irréprochable. De l\'architecture des composants modulaires jusqu\'à la gestion d\'état avancée (Pinia), chaque détail est pensé pour offrir une expérience utilisateur mémorable.',
      'Dans l\'environnement numérique actuel, la vitesse d\'affichage et la fluidité d\'interaction sont capitales : plus de 90 % de la première impression d\'un utilisateur découle de la qualité du frontend. J\'intègre les meilleures pratiques de Server-Side Rendering (SSR), de Static Site Generation (SSG) et de Web Vitals pour garantir un score SEO et un temps de chargement records.',
      'Technologies & Compétences : Vue.js 3 (Composition API), Nuxt 4, TypeScript, Tailwind CSS / Vanilla CSS moderne, Pinia, dashboards dynamiques, optimisation Core Web Vitals.'
    ]
  },
  {
    number: '02',
    title: 'Backend Enterprise & Spring Boot',
    summary: 'Développement d\'APIs REST résilientes, microservices sécurisés (RBAC, JWT) et bases de données relationnelles optimisées (PostgreSQL, MySQL).',
    image: '/images/service/2.jpg',
    details: [
      'Un frontend d\'excellence nécessite un socle backend tout aussi robuste. Spécialisé dans l\'écosystème Java et le framework Spring Boot, je conçois et déploie des architectures backend évolutives, capables d\'absorber d\'importantes montées en charge tout en assurant une intégrité absolue et la sécurité des transactions.',
      'Que ce soit pour concevoir une API RESTful propre, orchestrer des microservices découplés ou implémenter une sécurité granulaire (Spring Security, JWT, RBAC), je privilégie la modularité, la persistance rigoureuse (Hibernate, JPA, Flyway) et la haute disponibilité.',
      'Technologies & Compétences : Java 17+, Spring Boot, Spring Security, APIs RESTful, PostgreSQL, MySQL, Redis, Docker, tests automatisés (JUnit, Mockito).'
    ]
  },
  {
    number: '03',
    title: 'Solutions Métiers, Géomatique & SIG',
    summary: 'Développement d\'outils de localisation précise (FindMe), traitement de données topographiques, calculs d\'itinéraires et cartographie interactive.',
    image: '/images/service/3.jpg',
    details: [
      'J\'accompagne les organisations dans le développement d\'applications métiers sur mesure, avec une expertise reconnue dans le domaine de la géomatique et des Systèmes d\'Information Géographique (SIG). De la gestion d\'adresses précises dans des zones non cartographiées à la modélisation de levés topographiques, je traduis des calculs géométriques et spatiaux en outils web intuitifs.',
      'Gestion de coordonnées géodésiques, visualisation de couches cartographiques interactives (Leaflet, OpenStreetMap), plateformes de réservation (CoworkingHub) et logiciels de gestion d\'incidents (Eliot Service Desk) : je délivre des solutions sur mesure répondant exactement à vos impératifs métiers.',
      'Technologies & Compétences : Géomatique & SIG, OpenStreetMap, Leaflet, projections spatiales, calculs d\'arpentage et de levés topographiques, applications de ticketing et workflows métier.'
    ]
  },
  {
    number: '04',
    title: 'Architecture Logicielle & Audit',
    summary: 'Diagnostic technique approfondi, optimisation de requêtes SQL, conteneurisation Docker et sécurisation de vos applications critiques.',
    image: '/images/service/4.jpg',
    details: [
      'Votre application souffre de lenteurs, de dette technique accumulée ou de bugs récurrents qui freinent votre croissance ? J\'interviens pour réaliser un audit complet de votre stack applicative, de vos schémas relationnels et de votre sécurité.',
      'En identifiant les goulots d\'étranglement (requêtes N+1, indexation SQL absente, failles d\'autorisation, packaging inefficace), je mets en place des refactorisations pragmatiques et une conteneurisation standardisée avec Docker pour pérenniser vos systèmes.',
      'Technologies & Compétences : Clean Architecture, optimisation SQL & indexation PostgreSQL, conteneurisation Docker, revue de code, sécurisation d\'APIs et intégration continue.'
    ]
  }
]

// Sliding background pill (.ccc) reactive management
const activeIndex = ref(0)
const hoveredIndex = ref<number | null>(0)
const cccTop = ref(0)
const cccHeight = ref(0)
const isInitialized = ref(false)

const itemEls: HTMLElement[] = []
const setItemRef = (el: any, index: number) => {
  if (el) {
    itemEls[index] = el
  }
}

const updateCcc = (index: number) => {
  const el = itemEls[index]
  if (el) {
    cccTop.value = el.offsetTop
    cccHeight.value = el.offsetHeight
    isInitialized.value = true
  }
}

const onMouseEnter = (index: number) => {
  hoveredIndex.value = index
  updateCcc(index)
}

const onMouseLeave = () => {
  hoveredIndex.value = activeIndex.value
  updateCcc(activeIndex.value)
}

// Modal state
const isModalOpen = ref(false)
const selectedService = ref<ServiceItem | null>(null)

const openModal = (service: ServiceItem, index: number) => {
  activeIndex.value = index
  hoveredIndex.value = index
  updateCcc(index)
  selectedService.value = service
  isModalOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  isModalOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

const handleResize = () => {
  updateCcc(activeIndex.value)
}

onMounted(() => {
  nextTick(() => {
    updateCcc(0)
  })
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeyDown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* ==========================================================================
   SERVICES SECTION — ORIDO DESIGN SYSTEM
   Exact replication of https://marketifythemes.net/html/orido/index.html
   Structure, Colors (#6244C5, #12141D), Sliding Pill (.ccc), Typography & Modal
   ========================================================================== */

.orido_tm_service {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  padding: 120px 0px;
  background-color: #fafafb;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
}

/* Main Title in Orido Signature Typography */
.orido_tm_main_title {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
}

.orido_tm_main_title h3 {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.25;
  color: #12141D;
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  margin: 0;
  letter-spacing: -0.02em;
}

.orido_tm_main_title h3 span {
  position: relative;
  display: inline-block;
}

.orido_tm_main_title h3 span:after {
  position: absolute;
  content: "";
  width: 60px;
  height: 2px;
  background-color: #12141D;
  right: -80px;
  bottom: 14px;
}

/* Service List Wrapper */
.orido_tm_service .service_list {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-top: 85px;
  position: relative;
}

/* The signature sliding purple background pill */
.orido_tm_service .ccc {
  top: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  z-index: 1;
  background-color: #6244C5;
  pointer-events: none;
  transition: top 0.45s cubic-bezier(0.25, 1, 0.5, 1), height 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
}

/* List element */
.orido_tm_service .service_list ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  position: relative;
  z-index: 2;
}

.orido_tm_service .service_list ul li {
  margin: 0px;
  border-bottom: 1px solid #12141D;
  position: relative;
  cursor: pointer;
}

.orido_tm_service .service_list ul li:first-child {
  border-top: 1px solid #12141D;
}

/* Full invisible clickable link */
.orido_tm_full_link {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* List Inner flexbox */
.orido_tm_service .service_list .list_inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 35px;
}

/* Left Column (Number + Title) */
.orido_tm_service .service_list .left {
  width: 42%;
  display: flex;
  align-items: center;
}

.orido_tm_service .service_list .number {
  display: inline-block;
  color: #6244C5;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  min-width: 40px;
  transition: color 0.3s ease;
}

.orido_tm_service .service_list .title {
  font-size: 30px;
  font-weight: 600;
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  padding-left: 25px;
  color: #12141D;
  margin: 0;
  transition: color 0.3s ease;
}

/* Right Column (Summary text + Arrow) */
.orido_tm_service .service_list .right {
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.orido_tm_service .service_list .right .text {
  padding-right: 80px;
}

.orido_tm_service .service_list .right .text p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #6F6B80;
  margin: 0;
  transition: color 0.3s ease;
}

.orido_tm_service .service_list .right .arrow {
  line-height: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orido_tm_service .service_list .right .svg {
  width: 25px;
  height: 25px;
  display: block;
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* Hover States when item is hovered / current */
.orido_tm_service .service_list ul li.current .number,
.orido_tm_service .service_list ul li:hover .number {
  color: #FFFFFF;
}

.orido_tm_service .service_list ul li.current .title,
.orido_tm_service .service_list ul li:hover .title {
  color: #FFFFFF;
}

.orido_tm_service .service_list ul li.current .right .text p,
.orido_tm_service .service_list ul li:hover .right .text p {
  color: #FFFFFF;
}

.orido_tm_service .service_list ul li.current .right .svg,
.orido_tm_service .service_list ul li:hover .right .svg {
  filter: brightness(0) invert(1);
  transform: translate(3px, -3px);
}

/* ==========================================================================
   MODALBOX POPUP (ORIDO MODAL SYSTEM)
   ========================================================================== */

.orido_tm_modalbox {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(18, 20, 29, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orido_tm_modalbox.opened {
  opacity: 1;
  visibility: visible;
}

.orido_tm_modalbox .box_inner {
  position: relative;
  width: 920px;
  max-width: 90vw;
  max-height: 85vh;
  background-color: #FFFFFF;
  border-radius: 16px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.92);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-direction: column;
}

.orido_tm_modalbox.opened .box_inner {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

/* Close button */
.orido_tm_modalbox .close {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 20;
}

.orido_tm_modalbox .close_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: #12141D;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  transition: all 0.25s ease;
}

.orido_tm_modalbox .close_btn:hover {
  background-color: #6244C5;
  border-radius: 50%;
  transform: rotate(90deg) scale(1.05);
}

/* Modal Scrollable Description Wrap */
.orido_tm_modalbox .description_wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 45px 50px 50px;
  scrollbar-width: thin;
  scrollbar-color: #6244C5 #F0EEF8;
  border-radius: 16px;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar {
  width: 8px;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-track {
  background: #F0EEF8;
  border-radius: 8px;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-thumb {
  background-color: #6244C5;
  border-radius: 8px;
}

/* Popup Informations */
.orido_tm_modalbox .service_popup_informations {
  width: 100%;
}

.orido_tm_modalbox .service_popup_informations .image {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
}

.popup_banner_img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.orido_tm_modalbox .service_popup_informations .main_title {
  width: 100%;
  margin-bottom: 22px;
}

.orido_tm_modalbox .service_popup_informations .main_title h3 {
  font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #12141D;
  margin: 0;
  letter-spacing: -0.01em;
}

.orido_tm_modalbox .service_popup_informations .descriptions {
  width: 100%;
}

.orido_tm_modalbox .service_popup_informations .descriptions p {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  line-height: 28px;
  color: #505A7E;
  margin-bottom: 18px;
}

.orido_tm_modalbox .service_popup_informations .descriptions p:last-child {
  margin-bottom: 0;
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS
   ========================================================================== */

@media (max-width: 1200px) {
  .orido_tm_service .service_list .left {
    width: 45%;
  }

  .orido_tm_service .service_list .right {
    width: 55%;
  }

  .orido_tm_service .service_list .right .text {
    padding-right: 40px;
  }
}

@media (max-width: 1040px) {
  .orido_tm_service {
    padding: 90px 0;
  }

  .orido_tm_service .service_list .list_inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 20px;
  }

  .orido_tm_service .service_list .left {
    width: 100%;
    margin-bottom: 12px;
  }

  .orido_tm_service .service_list .right {
    width: 100%;
  }

  .orido_tm_service .service_list .right .text {
    padding-right: 20px;
  }

  .orido_tm_service .service_list .title {
    font-size: 25px;
    padding-left: 20px;
  }

  .orido_tm_modalbox .close {
    top: 15px;
    right: 15px;
  }
}

@media (max-width: 768px) {
  .orido_tm_service {
    padding: 70px 0;
  }

  .container {
    padding: 0 24px;
  }

  .orido_tm_main_title h3 {
    font-size: 38px;
  }

  .orido_tm_main_title h3 span:after {
    display: none;
  }

  .orido_tm_service .service_list {
    margin-top: 50px;
  }

  .orido_tm_service .service_list .title {
    font-size: 20px;
    padding-left: 15px;
  }

  .orido_tm_service .service_list .number {
    font-size: 20px;
    min-width: 30px;
  }

  .orido_tm_modalbox .description_wrap {
    padding: 30px 20px;
  }

  .popup_banner_img {
    height: 220px;
  }

  .orido_tm_modalbox .service_popup_informations .main_title h3 {
    font-size: 24px;
  }

  .orido_tm_modalbox .service_popup_informations .descriptions p {
    font-size: 15px;
    line-height: 24px;
  }
}
</style>
