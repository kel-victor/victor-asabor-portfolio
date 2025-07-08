import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Design',
    icon: 'palette',
    description:
      'Stunning, modern, and user-centric designs that give your brand a strong digital identity.',
    image: '/web-design.jpg',
  },
  {
    title: 'Responsive Development',
    icon: 'smartphone',
    description:
      'Seamless experiences across all devices — mobile, tablet, and desktop.',
    image: '/responsive.jpg',
  },
  {
    title: 'Performance Tuning',
    icon: 'zap',
    description:
      'Speed optimization techniques that ensure your site loads fast and performs great.',
    image: '/performance.jpg',
  },
  {
    title: 'SEO Optimization',
    icon: 'search',
    description:
      'Boost your visibility and ranking on Google with proven SEO strategies.',
    image: '/seo.jpg',
  },
  {
    title: 'Security Audit',
    icon: 'shield',
    description:
      'Comprehensive audits to identify vulnerabilities and enhance website security.',
    image: '/security.jpg',
  },
  {
    title: 'Bug Fixing',
    icon: 'bug',
    description:
      'Reliable debugging to ensure your platform runs smoothly and error-free.',
    image: '/bug.jpg',
  },
]

export default function ServicesSection() {
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
        <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-zinc-600 dark:text-zinc-300">
          I help businesses and brands — from startups to enterprises — build powerful, scalable,
          and secure digital solutions. With a blend of technical expertise and creative strategy,
          I make online growth effortless. Let&apos;s collaborate and create results you’ll be proud of.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 backdrop-blur rounded-lg bg-white/70 dark:bg-zinc-800/70 shadow-md hover:shadow-xl transition"
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
              <p className="text-xl font-semibold mb-2">{service.title}</p>
              <p className="text-sm opacity-75">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
