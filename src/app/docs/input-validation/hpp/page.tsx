"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const firstParam = searchParams.get("pina");

  const [text, setText] = useState<string>("Hello Server!");

  const handleSearch = async (searchTerm: any) => {
    try {
      const response = await fetch(
        `/api/v1/input-validation/hpp?query=${searchTerm}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data); // Handle response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container flex flex-col gap-8 p-8 mx-auto m-16 max-w-5xl">
      <div>
        <Link
          href="/"
          className="border py-1 px-4 rounded hover:bg-zinc-50 duration-150"
        >
          Back
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">🚀 HTTP Parameter Pollution</h1>
        <div>
          <h2 className="text-xl font-semibold">Defintion:</h2>
          <ul className="list-disc ml-4">
            <li>Attacker injects duplicate HTTP GET/POST parameters</li>
            <li>Injection by inserting query string delimiters (&, =, ?)</li>
            <li>
              HTTP Parameter Pollution (HPP) is overwriting existing parameters
            </li>
            <li>
              HPP can modify Application behaviours (exploit variables, bypass
              Web Application Firewalls)
            </li>
            <li>HPP is possible on Client and Serverside</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <div className="flex flex-col gap-4">
            <p>
              Adding a second search param string like:{" "}
              <code>?pina=dislike?pina=dislike</code>
            </p>
            <Link
              href="/docs/input-validation/hpp?pina=dislike&pina=dislike"
              className="bg-zinc-100 border w-fit px-4 py-1 rounded-md"
            >
              Add <code className="font-bold">?pina=dislike&pina=dislike</code>
            </Link>
            <Link
              href="/docs/input-validation/hpp?pina=like&pina=like"
              className="bg-zinc-100 border w-fit px-4 py-1 rounded-md"
            >
              Add <code className="font-bold">?pina=like&pina=like</code>
            </Link>
            <p
              className={`text-xl px-4 py-1 ${
                firstParam == "dislike" ? "bg-red-300" : "bg-green-600"
              } `}
            >
              I <span className="font-bold">{firstParam}</span> 🍍 Pina Coladas!
            </p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Server Side</h2>
          <p>
            Search Param is <code>query={text}</code>
          </p>
          <input
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
          ></input>
          <button onClick={() => handleSearch(text)}>Request</button>
        </div>
      </div>
    </main>
  );
}
