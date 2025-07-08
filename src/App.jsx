import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ThemeProvider  from './components/ThemeProvider.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          <FloatingWhatsApp />   {/* <- always visible */}
      </ThemeProvider>
    </BrowserRouter>
  )
}