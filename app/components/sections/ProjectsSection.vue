<template>
  <section class="orido_tm_section" id="projects">
    <div class="orido_tm_portfolio">
      <div class="container">
        <!-- Main Section Title (Orido Style with signature trailing underline) -->
        <div class="orido_tm_main_title animate-on-scroll fade-up">
          <h3>
            <span>Découvrez mes<br />projets récents</span>
          </h3>
        </div>

        <!-- Portfolio Carousel & Items -->
        <div
          class="portfolio_list animate-on-scroll fade-up"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
        >
          <div
            class="portfolio_carousel_track_wrapper"
            ref="trackWrapper"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @mousedown="onMouseDown"
          >
            <ul
              class="portfolio_carousel_track"
              :style="{
                transform: `translateX(-${currentOffset}px)`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }"
            >
              <li
                v-for="project in projects"
                :key="project.id"
                class="portfolio_item"
                :style="{ width: `${cardWidth}px` }"
              >
                <div class="list_inner" @click="openModal(project)">
                  <div class="image">
                    <!-- Ratio dummy / placeholder for aspect ratio -->
                    <div class="aspect_box"></div>
                    <div
                      class="main"
                      :style="{ backgroundImage: `url(${project.image})` }"
                    ></div>
                    <!-- Zoom badge indicator on hover -->
                    <div class="hover_indicator" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>

                  <div class="details">
                    <span class="category">{{ project.category }}</span>
                    <h3 class="title">
                      <span>{{ project.title }}</span>
                    </h3>
                  </div>

                  <button
                    type="button"
                    class="orido_tm_full_link"
                    :aria-label="`Voir les détails de ${project.title}`"
                  ></button>
                </div>
              </li>
            </ul>
          </div>

          <!-- Navigation Arrow Buttons (Orido signature 80x80 circles) -->
          <button
            type="button"
            class="prev_button"
            aria-label="Projet précédent"
            :disabled="currentIndex === 0"
            @click="prevSlide"
          >
            <img class="svg" src="/images/svg/prev.svg" alt="Précédent" />
          </button>
          <button
            type="button"
            class="next_button"
            aria-label="Projet suivant"
            :disabled="currentIndex >= maxIndex"
            @click="nextSlide"
          >
            <img class="svg" src="/images/svg/next.svg" alt="Suivant" />
          </button>

          <!-- Carousel Pagination Dots -->
          <div class="portfolio_dots" role="tablist" aria-label="Pagination des projets">
            <button
              v-for="idx in totalSlidesCount"
              :key="idx"
              type="button"
              class="portfolio_dot"
              :class="{ active: currentDotIndex === (idx - 1) }"
              :aria-label="`Aller au projet ${idx}`"
              @click="goToSlide(idx - 1)"
            ></button>
          </div>
        </div>

        <!-- Optional GitHub repositories direct link -->
        <div class="portfolio_bottom_cta animate-on-scroll fade-up">
          <a
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="orido_portfolio_cta_btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Explorer tous mes dépôts sur GitHub</span>
            <svg class="arrow_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- ORIDO MODALBOX (Details Popup) -->
    <Teleport to="body">
      <div
        class="orido_tm_modalbox"
        :class="{ opened: isModalOpen }"
        role="dialog"
        aria-modal="true"
        :aria-hidden="!isModalOpen"
        @click.self="closeModal"
      >
        <div class="box_inner" v-if="activeProject">
          <!-- Close Button with signature Orido animation (square to circle) -->
          <div class="close">
            <button
              type="button"
              class="close_btn"
              aria-label="Fermer la boîte modale"
              @click="closeModal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Description Wrap with Orido scroll styling -->
          <div class="description_wrap">
            <div class="popup_details">
              <!-- Top Featured Banner Image -->
              <div class="top_image">
                <img :src="activeProject.image" :alt="activeProject.title" class="dummy_img" />
                <div
                  class="main"
                  :style="{ backgroundImage: `url(${activeProject.image})` }"
                ></div>
              </div>

              <!-- Main Title & Category -->
              <div class="portfolio_main_title">
                <span class="modal_category">{{ activeProject.category }}</span>
                <h3>{{ activeProject.title }}</h3>
              </div>

              <!-- Two Column Details Grid -->
              <div class="main_details">
                <div class="textbox">
                  <h4 class="details_subtitle">Présentation du Projet</h4>
                  <p>{{ activeProject.longDescription }}</p>

                  <h4 class="details_subtitle" style="margin-top: 24px;">Défis Techniques & Solutions</h4>
                  <p>{{ activeProject.technicalChallenge }}</p>

                  <h4 class="details_subtitle" style="margin-top: 24px;">Fonctionnalités Clés</h4>
                  <ul class="features_bullet_list">
                    <li v-for="(feat, fIdx) in activeProject.keyFeatures" :key="fIdx">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6244C5" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{{ feat }}</span>
                    </li>
                  </ul>
                </div>

                <div class="detailbox">
                  <ul>
                    <li>
                      <span class="first">Client</span>
                      <span class="second">{{ activeProject.client }}</span>
                    </li>
                    <li>
                      <span class="first">Catégorie</span>
                      <span class="second">{{ activeProject.category }}</span>
                    </li>
                    <li>
                      <span class="first">Année</span>
                      <span class="second">{{ activeProject.year }}</span>
                    </li>
                    <li>
                      <span class="first">Stack Technique</span>
                      <div class="tech_tags_wrap">
                        <span
                          v-for="tech in activeProject.technologies"
                          :key="tech"
                          class="tech_tag"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </li>
                    <li v-if="activeProject.githubUrl || activeProject.liveUrl" class="links_item">
                      <span class="first">Liens</span>
                      <div class="action_buttons_wrap">
                        <a
                          v-if="activeProject.liveUrl"
                          :href="activeProject.liveUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="modal_btn modal_btn--primary"
                        >
                          <span>Démo Live</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        <a
                          v-if="activeProject.githubUrl"
                          :href="activeProject.githubUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="modal_btn modal_btn--secondary"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  category: string
  client: string
  year: string
  image: string
  technologies: string[]
  shortDescription: string
  longDescription: string
  technicalChallenge: string
  keyFeatures: string[]
  liveUrl?: string
  githubUrl?: string
}

