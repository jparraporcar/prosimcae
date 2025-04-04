import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const form = await request.formData();
  const file = form.get("fileUpload") as File;
  const { put } = await import("@vercel/blob");

  const blob = await put(file.name, file, { access: "public" });

  return NextResponse.json(blob);
}
