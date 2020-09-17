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

function truncate(input, limit = 45) {
  if (typeof input !== 'string' || input.length <= limit) return input;
  const str2Arr = input.split(' ');

  let truncatedWordArr = [];

  str2Arr.reduce((total, curr) => {
    if (total + curr.length < limit) {
      truncatedWordArr.push(curr);
      return total + curr.length;
    }
  }, 0);
  return `${truncatedWordArr.join(' ')}...`;
}

const News = ({ posts }) => {
  const [open, setOpen] = useState(false);
  const parsedPosts = posts.map((postFields) => {
    return {
      id: postFields.sys.id,
      image: postFields.fields.image.fields.file.url,
      writer: postFields.fields.writer,
      title: postFields.fields.title,
      published: new Date(postFields.sys.createdAt).toDateString(),
      slug: postFields.fields.slug ? postFields.fields.slug : '',
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
              <Link href={`/news/${post.slug}`} key={post.id}>
                <a className='news'>
                  <div className='news__image'>
                    <LazyImage src={post.image} alt={post.title} />
                  </div>
                  <h3 className='news__title'>{truncate(post.title)}</h3>
                  <div className='news__date'>{post.slug}</div>
                  <div className='news__date'>{post.published}</div>
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
    const entries = await client.getEntries({ content_type: 'post' });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let posts;
  try {
    posts = await fetchEntries();
  } catch (err) {
    console.error(err);
  }
  return {
    props: { posts },
    revalidate: 1,
  };
}

export default News;
