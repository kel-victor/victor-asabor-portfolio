import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeProvider from './components/ThemeProvider.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import CookieConsent from "react-cookie-consent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsApp />
        </ThemeProvider>
      </BrowserRouter>

      {/* ✅ Cookie Consent at bottom */}
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="victorAsaborCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#fff", background: "#e91e63", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance user experience and for analytics.
      </CookieConsent>
    </>
  )
}
