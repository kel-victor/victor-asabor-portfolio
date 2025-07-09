import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import profile from '../assets/profile.jpg'

const stats = [
  { label: 'Projects', value: 50 },
  { label: 'Happy Clients', value: 20 },
  { label: 'Years Experience', value: 4 },
]

const bg = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=90'

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-24 relative overflow-hidden bg-neutral-100 dark:bg-zinc-900 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={bg}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-110"
      />

      <div className="relative container mx-auto max-w-5xl px-4 space-y-14">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 backdrop-blur-sm text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT
        </motion.h2>

        <div className="grid md:grid-cols-2 items-start gap-10">
          {/* Responsive and animated profile with glowing ring and name */}
          <motion.div
            className="w-full flex flex-col items-center gap-3 relative"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute w-80 h-80 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 blur-xl opacity-30 -z-10"></div>
            <div className="relative rounded-full p-2 animate-pulse shadow-xl">
              <motion.img
                src={profile}
                alt="Victor Asabor"
                className="w-72 h-72 sm:w-60 sm:h-60 object-cover rounded-xl border-4 border-blue-400 shadow-2xl rotate-3"
                whileHover={{ scale: 1.05, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">Victor Asabor</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Front-End Developer & Cybersecurity Enthusiast</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="leading-loose text-gray-800 dark:text-gray-300 text-base">
              Victor Asabor is a results-driven Front-End Developer and Cybersecurity Enthusiast, recognized for creating fast, secure, and engaging digital experiences. His journey began with humble roots—building simple HTML websites—which evolved into a passion for crafting world-class user interfaces backed by strong security principles.
              <br /><br />
              With over 50 completed projects and a growing client base, Victor helps individuals, startups, and enterprises establish or elevate their digital presence. He integrates modern development technologies like React and Tailwind CSS with secure coding practices aligned with OWASP standards.
              <br /><br />
              His services span web design, mobile responsiveness, SEO optimization, performance tuning, and security auditing—delivering not just beautiful interfaces, but scalable and secure infrastructure. Victor continues to be the preferred tech partner for clients who value speed, safety, and sleek design.
            </p>
            <div>
              <a
                href="https://wa.me/2349161322700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Learn More on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

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
              <p className="opacity-75 mt-2 text-gray-600 dark:text-gray-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}