import Link from 'next/link';
import Carousel from 'react-elastic-carousel';

export default function RecentNews() {
  return (
    <section className='recent-news'>
      <div className='container fluid with-arrows'>
        <span className='arrow lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 98 98'
          >
            <g transform='translate(-611 -964)'>
              <g transform='translate(611.001 964)'>
                <circle
                  cx='49'
                  cy='49'
                  r='49'
                  transform='translate(-0.001)'
                  fill='#3d3b3a'
                />
              </g>
              <path
                d='M10556.218,1123.359c0,2.515-13.413,25.988-13.413,25.988l13.413,25.15-36.048-25.15Z'
                transform='translate(-9878.17 -136.359)'
                fill='#f9ffff'
              />
            </g>
          </svg>
        </span>
        <div className='container'>
          <h2 className='section-title'>Recent sports news</h2>
          <div className='news-row'>
            <Link href='/'>
              <a className='see-all'>See all</a>
            </Link>
            <div className='news-carousel'>
              {[...Array(5)].map((_, i) => (
                <div className='news' key={i}>
                  <div className='news__image'>
                    {/* <img src='/images/comic-1.jpg' alt='News Cover Image' /> */}
                  </div>
                  <h3 className='news__title'>
                    Recent march between Bayern and Bercelona
                  </h3>
                  <div className='news__date'>August 19, 2020</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className='arrow right lg active'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 98 98'
          >
            <g transform='translate(-611 -964)'>
              <g transform='translate(611.001 964)'>
                <circle
                  cx='49'
                  cy='49'
                  r='49'
                  transform='translate(-0.001)'
                  fill='#3d3b3a'
                />
              </g>
              <path
                d='M10556.218,1123.359c0,2.515-13.413,25.988-13.413,25.988l13.413,25.15-36.048-25.15Z'
                transform='translate(-9878.17 -136.359)'
                fill='#f9ffff'
              />
            </g>
          </svg>
        </span>
      </div>
    </section>
  );
}
