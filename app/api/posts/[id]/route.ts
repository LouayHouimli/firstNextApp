import { NextResponse } from "next/server";
import { Post, PostPageProps } from "@/types/types";

export async function GET(req: Request, { params }: PostPageProps) {
  const postList: Post[] = [
    {
      id: 1,
      slug: "hello-world",
      content: "Welcome to learning Next.js!",
    },
    {
      id: 2,
      slug: "installation",
      content:
        "You can install Next.js by following the steps on the official website.",
    },
    {
      id: 3,
      slug: "hello-world",
      content: "Welcome to learning Next.js!",
    },
  ];
  const post = postList.find((post) => post.id == params.id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
