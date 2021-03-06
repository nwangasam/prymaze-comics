import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/homepage/banner';
import RecentNews from '../components/homepage/recentNews';
import RecentComics from '../components/homepage/recentComics';
import ComicGenres from '../components/homepage/comicGenres';

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const HomePage = ({ comics, posts, error }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Prymaze - World of Sports and Comics content.</title>
        <link rel='shortcut icon' href='/icons/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Header open={open} setOpen={setOpen} link='/' />
      {!error ? (
        <>
          <Banner />
          <RecentNews posts={posts} />
          <RecentComics comics={comics} />
          <ComicGenres />
        </>
      ) : (
        <h1>Please Check your internet connection</h1>
      )}
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
    return {
      props: { comics, posts },
      revalidate: 1,
    };
  } catch (err) {
    console.error(err);
    return {
      props: { error: err },
    };
  }
}

export default HomePage;
