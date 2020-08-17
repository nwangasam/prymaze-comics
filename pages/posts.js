import { useEffect, useState } from 'react';
import Head from 'next/head';
import Post from '../components/post';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      const anEntry = await client.getEntry('13ZEdDvPP6x16lnRHwLhJ5');
      console.log(['An entry'], anEntry);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel='stylesheet'
          href='https://css.zeit.sh/v1.css'
          type='text/css'
        />
      </Head>
      {posts.length > 0 ? (
        posts.map((p) => (
          <Post
            alt={p.fields.alt}
            date={p.fields.date}
            key={p.fields.title}
            image={p.fields.image}
            title={p.fields.title}
            url={p.fields.url}
          />
        ))
      ) : (
        <p>No posts found!</p>
      )}
    </>
  );
}

export default HomePage;
