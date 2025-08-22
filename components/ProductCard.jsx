"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="font-semibold text-gray-900 mt-2">${product.price}</p>
      <Link
        href={`/products/${product._id}`}
        className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
