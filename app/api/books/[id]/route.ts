import { books } from "@/lib/data/books";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params;

  const book = books.find((curBook) => curBook.id === parseInt(id));

  return NextResponse.json(book, {
    status: 200,
    statusText: "Success",
  });
};
