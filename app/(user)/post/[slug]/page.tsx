import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { getFormattedDate } from '@/utils';
import Link from 'next/link';

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
    body[]{
        ...,
        markDefs[]{
            ...,
            _type == "internalLink" => {
                "contentType": @.reference->_type,
                "slug": @.reference->slug
            }
        }
    },
    author->,
    categories[]->
  }`;

  const post: Post = await client.fetch(query, { slug });

  const imageAltTags = post.imageAltText;
  const formattedDate = getFormattedDate(post._createdAt);

  return (
    <article className="px-4 my-14 flex flex-col justify-start items-center">
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
      <div
        id="cta"
        className=" text-neutral text-xl p-2 md:px-24 text-center mx-2 my-4 uppercase"
      >
        If you liked reading this post, please share it with your fellow gym
        bros, and friends who you would like to see in the gym! Follow us on
        Instagram
        <Link
          href="https://www.instagram.com/gainssupply.mag/"
          className="text-accent"
        >
          {' '}
          @gainssupply.mag
        </Link>
        , to stay updated with the latest content!
      </div>
      <div
        id="disclaimer"
        className="border rounded-md border-secondary text-secondary text-sm p-2 mx-2 mt-8"
      >
        <p>
          All information posted on this website is for the purpose of sharing
          personal experiences and thoughts only. Do not take any of this as
          advice. Anything tried, would be at your own risk. The author and the
          website will not accept any responsibility for any liability/harm
          caused.
        </p>
      </div>
    </article>
  );
}

export default Post;
