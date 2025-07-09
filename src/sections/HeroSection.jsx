import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks.jsx'
import profile from '../assets/victor.jpg'
import { TypeAnimation } from 'react-type-animation'

const fallbackImages = [
  '/fallback1.jpg',
  '/fallback2.jpg',
  '/fallback3.jpg',
]

const unsplashImages = [
  'https://source.unsplash.com/1920x1080/?technology,developer',
  'https://source.unsplash.com/1920x1080/?programming,laptop',
  'https://source.unsplash.com/1920x1080/?code,workspace',
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [loadedImages, setLoadedImages] = useState(unsplashImages)

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
      setCurrentImage((prev) => (prev + 1) % loadedImages.length)
    }, 10000) // slower transitions (10s)
    return () => clearInterval(interval)
  }, [loadedImages])

  return (
    <motion.section
      id="hero"
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center text-center -mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Image */}
      <motion.img
        key={loadedImages[currentImage]}
        src={loadedImages[currentImage]}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-110 opacity-60 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0"></div>

      <motion.div
        className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center space-y-6 px-4 backdrop-blur-sm bg-black/10 rounded-xl p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <a
          href="https://www.linkedin.com/in/asabor-victor-29126435a"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition duration-300"
        >
          <img src={profile} alt="Victor Asabor" className="w-full h-full object-cover" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight z-10">
          <TypeAnimation
            sequence={[
              "VICTOR ASABOR", 3000,
              "Front-End Developer", 3000,
              "Cybersecurity Enthusiast", 3000,
              "Creative Problem Solver", 3000
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="bg-gradient-to-br from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
          />
        </h1>

        <p className="text-lg text-white/95 leading-relaxed font-medium max-w-xl">
          Certified Front‑End Developer & Cybersecurity Enthusiast dedicated to
          building fast, accessible and secure digital experiences.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-zinc-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
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

      {/* Scroll-down arrow */}
      <div className="absolute bottom-6 z-10 animate-bounce">
        <a href="#about" className="text-white text-3xl">↓</a>
      </div>

      <style>
        {`
          @keyframes shine {
            0% { background-position: -100%; }
            100% { background-position: 200%; }
          }
        `}
      </style>
    </motion.section>
  )
}
