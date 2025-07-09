const projects = [
  {
    title: 'Petgram – Social App for Pets',
    desc: 'Share and discover pet moments. Built with React & Tailwind.',
    link: 'https://petgramproject.vercel.app',
    image: '/Petgram.jpg',
  },
  {
    title: 'SecureShop',
    desc: 'E‑commerce platform with CSP & HTTPS hardening.',
    link: '#',
    image: '/secureshop.jpg',
  },
  {
    title: 'Portfolio v3',
    desc: 'Minimal personal site focused on performance.',
    link: '#',
    image: '/portfolio.jpg',
  },
  {
    title: 'DashMonitor',
    desc: 'Realtime admin dashboard with WebSocket charts.',
    link: '#',
    image: '/dashboard.jpg',
  },
  {
    title: 'CryptoGuard',
    desc: 'Lightweight crypto‑price tracker with security alerts.',
    link: '#',
    image: '/crypto.jpg',
  },
  {
    title: 'EduMentor',
    desc: 'Responsive e‑learning portal featuring secure auth.',
    link: '#',
    image: '/edumentor.jpg',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-neutral-200 dark:bg-zinc-900">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        {/* Glowing Gradient Heading */}
        <h2
          className="text-4xl font-extrabold tracking-wide mb-14
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-pink-500
          shadow-[0_0_30px_rgba(0,200,255,0.4)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]
          backdrop-blur-md p-4 rounded-xl border border-blue-300 dark:border-white/10 inline-block"
        >
          Featured Projects
        </h2>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl overflow-hidden transition-transform hover:-translate-y-1
      border border-sky-200 bg-white dark:bg-zinc-800
      shadow-[0_8px_24px_rgba(0,200,255,0.15)]
      hover:shadow-[0_0_30px_rgba(0,200,255,0.35),0_0_40px_rgba(255,0,255,0.2)]
      hover:border-pink-400 hover:ring-2 hover:ring-cyan-300
      hover:ring-offset-2 hover:ring-offset-neutral-200 dark:hover:ring-offset-zinc-900
      backdrop-blur-lg duration-500"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 text-left space-y-2">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-zinc-300">{desc}</p>
      </div>
    </a>
  )
}
