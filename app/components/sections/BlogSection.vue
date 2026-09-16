<template>
  <section class="blog section" id="blog">
    <div class="container">
      <div class="blog__header animate-on-scroll fade-up">
        <UiSectionTitle
          label="Writing & Insights"
          title="Latest Articles & Thoughts"
          subtitle="Articles on modern frontend architecture, backend scalability, and developer experience."
          alignment="centered"
        />
      </div>

      <div class="blog__grid animate-on-scroll fade-up">
        <UiBlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :date="post.date"
          :image="post.image"
          :url="post.url"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: 'Building Blazing-Fast Web Apps with Nuxt 4 and Vue 3 Server Components',
    date: 'October 14, 2025',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 2,
    title: 'Architecting Scalable Microservices with Node.js, Go and gRPC',
    date: 'September 28, 2025',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    url: '#'
  },
  {
    id: 3,
    title: 'Mastering State Management and Offline-First UX in Modern Applications',
    date: 'August 19, 2025',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    url: '#'
  }
]
</script>

<style scoped>
.blog {
  background: var(--color-bg-secondary);
  position: relative;
}

.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .blog__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog__grid {
    grid-template-columns: 1fr;
  }
}
</style>
