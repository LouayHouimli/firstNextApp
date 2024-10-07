import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const postList = await prisma.post.findMany();
  return NextResponse.json(postList);
}
export async function POST(req: Request) {
  const { title, content }: { title: string; content: string } =
    await req.json();
  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return NextResponse.json(newPost);
}
