import PostCard from "@/components/layouts/PostCard";
import { getPosts, searchPosts } from "@/lib/post";
import { Post } from "@/types/post";

type searchParams = {
  search?: string;
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<searchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.search || "";
  // const posts = (await getPosts()) as Post[];
  const posts = query
    ? ((await searchPosts(query)) as Post[])
    : ((await getPosts()) as Post[]);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