const githubUrl = 'https://github.com/empereur98'

const projects: Project[] = [
  {
    id: 1,
    title: 'FindMe — Système de Localisation & Gestion d\'Adresses',
    category: 'Géolocalisation & Nuxt / Java',
    client: 'Projet Innovant de Repérage Urbain',
    year: '2025',
    image: '/images/portfolio/1.jpg',
    technologies: ['Java', 'Spring Boot', 'Nuxt 3', 'TypeScript', 'PostgreSQL', 'OpenStreetMap', 'Docker'],
    shortDescription: 'Solution innovante de localisation précise et de partage d\'adresses pour zones urbaines à adressage complexe.',
    longDescription:
      'FindMe est une solution complète d’adressage et de repérage spatial conçue pour surmonter le défi des zones urbaines dépourvues de signalisation ou de numérotation standardisée. Composée d’un backend Java Spring Boot hautement résilient et d’une interface Nuxt 3 réactive, l’application permet aux résidents, commerces et livreurs de générer, rechercher et partager des points d’intérêt géocodés avec une précision métrique.',
    technicalChallenge:
      'Gestion de la projection cartographique et calcul de distance géodésique performant en base PostgreSQL (indexation spatiale), interfaçage avec OpenStreetMap et synchronisation temps réel entre le frontend Nuxt 3 et les microservices Java via Docker.',
    keyFeatures: [
      'Génération et recherche d’adresses numériques basées sur coordonnées GPS précises',
      'Cartographie interactive fluide avec tuiles OpenStreetMap et marqueurs dynamiques',
      'API RESTful Java Spring Boot sécurisée avec validation stricte des données spatiales',
      'Interface Nuxt 3 optimisée pour mobile avec recherche instantanée et partage d’itinéraire'
    ],
    liveUrl: 'https://github.com/empereur98/FindMe',
    githubUrl: 'https://github.com/empereur98/FindMe'
  },
  {
    id: 2,
    title: 'GeoMatics Surveys — Plateforme Topographique & SIG',
    category: 'Géomatique & Topographie',
    client: 'Cabinet d\'Ingénierie Géomatique',
    year: '2025',
    image: '/images/portfolio/2.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Calculs Géodésiques', 'SIG / GIS', 'CSS Moderne'],
    shortDescription: 'Plateforme spécialisée pour la gestion de levés topographiques, arpentage et calculs géométriques de terrain.',
    longDescription:
      'Développée spécifiquement pour les professionnels de la topographie et de la géomatique, GeoMatics Surveys centralise la saisie, le traitement et la visualisation des levés de terrain. L’application permet d’importer des coordonnées brutes d’instruments de mesure (stations totales, GPS différentiels), d’exécuter des calculs de cheminement et de superficies, et de visualiser les emprises parcellaires.',
    technicalChallenge:
      'Précision rigoureuse des algorithmes géodésiques (conversion de systèmes de coordonnées, calculs de gisements et de dénivelées) et rendu vectoriel interactif haute performance sur le navigateur sans dépendance lourde.',
    keyFeatures: [
      'Calculs topographiques automatisés (angles, distances horizontales, cotes d’altitude)',
      'Visualisation vectorielle interactive des contours de parcelles et relevés de points',
      'Importation et exportation de jeux de données topographiques aux formats standards',
      'Interface Vue 3 intuitive respectant la terminologie et les flux de travail des géomètres'
    ],
    liveUrl: 'https://github.com/empereur98/geoMatic',
    githubUrl: 'https://github.com/empereur98/geoMatic'
  },
  {
    id: 3,
    title: 'TaskFlow — Moteur Collaboratif & Sécurité RBAC',
    category: 'Architecture Backend Java',
    client: 'Système d\'Entreprise & Workflow',
    year: '2025',
    image: '/images/portfolio/3.jpg',
    technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker'],
    shortDescription: 'Backend d\'entreprise robuste pour la gestion collaborative de tâches avec contrôle d\'accès granulaire.',
    longDescription:
      'TaskFlow est une architecture backend Java moderne bâtie sur Spring Boot, orchestrant les flux de travail, la distribution des tâches et la collaboration d’équipes multidisciplinaires. Conçu pour garantir une tolérance maximale aux pannes, le système implémente une séparation stricte des couches métiers (Clean Architecture) et une sécurité renforcée par tokens JWT.',
    technicalChallenge:
      'Implémentation d’un contrôle d’accès basé sur les rôles (RBAC) extrêmement granulaire, prévention des accès concurrents sur les ressources partagées et couverture de tests unitaires et d’intégration avec Mockito.',
    keyFeatures: [
      'Architecture modulaire en couches avec Spring Boot 3 et Java 17',
      'Authentification sans état par JWT et autorisation basée sur les rôles (Admin, Manager, User)',
      'Persistance relationnelle robuste avec Spring Data JPA, Hibernate et PostgreSQL',
      'Documentation complète de l’API avec Swagger / OpenAPI et conteneurisation Docker'
    ],
    liveUrl: 'https://github.com/empereur98/taskflow',
    githubUrl: 'https://github.com/empereur98/taskflow'
  },
  {
    id: 4,
    title: 'CoworkingHub — Réservation & Espaces Partagés',
    category: 'Plateforme Web & Réservation',
    client: 'Réseau d\'Espaces Coworking',
    year: '2024',
    image: '/images/portfolio/4.jpg',
    technologies: ['Nuxt 3', 'Vue 3', 'TailwindCSS', 'TypeScript', 'Pinia', 'Node.js'],
    shortDescription: 'Application web réactive pour la réservation en ligne de bureaux, salles de réunion et abonnements coworking.',
    longDescription:
      'Plateforme web conçue pour digitaliser l’expérience des utilisateurs d’espaces de travail partagés. CoworkingHub propose un calendrier interactif des disponibilités en direct, un système de filtres multicritères (équipements, capacité, tarification horaire ou mensuelle) et un tableau de bord de suivi des réservations pour les gestionnaires d’espaces.',
    technicalChallenge:
      'Synchronisation réactive de la disponibilité des salles en temps réel, gestion des plages horaires complexes pour éviter tout surbooking et optimisation du rendu SSR avec Nuxt 3 pour un référencement optimal.',
    keyFeatures: [
      'Calendrier dynamique de réservation par créneaux avec détection des conflits',
      'Fiches détaillées des espaces avec galeries photos, commodités et tarifs transparents',
      'Espace membre personnalisé pour gérer ses réservations et factures',
      'Interface 100% responsive construite selon les standards ergonomiques les plus récents'
    ],
    liveUrl: 'https://github.com/empereur98/coworkingHub',
    githubUrl: 'https://github.com/empereur98/coworkingHub'
  },
  {
    id: 5,
    title: 'Eliot Service Desk — Gestion de Tickets & SLA',
    category: 'Système Métier & Support IT',
    client: 'Eliot Group',
    year: '2024',
    image: '/images/portfolio/5.jpg',
    technologies: ['Java / Spring', 'PostgreSQL', 'Thymeleaf / Vue', 'Moteur de Notifications', 'Audit Trail'],
    shortDescription: 'Système professionnel de billetterie d\'assistance et de suivi des incidents opérationnels avec respect des SLA.',
    longDescription:
      'Solution de support client et de gestion de parc d’incidents développée pour Eliot Group. Le système structure les demandes d’assistance technique, priorise les interventions selon le niveau d’urgence et assure un suivi rigoureux des engagements de niveau de service (SLA) à travers des indicateurs de performance clés.',
    technicalChallenge:
      'Automatisation des règles d’escalade des tickets non résolus dans les délais impartis, historique d’audit complet garantissant la traçabilité de chaque action d’un technicien et notification multicanale instantanée.',
    keyFeatures: [
      'Cycle de vie complet des tickets (Ouvert, En cours, En attente, Résolu, Clôturé)',
      'Calcul automatique des délais SLA et alertes proactives pour les agents de support',
      'Routage intelligent des demandes vers les services compétents selon la typologie',
      'Statistiques de résolution et métriques de satisfaction utilisateur exportables'
    ],
    liveUrl: 'https://github.com/empereur98/gestion-de-ticket-eliotgroup',
    githubUrl: 'https://github.com/empereur98/gestion-de-ticket-eliotgroup'
  }
]

