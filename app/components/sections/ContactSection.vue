<template>
  <section class="orido_tm_section" id="contact">
    <div class="orido_tm_contact">
      <div class="container">
        <!-- Top Infobox: Rotating badge, main title, and boxed CTA button -->
        <div class="infobox animate-on-scroll fade-up">
          <!-- Video / Presentation Rotating Badge Button -->
          <div class="video_button" @click="openVideoModal">
            <button
              type="button"
              class="badge_btn"
              aria-label="En savoir plus sur Franck Tegue"
            >
              <!-- Rotating SVG Circle Badge -->
              <svg class="anim_circle" viewBox="0 0 172 172" width="172" height="172">
                <circle cx="86" cy="86" r="84" fill="#FFC448" />
                <path
                  id="circlePath"
                  d="M 86, 86 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  fill="none"
                />
                <text font-family="'Space Grotesk', sans-serif" font-size="11.5" font-weight="700" fill="#12141D" letter-spacing="2.2">
                  <textPath href="#circlePath" startOffset="0%">
                    WELCOME TO FRANCK TEGUE • FULL STACK DEV •
                  </textPath>
                </text>
              </svg>

              <!-- Central Play / Code Icon -->
              <div class="center_icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#12141D">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          <!-- Headline & Description Text -->
          <div class="text">
            <h3>Travaillons ensemble</h3>
            <p>
              Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter, discutons ensemble de vos idées et objectifs techniques.
            </p>
          </div>

          <!-- Boxed Button "Discuter" / "Say Hello" with send icon -->
          <div class="orido_tm_boxed_button">
            <button
              type="button"
              class="boxed_btn"
              aria-label="Ouvrir le formulaire de contact"
              @click="openContactModal"
            >
              <span>Discuter</span>
              <img class="svg" src="/images/svg/send.svg" alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        <!-- Bottom Connect Bar: Direct phone, email, and social links -->
        <div class="connect animate-on-scroll fade-up animate-delay-1">
          <div class="left">
            <ul>
              <li>
                <span class="name">Appelez-moi :</span>
                <p>
                  <a class="line_effect" :href="`tel:${phoneNumberClean}`">
                    {{ phoneNumberDisplay }}
                  </a>
                </p>
              </li>
              <li>
                <span class="name">Email :</span>
                <p>
                  <a class="line_effect" :href="`mailto:${email}`">
                    {{ email }}
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div class="right">
            <div class="orido_tm_follow">
              <span>Suivez-moi :</span>
              <ul>
                <li>
                  <a
                    href="https://github.com/empereur98"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Franck Tegue"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Franck Tegue"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter de Franck Tegue"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Orido Decorative Corner Shapes -->
      <span class="element" aria-hidden="true">
        <img class="svg" src="/images/svg/elements.svg" alt="" />
      </span>
      <span class="element2" aria-hidden="true">
        <img class="svg" src="/images/svg/element-2.svg" alt="" />
      </span>
    </div>

    <!-- CONTACT FORM MODALBOX -->
    <Teleport to="body">
      <div
        class="orido_tm_modalbox"
        :class="{ opened: isContactModalOpen }"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-contact-title"
        :aria-hidden="!isContactModalOpen"
        @click.self="closeContactModal"
      >
        <div class="box_inner contact_modal_inner">
          <div class="close">
            <button
              type="button"
              class="close_btn"
              aria-label="Fermer la boîte modale"
              @click="closeContactModal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="description_wrap contact_form_wrap">
            <div class="contact_modal_header">
              <span class="contact_tag">Parlons de votre projet</span>
              <h3 id="modal-contact-title">Envoyez-moi un message direct</h3>
              <p>Remplissez le formulaire ci-dessous et je vous répondrai dans un délai de 24 heures.</p>
            </div>

            <!-- Sent Success Message -->
            <div v-if="formSubmitted" class="submit_success">
              <div class="success_icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6244C5" stroke-width="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4>Message envoyé avec succès !</h4>
              <p>Merci pour votre prise de contact. Je reviens vers vous très rapidement.</p>
              <button type="button" class="modal_btn modal_btn--primary" @click="resetForm">
                Envoyer un autre message
              </button>
            </div>

            <!-- Contact Form -->
            <form v-else @submit.prevent="handleSubmit" class="modal_contact_form">
              <div class="form_row">
                <div class="form_group">
                  <label for="contact-name">Votre Nom *</label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="ex. Jean Dupont"
                  />
                </div>
                <div class="form_group">
                  <label for="contact-email">Votre Email *</label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="jean@entreprise.com"
                  />
                </div>
              </div>

              <div class="form_group">
                <label for="contact-subject">Sujet du message *</label>
                <input
                  id="contact-subject"
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="Opportunité de projet, mission freelance, etc."
                />
              </div>

              <div class="form_group">
                <label for="contact-message">Votre Message *</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Décrivez brièvement vos besoins, vos délais et vos objectifs..."
                ></textarea>
              </div>

              <button type="submit" class="submit_boxed_btn" :disabled="isSubmitting">
                <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                <img class="svg" src="/images/svg/send.svg" alt="" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- VIDEO / INTRO MODALBOX -->
    <Teleport to="body">
      <div
        class="orido_tm_modalbox"
        :class="{ opened: isVideoModalOpen }"
        role="dialog"
        aria-modal="true"
        :aria-hidden="!isVideoModalOpen"
        @click.self="closeVideoModal"
      >
        <div class="box_inner video_modal_inner">
          <div class="close">
            <button
              type="button"
              class="close_btn"
              aria-label="Fermer la vidéo"
              @click="closeVideoModal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="description_wrap video_content_wrap">
            <div class="video_header">
              <span class="contact_tag">Développeur Full Stack (Java & Vue/Nuxt)</span>
              <h3>À propos de TEGUE Franck</h3>
              <p>
                Spécialiste de l'écosystème Java / Spring Boot et de Vue.js / Nuxt, je combine architecture logicielle robuste, rigueur d'ingénierie et interfaces intuitives adaptées aux enjeux stratégiques de vos projets.
              </p>
            </div>
            <div class="video_highlight_box">
              <div class="highlight_item">
                <span class="highlight_num">3+</span>
                <span class="highlight_label">Années d'expérience</span>
              </div>
              <div class="highlight_item">
                <span class="highlight_num">15+</span>
                <span class="highlight_label">Projets déployés</span>
              </div>
              <div class="highlight_item">
                <span class="highlight_num">100%</span>
                <span class="highlight_label">Engagement & Disponibilité</span>
              </div>
            </div>
            <div class="video_actions">
              <button type="button" class="modal_btn modal_btn--primary" @click="switchToContact">
                Démarrer une conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const phoneNumberDisplay = '+237 690 00 00 00'
