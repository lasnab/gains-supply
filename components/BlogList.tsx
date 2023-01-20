import urlFor from '../lib/urlFor';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-blue mb-10"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full">
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt)
                      .toLocaleDateString('en-us', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                      })
                      .replace(/\//g, '.')}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div
                      className="bg-blue text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      key={category._id}
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                  <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold">{post.title}</p>
                    <p className="line-clamp-2 text-black-500">
                      {post.description}
                    </p>
                  </div>
                  <p className="mt-5 font-bold flex items-center group-hover:underline text-black">
                    Read Post
                  </p>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
