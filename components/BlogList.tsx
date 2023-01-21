import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 pt-2">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
