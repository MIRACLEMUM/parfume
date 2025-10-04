// src/pages/Shop.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast"; 
import { products } from "../data/perfumes"; // ✅ now pulling from products.ts

const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const handleWhatsApp = (productName: string) => {
    const phoneNumber = "2347064400428"; // 👈 your WhatsApp business number
    const message = `Hello Mimi Scent,\n\nI’m interested in buying *${productName}*. Can you tell me more?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    toast(`Opening WhatsApp for ${productName} 💬`, { icon: "📲" });
  };

  // Filter + Search (search works independently of category)
  const filteredProducts = products.filter((p) => {
    if (search.trim() !== "") {
      return p.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return filter === "All" || p.category === filter;
    }
  });

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-yellow-400 mb-10">
        ✨ Shop Our Exclusive Scents ✨
      </h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <input
          type="text"
          placeholder="Search perfumes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white placeholder-gray-400"
        />

        <div className="flex gap-3 flex-wrap justify-center">
          {["All", "Men", "Women", "Unisex"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition ${
                filter === cat
                  ? "bg-yellow-500 text-black border-yellow-500 shadow-md"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found matching your search 🔍
        </p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-700"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className="text-yellow-400 font-bold text-2xl mt-3">
                    ₦{product.price.toLocaleString()} {/* price in naira */}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Category: {product.category}
                  </p>
                </div>

                <div className="mt-5 flex flex-col space-y-3">
                  <div className="w-full flex justify-between gap-4">
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-green-500 w-full text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                      WhatsApp
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-black w-full text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                    >
                      Details
                    </Link>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={() => {
                        addToCart({ ...product, quantity: 1 });
                        toast.success(`${product.name} added to cart 🛒`);
                      }}
                      className="bg-yellow-500 w-full text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
