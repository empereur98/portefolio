<template>
  <div class="section-title" :class="[alignment]">
    <span v-if="label" class="section-title__label">{{ label }}</span>
    <h2 class="section-title__heading" v-html="title"></h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  subtitle?: string
  alignment?: 'left' | 'centered'
}>()
</script>

<style scoped>
.section-title {
  margin-bottom: var(--space-3xl);
}

.section-title.centered {
  text-align: center;
}

.section-title__label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--space-md);
  position: relative;
  padding-left: 20px;
}

.section-title__label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 2px;
  background: var(--color-accent);
}

.centered .section-title__label {
  padding-left: 0;
}

.centered .section-title__label::before {
  display: none;
}

.section-title__heading {
  font-size: var(--fs-h2);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
  line-height: var(--lh-heading);
}

.section-title__subtitle {
  margin-top: var(--space-md);
  font-size: var(--fs-body-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
}

.centered .section-title__subtitle {
  margin-left: auto;
  margin-right: auto;
}
</style>
