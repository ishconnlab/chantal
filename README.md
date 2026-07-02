# Chantal Mutuyimana — Professional Software Developer Portfolio

A highly polished, interactive single-screen portfolio web application showcasing the software engineering expertise, education, professional experience, and digital projects of **Chantal Mutuyimana**, a Software Developer based in Muhanga District, Rwanda.

Developed using modern frontend tech stacks (**React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**), this application has been carefully designed to present complex technical achievements in an elegant, accessible manner that any user, recruiter, or layperson can instantly understand.

---

## 🌟 Key Features

### 1. Simple, Clean, and Human-Readable Visuals
* **Accessible Language**: Core features, experiences, and project descriptions are written with clear, direct human terminology instead of dense, developer-only jargon.
* **Ambient Dark Theme**: Structured around deep, eye-safe midnight tones with elegant typography (Inter and Space Grotesk) and spacious layouts.
* **No Unnecessary Clutter**: Every element is intentional. Extraneous lines, busy grid loader overlays, and mock playground sections have been permanently removed to focus strictly on what matters.

### 2. Live Interactive & Downloadable CV / Resume
* **Download as PDF**: Clicking the CV button triggers a styled, paper-optimized print template, enabling immediate saving or printing as a high-quality PDF.
* **Download as Text**: Includes a direct single-click "Raw Text" downloader for plain text archiving.
* **Comprehensive Timelines**: Symmetrical timeline tracks education at **Kiyumba Technical Secondary School (Kiyumba TSS)** from 2023 to 2026 alongside key internships and self-guided projects.

### 3. Clear Direct Contact Flow
* **Direct Mailto Handshake**: Unlike generic contact forms that disappear into a database or simulated endpoints, this contact form constructs a clean, formatted message containing the user's name, email, and message body.
* **Instant Client Dispatch**: Submitting the form instantly prompts the user's default email composer (Outlook, Gmail, Mail, etc.) prepopulated with Chantal's professional address (`mutuyimanachantal16@gmail.com`), ensuring direct delivery.

### 4. Interactive Geographic Map
* **Interactive Map of Rwanda**: Visualizes Chantal's operations center in Muhanga District with subtle ambient indicators.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 19 (Functional Components & Hooks)
* **Build Tool**: Vite
* **Programming Language**: TypeScript (Type-safe codebase)
* **Styling Framework**: Tailwind CSS v4 (Modern CSS parameters and custom theme bindings)
* **Animation Engine**: Framer Motion (`motion/react`)
* **Vector Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) (installed with Node)

### Installation

1. Clone or download the project files.
2. In the project root directory, run the following command to install required dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server with Hot Module Replacement support:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to preview the application locally.

### Production Build

To compile the application into lightweight, optimized static assets (placed in the `dist/` folder):
```bash
npm run build
```

---

## 📂 Code Structure

* `/src/App.tsx`: Main structural layout, mounting core UI wrappers and coordinating modal states.
* `/src/data.ts`: Centralized, curated data stores containing professional experience, certifications, and project profiles.
* `/src/components/CVModal.tsx`: High-contrast CV modal featuring dual PDF/TXT exporters and print stylesheet configurations.
* `/src/components/Contact.tsx`: Interactive direct-emailing feedback panel.
* `/src/components/Hero.tsx` & `/src/components/About.tsx`: Engaging intro-banners with responsive action boundaries.
* `/src/components/LoadingScreen.tsx`: Clean, modern, grid-less pre-loader animation.
