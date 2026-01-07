"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  stars?: number
  forks?: number
  featured?: boolean
}

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects: Project[] = [
    {
      id: "aqua-stark",
      name: "Aqua-Stark",
      description:
        language === "en"
          ? "Aqua Stark's monorepo - A collaborative open-source project built with TypeScript"
          : "Monorepo de Aqua Stark - Un proyecto open-source colaborativo construido con TypeScript",
      tech: ["TypeScript", "React", "Node.js"],
      github: "https://github.com/AquaStark/Aqua-Stark",
      stars: 9,
      forks: 113,
      featured: true,
    },
    {
      id: "offer-hub",
      name: "Offer Hub",
      description:
        language === "en"
          ? "A platform designed to transform the freelance market by connecting professionals and clients worldwide"
          : "Una plataforma diseñada para transformar el mercado freelance conectando profesionales y clientes mundialmente",
      tech: ["TypeScript", "React", "Full Stack"],
      github: "https://github.com/OFFER-HUB/offer-hub",
      stars: 20,
      forks: 188,
      featured: true,
    },
    {
      id: "streaky",
      name: "Streaky",
      description:
        language === "en"
          ? "An app for easily creating and maintaining daily habits"
          : "Una app para crear y mantener hábitos diarios fácilmente",
      tech: ["TypeScript", "React Native"],
      github: "https://github.com/BrayanMQ/streaky-app",
      stars: 1,
    },
    {
      id: "coa",
      name: "Citizen of Arcanis",
      description:
        language === "en"
          ? "A fully on-chain MMORPG - Front-End contribution"
          : "Un MMORPG completamente on-chain - Contribución al Front-End",
      tech: ["C#", "Unity", "Blockchain"],
      github: "https://github.com/BrayanMQ/Citizen-of-Arcanis-FrontEnd",
    },
    {
      id: "techtonica",
      name: "Techtonica.org",
      description:
        language === "en"
          ? "Website for Techtonica, a nonprofit tech training program"
          : "Sitio web para Techtonica, un programa de capacitación tecnológica sin fines de lucro",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Techtonica/techtonica.org",
      stars: 33,
      forks: 70,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            {language === "en" ? "Projects" : "Proyectos"}
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            {language === "en"
              ? "Open source contributions and personal projects"
              : "Contribuciones open source y proyectos personales"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`glass glass-hover rounded-xl p-6 border border-white/10 flex flex-col ${
                  project.featured ? "md:col-span-1 lg:col-span-1 ring-1 ring-emerald-400/30" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.featured && (
                  <span className="text-xs text-emerald-400 font-medium mb-2">
                    {language === "en" ? "Featured" : "Destacado"}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-white/70 text-sm mb-4 grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white"
              onClick={() => window.open("https://github.com/BrayanMQ", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              {language === "en" ? "View All on GitHub" : "Ver Todo en GitHub"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
