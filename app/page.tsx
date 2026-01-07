import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={10}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={20}>
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={30}>
        <ExperienceTimeline />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={40}>
        <SkillsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={50}>
        <ProjectsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={60}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}
