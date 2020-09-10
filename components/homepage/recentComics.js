export default function RecentComics() {
  return (
    <section className='recent-comics'>
      <div className='container gray-bg'>
        <h2 className='section-title'>NEW COMIC RELEASES</h2>
        <div className='comics'>
          {[...Array(6)].map((_, i) => (
            <div className='comic' key={i}>
              <div className='comic__image'>
                <img src='/images/comic-1.jpg' alt='comic cover photo' />
              </div>
              <h3 className='comic__title'>Batman: The Dark Knight Returns Frank Miller</h3>
              <p className='comic__meta'>
                <span className='comic__author'>DC Comics</span>&nbsp;&mdash;&nbsp;<span className='comic__published-year'>2020</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
