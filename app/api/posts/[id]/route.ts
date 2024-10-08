import { NextResponse } from "next/server";
import { Post, PostPageProps } from "@/types/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: PostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
