<template>
  <article class="bg-bg-primary py-20 px-6">
    <div class="max-w-2xl mx-auto">
      <a href="/#blog" class="text-accent hover:underline mb-8 inline-block">
        ← Back to Blog
      </a>

      <h1 class="text-4xl font-bold text-text-primary mb-4">
        {{ post?.title }}
      </h1>

      <div class="text-text-secondary text-sm mb-8">
        {{ post ? formatDate(post.date) : '' }} • {{ post?.readingTime || 0 }} min read
      </div>

      <div class="prose prose-invert max-w-none" v-html="html" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { loadBlogIndex, loadBlogMarkdown } from '@/utils/contentLoader'
import { formatDate } from '@/utils/dateFormatter'
import { useMarkdown } from '@/composables/useMarkdown'
import type { BlogPost as BlogPostType } from '@/types'

const route = useRoute()
const post = ref<BlogPostType | null>(null)
const markdownContent = ref('')
const { html } = computed(() => useMarkdown(markdownContent.value))

onMounted(async () => {
  const slug = route.params.slug as string
  const allPosts = await loadBlogIndex()
  post.value = allPosts.find(p => p.slug === slug) || null

  if (post.value && !post.value.externalUrl) {
    markdownContent.value = await loadBlogMarkdown(slug)
  }
})
</script>

<style scoped>
:deep(.prose) {
  color: #b0b0b0;
}

:deep(.prose h2) {
  color: #ffffff;
  font-weight: bold;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

:deep(.prose h3) {
  color: #ffffff;
  font-weight: bold;
  margin-top: 1.25em;
  margin-bottom: 0.5em;
}

:deep(.prose code) {
  background-color: #2a2a2a;
  color: #00a8ff;
  padding: 0.2em 0.4em;
  border-radius: 4px;
}

:deep(.prose pre) {
  background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  overflow-x: auto;
}

:deep(.prose pre code) {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

:deep(.prose a) {
  color: #00a8ff;
}

:deep(.prose a:hover) {
  text-decoration: underline;
}
</style>
