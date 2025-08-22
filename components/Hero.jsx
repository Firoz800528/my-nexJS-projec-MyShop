"use client";
export default function Hero() {
  return (
    <section className="bg-orange-50 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to MyStore
      </h1>
      <p className="text-gray-600 mb-6 text-lg md:text-xl">
        Explore our exclusive products and add your own if you’re logged in!
      </p>
      <a
        href="/products"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold"
      >
        Explore Products
      </a>
    </section>
  );
}
