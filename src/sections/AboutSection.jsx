import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { label: 'Projects', value: 50 },
  { label: 'Happy Clients', value: 20 },
  { label: 'Years Experience', value: 4 },
]

// ✅ Static, tech-themed background image (non-API)
const bg = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 mb-20 mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Reliable Background Image */}
      <img
        src={bg}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative container mx-auto max-w-5xl px-4 text-center space-y-10">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="leading-relaxed max-w-2xl mx-auto">
          I craft performant UIs and promote secure coding practices. Blending design thinking with OWASP
          awareness, I deliver websites that look great <strong>and</strong> resist common vulnerabilities.
        </p>

        {/* Animated Stats */}
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map(({ label, value }) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <CountUp
                end={value}
                duration={2}
                useEasing
                enableScrollSpy
                scrollSpyOnce={false}
                className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400"
              />
              <p className="opacity-75 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
