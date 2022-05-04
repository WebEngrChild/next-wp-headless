import axios from 'axios'
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
  const posts: WPPost[] = await axios
    .get(process.env.WP_URL!)
    .then((response) => response.data);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {  
  const post: WPPost = await axios
    .get(process.env.WP_URL! + params!.id)
    .then(response => response.data)
  return { props: {post} };
}

export default Post