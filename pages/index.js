import Head from 'next/head';
import Link from 'next/link';
import ultilStyles from '../styles/ultil.module.css';

// Components
import Header from '../components/header';

const Home = ({ comics }) => {
  return (
    <>
      <Head>
        <title>Prymaze Comics</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>
        <section className={`latest`}>
          <div className='container'>
            <div className={`flex spaceBetween align ${ultilStyles['mb-1']}`}>
              <h3 className='heading-1'>LATEST</h3>
              {/* <hr style={{ border: '1.5px solid #707070', width: '100px' }} /> */}
            </div>
            <div className='comics'>
              {comics.map((comic, i) => (
                <div className='comic' key={comic.id}>
                  <Link href='/comics/[slug]' as={comic.link}>
                    <a>
                      <div className='comic-image'>
                        <img src={comic.image} alt='comic image' />
                      </div>
                      <div className='comic-content'>
                        <h5 className='comic-title'>{comic.title}</h5>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      comics: [...Array(9)].map((_, i) => ({
        id: Math.random(),
        link: `/comics/Immortal Hulk: Great Power ${++i}`.replace(/[\s:]+/g, '-'),
        title: `Immortal Hulk: Great Power #${i}`,
        image: '/assets/comic-2.jpg',
      })),
    },
  };
}

export default Home;
