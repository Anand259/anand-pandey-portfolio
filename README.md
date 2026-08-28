# Anand Pandey | Senior Web Developer Portfolio

A responsive professional portfolio built with React, TypeScript, and Vite. It presents Anand Pandey's experience across PHP, Laravel, React.js, REST APIs, databases, CI/CD, and Web3 integrations.

## Features

- Responsive portfolio layout for desktop and mobile
- Dark and light theme toggle
- Smooth section navigation with a mobile menu
- Selected work, experience, skills, delivery process, and contact sections
- CV preview modal using the PDF in `public/`
- GitHub, LinkedIn, and email contact links

## Tech Stack

- React 18
- TypeScript
- Vite
- lucide-react
- CSS with responsive media queries and theme variables

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   └── Anand_Pandey_Senior_Web_Developer_CV.pdf
├── src/
│   ├── App.tsx       # Portfolio content and interactions
│   ├── main.tsx      # React application entry point
│   └── styles.css    # Layout, responsive styles, and themes
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Updating Content

- Edit portfolio sections, projects, and skills in `src/App.tsx`.
- Update visual styling and responsive behavior in `src/styles.css`.
- Replace the CV at `public/Anand_Pandey_Senior_Web_Developer_CV.pdf` to update the embedded CV preview.
- Update page metadata and the title in `index.html`.

## Deployment

Deploy the generated `dist/` directory to any static hosting provider that supports single-page Vite applications, such as GitHub Pages, Netlify, or Vercel.