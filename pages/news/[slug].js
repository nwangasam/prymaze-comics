import { useState } from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';

import Header from '../../components/header';
import Footer from '../../components/footer';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const NewsDetails = ({ news, createdAt, updatedAt }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header link={'/news'} open={open} setOpen={setOpen} />
      <div className='newsDetails'>
        <div className='container'>
          <h1 className='newsDetails__title'>{news.title}</h1>
          <div className='newsDetails__meta'>
            <span className='newsDetails__author'>
              <b>By</b> {news.writer}
            </span>
            <span className='newsDetails__published'>
              {new Date(createdAt).toDateString()}
            </span>
            <span className='newsDetails__updated'>
              <b>Updated</b> {new Date(updatedAt).toDateString()}
            </span>
          </div>
          <div className='newsDetails__image'>
            <img src={news.image.fields.file.url} alt={news.title} />
          </div>
          <p className='newsDetails__content'>{news.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const fetchEntries = async () => {
    const entries = await client.getEntries({
      content_type: 'post',
      'fields.slug': params.slug,
    });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let news = await fetchEntries();
  console.log(news[0].sys);
  return {
    props: {
      news: news[0].fields,
      createdAt: news[0].sys.createdAt,
      updatedAt: news[0].sys.updatedAt,
    },
  };
}

export async function getStaticPaths() {
  const fetchEntries = async () => {
    const entries = await client.getEntries({ content_type: 'post' });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let posts;
  try {
    posts = await fetchEntries();
  } catch (err) {
    console.log(err, 'FROM [SLUG].JS GETSTATICPATHS...');
  }
  posts = posts.map((post) => {
    return {
      params: { slug: post.fields.slug ? post.fields.slug : '' },
    };
  });
  return {
    paths: [...posts],
    fallback: false,
  };
}

export default NewsDetails;
