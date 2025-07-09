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
        0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
        50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.9); }
      }

      .animate-border-glow {
        animation: border-glow 3s ease-in-out infinite;
      }

      .gradient-hover {
        background-image: linear-gradient(to right, #00FFFF, #8A2BE2);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: background-position 0.4s ease-in-out;
      }

      .gradient-hover:hover {
        background-position: right center;
      }

      #scroll-progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(to right, #06b6d4, #6366f1);
        z-index: 60;
        transition: width 0.2s ease-out;
      }
    `
    document.head.appendChild(style)

    const updateProgressBar = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      document.getElementById('scroll-progress-bar').style.width = `${scrollPercent}%`
    }

    window.addEventListener('scroll', updateProgressBar)
    return () => {
      document.head.removeChild(style)
      window.removeEventListener('scroll', updateProgressBar)
    }
  }, [])

  return (
    <>
      <div id="scroll-progress-bar"></div>

      <header className="fixed top-0 inset-x-0 z-50 animate-border-glow border-b border-black shadow-xl bg-gradient-to-r from-black/80 via-black/90 to-black/100 backdrop-blur-md ">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 ">
          <Link
            to="/"
            onClick={close}
            className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-cyan-300 to-blue-500 animate-text-shine"
          >
            Victor Asabor
          </Link>

          {/* burger icon */}
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <ul className={`gap-8 font-medium items-center lg:flex ${open ? 'block mt-6 text-white' : 'hidden'}`}>
            <li><Link to="/#about" onClick={close} className="gradient-hover">About</Link></li>
            <li><Link to="/#services" onClick={close} className="gradient-hover">Services</Link></li>
            <li><Link to="/#projects" onClick={close} className="gradient-hover">Projects</Link></li>
            <li><Link to="/blog" onClick={close} className="gradient-hover">Blog</Link></li>
            <li><Link to="/#contact" onClick={close} className="gradient-hover">Contact</Link></li>
            <li>
              <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="gradient-hover">
                Resume
              </a>
            </li>

            <li className="hidden lg:flex items-center gap-4">
              <a href="https://www.linkedin.com/in/asabor-victor-29126435a" target="_blank" rel="noopener"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/kelvic8tor" target="_blank" rel="noopener"><Instagram size={18} /></a>
              <a href="https://x.com/kelvictor2004" target="_blank" rel="noopener"><Twitter size={18} /></a>
            </li>

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
    </>
  )
}
