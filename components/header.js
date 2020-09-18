import Link from 'next/link';
import MobileNav from '../components/mobileNav';

export default function Header({ open, setOpen, link }) {
  return (
    <>
      {open && <MobileNav open={open} setOpen={setOpen} link={link} />}
      <header className='header'>
        <div className='container'>
          <div className='header__inner'>
            <Link href='/'>
              <a className='Logo'>
                <img src='/icons/Logo.svg' alt='Logo' />
              </a>
            </Link>
            <div className='header__nav'>
              <Link href='/'>
                <a className={`header__links ${link === '/' ? 'active' : ''}`}>
                  Home
                </a>
              </Link>
              <Link href='/news'>
                <a
                  className={`header__links ${
                    link === '/news' ? 'active' : ''
                  }`}
                >
                  Sports
                </a>
              </Link>
              <Link href='/comics'>
                <a
                  className={`header__links ${
                    link === '/comics' ? 'active' : ''
                  }`}
                >
                  Comics
                </a>
              </Link>
            </div>
            {/* <div className='header__actions'>
              <Link href='/'>
                <a className='header__links'>Sign in</a>
              </Link>
              <Link href='/'>
                <a className='header__links filled'>Sign up</a>
              </Link>
            </div> */}
            <div className='hamburger-menu' onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='52px'
                  height='52px'
                >
                  <path d='M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                  width='54px'
                  height='54px'
                >
                  <path
                    fill='transparent'
                    d='M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z'
                  />
                  <path
                    fill='#ffffff'
                    d='M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z'
                  />
                  <path
                    fill='#ffffff'
                    d='M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z'
                  />
                  <g>
                    <path
                      fill='#ffffff'
                      d='M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z'
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}
