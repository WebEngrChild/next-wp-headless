import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className='flex flex-wrap justify-between items-center p-6 bg-indigo-500'>
        <div className='flex shrink-0 items-center mr-6 text-white'>
          <span className='text-xl font-semibold tracking-tight'>サンプルブログ</span>
        </div>
        <div className='block grow w-full lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:grow'>
            <Link href='/' passHref>
              <a href=''>
                <div className='block mt-4 mr-4 text-indigo-200 hover:text-white lg:inline-block lg:mt-0'>
                  記事一覧
                </div>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav
