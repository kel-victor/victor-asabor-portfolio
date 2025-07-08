
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPosts, getPost } from '../utils/readPosts.js'

export default function Blog() {
  const params = useParams()
  const posts = getPosts()

  if (params.slug) {
    const post = getPost(params.slug)
    if (!post) return <p className="p-10 text-center">Post not found.</p>
    return (
      <article className="prose dark:prose-invert max-w-3xl mx-auto pt-24 pb-20 px-4">
        <img
          src={post.image}
          alt={post.title}
          className="rounded-lg mb-6 w-full object-cover max-h-72"
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

  return (
    <section className="pt-24 pb-20 container mx-auto max-w-6xl px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-8">
        {posts.map((p) => (
          <li
            key={p.slug}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-md mb-4 w-full max-h-60 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-xs opacity-70 mb-4">{p.date}</p>
            <p>{p.content.substring(0, 160)}…</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
