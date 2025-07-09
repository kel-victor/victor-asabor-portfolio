import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Bug, Smartphone, Search, Zap, Palette } from 'lucide-react'


// Sample icons assigned per category
const categories = ['All', 'Design', 'Development', 'Security']

const services = [
  {
    title: 'Web Design',
    category: 'Design',
    icon: <Palette size={24} className="text-blue-500" />, 
    description: 'Stunning, modern, and user-centric designs that give your brand a strong digital identity.',
    image: '/web-design.jpg',
    lottie: '/lotties/design.json',
  },
  {
    title: 'Responsive Development',
    category: 'Development',
    icon: <Smartphone size={24} className="text-green-500" />, 
    description: 'Seamless experiences across all devices — mobile, tablet, and desktop.',
    image: '/responsive.jpg',
    lottie: '/lotties/responsive.json',
  },
  {
    title: 'Performance Tuning',
    category: 'Development',
    icon: <Zap size={24} className="text-yellow-500" />, 
    description: 'Speed optimization techniques that ensure your site loads fast and performs great.',
    image: '/performance.jpg',
    lottie: '/lotties/performance.json',
  },
  {
    title: 'SEO Optimization',
    category: 'Development',
    icon: <Search size={24} className="text-pink-500" />, 
    description: 'Boost your visibility and ranking on Google with proven SEO strategies.',
    image: '/seo.jpg',
    lottie: '/lotties/seo.json',
  },
  {
    title: 'Security Audit',
    category: 'Security',
    icon: <ShieldCheck size={24} className="text-red-500" />, 
    description: 'Comprehensive audits to identify vulnerabilities and enhance website security.',
    image: '/security.jpg',
    lottie: '/lotties/security.json',
  },
  {
    title: 'Bug Fixing',
    category: 'Security',
    icon: <Bug size={24} className="text-indigo-500" />, 
    description: 'Reliable debugging to ensure your platform runs smoothly and error-free.',
    image: '/bug.jpg',
    lottie: '/lotties/bug.json',
  },
]

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter(service => service.category === activeCategory)

  return (
    <motion.section
      id="services"
      className="py-20 bg-zinc-50 dark:bg-zinc-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Animated glass heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text text-center mb-6
          bg-gradient-to-br from-blue-600 via-fuchsia-500 to-pink-500
          shadow-[0_0_30px_rgba(0,200,255,0.3)] backdrop-blur rounded-xl inline-block border border-blue-300 dark:border-white/10"
        >
          SERVICES
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 flex-wrap mb-10 mt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300
                ${activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-lg bg-gray-100 dark:bg-zinc-800 shadow-[0_10px_50px_rgba(0,200,255,0.2)]
                hover:shadow-[0_0_30px_rgba(0,200,255,0.3),0_0_30px_rgba(255,0,255,0.15)]
                border border-transparent hover:border-cyan-300 backdrop-blur-md transition duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                {service.icon}
                <p className="text-lg font-bold text-slate-800 dark:text-white">
                  {service.title}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
