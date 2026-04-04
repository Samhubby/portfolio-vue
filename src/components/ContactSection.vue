<template>
  <section id="contact" class="py-20 bg-bg-secondary px-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-4xl font-bold mb-2">Get In Touch</h2>
      <div class="h-1 w-12 bg-accent mb-12" />

      <form :action="contactFormUrl" method="POST" class="space-y-6">
        <div>
          <label for="name" class="block text-text-secondary mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            class="w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border border-bg-tertiary focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label for="email" class="block text-text-secondary mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            class="w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border border-bg-tertiary focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label for="subject" class="block text-text-secondary mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            class="w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border border-bg-tertiary focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label for="message" class="block text-text-secondary mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            class="w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border border-bg-tertiary focus:border-accent focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-accent text-bg-primary font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const contactFormUrl = ref('https://formspree.io/f/your-form-id')

onMounted(() => {
  contactFormUrl.value = import.meta.env.VITE_CONTACT_FORM_URL || 'https://formspree.io/f/your-form-id'
})
</script>
