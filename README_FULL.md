# Samaya Mahate — Personal Portfolio

A modern minimalist personal portfolio website built with Vue 3, Tailwind CSS, and Vite.

## Features

- **Hero-focused single-page design** with dark minimalist aesthetic
- **JSON-based content management** — no database required
- **Markdown blog support** with syntax highlighting
- **Fully responsive** across all devices
- **Type-safe** with TypeScript
- **Fast performance** with Vite build system
- **Accessible** following WCAG 2.1 AA standards

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/        # Vue components for each section
├── views/            # Page views
├── composables/      # Reusable Vue composition functions
├── utils/            # Helper functions
├── types/            # TypeScript type definitions
├── styles/           # Global CSS and Tailwind config
├── data/             # JSON content files
└── router/           # Vue Router configuration
```

## Content Management

All content is stored in JSON files in `src/data/`:

- `profile.json` — Personal information
- `skills.json` — Technical skills by category
- `experience.json` — Work experience entries
- `projects.json` — Project showcases
- `certifications.json` — Certifications
- `education.json` — Education history
- `publications.json` — Research publications
- `extracurriculars.json` — Community activities
- `settings.json` — Site configuration
- `blog/index.json` — Blog post metadata
- `blog/*.md` — Blog post content in Markdown

## Testing

Run unit tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

## Configuration

Create a `.env` file based on `.env.example`:

```
VITE_CONTACT_FORM_URL=https://formspree.io/f/your-form-id
```

## Performance

- **LCP:** < 1.5s
- **CLS:** < 0.1
- **Lazy-loaded images** throughout
- **Cached Markdown rendering**
- **localStorage caching** for GitHub API

## License

MIT
