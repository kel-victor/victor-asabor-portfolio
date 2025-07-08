import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks.jsx'
import profile from '../assets/victor.jpg'

const fallbackImages = [
  '/fallback1.jpg',
  '/fallback2.jpg',
  '/fallback3.jpg',
]

// Generate Unsplash URLs for tech images
const unsplashImages = [
  'https://source.unsplash.com/1600x900/?technology,developer',
  'https://source.unsplash.com/1600x900/?programming,laptop',
  'https://source.unsplash.com/1600x900/?code,workspace',
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [loadedImages, setLoadedImages] = useState(unsplashImages)

  // Preload images and fallback if fail
  useEffect(() => {
    const preloadImages = async () => {
      const promises = unsplashImages.map((url, i) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = url
          img.onload = () => resolve(url)
          img.onerror = () => resolve(fallbackImages[i] || fallbackImages[0])
        })
      )

      const results = await Promise.all(promises)
      setLoadedImages(results)
    }

    preloadImages()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % loadedImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [loadedImages])

  return (
    <motion.section
      id="hero"
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Preloaded Safe Background Image */}
      <img
        src={loadedImages[currentImage]}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40 z-0 transition-opacity duration-1000 ease-in-out"
      />

      <motion.div
        className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center space-y-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <a
          href="https://www.linkedin.com/in/asabor-victor-29126435a"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition duration-300 shadow-xl"
        >
          <img src={profile} alt="Victor Asabor" className="w-full h-full object-cover" />
        </a>

        <h1 className="relative text-5xl md:text-6xl font-extrabold text-white tracking-tight z-10">
          <span className="relative z-20 bg-gradient-to-br from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
            VICTOR ASABOR
          </span>
          <span className="absolute inset-0 z-10 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-sm [background-size:200%_100%] [background-position:-100%_0]"></span>
        </h1>

        <p className="text-lg text-white/90 leading-relaxed">
          Certified Front‑End Developer & Cybersecurity Enthusiast dedicated to
          building fast, accessible and secure digital experiences.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-zinc-900 font-semibold rounded-lg hover:shadow-lg transition"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-zinc-900 transition"
          >
            Book Appointment
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </motion.div>

      <style>
        {`
          @keyframes shine {
            0% {
              background-position: -100%;
            }
            100% {
              background-position: 200%;
            }
          }
        `}
      </style>
    </motion.section>
  )
}
