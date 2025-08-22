"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
  });
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        router.push("/products");
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow space-y-4 transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 dark:text-orange-400">
          Add Product
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="number"
          placeholder="Stock"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <input
          type="number"
          placeholder="Rating (0-5)"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
          step="0.1"
          min="0"
          max="5"
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </>
  );
}
