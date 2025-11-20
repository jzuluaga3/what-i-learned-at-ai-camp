# AI Camp 2025 Showcase

A professional single-page website showcasing AI Camp 2025 learnings for an executive audience. This site demonstrates key insights and practical applications for Yext Services, including agentic coding, Model Context Protocols (MCPs), single-step agent workflows, and AI ethics principles.

**Live Site:** [Deployed on Vercel](https://what-i-learned-at-ai-camp.vercel.app) (update with actual URL after deployment)

## Project Overview

This showcase website presents:
- **Agentic Coding with Cursor**: How AI can own implementation when given clear requirements
- **Model Context Protocols**: Extending AI with live data and real-world systems
- **Single-Step Agent Workflows**: The principle that focused AI with exact data outperforms complex processes
- **AI Ethics**: Transparency as the foundation of AI trust and adoption
- **Production Tools**: Real-world applications built using AI Camp principles

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4 (following Yext brand guidelines)
- **Fonts**: Poppins (Google Fonts) as Yext Entity alternative
- **Deployment**: Vercel (optimized for Next.js)
- **Image Optimization**: Next.js Image component

## Local Development

### Prerequisites

- Node.js 18+ 
- npm (or yarn/pnpm)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/jzuluaga3/what-i-learned-at-ai-camp.git
cd what-i-learned-at-ai-camp
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will auto-update as you edit files. Start by modifying `src/app/page.tsx` or `src/data/content.ts`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Adding/Updating Images

Images are stored in `public/images/`:

- `hero-group-photo.jpg` - Main hero banner image
- `networking-photo.jpg` - Ethics section image
- `workflow-diagram.jpg` - n8n workflow section image

To add or update images:

1. Place optimized images (JPEG/WebP) in `public/images/`
2. Update the `Image` component in `src/app/page.tsx` with the new filename
3. Ensure images are optimized for web (recommended: max 2000px width, compressed)

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Connect your GitHub repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings

3. Deploy:
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to link your project and deploy.

### Build Settings

Vercel automatically detects Next.js projects. No additional configuration needed. The build command is:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Project Structure

```
what-i-learned-at-ai-camp/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with fonts
│   │   ├── page.tsx     # Main page component
│   │   └── globals.css  # Global styles & Yext theme
│   └── data/
│       └── content.ts   # Content data (easily editable)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Content Management

All content is centralized in `src/data/content.ts` for easy updates. Edit this file to update:
- Hero section content
- Section titles and descriptions
- Tool descriptions
- Navigation links

## Brand Guidelines

This site follows Yext brand guidelines:
- **Colors**: Sea Blue (#1a7189), Electric Blue (#259bbc), Coral (#ec675f)
- **Typography**: Poppins (Yext Entity alternative for web)
- **Spacing**: Generous white space, clear hierarchy
- **Components**: Rounded corners, subtle shadows, clean cards

## Performance

Optimized for:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- Images are optimized via Next.js Image component

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigation support
- Focus states on interactive elements
- WCAG AA color contrast compliance

## License

© 2025 Yext Professional Services · AI Camp 2025 Showcase

Designed in Cursor with AI assistance.
