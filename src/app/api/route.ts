// api/route.ts

import { NextResponse } from "next/server";

// HTTP Requests in the api folder: e.g. /api
export async function POST() {
  return NextResponse.json("Forbidden", { status: 403 });
}

export async function DELETE() {
  return NextResponse.json("Forbidden", { status: 403 });
}

export async function PATCH() {
  return NextResponse.json("Forbidden", { status: 403 });
}

export async function PUT() {
  return NextResponse.json("Forbidden", { status: 403 });
}

export async function GET() {
  return NextResponse.json("Forbidden", { status: 403 });
}

export async function OPTIONS() {
  return NextResponse.json("Forbidden", { status: 403 });
}
