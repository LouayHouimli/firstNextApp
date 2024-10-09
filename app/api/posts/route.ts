import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const json = await request.json();

  const { title, content, author } = json;

  if (!title || !content || !author) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      authorId: author.id, // Assuming 'author' is an object with an 'id' field
    },
  });

  return new NextResponse(JSON.stringify(newPost), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
