"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [param, setParam] = useState<string>("");
  const [modifiedUrl, setModifiedUrl] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const encodedParam = encodeURIComponent(param);
    const url = `${window.location.href}?param=${encodedParam}`;
    setModifiedUrl(url);
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
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <label htmlFor="param">Add search Param:</label>
            <input
              type="text"
              id="param"
              className="border py-1 px-2 rounded"
              value={param}
              onChange={(e) => setParam(e.target.value)}
            />
            <button
              type="submit"
              className="border py-1 px-4 rounded hover:bg-zinc-50 duration-150"
            >
              Submit
            </button>
          </form>
          {modifiedUrl && (
            <div>
              <p>Modified URL:</p>
              <code>{modifiedUrl}</code>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Server Side</h2>
        </div>
      </div>
    </main>
  );
}
