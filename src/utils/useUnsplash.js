import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useUnsplash(query = 'code', width = 800, height = 600) {
 const [url, setUrl] = useState(
   `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(query)}`
)
  useEffect(() => {
    async function fetchImg() {
      try {
        const { data } = await axios.get('https://api.unsplash.com/photos/random', {
          params: { query, orientation: 'landscape' },
          headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}` },
        })
        setUrl(`${data.urls.raw}&w=${width}&h=${height}&fit=max`)
      } catch {}
    }
    fetchImg()
  }, [query, width, height])
  return url
}