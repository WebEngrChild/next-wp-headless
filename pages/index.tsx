import axios from 'axios';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { WPPost } from '../libs/wpapi/interfaces';
import styles from '../styles/Home.module.css';

export const Home: FC<{
  posts: WPPost[];
}> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.jsとWordpressを使ったHeadlessCMS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className='pt-3 font-bold text-red-600'>Next.jsとWordpressを使ったHeadlessCMS</h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <Link key={index} href={`/post/${post.id}`}>
              <a href='' className={styles.card}>
                <h2>{post.title.rendered}</h2>
                <p>{post.content.rendered}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: WPPost[] = await axios.get(process.env.WP_URL!).then((response) => response.data);
  return { props: { posts } };
};

export default Home;
