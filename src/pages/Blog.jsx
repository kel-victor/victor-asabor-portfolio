import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { getPosts, getPost } from '../utils/readPosts.js'

const bg = 'https://source.unsplash.com/1600x900/?coding,workspace'

export default function Blog() {
  const params = useParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [search, setSearch] = useState('')
  const posts = getPosts()

  if (params.slug) {
    const post = getPost(params.slug)
    if (!post) return <p className="p-10 text-center">Post not found.</p>

    // Custom background colors for specific slugs
    const postBgColor =
      post.slug === 'case-study-traffic-boost'
        ? 'bg-indigo-950 text-white'
        : post.slug === 'ui-redesign-tips'
        ? 'bg-teal-900 text-white'
        : post.slug === 'secure-code-guide'
        ? 'bg-slate-900 text-white'
        : 'text-white'

    const postStyle =
      post.slug === 'case-study-traffic-boost' || post.slug === 'ui-redesign-tips' || post.slug === 'secure-code-guide'
        ? {}
        : {
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.4)), url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }

    return (
      <article
        className={`relative pt-24 pb-20 px-4 max-w-3xl mx-auto prose dark:prose-invert z-10 rounded-xl shadow-xl overflow-hidden ${postBgColor}`}
        style={postStyle}
      >
        <img
          src={bg}
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
        />
        <h1>{post.title}</h1>
        <p className="text-sm opacity-75 mb-8">{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <div className="mt-10">
          <Link
            to="/blog"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    )
  }

  const categories = ['All', ...new Set(posts.map(p => p.category || 'General'))]

  const filteredPosts = posts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const visiblePosts = filteredPosts.slice(0, visibleCount)

  return (
    <section className="relative pt-24 pb-20 container mx-auto max-w-6xl px-4 z-10">
      <img
        src={bg}
        alt="Blog Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75 -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 backdrop-blur-sm -z-10" />

      <h1 className="text-4xl font-extrabold text-center text-white mb-6">Explore My Blog</h1>
      <p className="text-center max-w-2xl mx-auto text-zinc-100/90 mb-10">
        Insights, tutorials, and behind-the-scenes from my front-end and cybersecurity journey.
      </p>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search blog posts..."
        className="w-full max-w-md mx-auto block mb-8 p-3 rounded-md text-sm text-black dark:text-white bg-white/80 dark:bg-zinc-700 backdrop-blur placeholder-gray-500"
      />

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition backdrop-blur-md ${selectedCategory === cat ? 'bg-white/30 text-black' : 'bg-white/10 text-black hover:bg-white/20'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="space-y-10">
        {visiblePosts.map((p, index) => (
          <motion.li
            key={p.slug}
            className="bg-white/70 dark:bg-zinc-800/80 backdrop-blur rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-md mb-4 w-full max-h-60 object-cover"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                <Link to={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <span className="bg-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full">
                {p.category || 'General'}
              </span>
            </div>
            <p className="text-xs opacity-70 mb-4">{p.date}</p>
            <p className="text-zinc-700 dark:text-zinc-300">
              {p.content.substring(0, 160)}…
              <Link to={`/blog/${p.slug}`} className="text-black hover:underline ml-2">Read More</Link>
            </p>
          </motion.li>
        ))}
      </ul>

      {visibleCount < filteredPosts.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(prev => prev + 3)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
