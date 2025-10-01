export default function PasswordSavedPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center p-6 text-center">
      <h1 className="text-lg font-semibold">Almost done…</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Your browser may prompt you to save the password now.
      </p>
      <a href="/courses" className="mt-6 inline-flex items-center rounded-md border px-4 py-2 text-sm">
        Return to the app
      </a>
    </main>
  );
}