const phoneNumberClean = '+237690000000'
const email = 'contact@teguefranck.dev'

// Modals State
const isContactModalOpen = ref(false)
const isVideoModalOpen = ref(false)

const openContactModal = () => {
  isContactModalOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeContactModal = () => {
  isContactModalOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const openVideoModal = () => {
  isVideoModalOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeVideoModal = () => {
  isVideoModalOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const switchToContact = () => {
  closeVideoModal()
  setTimeout(() => {
    openContactModal()
  }, 200)
}

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 800)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  formSubmitted.value = false
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (isContactModalOpen.value) closeContactModal()
    if (isVideoModalOpen.value) closeVideoModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* ===================================================
   ORIDO CONTACT SECTION
   Exact Match: https://marketifythemes.net/html/orido/index.html
   Background Color: #12141D
   =================================================== */

.orido_tm_section {
  width: 100%;
  clear: both;
  position: relative;
}

.orido_tm_contact {
  width: 100%;
  clear: both;
  background-color: #12141D;
  padding: 135px 0 120px 0;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 90px;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 5;
}

/* ===================================================
   TOP INFOBOX: Video Button, Text, Boxed Button
   =================================================== */
.infobox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 116px;
  gap: 30px;
}

/* 1. Video Rotating Badge Button */
.video_button {
  position: relative;
  flex-shrink: 0;
}

.badge_btn {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.35s ease;
}

.badge_btn:hover {
  transform: scale(1.05);
}

.anim_circle {
  max-width: 172px;
  max-height: 172px;
  animation: spin 20s linear infinite;
  display: block;
}

.badge_btn:hover .anim_circle {
  animation-play-state: paused;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.center_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(18, 20, 29, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.center_icon svg {
  margin-left: 2px;
}

/* 2. Middle Text */
.text {
  padding: 0 70px;
  flex: 1;
}

.text h3 {
  font-family: var(--font-heading, 'Space Grotesk', 'DM Sans', sans-serif);
  font-weight: 700;
  font-size: clamp(34px, 4vw, 56px);
  letter-spacing: -2px;
  line-height: 1.15;
  color: #FFFFFF;
  margin: 0 0 22px 0;
}

.text p {
  font-family: var(--font-body, 'Inter', 'DM Sans', sans-serif);
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 580px;
}

/* 3. Boxed Button ("Discuter" / "Say Hello") */
.orido_tm_boxed_button {
  flex-shrink: 0;
}

.boxed_btn {
  text-decoration: none;
  color: #FDFDFD;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-weight: 700;
  font-size: 18px;
  background-color: #6244C5;
  border-radius: 16px;
  padding: 22px 42px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 25px rgba(98, 68, 197, 0.3);
}

.boxed_btn .svg {
  width: 22px;
  height: 22px;
  transition: transform 0.35s ease, filter 0.35s ease;
}

.boxed_btn:hover {
  background-color: #FFFFFF;
  color: #12141D;
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(255, 255, 255, 0.25);
}

.boxed_btn:hover .svg {
  filter: invert(1);
  transform: translateX(4px);
}

/* ===================================================
   BOTTOM CONNECT BAR: Call, Email & Socials
   =================================================== */
.connect {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 60px;
}

.connect .left ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
}

.connect .left ul li {
  margin: 0;
}

.connect .name {
  display: block;
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.connect p {
  display: block;
  color: #FFFFFF;
  font-size: clamp(22px, 2.5vw, 36px);
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 0;
}

.connect p a {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.25s ease;
}

/* Orido Line Effect on Hover */
.line_effect {
  position: relative;
  display: inline-block;
}

.line_effect:after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background-color: #FFC448;
  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.line_effect:hover:after {
  width: 100%;
  left: 0;
  right: auto;
}

/* Follow Me Socials */
.orido_tm_follow {
  display: flex;
  align-items: center;
  gap: 20px;
}

.orido_tm_follow span {
  color: #FFFFFF;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
}

.orido_tm_follow ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
}

.orido_tm_follow ul li a {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.orido_tm_follow ul li a:hover {
  background-color: #FFC448;
  color: #12141D;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 196, 72, 0.3);
}

/* ===================================================
   DECORATIVE CORNER ELEMENTS (From Orido)
   =================================================== */
.element {
  position: absolute;
  bottom: -40px;
  left: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
}

.element img {
  width: 180px;
  height: auto;
}

.element2 {
  position: absolute;
  right: 80px;
  top: 80px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
}

.element2 img {
  width: 90px;
  height: auto;
}

/* ===================================================
   ORIDO MODALBOX (Contact Form & Intro Video)
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
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
}

.orido_tm_modalbox.opened {
  opacity: 1;
  visibility: visible;
}

.orido_tm_modalbox .box_inner {
  position: relative;
  width: 780px;
  max-width: 95vw;
  max-height: 90vh;
  background-color: #FFFFFF;
  border-radius: 20px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transform: translateY(25px);
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.orido_tm_modalbox.opened .box_inner {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.orido_tm_modalbox .close {
  position: absolute;
  top: 24px;
  right: 24px;
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
  border: none;
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

.orido_tm_modalbox .description_wrap {
  width: 100%;
  height: 100%;
  padding: 50px 48px;
  overflow-y: auto;
}

.contact_tag {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6244C5;
  display: block;
  margin-bottom: 8px;
}

.contact_modal_header h3 {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 32px;
  font-weight: 700;
  color: #12141D;
  margin: 0 0 10px 0;
  letter-spacing: -1px;
}

.contact_modal_header p {
  font-size: 16px;
  line-height: 1.6;
  color: #6F6B80;
  margin: 0 0 28px 0;
}

/* Modal Form Controls */
.modal_contact_form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form_row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form_group label {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: #12141D;
}

.form_group input,
.form_group textarea {
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1.5px solid #E5E5EB;
  background: #F9F9FB;
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 15px;
  color: #12141D;
  outline: none;
  transition: all 0.25s ease;
}

.form_group input:focus,
.form_group textarea:focus {
  border-color: #6244C5;
  background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(98, 68, 197, 0.12);
}

.submit_boxed_btn {
  align-self: flex-start;
  margin-top: 10px;
  padding: 16px 36px;
  background-color: #6244C5;
  color: #FFFFFF;
  border-radius: 14px;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.submit_boxed_btn:hover:not(:disabled) {
  background-color: #12141D;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(18, 20, 29, 0.2);
}

.submit_boxed_btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Success Card */
.submit_success {
  text-align: center;
  padding: 40px 20px;
}

.success_icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(98, 68, 197, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
}

.submit_success h4 {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 26px;
  font-weight: 700;
  color: #12141D;
  margin: 0 0 10px 0;
}

.submit_success p {
  color: #6F6B80;
  font-size: 16px;
  margin-bottom: 25px;
}

/* Video/Intro Modal Content */
.video_header h3 {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 32px;
  font-weight: 700;
  color: #12141D;
  margin: 0 0 12px 0;
}

.video_header p {
  font-size: 16px;
  line-height: 1.7;
  color: #555768;
  margin-bottom: 28px;
}

.video_highlight_box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  background: #F9F9FB;
  border: 1px solid #EBEBF0;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 30px;
}

.highlight_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.highlight_num {
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-size: 34px;
  font-weight: 800;
  color: #6244C5;
  line-height: 1;
  margin-bottom: 6px;
}

.highlight_label {
  font-size: 14px;
  font-weight: 500;
  color: #6F6B80;
}

.modal_btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 12px;
  font-family: var(--font-heading, 'Space Grotesk', sans-serif);
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.modal_btn--primary {
  background: #6244C5;
  color: #FFFFFF;
}

.modal_btn--primary:hover {
  background: #4F32B0;
  transform: translateY(-2px);
}

/* ===================================================
   RESPONSIVE DESIGN
   =================================================== */
@media (max-width: 1200px) {
  .text {
    padding: 0 30px;
  }
}

@media (max-width: 991px) {
  .orido_tm_contact {
    padding: 90px 0 80px 0;
  }

  .infobox {
    flex-direction: column;
    text-align: center;
    gap: 36px;
    margin-bottom: 70px;
  }

  .text {
    padding: 0;
  }

  .text p {
    max-width: 100%;
  }

  .connect {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
    padding-top: 40px;
  }

  .connect .left ul {
    justify-content: center;
    gap: 30px;
  }

  .orido_tm_follow {
    flex-direction: column;
    gap: 14px;
  }

  .element2 {
    right: 20px;
    top: 40px;
  }
}

@media (max-width: 640px) {
  .orido_tm_contact {
    padding: 70px 0 60px 0;
  }

  .anim_circle {
    max-width: 140px;
    max-height: 140px;
  }

  .text h3 {
    font-size: 32px;
  }

  .text p {
    font-size: 16px;
    line-height: 26px;
  }

  .connect p {
    font-size: 24px;
  }

  .form_row {
    grid-template-columns: 1fr;
  }

  .orido_tm_modalbox .description_wrap {
    padding: 30px 20px;
  }

  .video_highlight_box {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
