"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="p-6 max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "/products" })
        }
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