// Carousel State & Dimensions
const currentIndex = ref(0)
const itemsVisible = ref(3)
const cardWidth = ref(380)
const gap = 30
const trackWrapper = ref<HTMLElement | null>(null)

// Autoplay
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const calculateDimensions = () => {
  if (typeof window === 'undefined') return
  const width = window.innerWidth
  if (width >= 1200) {
    itemsVisible.value = 3
  } else if (width >= 768) {
    itemsVisible.value = 2
  } else {
    itemsVisible.value = 1
  }

  if (trackWrapper.value) {
    const containerW = trackWrapper.value.clientWidth
    const totalGaps = (itemsVisible.value - 1) * gap
    cardWidth.value = Math.floor((containerW - totalGaps) / itemsVisible.value)
  }
}

const maxIndex = computed(() => {
  return Math.max(0, projects.length - itemsVisible.value)
})

const totalSlidesCount = computed(() => {
  return maxIndex.value + 1
})

const currentOffset = computed(() => {
  return currentIndex.value * (cardWidth.value + gap)
})

const currentDotIndex = computed(() => {
  return currentIndex.value
})

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value
  }
}

const goToSlide = (idx: number) => {
  currentIndex.value = Math.max(0, Math.min(idx, maxIndex.value))
}

const startAutoplay = () => {
  pauseAutoplay()
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const resumeAutoplay = () => {
  if (!isModalOpen.value) {
    startAutoplay()
  }
}

// Touch / Swipe handling
let touchStartX = 0
let touchEndX = 0
const isDragging = ref(false)

const onTouchStart = (e: TouchEvent) => {
  pauseAutoplay()
  touchStartX = e.touches[0].clientX
}

const onTouchMove = (e: TouchEvent) => {
  touchEndX = e.touches[0].clientX
}

const onTouchEnd = () => {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
  resumeAutoplay()
}

// Mouse drag support
let mouseStartX = 0
const onMouseDown = (e: MouseEvent) => {
  mouseStartX = e.clientX
  const onMouseMove = (moveEvent: MouseEvent) => {
    const diff = mouseStartX - moveEvent.clientX
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }
  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

// Modal State
const isModalOpen = ref(false)
const activeProject = ref<Project | null>(null)

const openModal = (proj: Project) => {
  pauseAutoplay()
  activeProject.value = proj
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
  resumeAutoplay()
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  calculateDimensions()
  window.addEventListener('resize', calculateDimensions)
  window.addEventListener('keydown', onKeyDown)
  startAutoplay()
})

onUnmounted(() => {
  pauseAutoplay()
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', calculateDimensions)
    window.removeEventListener('keydown', onKeyDown)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* ===================================================
   ORIDO PORTFOLIO SECTION
   Exact Color: #FFC448
   =================================================== */

.orido_tm_section {
  width: 100%;
  clear: both;
  position: relative;
}

.orido_tm_portfolio {
  width: 100%;
  clear: both;
  background-color: #FFC448;
  padding: 120px 0 110px 0;
  position: relative;
  overflow: hidden;
}

/* Container */
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
}

/* ===================================================
   MAIN TITLE (Orido signature with dash line)
   =================================================== */
.orido_tm_main_title {
  width: 100%;
  margin-bottom: 20px;
}

.orido_tm_main_title h3 {
  font-family: var(--font-heading, 'Space Grotesk', 'DM Sans', sans-serif);
  font-size: clamp(34px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.15;
  color: #12141D;
  margin: 0;
}

.orido_tm_main_title h3 span {
  display: inline-block;
  position: relative;
}

.orido_tm_main_title h3 span:before {
  position: absolute;
  content: "";
  width: 80px;
  height: 2px;
  background-color: #12141D;
  bottom: 12px;
  margin-left: 25px;
}

/* ===================================================
   PORTFOLIO LIST & CAROUSEL
   =================================================== */
.portfolio_list {
  width: 100%;
  position: relative;
  margin-top: 50px;
}

.portfolio_carousel_track_wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: grab;
  user-select: none;
}

.portfolio_carousel_track_wrapper:active {
  cursor: grabbing;
}

.portfolio_carousel_track {
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  will-change: transform;
}

/* Item Card */
.portfolio_item {
  flex-shrink: 0;
}

.portfolio_item .list_inner {
  width: 100%;
  position: relative;
  cursor: pointer;
}

/* Image Container */
.portfolio_item .image {
  position: relative;
  overflow: hidden;
  background-color: #12141D;
  aspect-ratio: 37 / 40;
  box-shadow: 0 10px 30px rgba(18, 20, 29, 0.08);
}

.portfolio_item .aspect_box {
  width: 100%;
  padding-bottom: 108%;
}

.portfolio_item .image .main {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transform: scale(1) translateZ(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.portfolio_item .list_inner:hover .image .main {
  transform: scale(1.09) translateZ(0);
}

/* Hover Indicator */
.hover_indicator {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  background: rgba(18, 20, 29, 0.85);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 2;
}

.portfolio_item .list_inner:hover .hover_indicator {
  opacity: 1;
  transform: translateY(0);
}

/* Details Under Image */
.portfolio_item .details {
  width: 100%;
  margin-top: 25px;
}

.portfolio_item .category {
  font-family: var(--font-body, 'Inter', 'DM Sans', sans-serif);
  font-size: 18px;
  font-weight: 500;
  color: #12141D;
  display: inline-block;
  margin-bottom: 10px;
}

.portfolio_item .title {
  font-family: var(--font-heading, 'Space Grotesk', 'DM Sans', sans-serif);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.3;
  color: #12141D;
  margin: 0;
}

.portfolio_item .title span {
  display: inline;
  position: relative;
}

.portfolio_item .title span:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #12141D;
  left: 0;
  bottom: 0;
  transition: width 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.portfolio_item .list_inner:hover .title span:before {
  width: 0;
}

/* Full link overlay */
.orido_tm_full_link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
}

/* ===================================================
   PREV & NEXT BUTTONS (Orido 80x80 Circles)
   =================================================== */
.prev_button,
.next_button {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid rgba(18, 20, 29, 0.3);
  background: rgba(255, 196, 72, 0.4);
  backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 0;
}

.prev_button {
  left: -86px;
}

.next_button {
  right: -86px;
}

.prev_button:hover,
.next_button:hover {
  border-color: rgba(18, 20, 29, 0.8);
  background: #12141D;
}

.prev_button .svg,
.next_button .svg {
  width: 26px;
  height: 18px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.prev_button:hover .svg {
  transform: translateX(-4px);
  filter: invert(1);
}

.next_button:hover .svg {
  transform: translateX(4px);
  filter: invert(1);
}

.prev_button:disabled,
.next_button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

/* ===================================================
   PAGINATION DOTS
   =================================================== */
.portfolio_dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 45px;
}

.portfolio_dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(18, 20, 29, 0.25);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.portfolio_dot.active {
  width: 32px;
  border-radius: 12px;
  background: #12141D;
}

/* Bottom GitHub CTA */
.portfolio_bottom_cta {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}

.orido_portfolio_cta_btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: #12141D;
  color: #fff;
  border-radius: 50px;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(18, 20, 29, 0.18);
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.orido_portfolio_cta_btn:hover {
  background: #6244C5;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(98, 68, 197, 0.3);
}

.orido_portfolio_cta_btn .arrow_icon {
  transition: transform 0.3s ease;
}

.orido_portfolio_cta_btn:hover .arrow_icon {
  transform: translateX(4px);
}

/* ===================================================
   ORIDO MODALBOX (Details Pop-up)
   =================================================== */
.orido_tm_modalbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(10, 12, 19, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.orido_tm_modalbox.opened {
  opacity: 1;
  visibility: visible;
}

.orido_tm_modalbox .box_inner {
  position: relative;
  width: 968px;
  max-width: 95vw;
  max-height: 88vh;
  background-color: #fff;
  border-radius: 18px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transform: translateY(25px);
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.orido_tm_modalbox.opened .box_inner {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Close Button (Square to Circle Hover) */
.orido_tm_modalbox .close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 50;
}

.orido_tm_modalbox .close_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #12141D;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.orido_tm_modalbox .close_btn:hover {
  border-radius: 50%;
  background: #6244C5;
  transform: rotate(90deg);
}

/* Description Wrap Scrollable */
.orido_tm_modalbox .description_wrap {
  width: 100%;
  height: 100%;
  padding: 50px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #6244C5 #f5f5f7;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar {
  width: 8px;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-track {
  background: #f5f5f7;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-thumb {
  background-color: #6244C5;
  border-radius: 10px;
}

/* Top Image */
.orido_tm_modalbox .top_image {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 35px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.orido_tm_modalbox .top_image .dummy_img {
  display: none;
}

.orido_tm_modalbox .top_image .main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

/* Portfolio Main Title */
.orido_tm_modalbox .portfolio_main_title {
  width: 100%;
  margin-bottom: 30px;
}

.orido_tm_modalbox .portfolio_main_title .modal_category {
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: #6244C5;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
}

.orido_tm_modalbox .portfolio_main_title h3 {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 32px;
  font-weight: 700;
  color: #12141D;
  line-height: 1.25;
  margin: 0;
}

/* Main Details 2-Column */
.orido_tm_modalbox .main_details {
  display: flex;
  gap: 50px;
}

.orido_tm_modalbox .main_details .textbox {
  flex: 1 1 62%;
}

.details_subtitle {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 19px;
  font-weight: 700;
  color: #12141D;
  margin-bottom: 10px;
}

.orido_tm_modalbox .main_details .textbox p {
  font-size: 16px;
  line-height: 1.75;
  color: #555768;
  margin-bottom: 16px;
}

.features_bullet_list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.features_bullet_list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: #333647;
  line-height: 1.5;
}

.features_bullet_list li svg {
  flex-shrink: 0;
  margin-top: 3px;
}

/* Detail Box (Sidebar) */
.orido_tm_modalbox .main_details .detailbox {
  flex: 0 0 35%;
  background: #F9F9FB;
  border: 1px solid #EBEBF0;
  padding: 28px;
  border-radius: 14px;
  height: fit-content;
}

.orido_tm_modalbox .main_details .detailbox ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.orido_tm_modalbox .main_details .detailbox .first {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8A8797;
  display: block;
  margin-bottom: 4px;
}

.orido_tm_modalbox .main_details .detailbox .second {
  font-size: 16px;
  font-weight: 600;
  color: #12141D;
  display: block;
}

.tech_tags_wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tech_tag {
  font-size: 13px;
  font-weight: 500;
  background: #fff;
  border: 1px solid #DEDEE5;
  color: #24315E;
  padding: 3px 10px;
  border-radius: 20px;
}

/* Action Buttons inside Modal */
.action_buttons_wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.modal_btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.modal_btn--primary {
  background: #6244C5;
  color: #fff;
}

.modal_btn--primary:hover {
  background: #4F32B0;
  transform: translateY(-2px);
}

.modal_btn--secondary {
  background: #12141D;
  color: #fff;
}

.modal_btn--secondary:hover {
  background: #242838;
  transform: translateY(-2px);
}

/* ===================================================
   RESPONSIVE DESIGN
   =================================================== */
@media (max-width: 1400px) {
  .prev_button {
    left: -20px;
  }
  .next_button {
    right: -20px;
  }
}

@media (max-width: 991px) {
  .orido_tm_portfolio {
    padding: 90px 0 80px 0;
  }

  .orido_tm_main_title h3 span:before {
    width: 50px;
    bottom: 8px;
    margin-left: 15px;
  }

  .prev_button,
  .next_button {
    width: 56px;
    height: 56px;
  }

  .prev_button {
    left: -10px;
  }

  .next_button {
    right: -10px;
  }

  .orido_tm_modalbox .main_details {
    flex-direction: column;
    gap: 30px;
  }

  .orido_tm_modalbox .main_details .detailbox {
    width: 100%;
  }

  .orido_tm_modalbox .top_image {
    height: 280px;
  }
}

@media (max-width: 767px) {
  .orido_tm_portfolio {
    padding: 70px 0 60px 0;
  }

  .orido_tm_main_title h3 {
    font-size: 32px;
  }

  .orido_tm_main_title h3 span:before {
    display: none;
  }

  .portfolio_item .title {
    font-size: 22px;
  }

  .prev_button,
  .next_button {
    display: none;
  }

  .orido_tm_modalbox .description_wrap {
    padding: 30px 20px;
  }

  .orido_tm_modalbox .portfolio_main_title h3 {
    font-size: 24px;
  }
}
</style>
