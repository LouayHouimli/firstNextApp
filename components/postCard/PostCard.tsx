import React, { cache } from "react";
import { Post } from "@/types/types";

const getPostList = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  return data;
};

const PostCard = async ({ id }: Post) => {
  const post = await getPostList(id);
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-500 p-4 rounded-md cursor-pointer">
      <h1 className="text-2xl font-bold text-red-500">{post?.slug}</h1>
      <p className="text-sm text-gray-500">{post?.content}</p>
    </div>
  );
};

export default PostCard;
