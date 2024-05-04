import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: Request) {
  try {
    request.headers.forEach((_value, key) => {
      if (!isAllowedHeaderKey.safeParse(key).success) {
        throw new Error("Forbidden");
      }
    });

    return NextResponse.json({ ok: "I am secure!" });
  } catch (error) {
    return NextResponse.json("Forbidden", { status: 403 });
  }
}

export const isAllowedHeaderKey = z.enum([
  "sec-fetch-site",
  "sec-fetch-mode",
  "sec-fetch-dest",
  "referer",
  "cookie",
  "accept-language",
  "host",
  "accept",
  "accept-encoding",
  "connection",
  "content-length",
  "user-agent",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-port",
  "x-forwarded-proto",
]);
