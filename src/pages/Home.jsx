
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../sections/HeroSection.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import ProjectsSection from '../sections/ProjectsSection.jsx'
import TestimonialsSection from '../sections/TestimonialsSection.jsx'
import CTASection from '../sections/CTASection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import Footer from '../sections/Footer.jsx'



export default function Home() {
    const location = useLocation()

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      // use smooth scroll
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 100) // slight delay to allow rendering
    }
  }
}, [location])


  return (
    <main className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
