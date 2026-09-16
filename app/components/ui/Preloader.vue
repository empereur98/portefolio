<template>
  <div v-if="visible" class="preloader" :class="{ 'fade-out': fadeOut }">
    <div class="preloader__content">
      <div class="preloader__logo">
        <span class="preloader__name">Portfolio</span>
      </div>
      <div class="preloader__bar">
        <div class="preloader__progress" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="preloader__percent">{{ Math.round(progress) }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const visible = ref(true)
const fadeOut = ref(false)
const progress = ref(0)

onMounted(() => {
  document.body.classList.add('preloader-active')

  const interval = setInterval(() => {
    progress.value += Math.random() * 15 + 5
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)

      setTimeout(() => {
        fadeOut.value = true
        document.body.classList.remove('preloader-active')
        setTimeout(() => {
          visible.value = false
        }, 600)
      }, 300)
    }
  }, 100)
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: var(--z-preloader);
  background: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s var(--ease-out), visibility 0.6s var(--ease-out);
}

.preloader.fade-out {
  opacity: 0;
  visibility: hidden;
}

.preloader__content {
  text-align: center;
  width: 200px;
}

.preloader__name {
  font-family: var(--font-accent);
  font-size: 1.5rem;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-lg);
}

.preloader__bar {
  width: 100%;
  height: 2px;
  background: var(--color-border);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.preloader__progress {
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-pill);
  transition: width 0.15s var(--ease-out);
}

.preloader__percent {
  display: block;
  margin-top: var(--space-sm);
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  color: var(--color-text-tertiary);
}
</style>
