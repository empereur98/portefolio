<template>
  <section class="freelance section">
    <div class="container">
      <div class="freelance__box animate-on-scroll scale-in">
        <!-- Ambient decorative shapes -->
        <div class="freelance__glow freelance__glow--1"></div>
        <div class="freelance__glow freelance__glow--2"></div>

        <div class="freelance__content">
          <span class="freelance__badge">Available For Work</span>
          <h2 class="freelance__title">
            Have a project in mind?<br />
            Let's build something <span class="text-accent">extraordinary</span> together.
          </h2>
          <p class="freelance__desc">
            Currently open to select freelance missions, high-impact consulting, and full-time technical leadership roles.
          </p>
          <div class="freelance__actions">
            <a href="#contact" class="btn btn--primary btn--lg">
              Start a Conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.freelance {
  padding: var(--space-3xl) 0;
  background: var(--color-bg-primary);
}

.freelance__box {
  position: relative;
  background: linear-gradient(135deg, rgba(26, 26, 58, 0.95) 0%, rgba(17, 17, 40, 0.95) 100%);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-2xl);
  padding: var(--space-4xl) var(--space-2xl);
  text-align: center;
  overflow: hidden;
  box-shadow: var(--shadow-glow);
}

.freelance__glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: var(--radius-circle);
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.25;
}

.freelance__glow--1 {
  top: -100px;
  left: -80px;
  background: var(--color-accent);
}

.freelance__glow--2 {
  bottom: -100px;
  right: -80px;
  background: var(--color-accent-secondary);
}

.freelance__content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto;
}

.freelance__badge {
  display: inline-block;
  padding: 6px 16px;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--color-accent);
  background: rgba(0, 212, 170, 0.12);
  border: 1px solid rgba(0, 212, 170, 0.3);
  border-radius: var(--radius-pill);
  margin-bottom: var(--space-lg);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.freelance__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: var(--fw-bold);
  line-height: 1.25;
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.freelance__desc {
  font-size: var(--fs-body-lg);
  color: var(--color-text-secondary);
  line-height: var(--lh-body);
  margin-bottom: var(--space-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.freelance__actions {
  display: flex;
  justify-content: center;
}
</style>
