export const projectsData = [
  {
    title: 'Node-Based Tailwind Colors Manger',
    subtitle:
      'A local dev tool for instantly applying custom Tailwind color palettes to projects during development',
    image: 'open_palette.png',
    links: [
      { text: 'Demo Site', url: '' },
      { text: 'GitHub Repo', url: '' },
      { text: 'Case Study', url: '' },
    ],
    challenges: [
      'Safely overwriting local config files without triggering OS permission issues.',
      'Building a live demo version for non-dev users without requiring local setup.',
    ],
    learned: [
      'First project fully written in TypeScript with clear MVP vision and focus on reusable UI components.',
      'Stronger planning led to smoother dev process and less code chaos overall.',
    ],
    techStack: [
      { text: 'Node.js', ico: 'nodejs' },
      { text: 'Next.js', ico: 'nextjs' },
      { text: 'TailwindCSS' },
      { text: 'TypeScript' },
      { text: 'Zod' },
      { text: 'PostgreSQL' },
      { text: 'Prisma' },
      { text: 'Supabase' },
      { text: 'Docker' },
      { text: 'DigitalOcean (VPS)', ico: 'digitalocean' },
      { text: 'Cloudflare (DNS)', ico: 'cloudflare' },
    ],
  },
  {
    title: 'From Simple CRUD to Reddit-Inspired App',
    subtitle:
      'Started small, it grew with me as I learned fullstack development, and became a milestone in my journey with Next.js',
    image: 'open_palette.png',
    links: [
      { text: 'Live Site', url: '' },
      { text: 'GitHub Repo', url: '' },
      { text: 'Case Study', url: '' },
    ],
    challenges: [
      'Architecting a scalable nested MongoDB structure with optimized aggregation pipelines.',
      'Implementing a full authentication flow with email verification, recovery, and GDPR compliance.',
      'Building a dual-mode Markdown/Rich Text editor with custom formatting extensions.',
    ],
    learned: [
      'Building a fullstack app at scale taught me far beyond tutorials — from planning complex user flows to solving real-world architecture and UX challenges.',
      'My background in architecture taught me to value safety — this project taught me how to implement it in fullstack apps, from rate limiting and validation to firewall and hosting.',
    ],
    techStack: [
      { text: 'Next.js', ico: 'nextjs' },
      { text: 'TailwindCSS' },
      { text: 'MongoDB' },
      { text: 'Cypress' },
      { text: 'Jest' },
      { text: 'Docker' },
      { text: 'AWS S3 (image storage)', noIcon: true },
      { text: 'NextAuth()JWT', noIcon: true },
      { text: 'React-quill', noIcon: true },
      { text: 'DigitalOcean (VPS)', ico: 'digitalocean' },
    ],
  },
  {
    title: 'Professional Law Firm Website',
    subtitle:
      'Designed and deployed an elegant and trustworthy law firm website tailored for the legal industry',
    image: 'open_palette.png',
    links: [
      { text: 'Live Site', url: '' },
      { text: 'GitHub Repo', url: '' },
      { text: 'Case Study', url: '' },
    ],
    challenges: [
      'Creating a secure contact form integrated with reCAPTCHA v2, email delivery, and backend protections.',
      'Implementing a client-friendly CMS (Contentful) with custom training for non-technical users.',
    ],
    learned: [
      'Deploying a static website architecture with on-demand rebuilds triggered via webhook whenever CMS content is updated.',
      'Working with third-party APIs (Google Maps, reCAPTCHA, SendGrid, Contentful) — combining docs with digging into package source code for solutions.',
    ],
    techStack: [
      { text: 'Next.js  (SSG + API Routes)', ico: 'nextjs' },
      { text: 'TailwindCSS' },
      { text: 'Contentful' },
      { text: 'Google reCAPTCHA v2', ico: 'google' },
      { text: 'Google Maps', ico: 'googlemaps' },
      { text: 'Google Cloud Pub/Sub', ico: 'googlepubsub' },
    ],
  },
]
