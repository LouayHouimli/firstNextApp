import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Post, PostPageProps } from "@/types/types";
const prisma = new PrismaClient();
export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
