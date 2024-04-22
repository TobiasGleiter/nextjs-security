import Link from "next/link";

interface CardProps {
  headline: string;
  description: string;
  href: string;
}

export default function Card({ headline, description, href }: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-zinc-50 p-6 rounded-md shadow">
      <Link href={href}>
        <h2 className="text-lg font-semibold hover:underline">{headline}</h2>
      </Link>
      <p className="text-zinc-700">{description}</p>
    </div>
  );
}
