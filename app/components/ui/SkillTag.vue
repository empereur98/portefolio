<template>
  <span class="skill-tag" :class="{ active: isActive }" @mouseenter="isActive = true" @mouseleave="isActive = false">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()

const isActive = ref(false)
</script>

<style scoped>
.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 10px 22px;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  cursor: default;
  transition: all var(--duration-normal) var(--ease-spring);
  user-select: none;
}

.skill-tag:hover,
.skill-tag.active {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}
</style>
