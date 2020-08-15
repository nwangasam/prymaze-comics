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
        <div className='banner'>
          <div className='banner-bg'></div>
          <div className='container'>
            <div className='banner-inner'>
              <div className='banner-content'>
                <h1>
                  Dive in to the world of unlimited original comics and content
                </h1>
                <div className='banner-btns'>
                  <button className='signup'>Sign up</button>
                  <button className='signin'>Sigin in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={`latest`}>
          <div className='container'>
            <div className={`flex spaceBetween align ${ultilStyles['mb-1']}`}>
              <h3 className='heading-1'>LATEST COMICS</h3>
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
                        <p className='comic-publisher'>{comic.publisher}</p>
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
      comics: [...Array(6)].map((_, i) => ({
        id: Math.random(),
        link: `/comics/Star Wars: Darth Vader (2020) ${++i}`.replace(
          /[\s:]+/g,
          '-'
        ),
        title: `Star Wars: Darth Vader (2020) #${i}`,
        image: '/assets/comic-sample-2.jpg',
        publisher: 'Andrei'
      })),
    },
  };
}

export default Home;
