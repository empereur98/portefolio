<template>
  <div class="testimonial-card">
    <div class="testimonial-card__quote">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-accent)" opacity="0.3">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
    <div class="testimonial-card__highlight">
      <p>"{{ highlight }}"</p>
    </div>
    <div class="testimonial-card__text">
      <p>"{{ text }}"</p>
    </div>
    <div class="testimonial-card__author">
      <div class="testimonial-card__avatar" v-if="avatar">
        <img :src="avatar" :alt="name" />
      </div>
      <div class="testimonial-card__info">
        <h4 class="testimonial-card__name">— {{ name }}</h4>
        <span class="testimonial-card__role">{{ role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  highlight: string
  text: string
  name: string
  role: string
  avatar?: string
}>()
</script>

<style scoped>
.testimonial-card {
  padding: var(--space-3xl);
  position: relative;
}

.testimonial-card__quote {
  margin-bottom: var(--space-xl);
}

.testimonial-card__highlight p {
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-lg);
}

.testimonial-card__text p {
  font-size: var(--fs-body);
  color: var(--color-text-secondary);
  line-height: var(--lh-body);
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.testimonial-card__avatar {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-circle);
  overflow: hidden;
  border: 2px solid var(--color-accent);
}

.testimonial-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-card__name {
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
}

.testimonial-card__role {
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
}
</style>
