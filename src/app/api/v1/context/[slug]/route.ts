import { paramsSchema } from "@/validation/slug.api";
import { NextResponse } from "next/server";

interface ContextProps {
  params: { slug: string };
}

export async function POST(_request: Request, context: ContextProps) {
  try {
    // Make sure it is parsed in the try catch
    const { params } = paramsSchema.parse(context);

    // "slug" is the name of your folder: [slug]
    // e.g. [id] would be params.id
    console.log(params.slug);
    return NextResponse.json("I am secure!", { status: 200 });
  } catch (error) {
    return NextResponse.json("Forbidden", { status: 403 });
  }
}
