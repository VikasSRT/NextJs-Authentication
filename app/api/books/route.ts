import { books } from "@/lib/data/books";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {

  return NextResponse.json(books, {
    status: 200,
    statusText: "Success",
  });
};
