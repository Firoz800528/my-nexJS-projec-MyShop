"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"; // Theme hook

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center transition-colors duration-300">
      <Link href="/" className="font-bold text-xl text-orange-600 dark:text-orange-400">
        MyShop
      </Link>

      <div className="flex items-center space-x-4">
        <Link
          href="/products"
          className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          Products
        </Link>

        {session ? (
          <>
            <Link
              href="/add-product"
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Add Product
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/products" })}
            className="bg-blue-500 dark:bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
