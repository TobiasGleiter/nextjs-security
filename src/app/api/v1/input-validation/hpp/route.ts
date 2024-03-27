import { NextApiRequest } from "next";

export function GET(request: NextApiRequest): Response {
  const text = QueryStringUrl(request.url);

  return Response.json({ text }, { status: 200 });
}

function QueryStringUrl(url: any): any {
  const queryString = url.split("?")[1];
  const searchParam = queryString.split("&");

  return searchParam;
}
