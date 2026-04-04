import { computed, ref } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'

// Configure marked with highlight.js
marked.setOptions({
  highlight: (code: string, lang: string) => {
    if (hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  breaks: false,
})

export function useMarkdown(markdownContent: string) {
  const content = ref(markdownContent)

  const html = computed(() => {
    return marked(content.value)
  })

  return {
    html,
    setContent: (newContent: string) => {
      content.value = newContent
    },
  }
}
