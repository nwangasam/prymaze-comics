import Link from 'next/link';
import Carousel, { consts } from 'react-elastic-carousel';
import { useRouter } from 'next/router';

import LazyImage from '../LazyImage';

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

function truncate(input, limit = 52) {
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

let breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 520, itemsToShow: 2, itemsToScroll: 2 },
  { width: 720, itemsToShow: 3, itemsToScroll: 3 },
  { width: 840, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1240, itemsToShow: 5 },
];

export default function RecentNews({ posts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2 className='section-title'>Loading site...</h2>;
  }

  const parsedPosts = posts.map((postFields) => {
    return {
      id: postFields.sys.id,
      image: postFields.fields.image.fields.file.url,
      writer: postFields.fields.writer,
      title: postFields.fields.title,
      slug: postFields.fields.slug ? postFields.fields.slug : '',
      published: new Date(postFields.sys.createdAt).toDateString(),
    };
  });

  return (
    <section className='recent-news'>
      <div className='container gray-bg'>
        <div className='flex-row mb-2'>
          <h2 className='section-title'>Recent sports news</h2>
        </div>

        <Carousel
          itemsToShow={4}
          itemPadding={[0, 12, 0, 0]}
          itemsToScroll={3}
          focusOnSelect={false}
          breakPoints={breakPoints}
          renderArrow={renderCarouselArrows}
          renderPagination={renderCarouselPagination}
        >
          {parsedPosts.map((post, i) => (
            <Link href={`/news/${post.slug}`} key={post.id}>
              <a className='news'>
                <div className='news__image'>
                  {/* <img src={post.image} alt={post.title} /> */}
                  <LazyImage alt={post.title} src={post.image} />
                </div>
                <h3 className='news__title'>{truncate(post.title)}</h3>
                <div className='news__date'>{post.published}</div>
              </a>
            </Link>
          ))}
        </Carousel>
         <Link href='/news'>
            <a className='see-all'>See all</a>
          </Link>
      </div>
    </section>
  );
}
