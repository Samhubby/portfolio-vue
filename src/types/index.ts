export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string
  location: string
  email: string
  photo: string
  cv: string
  available: boolean
  github: string
  linkedin: string
}

export interface Skill {
  name: string
  category: string
  icon?: string
}

export interface Experience {
  company: string
  title: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  thumbnail?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Education {
  school: string
  degree: string
  startDate: string
  endDate: string
  location: string
}

export interface Publication {
  title: string
  doi: string
  date?: string
  journal?: string
}

export interface Extracurricular {
  title: string
  organization: string
  startDate: string
  endDate: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: number
  externalUrl?: string
}

export interface Settings {
  githubUsername: string
  siteTitle: string
  metaDescription: string
}
