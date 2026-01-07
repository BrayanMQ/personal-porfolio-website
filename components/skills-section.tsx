"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

export default function SkillsSection() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      title: "Backend",
      skills: ["C#", "Node.js", "Python", "JavaScript", "TypeScript", "SQL Server", "PostgreSQL", "REST API"],
      color: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "TypeScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: language === "en" ? "Tools & Methods" : "Herramientas y Métodos",
      skills: ["Git", "Docker", "Scrum", "Agile"],
      color: "from-amber-400 to-amber-600",
    },
    {
      title: language === "en" ? "Languages" : "Idiomas",
      skills: [
        language === "en" ? "Spanish (Native)" : "Español (Nativo)",
        language === "en" ? "English (B2)" : "Inglés (B2)",
      ],
      color: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            {language === "en" ? "Skills" : "Habilidades"}
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            {language === "en"
              ? "Technologies and tools I work with"
              : "Tecnologías y herramientas con las que trabajo"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass glass-hover rounded-xl p-6 border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`}></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-white/10 text-white/90 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
