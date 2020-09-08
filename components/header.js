import Link from 'next/link';

export default function Header() {
  return (
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
              <a className='header__links active'>Home</a>
            </Link>
            <Link href='/'>
              <a className='header__links'>Sports</a>
            </Link>
            <Link href='/'>
              <a className='header__links'>Comics</a>
            </Link>
          </div>
          <div className='header__actions'>
              <Link href='/'>
                <a className='header__links'>Sign in</a>
              </Link>
              <Link href='/'>
                <a className='header__links filled'>Sign up</a>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
