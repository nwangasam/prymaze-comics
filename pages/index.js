import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/homepage/banner';
import RecentNews from '../components/homepage/recentNews';
import RecentComics from '../components/homepage/recentComics';
// import PopularComics from '../components/homepage/popularComics';
import ComicGenres from '../components/homepage/comicGenres';

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const HomePage = ({ comics, posts }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Prymaze - World of Sports and Comics content.</title>
        <link rel='shortcut icon' href='/icons/favicon.png' />
      </Head>
      <Header open={open} setOpen={setOpen} link='/' />
      <Banner />
      <RecentNews posts={posts} />
      <RecentComics comics={comics} />
      {/* <PopularComics /> */}
      <ComicGenres />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const fetchEntries = async (content_type) => {
    const entries = await client.getEntries({ content_type: content_type });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let comics;
  let posts;
  try {
    comics = await fetchEntries('comic');
    posts = await fetchEntries('post');
  } catch (err) {
    console.error(err);
  }
  return {
    props: { comics, posts },
  };
}

export default HomePage;
