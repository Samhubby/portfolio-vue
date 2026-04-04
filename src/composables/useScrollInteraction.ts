import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollInteraction() {
  const hasScrolled = ref(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      hasScrolled.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    hasScrolled,
  }
}
