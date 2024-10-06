import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const postList = [
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
  return NextResponse.json(postList);
}
