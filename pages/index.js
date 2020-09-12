import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/homepage/banner';
import RecentNews from '../components/homepage/recentNews';
import RecentComics from '../components/homepage/recentComics';
// import PopularComics from '../components/homepage/popularComics';
import ComicGenres from '../components/homepage/comicGenres';

const HomePage = () => {
  return (
    <>
    <Head>
      <title>Prymaze - World of Sports and Comics content.</title>
      <link rel='shortcut icon' href='/icons/favicon.png' />
    </Head>
      <Header />
      <Banner />
      <RecentNews />
      <RecentComics />
      {/* <PopularComics /> */}
      <ComicGenres />
      <Footer />
    </>
  );
};

export default HomePage;
