# 🌟 Personal Portfolio - Brayan Steven Marín Quirós

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A modern, responsive personal portfolio website showcasing full-stack development skills with cutting-edge web technologies.

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Glassmorphism Effects**: Beautiful translucent components with backdrop blur
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark aesthetic with gradient backgrounds
- **Smooth Animations**: Scroll-triggered animations and micro-interactions

### 🌐 **Multi-Language Support**
- **English & Spanish**: Complete bilingual experience
- **Dynamic Content**: All sections adapt to selected language
- **Persistent Preferences**: Language choice saved in localStorage

### 🚀 **Performance Optimized**
- **Next.js 16**: Latest App Router with server components
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Analytics Integration**: Vercel Analytics for performance tracking
- **SEO Ready**: Meta tags and structured data implementation

### 🛠️ **Technical Stack**

#### Frontend Architecture
```typescript
- Next.js 16 (App Router)
- React 19 (Latest features)
- TypeScript (Type safety)
- Tailwind CSS v4 (Utility-first styling)
```

#### UI Components & Design
```typescript
- Radix UI (Accessible primitives)
- Lucide React (Modern icons)
- Geist Font (Typography)
- Custom CSS animations
```

#### Development Tools
```bash
- ESLint (Code linting)
- PostCSS (CSS processing)
- TypeScript Compiler
- Next.js Dev Server
```

## 📁 Project Structure

```
personal-porfolio-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage composition
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   ├── hero-section.tsx  # Landing section
│   ├── about-section.tsx # Personal introduction
│   ├── experience-timeline.tsx # Career timeline
│   ├── skills-section.tsx # Technical skills
│   ├── projects-section.tsx # Featured projects
│   ├── navbar.tsx        # Navigation component
│   └── footer.tsx        # Site footer
├── contexts/             # React contexts
│   └── language-context.tsx # Multi-language state
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🎯 Key Components

### ScrollFadeWrapper
Custom animation wrapper that triggers fade-in effects based on scroll position using Intersection Observer API.

### Language Context
Global state management for bilingual support with persistent storage.

### Theme Provider
Dark theme implementation with next-themes integration.

### Skills Section
Interactive skills showcase with animated progress indicators and category organization.

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

Custom responsive utilities and component variants ensure optimal experience across all screen sizes.

## 🌐 Internationalization

The portfolio supports two languages:
- **English** (Default)
- **Spanish**

Language switching persists across sessions and updates all content dynamically.

## 🎨 Design System

### Color Palette
- **Primary**: Dark gradients (`gray-900` to `black`)
- **Accent**: Emerald green (`emerald-400/600`)
- **Text**: White variations with opacity levels
- **Glass Effect**: Translucent white with blur

### Typography
- **Primary Font**: Geist (Modern, clean)
- **Sizes**: Responsive scaling (mobile-first approach)
- **Weights**: 400, 500, 600, 700

## 🌟 Live

Experience the portfolio live at: [https://brayan-marin-porfolio.vercel.app/]

---

## 👨‍💻 About the Developer

**Brayan Steven Marín Quirós** - Full Stack Developer & Computer Science Engineer

This portfolio serves as both a professional showcase and a demonstration of modern web development practices, featuring:

- **Clean Architecture**: Well-structured, maintainable codebase
- **Modern Technologies**: Latest versions of React, Next.js, and TypeScript
- **Performance Focus**: Optimized for speed and user experience
- **Accessibility**: WCAG compliant components and navigation

---
