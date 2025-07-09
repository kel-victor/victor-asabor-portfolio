import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SocialLinks from '../components/SocialLinks.jsx'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [glowOn, setGlowOn] = useState(true)

  // Inject glow animations
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes rainbow-glow {
        0% {
          border-image-source: linear-gradient(45deg, #06b6d4, #6366f1);
        }
        25% {
          border-image-source: linear-gradient(45deg, #ec4899, #8b5cf6);
        }
        50% {
          border-image-source: linear-gradient(45deg, #facc15, #22c55e);
        }
        75% {
          border-image-source: linear-gradient(45deg, #f43f5e, #3b82f6);
        }
        100% {
          border-image-source: linear-gradient(45deg, #06b6d4, #6366f1);
        }
      }

      @keyframes button-glow {
        0% {
          box-shadow: 0 0 10px #06b6d4;
        }
        25% {
          box-shadow: 0 0 15px #8b5cf6;
        }
        50% {
          box-shadow: 0 0 20px #facc15;
        }
        75% {
          box-shadow: 0 0 15px #ec4899;
        }
        100% {
          box-shadow: 0 0 10px #06b6d4;
        }
      }

      .animated-border {
        border-width: 3px;
        border-style: solid;
        border-image-slice: 1;
        animation: rainbow-glow 6s linear infinite;
      }

      .animated-border:focus {
        animation-duration: 2s;
      }

      .glowing-button {
        animation: button-glow 4s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.')
      return
    }

    const text = `Hello Victor, my name is ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const url = `https://wa.me/2349161322700?text=${encodeURIComponent(text)}`

    try {
      window.open(url, '_blank')
      setStatus('Redirecting to WhatsApp…')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setStatus('')
        window.location.reload()
      }, 4000)
    } catch {
      setStatus('Unable to open WhatsApp. Please check your network connection.')
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-zinc-50 dark:bg-zinc-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

        {/* Glow Toggle */}
        <label className="flex justify-center items-center gap-2 mb-6 text-sm">
          <input
            type="checkbox"
            checked={glowOn}
            onChange={() => setGlowOn(!glowOn)}
            className="accent-blue-500"
          />
          Enable Glow Effect
        </label>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 p-6 rounded-xl bg-white/60 dark:bg-zinc-800/50 
          backdrop-blur-lg shadow-[0_10px_50px_rgba(0,200,255,0.25)] 
          border border-blue-300 dark:border-zinc-700 transition-all duration-500"
        >
          {['name', 'email', 'message'].map((field) =>
            field !== 'message' ? (
              <input
                key={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className={`p-3 rounded-md bg-white/40 dark:bg-zinc-800/40 text-black dark:text-white 
                ${glowOn ? 'animated-border' : 'border border-gray-300 dark:border-zinc-600'} 
                focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500 
                backdrop-blur-sm shadow-lg`}
              />
            ) : (
              <textarea
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder="Message"
                rows="5"
                className={`p-3 rounded-md bg-white/40 dark:bg-zinc-800/40 text-black dark:text-white 
                ${glowOn ? 'animated-border' : 'border border-gray-300 dark:border-zinc-600'} 
                focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500 
                backdrop-blur-sm shadow-lg`}
              />
            )
          )}

          <button
            type="submit"
            className={`px-6 py-3 bg-green-600 hover:bg-green-700 text-purple-600 rounded-md shadow-md transition 
            ${glowOn ? 'glowing-button' : ''}`}
          >
            Send via WhatsApp
          </button>

          {status && <p className="text-sm opacity-80 mt-2">{status}</p>}
        </form>

        <SocialLinks className="mt-12 text-sm text-zinc-700 dark:text-zinc-300" />
      </div>
    </motion.section>
  )
}
