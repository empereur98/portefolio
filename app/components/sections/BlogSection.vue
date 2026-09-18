<template>
  <section class="orido_tm_section" id="blog">
    <div class="orido_tm_news">
      <div class="container">
        <!-- Main Section Title (Orido Style with trailing horizontal line) -->
        <div class="orido_tm_main_title animate-on-scroll fade-up">
          <h3>
            <span>Derniers articles<br />de mon blog</span>
          </h3>
        </div>

        <!-- News / Blog Cards 2x2 Grid -->
        <div class="news_list animate-on-scroll fade-up">
          <ul>
            <li v-for="post in posts" :key="post.id">
              <div class="list_inner" @click="openModal(post)">
                <!-- Left Details: Author, Date, Title, Read More Link -->
                <div class="left">
                  <div class="metabox">
                    <span class="dot"></span>
                    <span class="author">{{ post.author }}</span>
                    <span class="dot"></span>
                    <span class="date">{{ post.date }}</span>
                  </div>

                  <h3 class="title">
                    <span>{{ post.title }}</span>
                  </h3>

                  <div class="orido_tm_read_more">
                    <span class="read_text">Lire l'article</span>
                    <img class="svg" src="/images/svg/top-arrow.svg" alt="" aria-hidden="true" />
                  </div>
                </div>

                <!-- Right Thumbnail Image -->
                <div class="right">
                  <div class="image">
                    <img :src="post.image" :alt="post.title" class="dummy" />
                    <div
                      class="main"
                      :style="{ backgroundImage: `url(${post.image})` }"
                    ></div>
                  </div>
                </div>

                <!-- Decorative Background SVG Shape (Orido Signature) -->
                <span class="shape" aria-hidden="true">
                  <img class="svg" src="/images/svg/Intersect.svg" alt="" />
                </span>

                <!-- Full Overlay Click Target -->
                <button
                  type="button"
                  class="orido_tm_full_link"
                  :aria-label="`Lire l'article : ${post.title}`"
                ></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ORIDO NEWS MODALBOX (Full Article Reader) -->
    <Teleport to="body">
      <div
        class="orido_tm_modalbox"
        :class="{ opened: isModalOpen }"
        role="dialog"
        aria-modal="true"
        :aria-hidden="!isModalOpen"
        @click.self="closeModal"
      >
        <div class="box_inner" v-if="activePost">
          <!-- Close Button with square-to-circle hover effect -->
          <div class="close">
            <button
              type="button"
              class="close_btn"
              aria-label="Fermer l'article"
              @click="closeModal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Description Wrap with Orido Scroll styling -->
          <div class="description_wrap">
            <div class="news_popup_informations">
              <!-- Big Featured Top Image -->
              <div class="image">
                <img :src="activePost.image" :alt="activePost.title" class="dummy_modal" />
                <div
                  class="main"
                  :style="{ backgroundImage: `url(${activePost.image})` }"
                ></div>
              </div>

              <!-- Meta Row -->
              <div class="metabox">
                <span class="dot"></span>
                <span class="author">{{ activePost.author }}</span>
                <span class="dot"></span>
                <span class="date">{{ activePost.date }}</span>
                <span class="dot"></span>
                <span class="category_tag">{{ activePost.category }}</span>
              </div>

              <!-- Article Main Title -->
              <div class="title">
                <h3>{{ activePost.title }}</h3>
              </div>

              <!-- Article Full Body Text -->
              <div class="text">
                <p v-for="(para, pIdx) in activePost.paragraphs" :key="pIdx">
                  {{ para }}
                </p>

                <!-- Key Takeaways Highlight Box -->
                <div class="article_highlight_box" v-if="activePost.keyPoints">
                  <h4 class="highlight_title">Points Clés à Retenir</h4>
                  <ul class="highlight_list">
                    <li v-for="(point, ptIdx) in activePost.keyPoints" :key="ptIdx">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F26440" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{{ point }}</span>
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
interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  category: string
  image: string
  paragraphs: string[]
  keyPoints?: string[]
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Architecture Spring Boot & Microservices : Bonnes Pratiques en Entreprise',
    author: 'TEGUE Franck',
    date: '12 Mars 2026',
    category: 'Architecture Java',
    image: '/images/blog/1.jpg',
    paragraphs: [
      'Dans le développement d\'applications critiques d\'entreprise, le choix de l\'écosystème Java avec Spring Boot garantit une stabilité et une maintenabilité exceptionnelles sur le long terme.',
      'En s\'appuyant sur les principes de la Clean Architecture et de l\'inversion de dépendance, nous structurons les services de sorte à découpler totalement la logique métier des détails d\'implémentation technique (bases de données, frameworks web, API tierces).',
      'Dans cet article, nous analysons la mise en place d\'une sécurité granulaire avec Spring Security et JWT, la gestion déclarative des transactions avec Spring Data JPA, et l\'orchestration de conteneurs Docker pour un déploiement fluide en production.'
    ],
    keyPoints: [
      'Découplage strict des couches métier via ports et adaptateurs (Hexagonale)',
      'Sécurisation des endpoints REST par tokens JWT et contrôle de rôles (RBAC)',
      'Tests unitaires et d\'intégration fiables avec JUnit 5 et Mockito'
    ]
  },
  {
    id: 2,
    title: 'Optimisation des Performances Web : De Vue 3 à Nuxt 4 avec SSR',
    author: 'TEGUE Franck',
    date: '28 Février 2026',
    category: 'Frontend & Nuxt',
    image: '/images/blog/2.jpg',
    paragraphs: [
      'L’expérience utilisateur et le référencement naturel (SEO) dépendent directement des Core Web Vitals. Avec Nuxt 4 et l’écosystème Vue 3 moderne, les mécanismes de Server-Side Rendering (SSR) et d’hydratation partielle permettent d’atteindre des scores de performance remarquables.',
      'En divisant intelligemment l’arbre des composants et en exploitant le prefetching sélectif des routes critiques, le navigateur n’exécute que le JavaScript strictement nécessaire à l’interactivité de la vue active.',
      'Cet article analyse les gains concrets observés sur le Largest Contentful Paint (LCP) et l’Interaction to Next Paint (INP) lors de la conception d’applications dashboards et de plateformes de réservation réactives.'
    ],
    keyPoints: [
      'Réduction substantielle du bundle JavaScript initial par code splitting',
      'Amélioration du temps de premier rendu (LCP) sous la seconde',
      'Gestion centralisée et prédictive de l’état applicatif avec Pinia'
    ]
  },
  {
    id: 3,
    title: 'Défis de la Géolocalisation et des Données Spatiales : L\'Approche FindMe',
    author: 'TEGUE Franck',
    date: '14 Janvier 2026',
    category: 'Géomatique & SIG',
    image: '/images/blog/3.jpg',
    paragraphs: [
      'Dans de nombreuses agglomérations en forte croissance, l’absence d’un système d’adressage standardisé complique la livraison du dernier kilomètre, les secours et les flux commerciaux.',
      'À travers le retour d’expérience du projet FindMe, découvrez comment combiner des coordonnées géodésiques WGS84, des index spatiaux sous PostgreSQL et des bibliothèques cartographiques open source comme Leaflet / OpenStreetMap pour créer un système de repérage robuste.',
      'Nous détaillons le calcul des distances sphériques sur le grand cercle (formule de Haversine), l’optimisation des requêtes géospatiales et la synchronisation avec des clients mobiles Nuxt.'
    ],
    keyPoints: [
      'Indexation spatiale pour des recherches de proximité à latence quasi-nulle',
      'Algorithmes de géocodage et de compression des coordonnées pour le partage',
      'Affichage cartographique vectoriel ultra-léger adapté aux connexions mobiles'
    ]
  },
  {
    id: 4,
    title: 'Modélisation Relationnelle avec PostgreSQL pour Applications Métiers',
    author: 'TEGUE Franck',
    date: '18 Décembre 2025',
    category: 'Bases de Données',
    image: '/images/blog/4.jpg',
    paragraphs: [
      'La pérennité d’un progiciel de gestion (ERP, billetterie, ticketing de support) repose avant tout sur la rigueur de sa modélisation relationnelle et l’intégrité de ses contraintes.',
      'PostgreSQL offre un ensemble puissant de fonctionnalités avancées : contraintes d’exclusion, types JSONB indexables pour les attributs dynamiques, vues matérialisées et transactions ACID sans compromis.',
      'Cet article passe en revue les bonnes pratiques d’indexation (B-Tree, GiST, GIN), la prévention des requêtes N+1 avec Hibernate, et les stratégies de migration continue des schémas.'
    ],
    keyPoints: [
      'Garantie d’intégrité référentielle stricte pour les flux opérationnels critiques',
      'Optimisation des plans d’exécution SQL grâce aux index composites ciblés',
      'Versioning et migrations de schémas reproductibles sans coupure de service'
    ]
  }
]

