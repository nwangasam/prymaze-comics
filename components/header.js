import Link from 'next/link';

const Header = () => (
  <header>
    <div className='container'>
      <div className='flex spaceBetween' style={{ padding: '.8rem 0' }}>
        <div
          style={{
            width: '148px',
            overflow: 'hidden',
            height: '40px',
            marginRight: '2rem',
          }}
        >
          <Link href='/'>
            <a>
              <img
                src='/assets/logo-white.png'
                alt='Prymaze logo'
                style={{
                  width: '100%',
                  position: 'relative',
                  bottom: '1.2rem',
                }}
              />
            </a>
          </Link>
        </div>
        {/* <img
              src='/assets/Search.svg'
              alt='Search icon'
              style={{ margin: '0 2rem 0 auto', transform: 'scale(.85)' }}
            /> */}
        <div className='search' style={{ color: '#fff' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 23 23.615'
          >
            <g id='Search' opacity='.3'>
              <path
                id='Search-Path'
                d='M21.746,23.615a1.249,1.249,0,0,1-.9-.382l-5.713-5.89A9.629,9.629,0,0,1,0,9.535a9.619,9.619,0,0,1,19.237,0,9.482,9.482,0,0,1-2.256,6.129l5.67,5.845a1.237,1.237,0,0,1-.035,1.759A1.251,1.251,0,0,1,21.746,23.615ZM9.618,2.488a7.047,7.047,0,1,0,7.109,7.047A7.086,7.086,0,0,0,9.618,2.488Z'
                transform='translate(0 0)'
                fill='currentColor'
              />
            </g>
          </svg>
          <input
            style={{ color: '#f9f9f9' }}
            type='text'
            placeholder='Search comics'
            className='search-input'
          />
        </div>
        <div
          className='user-profile'
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            letterSpacing: '1px',
            fontSize: '.85rem',
          }}
        >
          <Link href='/signin'>
            <a className='user-profile-link'>SIGN IN</a>
          </Link>
          <span
            style={{
              display: 'inline-block',
              margin: '0 1.2rem',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            |
          </span>
          <Link href='/login'>
            <a className='user-profile-link'>JOIN</a>
          </Link>
        </div>
        {/* <img src='/assets/hamburger.svg' alt='Hamburger icon' /> */}
      </div>
    </div>
    <div
      className='flex align spaceBetween'
      style={{ borderTop: '1px solid rgba(225, 225, 225, .1)' }}
    >
      <span className='hamburger menu-icon flex align center'>
        <img src='/assets/hamburger.svg' alt='Hamburger icon' />
      </span>
      <span className='search-icon menu-icon flex align center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          viewBox='0 0 23 23.615'
        >
          <g id='Search'>
            <path
              id='Search-Path'
              d='M21.746,23.615a1.249,1.249,0,0,1-.9-.382l-5.713-5.89A9.629,9.629,0,0,1,0,9.535a9.619,9.619,0,0,1,19.237,0,9.482,9.482,0,0,1-2.256,6.129l5.67,5.845a1.237,1.237,0,0,1-.035,1.759A1.251,1.251,0,0,1,21.746,23.615ZM9.618,2.488a7.047,7.047,0,1,0,7.109,7.047A7.086,7.086,0,0,0,9.618,2.488Z'
              transform='translate(0 0)'
              fill='#ffffff'
            />
          </g>
        </svg>
      </span>
    </div>
  </header>
);

export default Header;
