import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { WPPost } from '../../libs/wpapi/interfaces';

export const Post: FC<{ post: WPPost }> = ({ post }) => {
  return (
    <div className='py-12 bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <h1 className='m-5 mt-2 text-3xl font-extrabold tracking-tight leading-8 text-gray-900 sm:text-4xl' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h1>
      <p className='ml-2 text-lg font-medium leading-6 text-gray-900' dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
      <Link href='/' passHref>
        <div className="m-3">
          <button className="py-1 px-2 text-xs font-semibold text-white bg-indigo-500 hover:bg-indigo-400 rounded">一覧に戻る</button>
        </div>
      </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts: WPPost[] = await axios.get(process.env.WP_URL!).then((response) => response.data);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: WPPost = await axios
    .get(process.env.WP_URL! + params!.id)
    .then((response) => response.data);
  return { props: { post } };
};

export default Post;
