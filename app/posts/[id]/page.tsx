import PostCard from "@/components/postCard/PostCard";
import { PostPageProps } from "@/types/types";
import React from "react";

const PostPage = ({ params }: PostPageProps) => {
  return (
    <div className="p-4 bg-blue-100 flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">Preview For Post {params.id}</h1>
        <PostCard id={params.id} />
      </div>
    </div>
  );
};

export default PostPage;
