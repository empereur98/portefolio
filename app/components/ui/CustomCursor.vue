<template>
  <div class="custom-cursor" v-if="isDesktop">
    <div class="cursor-outer" :style="outerStyle" :class="{ active: isHovering }"></div>
    <div class="cursor-inner" :style="innerStyle" :class="{ active: isHovering }"></div>
  </div>
</template>

<script setup lang="ts">
const isDesktop = ref(false)
const isHovering = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const outerX = ref(0)
const outerY = ref(0)

const innerStyle = computed(() => ({
  transform: `translate(${mouseX.value}px, ${mouseY.value}px)`,
}))

const outerStyle = computed(() => ({
  transform: `translate(${outerX.value}px, ${outerY.value}px)`,
}))

let animationFrame: number

const animate = () => {
  outerX.value += (mouseX.value - outerX.value) * 0.15
  outerY.value += (mouseY.value - outerY.value) * 0.15
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  isDesktop.value = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches

  if (!isDesktop.value) return

  window.addEventListener('mousemove', (e) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  })

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    if (target.closest('a, button, .hoverable, input, textarea')) {
      isHovering.value = true
    }
  })

  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement
    if (target.closest('a, button, .hoverable, input, textarea')) {
      isHovering.value = false
    }
  })

  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.custom-cursor {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-cursor);
  mix-blend-mode: difference;
}

.cursor-outer {
  position: fixed;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.3s var(--ease-spring),
              height 0.3s var(--ease-spring),
              top 0.3s var(--ease-spring),
              left 0.3s var(--ease-spring),
              border-color 0.3s;
}

.cursor-outer.active {
  width: 50px;
  height: 50px;
  top: -25px;
  left: -25px;
  border-color: var(--color-accent);
}

.cursor-inner {
  position: fixed;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.2s, height 0.2s, top 0.2s, left 0.2s, background 0.2s;
}

.cursor-inner.active {
  width: 12px;
  height: 12px;
  top: -6px;
  left: -6px;
  background: var(--color-accent);
}
</style>
