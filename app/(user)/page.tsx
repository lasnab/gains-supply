import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '../../components/PreviewBlogList';
import CategoryHeader from '../../components/CategoryHeader';
import PostCard from '../../components/PostCard';

const categoriesQuery = groq`
  *[_type=='category'] {
    title,
    _id
  } | order(title desc)
`;
const postsQuery = groq`
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
        <PreviewBlogList query={postsQuery} />
      </PreviewSuspense>
    );
  }

  const categories = await client.fetch(categoriesQuery);
  const posts = await client.fetch(postsQuery);
  return (
    <div className="mt-12 bg-black">
      <CategoryHeader categories={categories} />
      <div className="grid md:grid-cols-3 grid-cols-1 pt-2">
        {posts.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
