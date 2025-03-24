import CommunityList from "../components/CommunityList";

export default function CommunitiesPage() {
  return (
    <div className="pt-20">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent">
        Communities
      </h2>
      <CommunityList />
    </div>
  );
}
