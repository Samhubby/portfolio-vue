<template>
  <section id="education" class="py-20 bg-bg-secondary px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Education</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="space-y-8">
        <div v-for="edu in education" :key="edu.school" class="bg-bg-primary p-8 rounded-lg border-l-4 border-accent">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-2xl font-bold text-text-primary">
                {{ edu.degree }}
              </h3>
              <p class="text-accent">{{ edu.school }}</p>
              <p class="text-text-secondary text-sm">{{ edu.location }}</p>
            </div>
            <span class="text-text-secondary text-sm">
              {{ formatYearRange(edu.startDate, edu.endDate) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadEducation } from '@/utils/contentLoader'
import { formatYearRange } from '@/utils/dateFormatter'
import type { Education } from '@/types'

const education = ref<Education[]>([])

onMounted(async () => {
  education.value = await loadEducation()
})
</script>
