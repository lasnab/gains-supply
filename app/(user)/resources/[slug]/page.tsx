import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { getFormattedDate } from '@/utils';
import Link from 'next/link';

type Props = { params: { slug: string } };

export const revalidate = 3600;
export async function generateStaticParams() {
  const query = groq`
    *[_type=='resource'] 
    {
        slug
    }`;

  const slugs: Resource[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({ slug: slug }));
}

async function Resource({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='resource' && slug.current == $slug][0] 
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
    }
  }`;

  const resource: Resource = await client.fetch(query, { slug });

  const formattedDate = getFormattedDate(resource._createdAt);

  return (
    <article className="px-4 my-14 flex flex-col justify-start items-center">
      <div className="text-secondary text-xl font-semibold m-0 uppercase pt-[30px] text-center">
        {resource.title}
      </div>
      <div className="text-secondary capitalize text-center mt-[30px]">
        <p className="font-extralight text-center">{formattedDate}</p>
      </div>
      <div className="text-neutral m-[30px] text-lg px-4 lg:px-36">
        <PortableText value={resource.body} components={RichTextComponents} />
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
      <Link
        href="/"
        className="border rounded-md border-accent text-accent text-sm p-2 mx-2 mt-8"
      >
        Back To Home
      </Link>
    </article>
  );
}

export default Resource;
