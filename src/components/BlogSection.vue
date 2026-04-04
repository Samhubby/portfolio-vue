<template>
  <section id="blog" class="py-20 bg-bg-secondary px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Blog</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <a v-for="post in blogPosts" :key="post.slug" :href="post.externalUrl || `/blog/${post.slug}`" :target="post.externalUrl ? '_blank' : undefined" class="bg-bg-primary p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 block">
          <h3 class="text-xl font-bold text-text-primary mb-2 hover:text-accent transition-colors">
            {{ post.title }}
            <span v-if="post.externalUrl" class="text-sm">↗</span>
          </h3>
          <p class="text-text-secondary mb-4 line-clamp-3">
            {{ post.excerpt }}
          </p>

          <div class="flex justify-between items-center text-sm text-text-secondary">
            <span>{{ formatDate(post.date) }} • {{ post.readingTime }} min read</span>
          </div>

          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tag in post.tags" :key="tag" class="text-xs text-accent border border-accent rounded px-2 py-1">
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadBlogIndex } from '@/utils/contentLoader'
import { formatDate } from '@/utils/dateFormatter'
import type { BlogPost } from '@/types'

const blogPosts = ref<BlogPost[]>([])

onMounted(async () => {
  blogPosts.value = await loadBlogIndex()
})
</script>
