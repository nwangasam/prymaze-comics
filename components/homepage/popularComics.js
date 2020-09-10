export default function PopularComics() {
  return (
    <section className='popular-comics'>
      <div className='container'>
        <h2 className='section-title'>MOST POPULAR COMICS</h2>
        <div className='comics'>
          {[...Array(12)].map((_, i) => (
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
