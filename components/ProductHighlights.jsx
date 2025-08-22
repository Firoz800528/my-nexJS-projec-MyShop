"use client";

import Link from "next/link";

export default function ProductHighlights() {
  const products = [
    { id: 1, name: "Product A", description: "High quality product A", price: "$49" },
    { id: 2, name: "Product B", description: "Premium product B", price: "$79" },
    { id: 3, name: "Product C", description: "Top-rated product C", price: "$99" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Product Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold mb-4">{product.price}</p>
            <div className="flex justify-between">
              <Link href="/products" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                View Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
