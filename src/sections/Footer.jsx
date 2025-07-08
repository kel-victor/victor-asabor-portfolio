/* src/sections/Footer.jsx */
import {
  Linkedin, Instagram, Twitter, MessageSquareMore
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* SVG Wave Transition */}
      <div className="relative">
        <svg className="absolute top-[-1px] w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#18181b"
            d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,128C672,107,768,53,864,32C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64V0H0Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="bg-zinc-900 text-zinc-300 px-4 py-16 text-sm relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold mb-2">Victor Asabor</h2>
            <p>Front‑End Developer & Cybersecurity Enthusiast building secure, modern websites.</p>
            <p className="mt-3">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><Link to="/#about" className="hover:underline">About</Link></li>
              <li><Link to="/#services" className="hover:underline">Services</Link></li>
              <li><Link to="/#projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h3 className="font-semibold mb-2">Get in Touch</h3>
            <p><a href="mailto:asaborvictor86@gmail.com" className="hover:underline">asaborvictor86@gmail.com</a></p>
            <p><a href="tel:+2349161322700" className="hover:underline">+234 916 132 2700</a></p>

            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/asabor-victor-29126435a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/kelvic8tor" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/kelvictor2004" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/2349161322700" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageSquareMore size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
