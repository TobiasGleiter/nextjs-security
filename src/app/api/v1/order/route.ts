import { UserAuthenticationHandler } from "@/lib/handler/authentication.handler";
import { ExampleHandler } from "@/lib/handler/example.handler";
import { NextResponse } from "next/server";

export async function POST(req: Request, _context: any) {
  const userAuthenticationHandler = new UserAuthenticationHandler();
  const exampleHandler = new ExampleHandler();

  userAuthenticationHandler.setNext(exampleHandler);

  try {
    const json = await req.json();
    await userAuthenticationHandler.handle(json);

    // After this comment, all is validated and secure

    return NextResponse.json({ result: "All good!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 403 });
  }
}
