import axios from 'axios';
import { GetServerSideProps } from 'next';
import { WPPost } from '../../libs/wpapi/interfaces';
import Post from '../post/[id]';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post_url = process.env.WP_URL! + context.query.id + '?_embed&status=draft';

  const post = await axios
    .get(post_url, {
      auth: {
        username: process.env.WP_USER!,
        password: process.env.WP_AP_PASS!,
      },
    })
    .then((response) => response.data);
  return { props: post };
};

const Preview = (post: WPPost) => {
  return post ? <Post post={post} /> : null;
};

export default Preview;
