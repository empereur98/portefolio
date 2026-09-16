<template>
  <div class="blog-card hover-lift">
    <div class="blog-card__image">
      <img :src="image" :alt="title" />
      <div class="blog-card__overlay">
        <span class="blog-card__read">Read Article</span>
      </div>
    </div>
    <div class="blog-card__content">
      <h3 class="blog-card__title">
        <a :href="url || '#'" target="_blank" rel="noopener noreferrer">{{ title }}</a>
      </h3>
      <span class="blog-card__date">{{ date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date: string
  image: string
  url?: string
}>()
</script>

<style scoped>
.blog-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.blog-card:hover {
  border-color: var(--color-border-accent);
}

.blog-card__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 37 / 23;
}

.blog-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.blog-card:hover .blog-card__image img {
  transform: scale(1.08);
}

.blog-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.blog-card:hover .blog-card__overlay {
  opacity: 1;
}

.blog-card__read {
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.blog-card__content {
  padding: var(--space-lg);
}

.blog-card__title {
  font-size: var(--fs-body-lg);
  font-weight: var(--fw-semibold);
  line-height: 1.4;
  margin-bottom: var(--space-sm);
}

.blog-card__title a {
  color: var(--color-text-primary);
  transition: color var(--duration-fast);
}

.blog-card__title a:hover {
  color: var(--color-accent);
}

.blog-card__date {
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
}
</style>
