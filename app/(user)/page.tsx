import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={'status'}>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div>
      <h1 className="text-4xl blue">Welcome to Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
