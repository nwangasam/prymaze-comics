import Head from 'next/head';
import { useState } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const News = ({ posts }) => {
  const [open, setOpen] = useState(false);
  const parsedPosts = posts.map((postFields) => {
    return {
      id: postFields.sys.id,
      image: postFields.fields.image.fields.file.url,
      writer: postFields.fields.writer,
      title: postFields.fields.title,
      published: new Date(postFields.sys.createdAt).toDateString(),
    };
  });
  return (
    <>
      <Head>
        <title>
          Prymaze News - Stay updated with our current news in sports.
        </title>
        <link rel='shortcut icon' href='/icons/favicon.png' />
      </Head>
      <Header open={open} setOpen={setOpen} link='/news' />
      <div className='pz-pg news-pg'>
        <div className='container'>
          <h2 className='pz-pg-title'>All News</h2>
          <div className='responsive-grid'>
            {parsedPosts.map((post) => (
              <div className='news' key={post.id}>
                <div className='news__image'>
                  <img src={post.image} alt={post.title} />
                </div>
                <h3 className='news__title'>{post.title}</h3>
                <div className='news__date'>{post.published}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const fetchEntries = async (content_type) => {
    const entries = await client.getEntries({ content_type });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let posts;
  try {
    posts = await fetchEntries('post');
  } catch (err) {
      posts = null;
    console.error(err);
  }
  return {
    props: { posts },
  };
}

export default News;
