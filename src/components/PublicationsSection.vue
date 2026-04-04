<template>
  <section id="publications" class="py-20 bg-bg-primary px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Publications</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="space-y-6">
        <div v-for="pub in publications" :key="pub.doi" class="pb-6 border-b border-bg-secondary last:border-b-0">
          <a :href="pub.doi" target="_blank" class="text-xl font-semibold text-accent hover:underline">
            {{ pub.title }} ↗
          </a>
          <p class="text-text-secondary text-sm mt-2">
            {{ pub.journal }} • {{ formatDate(pub.date) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadPublications } from '@/utils/contentLoader'
import { formatDate } from '@/utils/dateFormatter'
import type { Publication } from '@/types'

const publications = ref<Publication[]>([])

onMounted(async () => {
  publications.value = await loadPublications()
})
</script>
