// src/pages/Shop.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Royal Oud",
    price: 120,
    category: "Men",
    image: "https://via.placeholder.com/400x500.png?text=Royal+Oud",
    description: "A bold, woody scent with deep oriental richness.",
  },
  {
    id: 2,
    name: "Velvet Rose",
    price: 95,
    category: "Women",
    image: "https://via.placeholder.com/400x500.png?text=Velvet+Rose",
    description: "A romantic floral fragrance with soft sweet notes.",
  },
  {
    id: 3,
    name: "Amber Essence",
    price: 150,
    category: "Unisex",
    image: "https://via.placeholder.com/400x500.png?text=Amber+Essence",
    description: "An elegant blend of amber and warm vanilla tones.",
  },
  {
    id: 4,
    name: "Citrus Noir",
    price: 110,
    category: "Men",
    image: "https://via.placeholder.com/400x500.png?text=Citrus+Noir",
    description: "Fresh citrus burst balanced with smoky undertones.",
  },
  {
    id: 5,
    name: "Jasmine Bliss",
    price: 100,
    category: "Women",
    image: "https://via.placeholder.com/400x500.png?text=Jasmine+Bliss",
    description: "A soft, floral fragrance with hints of jasmine petals.",
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const handleWhatsApp = (productName: string) => {
    const phoneNumber = "2347064400428"; // 👈 your WhatsApp business number
    const message = `Hello Mimi Scent,\n\nI’m interested in buying *${productName}*. Can you tell me more?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Filter + Search
  const filteredProducts = products.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-10">
        ✨ Shop Our Exclusive Scents ✨
      </h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search perfumes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Filter Buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {["All", "Men", "Women", "Unisex"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition ${
                filter === cat
                  ? "bg-yellow-500 text-black border-yellow-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-yellow-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products found matching your search 🔍
        </p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6 flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-yellow-600 font-bold text-2xl mt-3">
                    ${product.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Category: {product.category}
                  </p>
                </div>

                <div className="mt-5 flex justify-center space-x-3">
                  <button
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleWhatsApp(product.name)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    WhatsApp
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    Details
                  </Link>
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
