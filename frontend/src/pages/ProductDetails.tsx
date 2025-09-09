// src/pages/ProductDetails.tsx
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Import WhatsApp icon

// ✅ Import from shared file
import { products } from "../data/perfumes";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return <p className="text-center text-gray-400">❌ Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart 🛒`);
  };

  // ✅ WhatsApp link with product name
  const whatsappMessage = `Hello, I'm interested in *${product.name}* priced at $${product.price}. Can you tell me more?`;
  const whatsappLink = `https://wa.me/2347064400428?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-[450px] object-cover rounded-2xl shadow-lg border border-gray-700"
          />
        </div>

        {/* Details */}
        <div className="text-white">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-300 mb-6 text-lg">{product.description}</p>

          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-400">(120 reviews)</span>
          </div>

          <p className="text-3xl font-bold text-yellow-500 mb-8">
            ${product.price}
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>

            {/* Back to Shop */}
            <Link
              to="/shop"
              className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              ⬅ Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
