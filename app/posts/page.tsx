import PostList from "@/components/postList/PostList";
import { revalidatePath } from "next/cache";
import React from "react";

const addPost = async (formData: FormData) => {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
  const newPost = {
    title,
    content,
  };
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
  });
  if (response.ok) {
    revalidatePath("/posts");
  }
  return response.json();
};

const PostsPage = () => {
  return (
    <div className="p-4 bg-blue-100 flex flex-col items-center justify-center h-screen">
      <PostList />
      <form action={addPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostsPage;
