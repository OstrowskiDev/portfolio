export const projectsData = [
  {
    tag: 'Tailwind Colors Manager',
    title: 'Open Palette Dev Tools',
    subtitle:
      'A local node-based dev tool for instantly applying custom Tailwind color palettes to projects during development',
    image: 'open_palette.png',
    bgColor: '#1F2228',
    links: [
      { text: 'Demo Site', url: 'https://openpalette.ostrowskidev.com/' },
      {
        text: 'GitHub Repo',
        url: 'https://github.com/OstrowskiDev/color-palette-open',
      },
      { text: 'Case Study', url: '' },
    ],
    learned: [
      'First project fully written in TypeScript with clear MVP vision and focus on reusable UI components.',
      'Safely overwriting local config files without triggering OS permission issues.',
      'Building a live demo version for non-dev users without requiring local setup.',
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
      // { text: 'Supabase' },
      { text: 'Docker' },
      { text: 'DigitalOcean (VPS)', ico: 'digitalocean' },
      // { text: 'Cloudflare (DNS)', ico: 'cloudflare' },
    ],
  },
  {
    tag: 'Reddit Clone',
    title: 'ReadIt - Community Platform',
    subtitle:
      'Started small with simple CRUD exercise, it grew with me as I learned fullstack development, and became a milestone in my journey with Next.js',
    image: 'readit.png',
    bgColor: '#00000D',
    links: [
      { text: 'Live Site', url: 'https://readit.ostrowskidev.com/' },
      { text: 'GitHub Repo', url: 'https://github.com/OstrowskiDev/readit' },
      { text: 'Case Study', url: '' },
    ],
    learned: [
      'Building a fullstack app at scale — from planning complex user flows to solving real-world architecture and UX challenges.',
      'Designing a scalable nested MongoDB structure with optimized aggregation pipelines.',
      'Implementing a full authentication flow with email verification, recovery, and GDPR compliance.',
      'Building a dual-mode Markdown/Rich Text editor with custom formatting extensions.',
      'Value safety - from rate limiting and validation to firewall and hosting.',
    ],
    techStack: [
      { text: 'Next.js', ico: 'nextjs' },
      { text: 'TailwindCSS' },
      { text: 'MongoDB' },
      { text: 'Cypress' },
      { text: 'Jest' },
      { text: 'Docker' },
      { text: 'AWS S3 (image storage)', noIcon: true },
      { text: 'NextAuth(JWT)', noIcon: true },
      { text: 'React-quill', noIcon: true },
      // { text: 'DigitalOcean (VPS)', ico: 'digitalocean' },
      // { text: 'Cloudflare (DNS)', ico: 'cloudflare' },
    ],
  },
  {
    tag: 'Business Site',
    title: 'Law Firm Website',
    subtitle:
      'Designed and deployed an elegant and trustworthy law firm website tailored for the legal industry',
    image: 'law_firm.png',
    bgColor: '#00000D',
    links: [
      {
        text: 'Live Site',
        url: 'https://kancelaria-ciesielskamarkiewicz.com.pl/',
      },
      {
        text: 'GitHub Repo',
        url: 'https://github.com/OstrowskiDev/kancelaria-open',
      },
      { text: 'Case Study', url: '' },
    ],
    learned: [
      'Creating a secure contact form integrated with reCAPTCHA v2, email delivery, and backend protections.',
      'Implementing a client-friendly CMS (Contentful) with custom training for non-technical users.',
      'Deploying a static website architecture with on-demand rebuilds triggered via webhook whenever CMS content is updated.',
      'Working with third-party APIs (Google Maps, reCAPTCHA, SendGrid, Contentful) — combining docs with digging into package source code for solutions.',
    ],
    techStack: [
      { text: 'Next.js  (SSG + API Routes)', ico: 'nextjs' },
      { text: 'TailwindCSS' },
      { text: 'Google Maps', ico: 'googlemaps' },
      { text: 'Google reCAPTCHA v2', ico: 'google' },
      { text: 'Google Cloud Pub/Sub', ico: 'googlepubsub' },
      { text: 'Contentful' },
    ],
  },
]
