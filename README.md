# Astra — Premium Space Tourism Landing Page

Astra is a high-end, cinematic space tourism landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It features a "liquid glass" morphism aesthetic, immersive background videos (including HLS streaming), and sophisticated animations powered by **Framer Motion**.

![Astra Hero Section](https://raw.githubusercontent.com/oxBinaryBrain/Claude-4.7-mockup-landing-page/main/astra_landing_hero.png)
*(Note: Replace with actual hosted image if available)*

## ✨ Key Features

- 🧊 **Liquid Glass Morphism**: Custom-engineered glass effect for cards, buttons, and badges with dynamic gradients and backdrop blurs.
- 🎬 **Cinematic Immersion**: Integration of high-quality MP4 and HLS (HTTP Live Streaming) background videos for a seamless, premium feel.
- ✍️ **Sophisticated Typography**: Uses *Instrument Serif* (italic) for headings and *Barlow* for high-readability body text.
- 🎭 **Motion-Rich Experience**: Smooth reveal animations, staggered word blurs, and interactive hover states using `motion/react`.
- 📱 **Fully Responsive**: Crafted to look stunning on everything from mobile devices to large desktop displays.
- 🚀 **Performance Optimized**: Built with Vite for lightning-fast development and optimized production bundles.

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (with HSL-based design tokens)
- **Animation**: Framer Motion (`motion/react`)
- **Video**: `hls.js` (for adaptive bitrate streaming)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Instrument Serif & Barlow)

## 🎨 Design System

The project uses a custom design system defined in `tailwind.config.js` and `index.css`:

- **Colors**: Based on HSL custom properties for easy theming (Background: #000, Text: #fff).
- **Glass Effects**: 
  - `.liquid-glass`: Light glass with subtle backdrop blur (4px).
  - `.liquid-glass-strong`: Stronger glass with deep backdrop blur (50px).
- **Typography**: 
  - Headings: `Instrument Serif`, italic.
  - Body: `Barlow` (Weights: 300, 400, 500, 600).

## 📂 Project Structure

- `src/components/`:
  - `Navbar.tsx`: Fixed glassmorphic navigation with mobile support.
  - `Hero.tsx`: Immersive hero section with `BlurText` headline and background video.
  - `BlurText.tsx`: A custom component for word-by-word animated text reveals.
  - `HlsVideo.tsx`: A reusable wrapper for `hls.js` streaming videos.
  - `StartSection.tsx`: "How It Works" section with sticky scroll behavior.
  - `FeaturesChess.tsx`: Alternating "chess" layout for technology features.
  - `Stats.tsx`: Key mission metrics over a streaming HLS background.
  - `CtaFooter.tsx`: Final call-to-action and minimal footer with HLS background.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oxBinaryBrain/Claude-4.7-mockup-landing-page.git
   cd Claude-4.7-mockup-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Created with passion for the next generation of space explorers.*
