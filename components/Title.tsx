import { FC } from 'react';

type Title = {
  text: string;
};

const Title: FC<Title> = ({ text }) => {
  return (
    <>
      <div className='lg:text-center'>
        <h2 className='text-base font-semibold tracking-wide text-indigo-600 uppercase'>
          Let&lsquo;s try it
        </h2>
        <p className='mt-2 text-3xl font-extrabold tracking-tight leading-8 text-gray-900 sm:text-4xl'>
          {text}
        </p>
      </div>
    </>
  );
};

export default Title;
