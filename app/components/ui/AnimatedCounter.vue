<template>
  <div class="counter" ref="counterRef">
    <h3 class="counter__number">
      <span>{{ displayValue }}</span>{{ suffix }}
    </h3>
    <span class="counter__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: number
  label: string
  suffix?: string
  duration?: number
}>()

const displayValue = ref(0)
const counterRef = ref<HTMLElement | null>(null)
let hasAnimated = false

const animateCounter = () => {
  if (hasAnimated) return
  hasAnimated = true

  const dur = props.duration || 2000
  const startTime = performance.now()
  const startVal = 0
  const endVal = props.target

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / dur, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    displayValue.value = Math.round(startVal + (endVal - startVal) * eased)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (!counterRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        animateCounter()
        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(counterRef.value)
})
</script>

<style scoped>
.counter {
  text-align: center;
}

.counter__number {
  font-family: var(--font-heading);
  font-size: var(--fs-display);
  font-weight: var(--fw-bold);
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--space-sm);
}

.counter__label {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
