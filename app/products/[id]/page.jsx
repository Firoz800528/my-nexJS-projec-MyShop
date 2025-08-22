import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ProductDetails({ params }) {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();
  const product = products.find(p => p._id === params.id);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-900 font-semibold text-lg">Price: ${product.price}</p>

        {/* New Details */}
        <p className="text-gray-800"><span className="font-semibold">Category:</span> {product.category || "N/A"}</p>
        <p className="text-gray-800"><span className="font-semibold">Stock:</span> {product.stock || "N/A"}</p>
        <p className="text-gray-800"><span className="font-semibold">Rating:</span> {product.rating || "N/A"} / 5</p>
      </div>
      <Footer />
    </>
  );
}
