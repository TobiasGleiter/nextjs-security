import Card from "@/components/ui/card";
import { Key } from "react";

const items = [
  {
    headline: "🚀 Handle API-Requests with the Chain of Responsibility",
    description: "Use the Chain of Responsibility to add seucrity steps.",
    href: "/docs/chain-of-responsibilities",
  },
  {
    headline: "🔒 HTTP-Header Whitelisting",
    description: "OWASP ASVS #5.1.4",
    href: "/docs/headers",
  },
  {
    headline: "🍪 Cookie Whitelisting",
    description: "OWASP ASVS #5.1.4",
    href: "/docs/cookies",
  },
  {
    headline: "🤬 Custom Exceptions",
    href: "/docs/custom-exceptions",
  },
];

export default function Home() {
  return (
    <main className="container flex flex-col gap-8 p-8 mx-auto m-16 max-w-5xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">🔒 IT-Security in Next.js</h1>
        <p className="text-lg text-zinc-700">
          Using the OWASP ASVS to build and validate.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item, key: Key) => (
          <Card
            key={key}
            headline={item.headline}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </main>
  );
}
