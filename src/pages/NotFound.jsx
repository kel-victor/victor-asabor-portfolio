import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="text-indigo-600 hover:underline">Go Home</Link>
    </section>
  )
}