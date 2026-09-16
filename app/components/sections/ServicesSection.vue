<template>
  <section class="services section" id="services">
    <div class="container">
      <div class="services__header animate-on-scroll fade-up">
        <UiSectionTitle
          label="Services"
          title="What I Do For My Clients"
          subtitle="From concept to deployment, I deliver end-to-end modern web applications focused on performance, elegance, and scale."
        />
      </div>

      <div class="services__list-wrapper animate-on-scroll fade-up">
        <ul class="services__list">
          <UiServiceItem
            v-for="service in services"
            :key="service.number"
            :number="service.number"
            :title="service.title"
            :description="service.description"
          />
        </ul>
      </div>

      <!-- Quick stats bar under services -->
      <div class="services__stats animate-on-scroll fade-up">
        <UiAnimatedCounter
          :target="5"
          suffix="+"
          label="Years Experience"
        />
        <div class="services__stats-divider"></div>
        <UiAnimatedCounter
          :target="40"
          suffix="+"
          label="Completed Projects"
        />
        <div class="services__stats-divider"></div>
        <UiAnimatedCounter
          :target="25"
          suffix="+"
          label="Happy Clients"
        />
        <div class="services__stats-divider"></div>
        <UiAnimatedCounter
          :target="99"
          suffix="%"
          label="Satisfaction Rate"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    number: '01',
    title: 'Frontend Engineering',
    description: 'Developing high-performance, accessible, and reactive user interfaces using Vue 3, Nuxt 4, TypeScript, and modern CSS architectures.'
  },
  {
    number: '02',
    title: 'Backend & API Architecture',
    description: 'Designing resilient server systems, secure RESTful & GraphQL APIs, microservices, and database models with Node.js, Python, or Go.'
  },
  {
    number: '03',
    title: 'Full Stack Integration',
    description: 'Bridging front and back seamlessly with state management, WebSockets, payment gateways, and enterprise auth flows.'
  },
  {
    number: '04',
    title: 'Cloud & DevOps Solutions',
    description: 'Setting up automated CI/CD pipelines, containerization with Docker, and scalable deployments on AWS, Vercel, and Cloudflare.'
  },
  {
    number: '05',
    title: 'Performance & SEO Optimization',
    description: 'Fine-tuning Core Web Vitals, server-side rendering, caching strategies, and semantic metadata for maximum discoverability.'
  }
]
</script>

<style scoped>
.services {
  background: var(--color-bg-primary);
  position: relative;
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  top: 20%;
  left: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(108, 92, 231, 0.08) 0%, transparent 70%);
  border-radius: var(--radius-circle);
  pointer-events: none;
}

.services__list-wrapper {
  margin-bottom: var(--space-4xl);
}

.services__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
  padding: var(--space-2xl) var(--space-3xl);
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  align-items: center;
}

.services__stats-divider {
  display: none;
}

@media (max-width: 1024px) {
  .services__stats {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-2xl);
    padding: var(--space-xl);
  }
}

@media (max-width: 640px) {
  .services__stats {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
