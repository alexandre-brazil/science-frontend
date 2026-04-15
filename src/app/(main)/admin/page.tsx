import Link from "next/link";
import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline mb-6 block"
      >
        ← Back to map
      </Link>
      <h1 className="text-2xl font-bold mb-6">Admin — Pending Submissions</h1>
      <AdminPanel />
    </main>
  );
}
