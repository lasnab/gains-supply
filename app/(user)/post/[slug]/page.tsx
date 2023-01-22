import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { getFormattedDate, getImageAltTags } from '@/utils';
import category from '@/schemas/category';

type Props = { params: { slug: string } };

export const revalidate = 60; // Revalidate this page every 60 seconds
export async function generateStaticParams() {
  const query = groq`
    *[_type=='post'] 
    {
        slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({ slug: slug }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] 
  {
    ...,
    author->,
    categories[]->
  }`;

  const post: Post = await client.fetch(query, { slug });

  const imageAltTags = getImageAltTags(post);
  const formattedDate = getFormattedDate(post._createdAt);

  return (
    <article className="px-4 mt-14 flex flex-col justify-start items-center">
      <div className="flex justify-center items-center py-4">
        {post.categories.map((category) => (
          <div
            key={category._id}
            className="border rounded-md border-secondary text-secondary text-sm p-2 mx-2"
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="relative w-full h-96 md:h-[450px] cursor-pointer">
        <Image
          className="object-contain object-center"
          src={urlFor(post.mainImage).url()}
          alt={imageAltTags}
          fill
        />
      </div>
      <div className="text-secondary text-xl font-semibold m-0 uppercase pt-[30px] text-center">
        {post.title}
      </div>
      <div className="text-neutral m-0 text-large pt-[30px] text-center ">
        {post.description}
      </div>
      <div className="text-secondary capitalize text-center mt-[30px]">
        <p className="font-semibold text-center">{`By ${post.author.name}`}</p>
        <p className="font-extralight text-center">{formattedDate}</p>
      </div>
      <div className="text-neutral m-[30px] text-lg px-4 lg:px-36">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

export default Post;