// Modal State
const isModalOpen = ref(false)
const activePost = ref<BlogPost | null>(null)

const openModal = (post: BlogPost) => {
  activePost.value = post
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

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  nextTick(() => {
    const animEls = document.querySelectorAll('#blog .animate-on-scroll')
    animEls.forEach((el) => el.classList.add('is-visible'))
  })
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onKeyDown)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* ===================================================
   ORIDO NEWS / BLOG SECTION
   Exact Match: https://marketifythemes.net/html/orido/index.html
   Background Color: #F7F7F7
   =================================================== */

.orido_tm_section {
  width: 100%;
  clear: both;
  position: relative;
}

.orido_tm_news {
  width: 100%;
  clear: both;
  background-color: #F7F7F7;
  padding: 135px 0 120px 0;
  position: relative;
  scroll-margin-top: 90px;
}

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
  letter-spacing: -2px;
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
  bottom: 14px;
  margin-left: 25px;
}

/* ===================================================
   NEWS GRID LIST (2x2 Grid)
   =================================================== */
.news_list {
  width: 100%;
  margin-top: 60px;
}

.news_list ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.news_list ul li {
  margin: 0;
}

/* Card Container */
.news_list .list_inner {
  width: 100%;
  position: relative;
  background-color: #F7F4EB;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s ease;
  box-shadow: 0 6px 20px rgba(18, 20, 29, 0.03);
}

