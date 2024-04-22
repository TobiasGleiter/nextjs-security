"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SecureHeaderPage() {
  const [headerData, setHeaderData] = useState<Response>();
  const fetchData = async () => {
    const data = await fetch("/api/v1/headers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    setHeaderData(json);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Headers</h1>
      <button onClick={fetchData} className={cn(buttonVariants(), "w-[340px]")}>
        Fetch data from /api/v1/cookies Endpoint
      </button>
      {headerData && (
        <pre className="mt-2 w-[340px] rounded-md p-4 bg-zinc-100">
          <code>{JSON.stringify(headerData, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}
