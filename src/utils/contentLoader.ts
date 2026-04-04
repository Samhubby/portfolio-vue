import type {
  Profile, Skill, Experience, Project, Certification,
  Education, Publication, Extracurricular, BlogPost, Settings
} from '@/types'

const contentCache: Record<string, any> = {}

async function loadJSON<T>(path: string): Promise<T> {
  if (contentCache[path]) {
    return contentCache[path] as T
  }

  const response = await fetch(path)
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`)
  }

  const data = await response.json() as T
  contentCache[path] = data
  return data
}

export async function loadProfile(): Promise<Profile> {
  return loadJSON<Profile>('/data/profile.json')
}

export async function loadSkills(): Promise<Skill[]> {
  return loadJSON<Skill[]>('/data/skills.json')
}

export async function loadExperience(): Promise<Experience[]> {
  return loadJSON<Experience[]>('/data/experience.json')
}

export async function loadProjects(): Promise<Project[]> {
  return loadJSON<Project[]>('/data/projects.json')
}

export async function loadCertifications(): Promise<Certification[]> {
  return loadJSON<Certification[]>('/data/certifications.json')
}

export async function loadEducation(): Promise<Education[]> {
  return loadJSON<Education[]>('/data/education.json')
}

export async function loadPublications(): Promise<Publication[]> {
  return loadJSON<Publication[]>('/data/publications.json')
}

export async function loadExtracurriculars(): Promise<Extracurricular[]> {
  return loadJSON<Extracurricular[]>('/data/extracurriculars.json')
}

export async function loadBlogIndex(): Promise<BlogPost[]> {
  return loadJSON<BlogPost[]>('/data/blog/index.json')
}

export async function loadSettings(): Promise<Settings> {
  return loadJSON<Settings>('/data/settings.json')
}

export async function loadBlogMarkdown(slug: string): Promise<string> {
  const response = await fetch(`/data/blog/${slug}.md`)
  if (!response.ok) {
    throw new Error(`Failed to load blog post: ${slug}`)
  }
  return response.text()
}
