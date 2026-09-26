# Odisha AI Website

Welcome to the official repository for the **Odisha AI Website**. This portal serves as the digital home for the Odisha AI community—a global movement of educators, researchers, policy makers, and developers dedicated to democratizing AI education and fostering an AI-first ecosystem for Odisha and the global Odia diaspora.

## 🌐 Overview

The Odisha AI website is a modern, highly responsive, and beautifully designed web application built to showcase:
- **Conferences & Summits**: Tracking our annual international and regional AI conferences (e.g., Odisha AI Conference 2026).
- **Initiatives**: Highlighting ongoing programs like the Rathathon (perpetual hackathon), AI Foundation Series, and Odia GenAI research.
- **Resources**: Centralized links to vision documents, the AI glossary, and open-source Odia AI models.
- **Community Blogs**: Updates, tutorials, and community chapter inaugurations.

## ✨ Key Features

- **Premium UI/UX Design**: Features a dark-mode-first aesthetic with glassmorphism, dynamic gradients, subtle micro-animations, and modern typography (Space Grotesk & Syne).
- **Bilingual Support (i18n)**: Fully integrated localization framework offering seamless switching between **English** and **Odia**.
- **Dynamic Content Routing**: Fast and smooth client-side routing.
- **Sponsorship Integration**: Prominent visibility modules for community and corporate partners.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: Vanilla CSS with comprehensive CSS Variables & custom animations (`index.css`)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/odisha-ml/website.git
   cd website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:5176](http://localhost:5176) (or the port provided in your terminal) to view the app in the browser.

### Build for Production

To create an optimized production build:
```bash
pnpm build
```
The bundled files will be output to the `dist/` directory, ready to be deployed.

## 📁 Project Structure

```text
odisha-ai-website/
├── static/              # Static assets (images, docs). Note: Vite is configured to use 'static' as publicDir
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, Sponsorship, etc.)
│   ├── pages/           # Route-specific page components (Home, Events, Blogs, etc.)
│   ├── utils/           # Utilities, including the LanguageContext for i18n
│   ├── App.jsx          # Main application router and layout wrapper
│   ├── index.css        # Global CSS, design tokens, and utility classes
│   └── main.jsx         # React application entry point
├── vite.config.js       # Vite build configuration
└── package.json         # Project dependencies and scripts
```

## 🤝 Contributing

We welcome contributions from the community! Whether you want to fix a bug, add a new feature, translate content into Odia, or improve the UI, your help is appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Community

- **Join us on WhatsApp**: [Odisha AI Community](https://chat.whatsapp.com/HEfoBJHKqjzJIDMfoTsAZp)
- **Email**: info@odishaai.org
- **Twitter / X**: [@odias_in_ai](https://twitter.com/odias_in_ai)
- **LinkedIn**: [Odisha AI](https://www.linkedin.com/company/75029211)

---
*Empowering the Odia ecosystem for success in an AI-first era.*
