import PostList from "@/components/postList/PostList";
import React from "react";

const PostsPage = () => {
  return (
    <div className="p-4 bg-blue-100 flex flex-col items-center justify-center h-screen">
      <PostList />
    </div>
  );
};

export default PostsPage;