.news_list .list_inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(18, 20, 29, 0.08);
}

/* Left Column: Text & Meta */
.news_list .left {
  width: 60%;
  padding-right: 25px;
  position: relative;
  z-index: 2;
}

.metabox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.metabox span {
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 15px;
  color: #6F6B80;
  font-weight: 500;
}

.metabox .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #F26440;
  display: inline-block;
}

.news_list .title {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 22px;
  font-weight: 700;
  color: #12141D;
  line-height: 1.35;
  letter-spacing: -0.5px;
  margin: 0 0 24px 0;
  transition: color 0.3s ease;
}

.news_list .list_inner:hover .title {
  color: #F26440;
}

/* Read More Link with Arrow */
.orido_tm_read_more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 16px;
  font-weight: 700;
  color: #12141D;
  text-decoration: none;
  position: relative;
}

.orido_tm_read_more .read_text {
  position: relative;
}

.orido_tm_read_more .read_text:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background-color: #12141D;
  transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.news_list .list_inner:hover .orido_tm_read_more .read_text:after {
  width: 100%;
}

.orido_tm_read_more .svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.news_list .list_inner:hover .orido_tm_read_more .svg {
  transform: translate(3px, -3px);
}

/* Right Column: Image */
.news_list .right {
  width: 40%;
  position: relative;
  z-index: 2;
}

.news_list .image {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4 / 3;
  box-shadow: 0 8px 24px rgba(18, 20, 29, 0.08);
}

.news_list .image .dummy {
  display: none;
}

.news_list .image .main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1) translateZ(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.news_list .list_inner:hover .image .main {
  transform: scale(1.08) translateZ(0);
}

/* Decorative Background Vector Shape (Intersect.svg) */
.news_list .shape {
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.85;
}

.news_list .shape img {
  max-width: 174px;
  max-height: 240px;
  display: block;
}

/* Full overlay link button */
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
   ORIDO NEWS MODALBOX (Full Article Reader)
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
  background-color: #FFFFFF;
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

/* Close Button */
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
  color: #FFFFFF;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.orido_tm_modalbox .close_btn:hover {
  border-radius: 50%;
  background: #F26440;
  transform: rotate(90deg);
}

/* Description Wrap Scrollable */
.orido_tm_modalbox .description_wrap {
  width: 100%;
  height: 100%;
  padding: 50px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #F26440 #f5f5f7;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar {
  width: 8px;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-track {
  background: #f5f5f7;
}

.orido_tm_modalbox .description_wrap::-webkit-scrollbar-thumb {
  background-color: #F26440;
  border-radius: 10px;
}

/* Modal Content */
.news_popup_informations {
  width: 100%;
}

.news_popup_informations .image {
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.news_popup_informations .image .dummy_modal {
  display: none;
}

.news_popup_informations .image .main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

.news_popup_informations .metabox {
  margin-bottom: 12px;
}

.category_tag {
  color: #F26440 !important;
  font-weight: 700 !important;
}

.news_popup_informations .title h3 {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 30px;
  font-weight: 700;
  color: #12141D;
  line-height: 1.3;
  margin: 0 0 24px 0;
}

.news_popup_informations .text p {
  font-size: 16px;
  line-height: 1.8;
  color: #555768;
  margin-bottom: 18px;
}

/* Highlight box in modal */
.article_highlight_box {
  background: #F7F4EB;
  border: 1px solid #EBE5D8;
  border-radius: 14px;
  padding: 24px 28px;
  margin-top: 30px;
}

.highlight_title {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 18px;
  font-weight: 700;
  color: #12141D;
  margin: 0 0 14px 0;
}

.highlight_list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight_list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: #333647;
  line-height: 1.5;
}

.highlight_list li svg {
  flex-shrink: 0;
  margin-top: 2px;
}

/* ===================================================
   RESPONSIVE DESIGN
   =================================================== */
@media (max-width: 991px) {
  .orido_tm_news {
    padding: 90px 0 80px 0;
  }

  .orido_tm_main_title h3 span:before {
    width: 50px;
    bottom: 8px;
    margin-left: 15px;
  }

  .news_list ul {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .news_list .list_inner {
    padding: 30px;
  }

  .news_popup_informations .image {
    height: 280px;
  }

  .news_popup_informations .title h3 {
    font-size: 24px;
  }
}

@media (max-width: 640px) {
  .orido_tm_news {
    padding: 70px 0 60px 0;
  }

  .orido_tm_main_title h3 {
    font-size: 32px;
  }

  .orido_tm_main_title h3 span:before {
    display: none;
  }

  .news_list .list_inner {
    flex-direction: column-reverse;
    gap: 24px;
    padding: 24px;
  }

  .news_list .left,
  .news_list .right {
    width: 100%;
    padding: 0;
  }

  .news_list .shape {
    display: none;
  }

  .orido_tm_modalbox .description_wrap {
    padding: 30px 20px;
  }
}
</style>
