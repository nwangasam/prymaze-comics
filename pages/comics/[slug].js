import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import Header from '../../components/header';

const Comic = ({ slug }) => {
  slug = slug.replace(/-/g, ' ');
  return (
    <>
      <Head>
        <title>{slug}</title>
        <link rel='shortcut icon' href='/assets/comic-2.jpg' />
      </Head>
      <Header />
      <main>
        <div className='container'>
          <div className='comic-detail flex flex-wrap'>
            <div className='comic-detail-image'>
              <img
                src='/assets/comic-sample-2.jpg'
                alt='comic pages'
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
              <h3 style={{ fontSize: '1.6rem' }} className='comic-detail-title'>{slug}</h3>

              <p className='comic-detail-genres'>
                <strong>Genres:</strong> Action, Adventure, Spperhero
              </p>
              <p className='comic-detail-published'>
                <strong>Published:</strong> Andrei Layman
              </p>
              <p className='comic-detail-writer'>
                <strong>Writer:</strong> Sammy Jane
              </p>
              <p className='comic-detail-published-date'>
                <strong>Published date:</strong> 12th Nov., 2020
              </p>
              <p className='comic-detail-summary'>
                It’s an interdimensional tour for Gwen Stacy and the Mary Janes
                – but just as things start going right for Gwen outside of the
                webs, something unsettling is happening to her suit. Something
                GWENOMous...
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export async function getStaticProps({ params }) {
  let slug = params.slug;
  return {
    props: { slug },
  };
}

export async function getStaticPaths() {
  return {
    paths: [...Array(6)].map((_, i) =>
      `/comics/Star Wars: Darth Vader (2020) ${++i}`.replace(/[\s:]+/g, '-')
    ),
    fallback: false,
  };
}

export default Comic;
