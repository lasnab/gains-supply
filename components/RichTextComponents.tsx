import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          className="object-contain"
          src={urlFor(value).url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-20 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="pb-2">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-2 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-2 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-2 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-2 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-black border-l-4 pl-5 py-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    internalLink: ({ children, value }: any) => {
      const { slug = {}, contentType } = value;
      const href =
        contentType === 'post'
          ? `/post/${slug.current}`
          : contentType === 'resource'
          ? `/resource/${slug.current}`
          : '/';
      return (
        <ClientSideRoute
          route={href}
          className="underline decoration-green hover:decoration-black"
        >
          {children}
        </ClientSideRoute>
      );
    },

    link: ({ children, value }: any) => {
      const { blank, href } = value;
      return !!blank ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener"
          className="underline decoration-green hover:decoration-black"
        >
          {children}
        </Link>
      ) : (
        <Link
          href={href}
          className="underline decoration-green hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
