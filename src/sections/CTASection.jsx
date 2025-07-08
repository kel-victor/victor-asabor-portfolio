export default function CTASection() {
  return (
    <section className="relative py-24 text-center text-white bg-gradient-to-r from-indigo-600 to-emerald-600">
      <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
        <h2 className="text-4xl font-extrabold leading-tight">
          Let’s Elevate Your Online Presence
        </h2>
        <p className="text-lg opacity-90">
          Whether you're launching a new idea or optimizing an existing platform, I’m here to deliver fast, secure, and high-performing solutions tailored for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2349161322700?text=Hi%20Victor,%20I'm%20interested%20in%20your%20web%20services.%20Can%20we%20schedule%20a%20call?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-zinc-100 transition"
          >
            Request Callback
          </a>

          {/* Email CTA */}
          <a
            href="mailto:asaborvictor86@gmail.com?subject=Request%20Callback&body=Hi%20Victor,%20I’d%20like%20to%20discuss%20a%20project."
            className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition"
          >
            Message via Email
          </a>

          {/*
          // Optional scroll-to-contact section:
          <a href="#contact" className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition">
            Go to Contact Form
          </a>
          */}
        </div>
      </div>
    </section>
  )
}
