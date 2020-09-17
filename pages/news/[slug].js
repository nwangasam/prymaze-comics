import { createClient } from 'contentful';
import Head from 'next/head';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const NewsDetails = ({ news }) => {
  return (
    <>
      <h1 style={{ fontSize: '4rem', color: '#fff' }}>{news.title}</h1>
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
  return {
    props: {
      news: news[0].fields,
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
