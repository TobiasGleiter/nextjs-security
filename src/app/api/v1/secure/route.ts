import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json();
  console.log(json);

  return NextResponse.json({ ok: "I am secure!" });
}

export async function GET() {
  return NextResponse.json("Forbidden", { status: 403 });
}
