import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase-client";

interface CommunityInput {
  name: string;
  description: string;
}

async function createCommunity(community: CommunityInput) {
  const { data, error } = await supabase.from("communities").insert(community);

  if (error) throw new Error(error.message);
  return data;
}

export default function CreateCommunity() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createCommunity,
    onSuccess: () => {
      navigate("/communities");
      queryClient.invalidateQueries({ queryKey: ["communities"] });
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate({ name, description });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent">
        Create New Community
      </h2>

      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Community Name
        </label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="description" className="block mb-2 font-medium">
          Description
        </label>
        <textarea
          id="description"
          required
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-white/10 bg-transparent p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-[#3be9cf] text-white px-4 py-2 rounded cursor-pointer"
      >
        {isPending ? "Creating..." : "Create Community"}
      </button>

      {isError && <p className="text-red-500">Error creating community</p>}
    </form>
  );
}
