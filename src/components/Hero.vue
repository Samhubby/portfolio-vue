<template>
  <section
    id="hero"
    class="relative min-h-screen bg-gradient-to-b from-bg-primary to-bg-secondary flex items-center justify-center pt-16"
  >
    <div class="absolute inset-0 opacity-30">
      <div
        class="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent"
        style="animation: gradient-shift 8s ease infinite;"
      />
    </div>

    <div class="relative z-10 text-center px-6 max-w-3xl">
      <!-- Name -->
      <h1 class="text-hero font-bold text-text-primary mb-4">
        {{ profile?.name }}
      </h1>

      <!-- Role -->
      <p class="text-hero-role text-accent font-semibold mb-6">
        {{ profile?.role }}
      </p>

      <!-- Tagline -->
      <p class="text-lg text-text-secondary mb-12 leading-relaxed">
        {{ profile?.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="#projects"
          class="px-8 py-3 border-2 border-accent text-text-primary hover:bg-accent hover:text-bg-primary transition-all duration-300 rounded-lg font-semibold"
        >
          View Projects
        </a>
        <a
          :href="profile?.cv"
          download
          class="px-8 py-3 bg-accent text-bg-primary hover:bg-opacity-90 transition-all duration-300 rounded-lg font-semibold"
        >
          Download CV
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div
        v-if="!hasScrolled"
        class="flex flex-col items-center animate-scroll-down opacity-60 hover:opacity-100 transition-opacity"
      >
        <span class="text-sm text-text-secondary mb-2">Scroll to explore</span>
        <svg
          class="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadProfile } from '@/utils/contentLoader'
import { useScrollInteraction } from '@/composables/useScrollInteraction'
import type { Profile } from '@/types'

const profile = ref<Profile | null>(null)
const { hasScrolled } = useScrollInteraction()

onMounted(async () => {
  profile.value = await loadProfile()
})
</script>
