<template>
  <section id="extracurriculars" class="py-20 bg-bg-primary px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Community & Activities</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="space-y-8">
        <div v-for="(activity, index) in extracurriculars" :key="index" class="bg-bg-secondary p-8 rounded-lg border-l-4 border-accent">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-2xl font-bold text-text-primary">
                {{ activity.title }}
              </h3>
              <p class="text-accent">{{ activity.organization }}</p>
            </div>
            <span class="text-text-secondary text-sm">
              {{ formatYearRange(activity.startDate, activity.endDate) }}
            </span>
          </div>
          <p class="text-text-secondary">{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadExtracurriculars } from '@/utils/contentLoader'
import { formatYearRange } from '@/utils/dateFormatter'
import type { Extracurricular } from '@/types'

const extracurriculars = ref<Extracurricular[]>([])

onMounted(async () => {
  extracurriculars.value = await loadExtracurriculars()
})
</script>
