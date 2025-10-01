"use client";

import { useState } from "react";

export default function DonatePage() {
  const [amount, setAmount] = useState(5);
  const [recurring, setRecurring] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    const res = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, recurring }),
    });

    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url;
    } else {
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Support Our Project ❤️</h1>
      <p className="mb-4">Choose how you’d like to support us:</p>

      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded border ${
            !recurring ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          }`}
          onClick={() => setRecurring(false)}
        >
          One-time
        </button>
        <button
          className={`px-4 py-2 rounded border ${
            recurring ? "bg-blue-600 text-white" : "bg-white text-blue-600"
          }`}
          onClick={() => setRecurring(true)}
        >
          Monthly
        </button>
      </div>

      <input
        type="number"
        value={amount}
        min={1}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="border rounded px-3 py-2 text-center w-full mb-4"
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        {loading
          ? "Processing..."
          : `Donate $${amount} ${recurring ? "/ month" : ""}`}
      </button>
    </div>
  );
}
