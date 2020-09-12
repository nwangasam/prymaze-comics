import Link from 'next/link';
import Carousel, { consts } from 'react-elastic-carousel';

function renderCarouselArrows({ type, onClick, isEdge }) {
  let direction = type !== consts.PREV ? 'right' : '';
  return (
    <span
      className={`arrow lg ${direction} ${isEdge ? '' : 'active'}`}
      onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 98 98'>
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
  );
}

function renderCarouselPagination() {
  return <div />;
}

export default function RecentNews() {
  let breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 2, itemsToScroll: 2 },
    { width: 640, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1024, itemsToShow: 5 },
  ];
  return (
    <section className='recent-news'>
      <div className='container'>
        <div className='flex-row'>
          <h2 className='section-title'>Recent sports news</h2>
          <Link href='/'>
            <a className='see-all'>See all</a>
          </Link>
        </div>
      </div>

      <Carousel
        itemsToShow={4}
        itemPadding={[16, 6]}
        itemsToScroll={3}
        focusOnSelect={false}
        breakPoints={breakPoints}
        renderArrow={renderCarouselArrows}
        renderPagination={renderCarouselPagination}
      >
        {[...Array(15)].map((_, i) => (
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
      </Carousel>
    </section>
  );
}
