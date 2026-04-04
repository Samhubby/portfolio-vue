<template>
  <section id="projects" class="py-20 bg-bg-secondary px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Projects</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title" class="bg-bg-primary rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div v-if="project.thumbnail" class="w-full h-48 bg-gradient-to-br from-accent to-bg-primary">
            <img :src="project.thumbnail" :alt="project.title" class="w-full h-full object-cover" />
          </div>
          <div v-else class="w-full h-48 bg-gradient-to-br from-accent to-bg-primary" />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-text-primary mb-2">
              {{ project.title }}
            </h3>
            <p class="text-text-secondary mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.technologies" :key="tech" class="text-accent text-sm border border-accent rounded px-3 py-1">
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-4">
              <a v-if="project.live" :href="project.live" target="_blank" class="text-accent hover:underline">
                Live Demo →
              </a>
              <a v-if="project.github" :href="project.github" target="_blank" class="text-accent hover:underline">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadProjects } from '@/utils/contentLoader'
import type { Project } from '@/types'

const projects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await loadProjects()
})
</script>
