import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Cache data for 5 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <button onClick={refetch} className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="border-b py-2">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ["isError"]
// ["cacheTime", "refetchOnWindowFocus", "keepPreviousData"]

export default PostsComponent;
