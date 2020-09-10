import Link from 'next/link';

export default function ComicGenres() {
  return (
    <section className='comic-genres'>
      <div className='container gray-bg'>
        <h2 className='section-title'>COMICS BY GENRES</h2>
        <div className='genres'>
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
      </div>
    </section>
  );
}
