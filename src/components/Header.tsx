import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const links = [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' },
  ];

  const _renderLinks = () =>
    links.map((link, key) => (
      <Link href={link.route} key={key}>
        <a
          className={`nav-list ${
            router.pathname === link.route ? 'active' : ''
          }`}
        >
          {link.title}
        </a>
      </Link>
    ));

  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-2 lg:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:bg-white focus:outline-none focus:bg-white transition duration-150 ease-in-out'>
              <svg className='feather-icon h-6 w-6'>
                <use xlinkHref='images/svg/feather-sprite.svg#menu'></use>
              </svg>
            </button>
          </div>
          <div className='h-full flex-1 flex items-center justify-center lg:items-stretch lg:justify-start'>
            <div className='flex items-center'>
              <img
                className='block h-8 w-auto'
                src='assets/images/logo.png'
                alt=''
              />
            </div>
            <div className='hidden lg:block lg:ml-6'>
              <div className='flex h-full'>{_renderLinks()}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
