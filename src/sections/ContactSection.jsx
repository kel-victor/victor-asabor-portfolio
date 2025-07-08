import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialLinks from '../components/SocialLinks.jsx'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

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

        <form onSubmit={handleSubmit} className="grid gap-6">
          {['name', 'email', 'message'].map((field) => (
            field !== 'message' ? (
              <input
                key={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="p-3 rounded-md bg-transparent border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent 
                bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 
                hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] focus:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
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
                className="p-3 rounded-md bg-transparent border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent 
                bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 
                hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] focus:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
              />
            )
          ))}

          <button
            type="submit"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
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
