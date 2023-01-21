import urlFor from '../lib/urlFor';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  const formattedDate = (createdAt: string) => {
    return new Date(post._createdAt)
      .toLocaleDateString('en-us', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      })
      .replace(/\//g, '.');
  };

  const categoryCopy = () => {
    if (post.categories.length > 1) {
      return `${post.categories[0].title} and more...`;
    }
    return post.categories[0].title;
  };

  const imageAltTags = post.author.name;

  return (
    <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
      <div className="col-span-1 flex flex-col bg-primary text-neutral h-full hover:text-secondary">
        <div className="relative w-full h-72 cursor-pointer bg-black">
          <Image
            className="object-cover object-top"
            src={urlFor(post.mainImage).url()}
            alt={imageAltTags}
            fill
          />
        </div>
        <div className="flex flex-col px-[15px] py-[20px] justify-between bg-black">
          <p className="underline uppercase font-bold text-xs m-0 block pt-1 ">
            {categoryCopy()}
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
            {formattedDate(post._createdAt)}
          </p>
        </div>
      </div>
    </ClientSideRoute>
  );
}

export default PostCard;

// <div class="flex justify-center items-center min-h-screen bg-gray-100">
//   <div class="w-full md:w-1/3 p-2">
//     <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
//       <div class="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover" style="background-image: url(https://loremflickr.com/400/340/bread,book)">
//         <div class="text-right">
//           <button class="text-pink-500 hover:text-pink-600 p-2 rounded-full" style="background: rgba(0,0,0,0.3)">
//             <svg class="w-6 h-6" viewBox="0 0 24 24">
//               <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div class="flex justify-between items-start px-2 pt-2">
//         <div class="p-2 flex-grow">
//           <h1 class="font-medium text-xl font-poppins">Product name</h1>
//           <p class="text-neutral0 font-nunito">Short description here</p>
//         </div>
//         <div class="p-2 text-right">
//           <div class="text-teal-500 font-semibold text-lg font-poppins">$40</div>
//           <div class="text-xs text-neutral0 line-through font-poppins">$80</div>
//         </div>
//       </div>
//       <div class="flex justify-center items-center px-2 pb-2">
//         <div class="w-1/2 p-2">
//           <button class="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
//             <svg viewBox="0 0 24 24" class="inline w-4 h-4">
//               <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
//             </svg> Details
//           </button>
//         </div>
//         <div class="w-1/2 p-2">
//           <button class="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
//     <div class="w-full md:w-1/3 p-2">
//     <div class="bg-white shadow-lg hover:shadow-xl rounded-lg ">
//       <div class="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover" style="background-image: url(https://loremflickr.com/400/340/iceream,book)">
//         <div class="text-right">
//           <button class="text-gray-300 hover:text-pink-500 p-2 rounded-full" style="background: rgba(0,0,0,0.3)">
//             <svg class="w-6 h-6" viewBox="0 0 24 24">
//               <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div class="flex justify-between items-start px-2 pt-2">
//         <div class="p-2 flex-grow">
//           <h1 class="font-medium text-xl font-poppins">Product name</h1>
//           <p class="text-neutral0 font-nunito">Short description here</p>
//         </div>
//         <div class="p-2 text-right">
//           <div class="text-teal-500 font-semibold text-lg font-poppins">$100</div>
//           <div class="text-xs text-neutral0 line-through font-poppins">$50</div>
//         </div>
//       </div>
//       <div class="flex justify-center items-center px-2 pb-2">
//         <div class="w-1/2 p-2">
//           <button class="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
//             <svg viewBox="0 0 24 24" class="inline w-4 h-4">
//               <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
//             </svg> Details
//           </button>
//         </div>
//         <div class="w-1/2 p-2">
//           <button class="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>