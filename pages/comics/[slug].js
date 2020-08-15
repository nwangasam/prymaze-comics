import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import Header from '../../components/header';

const Comic = ({ comic }) => {
  return (
    <>
      <Head>
        <title>{comic.title}</title>
        <link rel='shortcut icon' href='/assets/comic-2.jpg' />
      </Head>
      <Header />
      <main>
        <div className='container'>
          <div className='comic-detail flex flex-wrap'>
            <h3 className='comic-detail-title mobile-only'>{comic.title}</h3>
            <div className='comic-detail-image'>
              <img
                src={comic.imageUrl}
                alt='Comic cover image'
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
            <div
              className='comic-detail-content'
              style={{ flex: '1', alignSelf: 'stretch' }}
            >
              <h3 className='comic-detail-title desktop-only'>{comic.title}</h3>

              <p className='comic-detail-genres'>
                <strong>Genres:</strong> {comic.genres}
              </p>
              <p className='comic-detail-published'>
                <strong>Publisher:</strong> {comic.publisher}
              </p>
              <p className='comic-detail-writer'>
                <strong>Writer:</strong> {comic.writer}
              </p>
              <p className='comic-detail-published-date'>
                <strong>Published date:</strong> {comic['published-date']}
              </p>
              <p className='comic-detail-summary'>
                <strong>Summary:</strong>
                <br />{comic.summary}
              </p>
              <div className='banner-btns' style={{ margin: '2rem 0' }}>
                <button
                  className='signup'
                  style={{
                    border: '1px solid #eb2328',
                    color: '#eb2328',
                    fontSize: '.85em',
                    fontWeight: '600',
                    letterSpacing: '1.4px',
                  }}
                >
                  READ COMIC
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export async function getStaticProps({ params }) {
  const req = await fetch(
    'https://prymaze-comics.firebaseio.com/comics/comicId.json'
  );
  const data = await req.json();
  return {
    props: {
      comic: data,
    },
  };
}

export async function getStaticPaths() {
  const req = await fetch(
    'https://prymaze-comics.firebaseio.com/comics/comicId.json'
  );
  const { title } = await req.json();
  return {
    paths: [...Array(6)].map((_, i) =>
      `/comics/${title} ${++i}`.replace(/[\s():]+/g, '-')
    ),
    fallback: false,
  };
}

export default Comic;
