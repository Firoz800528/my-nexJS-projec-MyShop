import { MongoClient, ObjectId } from "mongodb";
import Link from "next/link";

async function getProducts() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("nextdb");
  const products = await db.collection("products").find().toArray();
  client.close();
  return JSON.parse(JSON.stringify(products));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6">
      <h1 className="text-3xl font-bold text-center text-orange-600">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-700 mb-2">{p.description}</p>
            <p className="text-green-600 font-bold mb-4">${p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="block text-center bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
