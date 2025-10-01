import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="max-w-md mx-auto text-center py-20">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Donation Cancelled</h1>
      <p className="mb-6">No worries, you can try again anytime.</p>

      <Link
        href="/donate"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Return to Donate Page
      </Link>
    </div>
  );
}
