import Link from 'next/link';

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner-bg' />
      <div className='banner__inner'>
        <div className='banner__half'>
          <div className='banner__content'>
            <h1>
              World of Sports and comics - A cut above the rest
            </h1>
            <Link href='/'>
              <a className='banner__cta'>
                Explore
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 80 80'
                  >
                    <g transform='translate(-434 -748)'>
                      <g
                        transform='translate(434 748)'
                        fill='none'
                        stroke='#5578ab'
                        strokeWidth='4'
                      >
                        <circle cx='40' cy='40' r='40' stroke='none' />
                        <circle cx='40' cy='40' r='38' fill='none' />
                      </g>
                      <g transform='translate(-106.625 -37.199)'>
                        <path
                          d='M243.36,766l16.2,16.2-16.2,16.2'
                          transform='translate(338.596 43.5)'
                          fill='none'
                          stroke='#5578ab'
                          strokeWidth='3'
                        />
                        <path
                          d='M602.151,806c-3.814.088-34.1,0-34.1,0'
                          transform='translate(-4 19.699)'
                          fill='none'
                          stroke='#5578ab'
                          strokeWidth='3'
                        />
                      </g>
                    </g>
                  </svg>  
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
