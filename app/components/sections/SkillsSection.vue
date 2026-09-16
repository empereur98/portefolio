<template>
  <section class="skills-trito" id="skills">
    <div class="skills-trito__container">
      <div class="skills-trito__inner">
        <!-- Left: Title + Text -->
        <div class="skills-trito__left animate-on-scroll fade-left">
          <!-- Label with decorative lines -->
          <div class="skills-trito__label">
            <span class="skills-trito__label-text">Mes Compétences</span>
          </div>
          <!-- Heading -->
          <h2 class="skills-trito__heading">
            Je développe de nouvelles compétences chaque jour
          </h2>
          <!-- Description text -->
          <div class="skills-trito__text">
            <p>
              Au fil des années, j'ai acquis une expertise solide sur un large éventail de technologies modernes. Du frontend au backend, je maîtrise l'ensemble de la stack pour livrer des projets complets et robustes.
            </p>
          </div>
        </div>

        <!-- Right: Coral card with skill tags -->
        <div class="skills-trito__right animate-on-scroll fade-up">
          <!-- Coral background -->
          <div class="skills-trito__bg"></div>
          <!-- Skill tags -->
          <div class="skills-trito__content">
            <ul class="skills-trito__tags">
              <li v-for="skill in skills" :key="skill">
                <span>{{ skill }}</span>
              </li>
            </ul>
          </div>
          <!-- Decorative shape 1: Green dots cluster (top-left) -->
          <span class="skills-trito__shape1">
            <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="20" r="5" fill="#05CE91"/>
              <circle cx="50" cy="10" r="4" fill="#05CE91"/>
              <circle cx="45" cy="30" r="6" fill="#05CE91"/>
              <circle cx="65" cy="22" r="3.5" fill="#05CE91"/>
              <circle cx="20" cy="40" r="4.5" fill="#05CE91"/>
              <circle cx="38" cy="48" r="5.5" fill="#05CE91"/>
              <circle cx="55" cy="42" r="3" fill="#05CE91"/>
              <circle cx="70" cy="38" r="4" fill="#05CE91"/>
              <circle cx="25" cy="58" r="3" fill="#05CE91"/>
              <circle cx="42" cy="65" r="4.5" fill="#05CE91"/>
              <circle cx="60" cy="55" r="5" fill="#05CE91"/>
              <ellipse cx="35" cy="75" rx="6" ry="4" transform="rotate(-15 35 75)" fill="#05CE91"/>
              <ellipse cx="52" cy="80" rx="4" ry="3" transform="rotate(20 52 80)" fill="#05CE91"/>
              <circle cx="15" cy="25" r="3" fill="#05CE91" opacity="0.7"/>
              <circle cx="75" cy="50" r="3.5" fill="#05CE91" opacity="0.7"/>
            </svg>
          </span>
          <!-- Decorative shape 2: White arc (bottom-right) -->
          <span class="skills-trito__shape2">
            <svg width="110" height="80" viewBox="0 0 110 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 70C10 35 30 10 55 10C80 10 100 35 100 70" stroke="rgba(255,255,255,0.35)" stroke-width="2.5" fill="none"/>
              <path d="M20 70C20 42 35 20 55 20C75 20 90 42 90 70" stroke="rgba(255,255,255,0.25)" stroke-width="2" fill="none"/>
              <path d="M30 70C30 48 40 30 55 30C70 30 80 48 80 70" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="none"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js', 'Nuxt', 'React', 'TypeScript',
  'JavaScript', 'Node.js', 'Python', 'PHP',
  'HTML5', 'CSS3', 'PostgreSQL',
  'MongoDB', 'Docker', 'Git', 'REST API',
  'GraphQL', 'Firebase',
]
</script>

<style scoped>
/* ============================================
   SKILLS SECTION — Trito Design System
   Background: White | Labels: Coral #FF4612
   Heading: Navy #24315E | Tags: Calistoga
   ============================================ */

.skills-trito {
  background: #FFFFFF;
  padding: 120px 0;
  position: relative;
  overflow: visible;
}

.skills-trito__container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ---- Layout: Flex 42% / 58% ---- */
.skills-trito__inner {
  display: flex;
  align-items: center;
}

.skills-trito__left {
  width: 42%;
  padding-right: 100px;
  flex-shrink: 0;
}

.skills-trito__right {
  width: 58%;
  position: relative;
}

