"use client";

import { UserProfile } from "@clerk/nextjs";

export default function UserPage() {
  return (
    <div className="py-10 px-4 max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <p className="text-yellow-700 bg-yellow-100 border border-yellow-300 px-4 py-3 rounded-md text-sm font-medium">
          ⚠️ Please add an email to your account in order to upgrade to Pro.
        </p>
      </div>

      <UserProfile />
    </div>
  );
}
