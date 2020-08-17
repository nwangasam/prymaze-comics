import Head from 'next/head';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
// Components
import Header from '../../../components/header';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Comic = ({ comic }) => {
  return (
    <>
      <Head>
        <title>{comic.title}</title>
        <link rel='shortcut icon' href={comic.cover.fields.file.url} />
      </Head>
      <Header />
      
      <main>
        <div className='container'>
          <div className='comic-detail flex flex-wrap'>
            <h3 className='comic-detail-title mobile-only'>{comic.title}</h3>
            <div className='comic-detail-image'>
              <img
                src={comic.cover.fields.file.url}
                alt={comic.title}
                title={comic.title}
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
                <strong>Published date:</strong>{' '}
                {new Date(comic.date).toDateString()}
              </p>
              <p className='comic-detail-summary'>
                <strong>Summary:</strong>
                <br />
                {comic.summary}
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
  const comic = await client.getEntry(params.id);
  return {
    props: {
      comic: comic.fields,
    },
  };
}

export async function getStaticPaths() {
  const entries = await client.getEntries();

  const paths = entries.items.map((entry) => ({
    params: {
      title: entry.fields.title.replace(/[#()\s:-]+/gi, '-'),
      id: entry.sys.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Comic;
