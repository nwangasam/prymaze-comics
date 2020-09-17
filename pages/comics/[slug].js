import { createClient } from 'contentful';
// import Head from 'next/head';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const NewsDetails = ({ comic }) => {
  return (
    <>
      <h1 style={{ fontSize: '4rem', color: '#fff' }}>{comic.title}</h1>
    </>
  );
};

export async function getStaticProps({ params }) {
  const fetchEntries = async () => {
    const entries = await client.getEntries({
      content_type: 'comic',
      'fields.slug': params.slug,
    });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let comics = await fetchEntries();
  return {
    props: {
      comic: comics[0].fields,
    },
  };
}

export async function getStaticPaths() {
  const fetchEntries = async () => {
    const entries = await client.getEntries({ content_type: 'comic' });
    if (entries.items) return entries.items;
    throw new Error(`Error getting Entries for ${content_type}.`);
  };
  let comics;
  try {
    comics = await fetchEntries();
  } catch (err) {
    console.log(err, 'FROM [SLUG].JS GETSTATICPATHS...');
  }
  comics = comics.map((comic) => {
    return {
      params: { slug: comic.fields.slug ? comic.fields.slug : '' },
    };
  });
  return {
    paths: [...comics],
    fallback: false,
  };
}

export default NewsDetails;
