import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const cookieList = cookieStore.getAll();
    cookieList.forEach((value) => {
      if (!isAllowedCookieName.safeParse(value.name).success)
        throw new Error("Forbidden");
    });

    return NextResponse.json({ ok: "I am secure!" });
  } catch (error) {
    return NextResponse.json("Forbidden", { status: 403 });
  }
}

const devAuthCookies = ["next-auth.session-token", "next-auth.callback-url"];
const prodAuthCookies = [
  "__Secure-next-auth.session-token",
  "__Secure-next-auth.callback-url",
];

const allowedCookies =
  process.env.NODE_ENV !== "production" ? devAuthCookies : prodAuthCookies;

export const isAllowedCookieName = z.enum([
  "accept-cookies",
  ...allowedCookies,
]);
