# 🌾 Krishi Sanyog (कृषि संयोग) - AI Precision Agriculture Platform

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-06B6D4.svg)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Android%20%7C%20iOS%20%7C%20Desktop-emerald.svg)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Krishi Sanyog** is an AI-powered smart agriculture ecosystem designed for modern precision farming. It provides Indian farmers and agricultural administrators with real-time soil health diagnostics, personalized N-P-K fertilizer dosage calculations, hyper-local satellite weather advisories across all Indian districts, government scheme access, and an AI conversational chatbot assistant (*Krishi Mitra*).

---

## ✨ Key Features

### 🧪 1. AI Soil & Fertilizer Recommendation Engine
- **Nutrient Diagnostics**: Inputs N-P-K levels (kg/ha), soil pH (0 - 14), moisture %, land size (Acres), and target crop.
- **Exact Bag Dosage Computation**: Calculates required bags of Neem-Coated Urea, DAP, and MOP customized to land size.
- **High-Yield Crop Suitability**: Computes percentage match scores and agronomic suitability reasons for alternative crops.

### 🌤️ 2. Live All-India Satellite Weather Radar
- **Open-Meteo API Integration**: Fetches 100% accurate, live internet weather data (Temperature, Relative Humidity, Wind Speed, 5-Day Forecast, and Precipitation alerts).
- **All 28 States & 8 Union Territories**: Searchable database for all 500+ Indian districts and towns (e.g. *Indore, Ludhiana, Nashik, Varanasi, Patna, Jaipur, Guntur, Mandya, etc.*).
- **Satellite Agronomist Advisories**: Generates real-time crop spraying warnings during rainfall and irrigation schedules during dry spells.

### 🏛️ 3. Government Schemes & Subsidies Portal
- Catalog of central and state schemes (*PM Kisan Samman Nidhi, PM Fasal Bima Yojana, Soil Health Card Scheme, PM Krishi Sinchayee Yojana*).
- Interactive 1-click application modal with auto-filled farmer verification, Aadhaar status, and document upload simulation.

### 🌐 4. Full English & Hindi (हिन्दी) Multilingual Support
- **100% i18n Localization**: Toggle seamlessly between English and Hindi across every dashboard card, title, metric, notification, and menu.
- **Persistent Language Preference**: Preserves user choice across sessions via `localStorage`.

### 🌙 5. True Pitch-Black OLED Dark Mode
- Built using Tailwind CSS v4 custom variant system.
- Pitch-black `#000000` dark background for maximum OLED contrast and visual clarity.

### 📱 6. Progressive Web App (PWA) Installability
- **Installable on Android & iOS**: Full PWA Web App Manifest (`manifest.json`) and Service Worker (`sw.js`) configured.
- **1-Click Navbar Install Button**: Prompt user to install Krishi Sanyog directly to their mobile home screen or desktop app list.
- **Offline Caching**: Caches core shell assets for low-bandwidth farm environments.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), Vanilla CSS System
- **Icons & Visuals**: Lucide React
- **Analytics Charts**: Recharts
- **Internationalization**: `i18next`, `react-i18next`
- **Notifications**: `react-hot-toast`
- **Animations**: Framer Motion
- **Weather API**: Open-Meteo Satellite API & Geocoding API (No API key required)

---

## 🚀 Quick Start & Installation Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0 or higher)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/krishi-sanyog.git
   cd krishi-sanyog
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` to explore the app!

4. **Build for Production**:
   ```bash
   npm run build
   ```
   Outputs minified bundle to `dist/`.

---

## 📁 Directory Structure

```text
Krishi Sanyog/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── manifest.json       # PWA Web App Manifest
│   └── sw.js               # PWA Service Worker script
├── src/
│   ├── assets/             # Static SVG & Image assets
│   ├── components/
│   │   ├── admin/          # Admin Analytics & Management components
│   │   ├── common/         # Navbar, Footer, ThemeToggle, LanguageToggle, FloatingActionButton
│   │   ├── farmer/         # SoilHealthCard, WeatherWidget, SchemesList, AIRecommendationTool, CalendarWidget
│   │   └── landing/        # Hero, FeaturesGrid, HowItWorks, Benefits, FAQ, Testimonials
│   ├── context/
│   │   ├── AuthContext.jsx # Mock Farmer / Admin authentication state
│   │   └── ThemeContext.jsx# Dark/Light mode theme provider
│   ├── data/               # Mock datasets (Farmers, Schemes, Notices, Crops)
│   ├── i18n/               # i18next configuration & dictionaries (en.json, hi.json)
│   ├── pages/
│   │   ├── admin/          # Admin Dashboard & Subpages
│   │   ├── auth/           # Login, Register, Forgot Password, Reset Password, Verify Email
│   │   ├── farmer/         # Farmer Dashboard, Advisor, Schemes, Notices, Settings
│   │   └── LandingPage.jsx # Public landing page
│   ├── App.jsx             # React Router routing configuration
│   ├── index.css           # Global Tailwind CSS v4 & theme variables
│   └── main.jsx            # React root entry point
├── index.html              # HTML5 template & PWA meta tags
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite build options & plugins
└── README.md               # Project documentation
```

---

## 📱 PWA Installation Instructions

- **Android (Chrome/Edge)**: Tap the `📲 Install App` button in the navbar or open Chrome menu `⋮` ➔ select *"Install app"*.
- **iOS (iPhone/iPad Safari)**: Tap the Safari Share button `⎋` ➔ scroll down & select *"Add to Home Screen"*.
- **Desktop (Chrome/Edge)**: Click the install icon in the address bar or navbar button to run as a standalone desktop app.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

**Made with ❤️ for Indian Agriculture & Farmers.**
