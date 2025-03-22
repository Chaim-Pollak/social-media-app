import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="pt-10">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent">
        Recent Posts
      </h2>

      <div>
        <PostList />
      </div>
    </div>
  );
}
