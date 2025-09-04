// src/pages/ProductDetails.tsx
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Royal Oud",
    price: 120,
    category: "Men",
    image: "https://via.placeholder.com/600x700.png?text=Royal+Oud",
    description: "A bold, woody scent with deep oriental richness.",
  },
  {
    id: 2,
    name: "Velvet Rose",
    price: 95,
    category: "Women",
    image: "https://via.placeholder.com/600x700.png?text=Velvet+Rose",
    description: "A romantic floral fragrance with soft sweet notes.",
  },
  {
    id: 3,
    name: "Amber Essence",
    price: 150,
    category: "Unisex",
    image: "https://via.placeholder.com/600x700.png?text=Amber+Essence",
    description: "An elegant blend of amber and warm vanilla tones.",
  },
  {
    id: 4,
    name: "Citrus Noir",
    price: 110,
    category: "Men",
    image: "https://via.placeholder.com/600x700.png?text=Citrus+Noir",
    description: "Fresh citrus burst balanced with smoky undertones.",
  },
  {
    id: 5,
    name: "Jasmine Bliss",
    price: 100,
    category: "Women",
    image: "https://via.placeholder.com/600x700.png?text=Jasmine+Bliss",
    description: "A soft, floral fragrance with hints of jasmine petals.",
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">Product Not Found</h2>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const phoneNumber = "2347064400428"; // 👈 your WhatsApp number
    const message = `Hello Mimi Scent,\n\nI’m interested in buying *${product.name}*. Can you tell me more?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <p className="text-2xl font-semibold text-yellow-600 mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Category: {product.category}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp
            </button>
          </div>

          <Link
            to="/shop"
            className="mt-8 inline-block text-gray-700 hover:text-yellow-600 transition"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
