import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Post from "../post/[id]"
import { WPPost } from '../../libs/wpapi/interfaces'

const Preview = () => {
  if (typeof window === 'undefined') return null

  const router = useRouter()
  const [post, changePost] = useState<WPPost>()
  // const { id, nonce } = router.query //なくてもうまく行った
  const { id } = router.query

  useEffect(() => {
    // if (!id || !nonce) return //なくてもうまく行った
    if (!id) return
    const post_url =
      'http://localhost:8080/wp-json/wp/v2/posts/' +
      id +
      '?_embed&status=draft'
      
    axios
      // .get(post_url, { headers: { 'X-WP-Nonce': nonce as string } }) //なくてもうまく行った
      .get(post_url)
      .then((response) => {
        const article = response.data
        changePost(article)
      })

  // }, [id, nonce])
  }, [id])

  return post ? <Post post={post} /> : null
}

export default Preview