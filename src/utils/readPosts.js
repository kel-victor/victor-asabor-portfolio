import matter from 'gray-matter'

export function getPosts() {
  const files = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' })
  return Object.entries(files).map(([path, raw]) => {
    const { data, content } = matter(raw)
    return { ...data, content }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPost(slug) {
  return getPosts().find((p) => p.slug === slug)
}
