<template>
  <section id="about" class="py-20 bg-bg-primary px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">About</h2>
      <div class="h-1 w-12 bg-accent mb-8" />

      <p class="text-text-secondary text-lg mb-6 leading-relaxed">
        {{ profile?.bio }}
      </p>

      <div class="flex items-center gap-3 mb-6">
        <div
          class="w-3 h-3 rounded-full"
          :class="profile?.available ? 'bg-green-500' : 'bg-gray-500'"
        />
        <span class="text-text-secondary">
          {{ profile?.available ? 'Open to opportunities' : 'Not available' }}
        </span>
      </div>

      <div class="flex gap-6 text-text-secondary">
        <a
          :href="profile?.github"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          :href="profile?.linkedin"
          target="_blank"
          class="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          :href="`mailto:${profile?.email}`"
          class="hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadProfile } from '@/utils/contentLoader'
import type { Profile } from '@/types'

const profile = ref<Profile | null>(null)

onMounted(async () => {
  profile.value = await loadProfile()
})
</script>
