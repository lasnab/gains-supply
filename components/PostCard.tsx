import urlFor from '../lib/urlFor';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';
import { getImageAltTags, getCategoryCopy, getFormattedDate } from '@/utils';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  const imageAltTags = getImageAltTags(post);
  const categoryCopy = getCategoryCopy(post.categories);
  const formattedDate = getFormattedDate(post._createdAt);

  return (
    <ClientSideRoute route={`/post/${post.slug.current}`}>
      <div className="col-span-1 flex flex-col bg-primary text-neutral h-full hover:text-secondary">
        <div className="relative w-full h-72 cursor-pointer bg-black">
          <Image
            className="object-cover object-left-top"
            src={urlFor(post.mainImage).url()}
            alt={imageAltTags}
            fill
          />
        </div>
        <div className="flex flex-col px-[15px] py-[20px] justify-between bg-black">
          <p className="underline uppercase font-bold text-xs m-0 block pt-1 ">
            {categoryCopy}
          </p>
          <div className="line-clamp-2 font-poppins text-xl max-w-full overflow-hidden text-white font-bold not-italic m-0 capitalize pt-2 text-neutral">
            {post.title}
          </div>
          <div className="hidden md:visible">
            <div className="line-clamp-2 max-w-full overflow-hidden text-white font-normal text-sm m-0 pt-2 text-neutral ">
              {post.description}
            </div>
          </div>
          <p className="font-poppins text-sm text-neutral pt-2 m-0 block">
            {formattedDate}
          </p>
        </div>
      </div>
    </ClientSideRoute>
  );
}

export default PostCard;
