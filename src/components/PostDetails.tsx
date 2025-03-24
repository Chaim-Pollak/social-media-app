import { useQuery } from "@tanstack/react-query";
import { Post } from "./PostList";
import { supabase } from "../supabase-client";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

interface Props {
  postId: number;
}

async function fetchPostsById(id: number): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data as Post;
}

export default function PostDetails({ postId }: Props) {
  const { data, isLoading, isError, error } = useQuery<Post, Error>({
    queryKey: ["post", postId],
    queryFn: () => fetchPostsById(postId),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) <div>Error: {error.message}</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent">
        {data?.title}
      </h2>

      {data?.image_url && (
        <img
          src={data.image_url}
          alt={data?.title}
          className="mt-4 rounded object-cover w-full h-64"
        />
      )}

      <p className="text-gray-400">{data?.content}</p>
      <p className="text-gray-500 text-sm">
        Posted on: {new Date(data!.created_at).toLocaleDateString()}
      </p>

      <LikeButton postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
}