/* ---- Label with decorative lines ---- */
.skills-trito__label {
  margin-bottom: 21px;
}

.skills-trito__label-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #fe675c;
  position: relative;
  padding-left: 35px;
  display: inline-block;
}

/* Left line before label */
.skills-trito__label-text::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 0.5px;
  background-color: #fe675c;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

/* Right line after label */
.skills-trito__label-text::after {
  content: '';
  position: absolute;
  width: 65px;
  height: 0.5px;
  background-color: #fe675c;
  top: 50%;
  left: 100%;
  margin-left: 12px;
  transform: translateY(-50%);
}

/* ---- Heading ---- */
.skills-trito__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #24315E;
  line-height: 1.1;
  margin: 0 0 25px 0;
}

/* ---- Description text ---- */
.skills-trito__text p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #505A7E;
  line-height: 29px;
  margin: 0;
}

/* ---- Right: Coral background card ---- */
.skills-trito__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fe675c;
  z-index: 0;
  overflow: hidden;
}

/* Subtle wave pattern overlay */
.skills-trito__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30' stroke='rgba(255,255,255,0.06)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30' stroke='rgba(255,255,255,0.04)' stroke-width='1' fill='none'/%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60' viewBox='0 0 200 60'%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30 Q125 10 150 30 Q175 50 200 30' stroke='rgba(255,255,255,0.03)' stroke-width='1' fill='none'/%3E%3C/svg%3E");
  background-size: 200px 60px, 180px 50px, 220px 70px;
  background-position: 0 0, 30px 20px, -10px 40px;
  background-repeat: repeat;
  z-index: 1;
  pointer-events: none;
}

/* Soft radial glow */
.skills-trito__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.07) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 0%, transparent 40%);
  z-index: 2;
  pointer-events: none;
}

.skills-trito__content {
  position: relative;
  z-index: 1;
  padding: 80px 60px 60px 80px;
}

/* ---- Skill Tags ---- */
.skills-trito__tags {
  margin: 0;
  padding: 0;
  list-style: none;
}

.skills-trito__tags li {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 25px;
}

.skills-trito__tags li span {
  display: inline-block;
  background-color: #FFFFFF;
  border: 2px solid #24315E;
  border-radius: 0;
  padding: 10px 30px;
  font-family: 'Calistoga', cursive;
  font-size: 18px;
  font-weight: 400;
  color: #24315E;
  transition: all 0.3s ease;
  cursor: default;
}

.skills-trito__tags li span:hover {
  background-color: #24315E;
  color: #FFFFFF;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(36, 49, 94, 0.3);
}

/* ---- Decorative Shapes ---- */
.skills-trito__shape1 {
  position: absolute;
  top: -30px;
  left: -20px;
  z-index: 2;
  pointer-events: none;
}

.skills-trito__shape2 {
  position: absolute;
  bottom: -11px;
  right: 35px;
  z-index: 2;
  pointer-events: none;
}

/* ---- Responsive ---- */
@media (max-width: 1600px) {
  .skills-trito__label-text {
    font-size: 17px;
  }

  .skills-trito__label {
    margin-bottom: 10px;
  }

  .skills-trito__heading {
    font-size: 50px;
  }

  .skills-trito__text p {
    font-size: 16px;
    line-height: 29px;
  }
}

@media (max-width: 1040px) {
  .skills-trito__inner {
    flex-direction: column;
    gap: 50px;
  }

  .skills-trito__left {
    width: 100%;
    padding-right: 0;
  }

  .skills-trito__right {
    width: 100%;
  }

  .skills-trito__content {
    padding: 50px 40px 30px 40px;
  }
}

@media (max-width: 768px) {
  .skills-trito {
    padding: 80px 0;
  }

  .skills-trito__container {
    padding: 0 20px;
  }

  .skills-trito__heading {
    font-size: 35px;
  }

  .skills-trito__content {
    padding: 40px 25px 25px 25px;
  }

  .skills-trito__tags li {
    margin-right: 12px;
    margin-bottom: 15px;
  }

  .skills-trito__tags li span {
    font-size: 15px;
    padding: 8px 20px;
  }

  .skills-trito__shape1 {
    top: -20px;
    left: -10px;
    transform: scale(0.7);
  }

  .skills-trito__shape2 {
    bottom: -8px;
    right: 15px;
    transform: scale(0.7);
  }
}
</style>
