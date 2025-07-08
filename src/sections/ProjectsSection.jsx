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
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        {/* 3 × 2 grid on large screens */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      className="block bg-white dark:bg-zinc-800 rounded-lg shadow hover:shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 text-left space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{desc}</p>
      </div>
    </a>
  )
}
