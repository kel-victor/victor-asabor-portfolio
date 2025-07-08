import {
  Mail, Phone, Linkedin, Facebook,
  Instagram, Twitter, MessageSquareMore
} from 'lucide-react'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-4 justify-center items-center ${className}`}>
      <a href="mailto:asaborvictor86@gmail.com" className="flex items-center gap-2 hover:underline">
        <Mail size={16} /> Email
      </a>
      <a href="tel:+2349161322700" className="flex items-center gap-2 hover:underline">
        <Phone size={16} /> Call
      </a>
      <a href="https://wa.me/2349161322700" target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 hover:underline">
        <MessageSquareMore size={16} /> WhatsApp
      </a>
      <a href="https://www.linkedin.com/in/asabor-victor-29126435a" target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 hover:underline">
        <Linkedin size={16} /> LinkedIn
      </a>
      <a href="https://www.instagram.com/kelvic8tor" target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 hover:underline">
        <Instagram size={16} /> Instagram
      </a>
      <a href="https://www.facebook.com/share/1AkiSwk4QY" target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 hover:underline">
        <Facebook size={16} /> Facebook
      </a>
      <a href="https://x.com/kelvictor2004" target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 hover:underline">
        <Twitter size={16} /> X
      </a>
    </div>
  )
}
