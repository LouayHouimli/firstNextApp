import React from "react";
import { Post } from "@/types/types";
import Link from "next/link";

const getPostList = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.org/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const PostList = async () => {
  const postList = await getPostList();
  return (
    <div className="flex flex-col gap-10 items-center p-10">
      <h1 className="text-4xl font-bold text-center">Post List</h1>
      <div className="flex flex-row gap-4 items-center flex-wrap">
        {postList.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div
              key={post.id}
              className="flex flex-col gap-2 border-2 border-gray-500 p-4 rounded-md cursor-pointer"
            >
              <h1 className="text-2xl font-bold text-red-500">{post.slug}</h1>
              <p className="text-sm text-gray-500">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;
