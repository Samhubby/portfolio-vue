<template>
  <section id="skills" class="py-20 bg-bg-secondary px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Technical Skills</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div v-for="category in groupedSkills" :key="category.name" class="mb-12">
        <h3 class="text-lg font-semibold text-text-secondary mb-6">
          {{ category.name }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="skill in category.skills" :key="skill.name" class="bg-bg-primary p-4 rounded-lg hover:scale-105 transition-transform duration-300">
            <p class="text-text-primary font-semibold">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { loadSkills } from '@/utils/contentLoader'
import type { Skill } from '@/types'

const skills = ref<Skill[]>([])

const groupedSkills = computed(() => {
  const grouped: Record<string, Skill[]> = {}
  skills.value.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill)
  })
  return Object.entries(grouped).map(([name, skills]) => ({ name, skills }))
})

onMounted(async () => {
  skills.value = await loadSkills()
})
</script>
