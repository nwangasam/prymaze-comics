import Link from 'next/link';
import LazyImage from '../LazyImage';

const genresTypes = [
  {
    id: 'action',
    label: 'Action',
    image: '/images/action.jpeg',
  },
  {
    id: 'supernatural',
    label: 'Supernatural',
    image: '/images/supernatural.jpeg',
  },
  {
    id: 'superhero',
    label: 'Superhero',
    image: '/images/superhero.jpeg',
  },
  {
    id: 'crime',
    label: 'Crime',
    image: '/images/crime.jpeg',
  },
];

export default function ComicGenres() {
  return (
    <div className='genres'>
      <div className='container gray-bg'>
        <section className='genre-shoveler'>
          <h2 className='section-title'>COMICS BY GENRES</h2>
          <div className='genre-shoveler__grid'>
            {genresTypes.map((genre) => (
              <Link href='/' key={genre.id}>
                <div className='genre'>
                  <div className='genre__image'>
                    <LazyImage
                      src={genre.image}
                      alt={`${genre.label} comics cover`}
                    />
                  </div>
                  <div className='genre__content'>
                    <h4 className='genre__name'>{genre.label}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
