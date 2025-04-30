import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
type Params = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Params) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        {post.topImage && (
          <div className="w-full relative h-64 lg:h-96">
            <Image
              src={post.topImage}
              alt={post.title}
              fill
              sizes="100vw"
              className="rounded-t-md object-cover"
              priority
            />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">投稿者：{post.author.name}</p>
            <time></time>
          </div>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
