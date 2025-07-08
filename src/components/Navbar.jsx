import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeProvider.jsx'
import {
  Menu, X, Moon, Sun,
  Linkedin, Instagram, Twitter
} from 'lucide-react'

export default function Navbar() {
  const resumeHref = '/Victor_Asabor_Resume_Clean.pdf'
  const { theme, setTheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Add glowing effect CSS once on load
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes shine {
        0% { text-shadow: 0 0 5px rgba(255,255,255,0.3); }
        50% { text-shadow: 0 0 15px rgba(255,255,255,0.9); }
        100% { text-shadow: 0 0 5px rgba(255,255,255,0.3); }
      }

      .animate-text-shine {
        animation: shine 2.5s ease-in-out infinite;
      }

      @keyframes border-glow {
        0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 255, 0.4); }
        50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
      }

      .animate-border-glow {
        animation: border-glow 3s infinite ease-in-out;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/80 dark:bg-zinc-900/80 
      border-b-4 animate-border-glow border-gradient-to-r from-blue-400 via-cyan-300 to-purple-500"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <Link
          to="/"
          onClick={close}
          className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent 
          bg-gradient-to-br from-white via-cyan-300 to-blue-500 animate-text-shine"
        >
          Victor Asabor
        </Link>

        {/* burger icon */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* nav links */}
        <ul className={`gap-8 font-medium lg:flex ${open ? 'block mt-6' : 'hidden'}`}>
          <li><Link to="/#about" onClick={close}>About</Link></li>
          <li><Link to="/#services" onClick={close}>Services</Link></li>
          <li><Link to="/#projects" onClick={close}>Projects</Link></li>
          <li><Link to="/blog" onClick={close}>Blog</Link></li>
          <li><Link to="/#contact" onClick={close}>Contact</Link></li>
          <li>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>

          {/* social icons */}
          <li className="hidden lg:flex items-center gap-4">
            <a href="https://www.linkedin.com/in/asabor-victor-29126435a" target="_blank" rel="noopener"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/kelvic8tor" target="_blank" rel="noopener"><Instagram size={18} /></a>
            <a href="https://x.com/kelvictor2004" target="_blank" rel="noopener"><Twitter size={18} /></a>
          </li>

          {/* theme toggle */}
          <li>
            <button
              onClick={() =>
                setTheme(
                  theme === 'light' ? 'dark' :
                  theme === 'dark' ? 'system' : 'light'
                )
              }
              className="p-2"
              title={`Switch theme (current: ${theme})`}
            >
              {theme === 'light' && <Moon className="h-5 w-5" />}
              {theme === 'dark' && <Sun className="h-5 w-5" />}
              {theme === 'system' && <Sun className="h-5 w-5 opacity-50" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
