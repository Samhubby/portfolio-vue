<template>
  <section id="experience" class="py-20 bg-bg-primary px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Work Experience</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="space-y-8">
        <div v-for="(exp, index) in experience" :key="index" class="bg-bg-secondary p-8 rounded-lg border-l-4 border-accent">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-2xl font-bold text-text-primary">
                {{ exp.title }}
              </h3>
              <p class="text-accent">{{ exp.company }}</p>
            </div>
            <span class="text-text-secondary text-sm">
              {{ formatYearRange(exp.startDate, exp.endDate) }}
            </span>
          </div>
          <ul class="text-text-secondary space-y-2">
            <li v-for="(desc, i) in exp.description" :key="i" class="ml-4">
              • {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadExperience } from '@/utils/contentLoader'
import { formatYearRange } from '@/utils/dateFormatter'
import type { Experience } from '@/types'

const experience = ref<Experience[]>([])

onMounted(async () => {
  experience.value = await loadExperience()
})
</script>
