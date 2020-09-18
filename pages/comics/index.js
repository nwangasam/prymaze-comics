import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import { createClient } from 'contentful';
import LazyImage from '../../components/LazyImage';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Comics = ({ comics }) => {
  const [open, setOpen] = useState(false);
  const parsedComics = comics.map((postField) => ({
    id: postField.sys.id,
    cover: postField.fields.cover.fields.file.url,
    publisher: postField.fields.publisher,
    summary: postField.fields.summary,
    title: postField.fields.title,
    writer: postField.fields.writer,
    slug: postField.fields.slug ? postField.fields.slug : '',
  }));

  return (
    <>
      <Head>
        <title>
          Prymaze Comics - Read interesting comics of various genres
        </title>
        <link rel='shortcut icon' href='/icons/favicon.png' />
      </Head>
      <Header open={open} setOpen={setOpen} link='/comics' />
      <div className='pz-pg'>
        <div className='container'>
          <h2 className='pz-pg-title'>All Comics</h2>
          <div className='responsive-grid'>
            {parsedComics.map((comic) => (
              <Link href={`/comics/${comic.slug}`}>
                <a className='comic' key={comic.id}>
                  <div className='comic__image'>
                    <LazyImage src={`https:${comic.cover}`} alt={comic.title} />
                  </div>
                  <h3 className='comic__title'>{comic.title}</h3>
                  <p className='comic__meta'>
                    <span className='comic__author'>{comic.publisher}</span>,{' '}
                    <span className='comic__published-year'>
                      {comic.writer}
                    </span>
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const fetchEntries = async () => {
    const entries = await client.getEntries({ content_type: 'comic' });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let comics;
  try {
    comics = await fetchEntries();
  } catch (err) {
    console.error(err);
  }
  return {
    props: { comics },
    revalidate: 1,
  };
}

export default Comics;
