<template>
  <section class="testimonials section" id="testimonials">
    <div class="container">
      <div class="testimonials__header animate-on-scroll fade-up">
        <UiSectionTitle
          label="Testimonials"
          title="What Peers & Clients Say"
          subtitle="Feedback from engineering leaders, product managers, and founders I have collaborated with."
          alignment="left"
        />

        <!-- Slider Controls -->
        <div class="testimonials__controls">
          <button
            class="testimonials__nav-btn"
            aria-label="Previous testimonial"
            @click="prevSlide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            class="testimonials__nav-btn"
            aria-label="Next testimonial"
            @click="nextSlide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Testimonial Slider Box -->
      <div class="testimonials__slider-box animate-on-scroll fade-up">
        <transition name="fade-slide" mode="out-in">
          <div v-if="currentTestimonial" :key="currentIndex" class="testimonials__card-wrap">
            <UiTestimonialCard
              :highlight="currentTestimonial.highlight"
              :text="currentTestimonial.text"
              :name="currentTestimonial.name"
              :role="currentTestimonial.role"
            />
          </div>
        </transition>

        <!-- Dots indicator -->
        <div class="testimonials__dots">
          <button
            v-for="(_, idx) in testimonials"
            :key="idx"
            class="testimonials__dot"
            :class="{ active: idx === currentIndex }"
            :aria-label="`Go to testimonial ${idx + 1}`"
            @click="currentIndex = idx"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  highlight: string
  text: string
  name: string
  role: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    highlight: 'One of the most detail-oriented Full Stack engineers I have worked with.',
    text: 'He revamped our legacy frontend into a blazing-fast Nuxt application while modernizing our REST endpoints. The resulting platform cut load times by over 60% and made onboarding new engineers effortless.',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering at FinScale'
  },
  {
    highlight: 'Flawless execution from technical architecture down to pixel-perfect styling.',
    text: 'Working with him on our enterprise SaaS portal was a breeze. He anticipates UX bottlenecks and builds resilient, maintainable code. Highly recommended for any high-stakes project.',
    name: 'Marc Lefebvre',
    role: 'Head of Product at NovaCorp'
  },
  {
    highlight: 'Exceptional communication and mastery of modern Vue and cloud architecture.',
    text: 'Delivered our real-time analytics dashboard ahead of schedule with immaculate attention to detail, micro-animations, and rock-solid test coverage. Truly a full-package developer.',
    name: 'Elena Rostova',
    role: 'Founder & CTO at DataPulse'
  }
]

const currentIndex = ref(0)
const currentTestimonial = computed<Testimonial>(
  () => testimonials[currentIndex.value] ?? testimonials[0]!
)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

let autoPlayTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoPlayTimer = setInterval(() => {
    nextSlide()
  }, 6000)
})

onUnmounted(() => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
})
</script>

<style scoped>
.testimonials {
  background: var(--color-bg-primary);
  position: relative;
  overflow: hidden;
}

.testimonials__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-2xl);
}

.testimonials__controls {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
}

.testimonials__nav-btn {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-circle);
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.testimonials__nav-btn:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg-primary);
  transform: scale(1.05);
}

.testimonials__slider-box {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  position: relative;
  box-shadow: var(--shadow-card);
}

.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-top: var(--space-xl);
  padding-bottom: var(--space-md);
}

.testimonials__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-circle);
  border: none;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.testimonials__dot.active {
  background: var(--color-accent);
  width: 28px;
  border-radius: var(--radius-pill);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all var(--duration-normal) var(--ease-out);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .testimonials__header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
