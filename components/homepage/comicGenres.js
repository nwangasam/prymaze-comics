import Link from 'next/link';

const genresTypes = [
  {
    id: ''
  }
]

export default function ComicGenres() {
  return (
    <div className='genres'>
      <div className='container gray-bg'>
        <section className='genre-shoveler'>
          <h2 className='section-title'>COMICS BY GENRES</h2>
          <div className='genre-shoveler__grid'>
            {[...Array(5)].map((_, i) => (
              <Link href='/' key={i}>
                <div className='genre'>
                  <div className='genre__image'>
                    <img src='' alt='' />
                  </div>
                  <h4 className='genre__name'>Superhero</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
