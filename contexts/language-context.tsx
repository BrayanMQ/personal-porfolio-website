"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.card1": "Full Stack Developer with React, Node.js & C#",
    "hero.card2": "Open Source contributor with 80+ collaborators",
    "hero.card3": "Team lead & mentor experience",
    "hero.card4": "100+ Pull Requests merged",

    // About Section
    "about.bio1":
      "Computer Science Engineer with solid experience in Full Stack development and open-source collaboration. Skilled in building scalable applications with React, TypeScript, Node.js, and C#, and co-creator of a global open-source project with 80+ contributors.",
    "about.bio2":
      "Experienced in leading requirements analysis, issue management, and user collaboration, while consistently delivering efficient and impactful solutions. Recognized for combining technical expertise, teamwork, and problem-solving across industries.",
    "about.cta": "GET IN TOUCH",

    // Footer
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "Have a project in mind?",
    "footer.made": "MADE BY",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.card1": "Desarrollador Full Stack con React, Node.js y C#",
    "hero.card2": "Contribuidor Open Source con 80+ colaboradores",
    "hero.card3": "Experiencia liderando equipos y mentorías",
    "hero.card4": "100+ Pull Requests fusionados",

    // About Section
    "about.bio1":
      "Ingeniero en Computación con sólida experiencia en desarrollo Full Stack y colaboración open-source. Experto en construir aplicaciones escalables con React, TypeScript, Node.js y C#, y co-creador de un proyecto open-source global con 80+ contribuidores.",
    "about.bio2":
      "Experiencia liderando análisis de requisitos, gestión de issues y colaboración con usuarios, entregando consistentemente soluciones eficientes e impactantes. Reconocido por combinar experiencia técnica, trabajo en equipo y resolución de problemas.",
    "about.cta": "CONTACTAR",

    // Footer
    "footer.connect": "CONECTEMOS",
    "footer.connect.project": "¿Tienes un proyecto en mente?",
    "footer.made": "HECHO POR",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "en" || browserLang === "es") {
        setLanguage(browserLang as Language)
      } else {
        setLanguage("en") // Default to English
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
