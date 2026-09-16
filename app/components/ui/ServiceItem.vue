<template>
  <li class="service-item" :class="{ active: isHovered }" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="service-item__inner">
      <div class="service-item__left">
        <span class="service-item__number">{{ number }}</span>
        <h3 class="service-item__title">{{ title }}</h3>
      </div>
      <div class="service-item__right">
        <p class="service-item__text">{{ description }}</p>
        <div class="service-item__arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 15L15 1M15 1H5M15 1V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()

const isHovered = ref(false)
</script>

<style scoped>
.service-item {
  border-bottom: 1px solid var(--color-border);
  transition: border-color var(--duration-normal) var(--ease-out);
}

.service-item:first-child {
  border-top: 1px solid var(--color-border);
}

.service-item:hover {
  border-color: var(--color-accent);
}

.service-item__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xl) 0;
  gap: var(--space-xl);
  cursor: pointer;
  transition: padding var(--duration-normal) var(--ease-out);
}

.service-item:hover .service-item__inner {
  padding-left: var(--space-md);
}

.service-item__left {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  min-width: 0;
}

.service-item__number {
  font-family: var(--font-heading);
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  color: var(--color-text-tertiary);
  min-width: 32px;
  transition: color var(--duration-normal) var(--ease-out);
}

.service-item:hover .service-item__number {
  color: var(--color-accent);
}

.service-item__title {
  font-size: var(--fs-h3);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  white-space: nowrap;
  transition: color var(--duration-normal) var(--ease-out);
}

.service-item:hover .service-item__title {
  color: var(--color-accent);
}

.service-item__right {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  flex-shrink: 0;
}

.service-item__text {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  max-width: 300px;
  margin-bottom: 0;
  display: none;
}

.service-item__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  transition: all var(--duration-normal) var(--ease-out);
  flex-shrink: 0;
}

.service-item:hover .service-item__arrow {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg-primary);
  transform: rotate(0deg);
}

@media (min-width: 768px) {
  .service-item__text {
    display: block;
  }
}

@media (max-width: 768px) {
  .service-item__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-lg) 0;
  }
}
</style>
