import Link from "next/link";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container flex flex-col gap-8 p-8 mx-auto m-16 max-w-5xl">
      <div>
        <Link href={"/"} className="hover:text-zinc-600 duration-200">
          🔙 Back
        </Link>
      </div>
      <div>{children}</div>
    </main>
  );
}
