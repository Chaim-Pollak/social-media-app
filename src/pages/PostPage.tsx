import { useParams } from "react-router";
import PostDetails from "../components/PostDetails";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-20">
      <PostDetails postId={Number(id)} />
    </div>
  );
}
