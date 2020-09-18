import Link from 'next/link';
import Carousel, { consts } from 'react-elastic-carousel';
import LazyImage from '../LazyImage';

import { useRouter } from 'next/router';

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
              fill='currentColor'
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

let breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 320, itemsToShow: 2, itemsToScroll: 2 },
  { width: 640, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1024, itemsToShow: 5 },
];

function truncate(input, limit = 45) {
  if (typeof input !== 'string' || input.length <= limit) return input;
  const str2Arr = input.split(' ');

  let truncatedWordArr = [];

  str2Arr.reduce((total, curr) => {
    if (total + curr.length < limit) {
      truncatedWordArr.push(curr);
      return total + curr.length;
    }
  }, 0);
  return `${truncatedWordArr.join(' ')}...`;
}

const RecentComics = ({ comics }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2 className='section-title'>Loading site...</h2>;
  }

  const parsedComics = comics.map((postField) => ({
    id: postField.sys.id,
    cover: postField.fields.cover.fields.file.url,
    publisher: postField.fields.publisher,
    summary: postField.fields.summary,
    title: postField.fields.title,
    writer: postField.fields.writer,
    slug: postField.fields.slug ? postField.fields.slug : ''
  }));

  return (
    <section className='recent-comics'>
      <div className='container gray-bg'>
        <div className='flex-row mb-2'>
          <h2 className='section-title'>New Comic Releases</h2>
          <Link href='/comics'>
            <a className='see-all'>See all</a>
          </Link>
        </div>
        <div className='comics'>
          <Carousel
            itemsToShow={4}
            itemPadding={[16, 6]}
            itemsToScroll={3}
            focusOnSelect={false}
            breakPoints={breakPoints}
            renderArrow={renderCarouselArrows}
            renderPagination={renderCarouselPagination}
          >
            {parsedComics.map((comic) => (
                <Link href={`/comics/${comic.slug}`} key={comic.id}>
                  <a className='comic'>
                    <div className='comic__image'>
                      <LazyImage
                        src={`https:${comic.cover}`}
                        alt={comic.title}
                      />
                    </div>
                    <h3 className='comic__title'>{truncate(comic.title)}</h3>
                    <p className='comic__meta'>
                      <span className='comic__author'>{comic.publisher}</span>,{' '}
                      <span className='comic__published-year'>
                        {comic.writer}
                      </span>
                    </p>
                  </a>
                </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecentComics;
