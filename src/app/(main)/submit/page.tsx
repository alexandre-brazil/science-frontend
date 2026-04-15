import Link from "next/link";
import SubmitForm from "@/components/SubmitForm";

export default function SubmitPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline mb-6 block"
      >
        ← Back to map
      </Link>
      <h1 className="text-2xl font-bold mb-6">Submit a Map Point</h1>
      <SubmitForm />
    </main>
  );
}
