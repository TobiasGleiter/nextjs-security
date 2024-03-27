import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex flex-col gap-8 p-8 mx-auto m-16 max-w-5xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">🔒 IT-Security in Next.js</h1>
        <p className="text-lg text-zinc-700">
          Using the OWASP ASVS to build and validate
        </p>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="flex flex-col gap-2 bg-zinc-50 p-6 rounded-md shadow">
          <Link href="/docs/input-validation/hpp?pina=like">
            <h2 className="text-lg font-semibold hover:underline">
              🚀 HTTP Parameter Pollution
            </h2>
          </Link>
          <p className="text-zinc-700">
            Attacker injects duplicate HTTP GET/POST parameters
          </p>
        </div>
      </div>
    </main>
  );
}
