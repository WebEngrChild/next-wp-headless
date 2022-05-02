import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import { WPPost } from '../../libs/wpapi/interfaces'


export const Post:FC<{post: WPPost
}> = ({post}) => {
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <p>{post.content.rendered}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch("http://wordpress/wp-json/wp/v2/posts")
  const posts: WPPost[] = await res.json()  
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{}>  = async ({params}) => {  
  const res = await fetch(`http://wordpress/wp-json/wp/v2/posts/${params!.id}`)
  const post: WPPost = await res.json()  
  return { props: {post} }
}

export default Post