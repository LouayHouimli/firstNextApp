import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const json = await request.json();

  const { title, content } = json;

  if (!title || !content) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  return new NextResponse(JSON.stringify(newPost), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
