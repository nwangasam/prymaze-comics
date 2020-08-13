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
          <h3 style={{ fontSize: '2rem', margin: '2rem 0' }}>{slug}</h3>
          <img
            src='/assets/comic-2.jpg'
            alt='comic pages'
            style={{ display: 'block', width: '100%', marginBottom: '1.2rem' }}
          />
          <img
            src='/assets/comic-2.jpg'
            alt='comic pages'
            style={{ display: 'block', width: '100%', marginBottom: '1.2rem' }}
          />
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
      `/comics/Immortal Hulk: Great Power ${++i}`.replace(/[\s:]+/g, '-')
    ),
    fallback: false,
  };
}

export default Comic;
