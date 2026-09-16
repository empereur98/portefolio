interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  fork: boolean
  archived: boolean
}

interface ProjectData {
  id: number
  name: string
  description: string
  url: string
  homepage: string | null
  language: string
  stars: number
  forks: number
  topics: string[]
  updatedAt: string
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Vue: '#41b883',
  Python: '#3572A5',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C#': '#178600',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  Swift: '#F05138',
  Dart: '#00B4AB',
  Shell: '#89e051',
}

export function useGithubProjects(username: string) {
  const projects = ref<ProjectData[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchProjects = async () => {
    if (!username) {
      loading.value = false
      error.value = 'No GitHub username provided'
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`
      )

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const repos: GitHubRepo[] = await response.json()

      projects.value = repos
        .filter((repo) => !repo.fork && !repo.archived)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 12)
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description provided',
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          topics: repo.topics || [],
          updatedAt: repo.pushed_at,
        }))
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects'
      console.error('GitHub fetch error:', err)
    } finally {
      loading.value = false
    }
  }

  const getLanguageColor = (language: string): string => {
    return LANGUAGE_COLORS[language] || '#8b8b8b'
  }

  onMounted(() => {
    fetchProjects()
  })

  return {
    projects,
    loading,
    error,
    getLanguageColor,
    refetch: fetchProjects,
  }
}
