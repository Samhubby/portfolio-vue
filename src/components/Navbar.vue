<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-bg-primary z-50 h-15 border-b border-bg-tertiary"
    role="navigation"
  >
    <div class="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold text-text-primary">
        Samaya Mahate
      </div>

      <!-- Nav Links -->
      <ul class="flex gap-8 text-text-secondary">
        <li>
          <a
            href="#about"
            class="hover:text-accent transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            class="hover:text-accent transition-colors duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            class="hover:text-accent transition-colors duration-300"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="hover:text-accent transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#blog"
            class="hover:text-accent transition-colors duration-300"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="hover:text-accent transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  backdrop-filter: blur(10px);
  background-color: rgba(26, 26, 26, 0.95);
}
</style>
