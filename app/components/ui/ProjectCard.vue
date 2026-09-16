<template>
  <div class="project-card hover-lift" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="project-card__header">
      <div class="project-card__lang">
        <span class="project-card__lang-dot" :style="{ background: languageColor }"></span>
        {{ language }}
      </div>
      <div class="project-card__stats">
        <span class="project-card__stat" v-if="stars > 0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          {{ stars }}
        </span>
        <span class="project-card__stat" v-if="forks > 0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
          {{ forks }}
        </span>
      </div>
    </div>

    <div class="project-card__body">
      <h3 class="project-card__name">{{ name }}</h3>
      <p class="project-card__desc">{{ description }}</p>
    </div>

    <div class="project-card__topics" v-if="topics.length > 0">
      <span v-for="topic in topics.slice(0, 4)" :key="topic" class="project-card__topic">
        {{ topic }}
      </span>
    </div>

    <div class="project-card__footer">
      <a :href="url" target="_blank" rel="noopener noreferrer" class="project-card__link">
        View on GitHub
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M1 15L15 1M15 1H5M15 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a v-if="homepage" :href="homepage" target="_blank" rel="noopener noreferrer" class="project-card__link project-card__link--live">
        Live Demo
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  description: string
  url: string
  homepage?: string | null
  language: string
  languageColor: string
  stars: number
  forks: number
  topics: string[]
}>()

const isHovered = ref(false)
</script>

<style scoped>
.project-card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  height: 100%;
  transition: all var(--duration-normal) var(--ease-out);
}

.project-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: var(--shadow-glow);
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-card__lang {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  font-weight: var(--fw-medium);
}

.project-card__lang-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-circle);
}

.project-card__stats {
  display: flex;
  gap: var(--space-md);
}

.project-card__stat {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
}

.project-card__body {
  flex: 1;
}

.project-card__name {
  font-size: var(--fs-h4);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  transition: color var(--duration-fast);
}

.project-card:hover .project-card__name {
  color: var(--color-accent);
}

.project-card__desc {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  line-height: var(--lh-body);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-card__topic {
  padding: 4px 10px;
  font-size: var(--fs-tiny);
  color: var(--color-accent);
  background: rgba(0, 212, 170, 0.1);
  border-radius: var(--radius-pill);
  font-weight: var(--fw-medium);
}

.project-card__footer {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-text-secondary);
  transition: color var(--duration-fast);
}

.project-card__link:hover {
  color: var(--color-accent);
}

.project-card__link--live {
  color: var(--color-accent);
}
</style>
