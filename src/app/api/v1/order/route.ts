import { UserAuthenticationHandler } from "@/lib/handler/authentication.handler";
import { ExampleHandler } from "@/lib/handler/example.handler";
import { OrderSchemaHandler } from "@/lib/handler/order.handler";
import { NextResponse } from "next/server";

export async function POST(req: Request, _context: any) {
  const userAuthenticationHandler = new UserAuthenticationHandler();
  const orderSchemaHandler = new OrderSchemaHandler();
  const exampleHandler = new ExampleHandler();

  // Example handler will cancel the the requests because it is set to false!
  userAuthenticationHandler.setNext(orderSchemaHandler).setNext(exampleHandler);

  try {
    const json = await req.json();

    await userAuthenticationHandler.handle(json);

    // After this comment, all is validated and secure

    return NextResponse.json({ result: "All good!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 403 });
  }
}
