# Harshith N - Personal Portfolio

![Portfolio Screenshot](/public/placeholder.png)

A modern, production-ready developer portfolio built with React, Vite, and Tailwind CSS.

## Features
- Fully responsive design (Mobile to 1440px+)
- Dark/Light mode toggle (persisted in localStorage)
- Semantic HTML & Accessible structure (AA contrast)
- SEO optimized (Schema, Open Graph, meta tags)
- Subtle animations with Framer Motion

## Tech Stack
- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form

## Local Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Harshith-codzz/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up Environment Variables**
   Copy `.env.example` to `.env` and fill in your details:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

4. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

## Deployment

**Vercel / Netlify:**
1. Connect your GitHub repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add the `VITE_FORM_ENDPOINT` to the environment variables in the dashboard.
