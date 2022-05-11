import { DocumentTextIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { WPPost } from '../libs/wpapi/interfaces';

export type Props = {
  posts: WPPost[];
};

const Body: React.FC<Props> = ({ posts }) => {
  return (
    <div className='mt-10'>
      <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
        {posts.map((post) => (
          <Link key={post.title.rendered} href={`/post/${post.id}`}>
            <a href=''>
              <div className='relative'>
                <dt>
                  <div className='flex absolute justify-center items-center w-12 h-12 text-white bg-indigo-500 rounded-md'>
                    <DocumentTextIcon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <p
                    className='ml-16 text-lg font-medium leading-6 text-gray-900'
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></p>
                </dt>
                <dd
                  className='mt-2 ml-16 text-base text-gray-500'
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></dd>
              </div>
            </a>
          </Link>
        ))}
      </dl>
    </div>
  );
};

export default Body;
