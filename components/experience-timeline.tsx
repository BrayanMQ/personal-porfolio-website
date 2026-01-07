"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Briefcase, GraduationCap } from "lucide-react"

interface TimelineItem {
  id: string
  type: "work" | "education"
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export default function ExperienceTimeline() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const workExperience: TimelineItem[] = [
    {
      id: "onlydust",
      type: "work",
      title: language === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      company: "OnlyDust – Open Source Development",
      location: language === "en" ? "Remote" : "Remoto",
      period: language === "en" ? "Dec 2024 – Present" : "Dic 2024 – Presente",
      description:
        language === "en"
          ? [
              "Co-creator and maintainer of an open-source project with ~80 active contributors",
              "Created and managed 30+ issues, analyzing requirements and ensuring alignment",
              "Contributed to 100+ issues and opened/merged 100+ Pull Requests",
              "Enhanced Front-End performance with React and TypeScript, reducing load times by 20%",
              "Optimized Back-End endpoints with Node.js and C#, improving API response times by 30%",
            ]
          : [
              "Co-creador y mantenedor de un proyecto open-source con ~80 contribuidores activos",
              "Creé y gestioné 30+ issues, analizando requisitos y asegurando alineación",
              "Contribuí a 100+ issues y abrí/fusioné 100+ Pull Requests",
              "Mejoré el rendimiento del Front-End con React y TypeScript, reduciendo tiempos de carga en 20%",
              "Optimicé endpoints del Back-End con Node.js y C#, mejorando tiempos de respuesta de API en 30%",
            ],
    },
    {
      id: "align",
      type: "work",
      title: language === "en" ? "3D Dental Treatment Designer" : "Diseñador de Tratamientos Dentales 3D",
      company: "Align Technology",
      location: "Cartago, Costa Rica",
      period: language === "en" ? "Dec 2024 – Jul 2025" : "Dic 2024 – Jul 2025",
      description:
        language === "en"
          ? [
              "Designed and delivered 600+ 3D dental treatments with 0 client complaints",
              "Collaborated with multidisciplinary teams in quality and process engineering",
              "Developed understanding of orthodontic clinical concepts and their translation into technology",
            ]
          : [
              "Diseñé y entregué 600+ tratamientos dentales 3D con 0 quejas de clientes",
              "Colaboré con equipos multidisciplinarios en calidad e ingeniería de procesos",
              "Desarrollé comprensión de conceptos clínicos ortodónticos y su traducción a tecnología",
            ],
    },
    {
      id: "kuarctech",
      type: "work",
      title: language === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      company: "KUARCTECH SOLUTIONS S.A",
      location: "Cartago, Costa Rica",
      period: language === "en" ? "Feb 2024 – Aug 2024" : "Feb 2024 – Ago 2024",
      description:
        language === "en"
          ? [
              "Contributed to a social impact measurement system, leading the main module",
              "Coordinated a team of three developers",
              "Managed analysis, planning, requirements definition, and design of key modules",
              "Designed and implemented scalable solutions using Angular, TypeScript, C#, PostgreSQL, and Neo4j",
              "Provided mentoring to new team members",
            ]
          : [
              "Contribuí a un sistema de medición de impacto social, liderando el módulo principal",
              "Coordiné un equipo de tres desarrolladores",
              "Gestioné análisis, planificación, definición de requisitos y diseño de módulos clave",
              "Diseñé e implementé soluciones escalables usando Angular, TypeScript, C#, PostgreSQL y Neo4j",
              "Brindé mentoría a nuevos miembros del equipo",
            ],
    },
  ]

  const education: TimelineItem[] = [
    {
      id: "tec",
      type: "education",
      title: language === "en" ? "Bachelor in Computer Science" : "Bachillerato en Ingeniería en Computación",
      company:
        language === "en" ? "Instituto Tecnológico de Costa Rica (TEC)" : "Instituto Tecnológico de Costa Rica (TEC)",
      location: "Cartago, Costa Rica",
      period: language === "en" ? "September 2024" : "Septiembre 2024",
      description: [],
    },
    {
      id: "ctp",
      type: "education",
      title: language === "en" ? "Technical Degree in Software Development" : "Técnico Medio en Desarrollo de Software",
      company: language === "en" ? "Colegio Técnico Profesional de Orosi" : "Colegio Técnico Profesional de Orosi",
      location: "Cartago, Costa Rica",
      period: language === "en" ? "December 2018" : "Diciembre 2018",
      description: [],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            {language === "en" ? "Experience" : "Experiencia"}
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            {language === "en"
              ? "My professional journey in software development"
              : "Mi trayectoria profesional en desarrollo de software"}
          </p>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                {language === "en" ? "Work Experience" : "Experiencia Laboral"}
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-400 to-emerald-400/20"></div>

              <div className="space-y-8">
                {workExperience.map((item, index) => (
                  <div key={item.id} className="relative pl-12" style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 w-5 h-5 bg-emerald-400 rounded-full border-4 border-gray-900"></div>

                    <div className="glass glass-hover rounded-xl p-6 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <span className="text-emerald-400 text-sm font-medium">{item.period}</span>
                      </div>
                      <p className="text-white/80 font-medium mb-1">{item.company}</p>
                      <p className="text-white/50 text-sm mb-4">{item.location}</p>
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-1.5">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">{language === "en" ? "Education" : "Educación"}</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400 to-blue-400/20"></div>

              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={item.id} className="relative pl-12" style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 w-5 h-5 bg-blue-400 rounded-full border-4 border-gray-900"></div>

                    <div className="glass glass-hover rounded-xl p-6 border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <span className="text-blue-400 text-sm font-medium">{item.period}</span>
                      </div>
                      <p className="text-white/80 font-medium mb-1">{item.company}</p>
                      <p className="text-white/50 text-sm">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
