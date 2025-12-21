# TalkToMe Landing Website

A modern, responsive landing page for the TalkToMe iOS app built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Apple-inspired minimal design with soft gradients
- 📱 Fully responsive on all screen sizes
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for performance and SEO
- 🔒 Privacy Policy and Terms of Service pages

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

The project will automatically build and deploy.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── privacy/
│   │   └── page.tsx     # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx     # Terms of Service page
│   └── globals.css      # Global styles
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

- Update the TestFlight link in `app/page.tsx` (replace `XXXXXX` with your actual TestFlight code)
- Modify colors in `tailwind.config.js`
- Update content in the respective page files
- Add your favicon to `public/favicon.ico`

## License

© 2024 TalkToMe. All rights reserved.



