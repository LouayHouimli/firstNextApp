import { NextResponse } from "next/server";
import quotes from "./quotes.json";

export const GET = async (req: Request) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return NextResponse.json(randomQuote);
};
