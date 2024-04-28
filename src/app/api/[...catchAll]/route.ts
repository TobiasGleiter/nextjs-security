// api/[...catchAll]/route.ts

import { NextResponse } from "next/server";

// Catches all HTTP Requests in the api folder: e.g. /api/something or /api/something/other
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
