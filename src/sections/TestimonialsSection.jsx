/* src/sections/TestimonialsSection.jsx */
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Expanded list: 8 persuasive quotes, American names
const testimonials = [
  {
    name: 'Emily Ross',
    text: 'Our conversions jumped 45% after Victor revamped our site — the new speed and security are outstanding.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Anderson',
    text: 'Every deliverable was on time and beyond expectations. Victor’s cybersecurity insight saved us countless headaches.',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Sarah Parker',
    text: 'Professional, creative, and detail‑oriented. Our traffic tripled within weeks of launch.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Smith',
    text: 'From design to deployment, Victor made the process seamless. Highly recommended for any serious business.',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    name: 'Olivia Johnson',
    text: 'The new site is blazing fast and ADA‑compliant. Victor’s work exceeded all benchmarks.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'David Lee',
    text: 'Cybersecurity audits were spotless after Victor locked everything down. Peace of mind at last!',
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
  {
    name: 'Jessica Miller',
    text: 'A seamless redesign delivered 3 weeks early. Traffic is up and bounce rate is down.',
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
  {
    name: 'Christopher Davis',
    text: 'Victor translated our vision into a secure, scalable platform. Support has been stellar.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  // helper to advance index safely
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  // auto‑rotate every 6 s
  useEffect(() => {
    timerRef.current = setInterval(next, 6000)
    return () => clearInterval(timerRef.current)
  }, [])

  // restart timer on manual click
  const handleNext = () => {
    clearInterval(timerRef.current)
    next()
    timerRef.current = setInterval(next, 6000)
  }
  const handlePrev = () => {
    clearInterval(timerRef.current)
    prev()
    timerRef.current = setInterval(next, 6000)
  }

  const t = testimonials[index]
  const variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-zinc-900 text-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-12 tracking-wide">WHAT PEOPLE SAY</h2>
      <p className="max-w-xl mx-auto mb-12 opacity-80">
        Clients across industries trust Victor for performance‑driven, secure web
        solutions.
      </p>

      <div className="max-w-2xl mx-auto px-4 relative">
        {/* Arrow buttons */}
        <button
          onClick={handlePrev}
          className="absolute -left-8 top-1/2 -translate-y-1/2 hidden md:block p-2 hover:text-indigo-400"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block p-2 hover:text-indigo-400"
          aria-label="Next testimonial"
        >
          <ChevronRight size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-500 object-cover"
            />
            <p className="text-xl italic mb-4 max-w-xl mx-auto">“{t.text}”</p>
            <p className="font-semibold text-indigo-300">— {t.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
