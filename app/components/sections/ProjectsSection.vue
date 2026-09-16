<template>
  <section class="projects section" id="projects">
    <div class="container">
      <div class="projects__header animate-on-scroll fade-up">
        <div class="projects__title-wrap">
          <UiSectionTitle
            label="Portfolio"
            title="Selected Works & Projects"
            subtitle="Showcasing real-world applications, open-source tools, and client platforms synced with GitHub."
          />
        </div>

        <!-- Filter tabs -->
        <div class="projects__filters">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="projects__filter-btn"
            :class="{ active: currentFilter === filter.id }"
            @click="currentFilter = filter.id"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="projects__loading">
        <div class="projects__spinner"></div>
        <p>Loading projects from GitHub...</p>
      </div>

      <!-- Projects Grid -->
      <div v-else class="projects__grid animate-on-scroll fade-up">
        <UiProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :name="project.name"
          :description="project.description"
          :url="project.url"
          :homepage="project.homepage"
          :language="project.language"
          :language-color="getLanguageColor(project.language)"
          :stars="project.stars"
          :forks="project.forks"
          :topics="project.topics"
        />
      </div>

      <!-- Bottom GitHub profile CTA -->
      <div class="projects__footer animate-on-scroll fade-up">
        <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Explorer tous mes dépôts sur GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    githubUsername?: string
  }>(),
  {
    githubUsername: 'empereur98'
  }
)

const currentFilter = ref('all')

const filters = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'vue', label: 'Vue / Nuxt' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'backend', label: 'Backend / APIs' }
]

// Fallback demo projects in case GitHub API fails or username is pending
const fallbackProjects = [
  {
    id: 1,
    name: 'cloud-saas-platform',
    description: 'Modern collaborative SaaS application featuring real-time state synchronization, multi-tenant RBAC, and automated billing workflows.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'TypeScript',
    stars: 38,
    forks: 7,
    topics: ['vue3', 'nuxt4', 'typescript', 'pinia', 'tailwind']
  },
  {
    id: 2,
    name: 'ecommerce-headless-api',
    description: 'High-throughput microservice backend handling catalog ingestion, inventory reservation, and Stripe payment webhook processing.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'Go',
    stars: 24,
    forks: 5,
    topics: ['go', 'grpc', 'postgresql', 'redis', 'docker']
  },
  {
    id: 3,
    name: 'ai-doc-search-engine',
    description: 'Full-text & vector semantic search engine built for technical documentation with embedding generation and RAG retrieval pipelines.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'Python',
    stars: 52,
    forks: 11,
    topics: ['python', 'fastapi', 'chromadb', 'langchain', 'vue']
  },
  {
    id: 4,
    name: 'interactive-data-dashboard',
    description: 'Real-time telemetry and analytical monitoring dashboard with customizable SVG charts, WebSocket feeds, and dark mode toggles.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'Vue',
    stars: 43,
    forks: 9,
    topics: ['vue3', 'chartjs', 'websockets', 'dashboard']
  },
  {
    id: 5,
    name: 'design-tokens-forge',
    description: 'Cross-platform CLI tool for compiling Figma design tokens into production-ready CSS variables, Tailwind presets, and iOS/Android assets.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'TypeScript',
    stars: 67,
    forks: 14,
    topics: ['cli', 'design-tokens', 'node', 'build-tools']
  },
  {
    id: 6,
    name: 'secure-auth-gateway',
    description: 'Zero-trust authentication gateway supporting OAuth2, WebAuthn passkeys, magic link authentication, and rate-limiting middleware.',
    url: 'https://github.com',
    homepage: 'https://github.com',
    language: 'TypeScript',
    stars: 31,
    forks: 4,
    topics: ['security', 'oauth2', 'webauthn', 'jwt']
  }
]

const { projects, loading, getLanguageColor } = useGithubProjects(props.githubUsername)

const displayProjects = computed(() => {
  if (projects.value && projects.value.length > 0) {
    return projects.value
  }
  return fallbackProjects
})

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return displayProjects.value

  return displayProjects.value.filter((p) => {
    const lang = p.language.toLowerCase()
    const topics = p.topics.map((t: string) => t.toLowerCase())

    if (currentFilter.value === 'vue') {
      return lang === 'vue' || topics.includes('vue') || topics.includes('vue3') || topics.includes('nuxt') || topics.includes('nuxt4')
    }
    if (currentFilter.value === 'typescript') {
      return lang === 'typescript' || lang === 'javascript' || topics.includes('typescript')
    }
    if (currentFilter.value === 'backend') {
      return ['python', 'go', 'php', 'rust', 'c#', 'java'].includes(lang) || topics.includes('api') || topics.includes('backend') || topics.includes('grpc')
    }
    return true
  })
})

const githubUrl = computed(() => {
  return `https://github.com/${props.githubUsername}`
})
</script>

<style scoped>
.projects {
  background: var(--color-bg-secondary);
  position: relative;
}

.projects__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 992px) {
  .projects__header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .projects__title-wrap {
    margin-bottom: 0;
  }
}

.projects__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  padding-bottom: var(--space-md);
}

.projects__filter-btn {
  padding: 8px 18px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  color: var(--color-text-secondary);
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.projects__filter-btn:hover {
  color: var(--color-text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.projects__filter-btn.active {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
  font-weight: var(--fw-semibold);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}

.projects__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4xl) 0;
  gap: var(--space-lg);
  color: var(--color-text-secondary);
}

.projects__spinner {
  width: 44px;
  height: 44px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: var(--radius-circle);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.projects__footer {
  margin-top: var(--space-3xl);
  text-align: center;
}
</style>
