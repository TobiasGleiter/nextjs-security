import { UserForm } from "@/components/user/user.form";
import Link from "next/link";
import { Suspense } from "react";

export default function ClientSideInputValidationPage() {
  return (
    <main className="container flex flex-col gap-8 p-8 mx-auto m-16 max-w-5xl">
      <div>
        <Link href={"/"}>Back</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">🚀 Client Side Input Validation</h1>
      </div>
      <Suspense fallback="Loading...">
        <UserForm />
      </Suspense>
    </main>
  );
}
