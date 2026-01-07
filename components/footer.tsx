"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const { t, language } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{language === "en" ? "Navigation" : "Navegación"}</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                {t("nav.about")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("experience")}
              >
                {t("nav.experience")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                {t("nav.projects")}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{language === "en" ? "Links" : "Enlaces"}</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/BrayanMQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors block"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brayan-steven-marin-quiros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.connect")}</h3>
            <p className="text-white/75 mb-4">{t("footer.connect.project")}</p>
            <p className="text-white/75 mb-6">brayanmarinquiros@gmail.com</p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                onClick={() => window.open("mailto:brayanmarinquiros@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://github.com/BrayanMQ", "_blank")}
              >
                <Github className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://www.linkedin.com/in/brayan-steven-marin-quiros", "_blank")}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            {t("footer.made")} <span className="font-bold text-white">BRAYAN MARÍN</span> © 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
