import { RequiresProPlanError } from "@/lib/exceptions/custom.exceptions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const isUserPro = false;
    if (!isUserPro) throw new RequiresProPlanError();

    return NextResponse.json("I am secure!");
  } catch (error) {
    if (error instanceof RequiresProPlanError) {
      return new Response(error.message, { status: 402 });
    }

    return NextResponse.json("Forbidden", { status: 403 });
  }
}
