import CreatePost from "../components/CreatePost";

export default function CreatePostPage() {
  return (
    <div className="pt-20">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent ">
        Create New Post
      </h2>
      <CreatePost />
    </div>
  );
}
