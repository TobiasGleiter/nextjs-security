import { NextApiRequest } from "next";

let votes: any = {
  option1: 0,
  option2: 0,
  option3: 0,
};

export function POST(request: NextApiRequest): Response {
  const text = QueryStringUrl(request.url);

  return Response.json({ text }, { status: 200 });
}

function QueryStringUrl(url: any): any {
  const { vote } = url.body;

  if (Array.isArray(vote)) {
    vote.forEach((option) => {
      if (votes[option]) {
        votes[option]++;
      }
    });
  }

  return votes;
}
