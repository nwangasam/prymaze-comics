import Head from 'next/head';
import Link from 'next/link';
import ultilStyles from '../styles/ultil.module.css';
import { createClient } from 'contentful';

// Components
import Header from '../components/header';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

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
                <div className='comic' key={comic.sys.id}>
                  <Link
                    href='/comics/[id]/[title]'
                    as={`/comics/${comic.sys.id}/${comic.fields.title.replace(
                      /[#()\s:-]+/gi,
                      '-'
                    )}`}
                  >
                    <a>
                      <div className='comic-image'>
                        <img
                          src={`https:${comic.fields.cover.fields.file.url}`}
                          alt={comic.title}
                          title={comic.title}
                        />
                      </div>
                      <div className='comic-content'>
                        <h5 className='comic-title'>{comic.fields.title}</h5>
                        <span className='comic-publisher'>
                          {comic.fields.publisher},{' '}
                        </span>
                        <span className='comic-publisher'>
                          {comic.fields.writer}
                        </span>
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
  const fetchEntries = async () => {
    const entries = await client.getEntries();
    console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  };
  const allComics = await fetchEntries();
  return {
    props: {
      comics: allComics,
    },
  };
}

export default Home;
