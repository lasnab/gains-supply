import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';
import CategoryHeader from '../../components/CategoryHeader';

const categoriesQuery = groq`
  *[_type=='category'] {
    title,
    _createdAt
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
  // if (previewData()) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <div role={'status'}>
  //           <p>Loading Preview Data...</p>
  //         </div>
  //       }
  //     >
  //       <PreviewBlogList query={query} />
  //     </PreviewSuspense>
  //   );
  // }

  const categories = await client.fetch(categoriesQuery);
  const posts = await client.fetch(postsQuery);
  console.log(posts);
  return (
    <div className="mt-12 bg-black">
      <CategoryHeader categories={categories} />
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
