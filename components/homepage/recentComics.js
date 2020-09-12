const RecentComics = ({ comics }) => {
  const parsedComics = comics.map((postField) => ({
    id: postField.sys.id,
    cover: postField.fields.cover.fields.file.url,
    publisher: postField.fields.publisher,
    summary: postField.fields.summary,
    title: postField.fields.title,
    writer: postField.fields.writer,
  }))

  return (
    <section className='recent-comics'>
      <div className='container gray-bg'>
        <h2 className='section-title'>NEW COMIC RELEASES</h2>
        <div className='comics'>
          {parsedComics.map((comic) => (
            <div className='comic' key={comic.id}>
              <div className='comic__image'>
                <img
                  src={`https:${comic.cover}`}
                  alt={comic.title}
                />
              </div>
              <h3 className='comic__title'>{comic.title}</h3>
              <p className='comic__meta'>
                <span className='comic__author'>{comic.publisher}</span>,{' '}
                <span className='comic__published-year'>
                  {comic.writer}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentComics;