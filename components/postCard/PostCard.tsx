import React from "react";
import { Post } from "@/types/types";

const getPostList = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
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
