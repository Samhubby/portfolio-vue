<template>
  <section id="certifications" class="py-20 bg-bg-primary px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Certifications</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="cert in certifications" :key="cert.name" class="bg-bg-secondary p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-text-primary mb-2">
            {{ cert.name }}
          </h3>
          <p class="text-text-secondary text-sm mb-3">{{ cert.issuer }}</p>
          <p class="text-text-secondary text-xs">
            {{ formatDate(cert.date) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadCertifications } from '@/utils/contentLoader'
import { formatDate } from '@/utils/dateFormatter'
import type { Certification } from '@/types'

const certifications = ref<Certification[]>([])

onMounted(async () => {
  certifications.value = await loadCertifications()
})
</script>
