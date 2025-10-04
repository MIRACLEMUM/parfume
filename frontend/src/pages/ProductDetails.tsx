// src/pages/ProductDetails.tsx
import { useState, } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { FaStar, FaWhatsapp } from "react-icons/fa";

// ✅ Import from shared file
import { products } from "../data/perfumes";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [reviews, setReviews] = useState<
    { name: string; rating: number; comment: string }[]
  >(() => {
    if (!product) return [];
    const saved = localStorage.getItem(`reviews_product_${product.id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(5);

  if (!product) {
    return <p className="text-center text-gray-400">❌ Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart 🛒`);
  };

  const handleSubmitReview = () => {
    if (!userName || !userComment) {
      toast.error("Please enter your name and comment!");
      return;
    }

    const newReview = { name: userName, rating: userRating, comment: userComment };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_product_${product.id}`, JSON.stringify(updatedReviews));

    toast.success("Review submitted ✅");
    setUserName("");
    setUserComment("");
    setUserRating(5);
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  // WhatsApp link
  const whatsappMessage = `Hello, I'm interested in *${product.name}* priced at ₦${product.price}. Can you tell me more?`;
  const whatsappLink = `https://wa.me/2347064400428?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="px-6 py-12 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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

          {/* Average Rating */}
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-600"
                }`}
              />
            ))}
            <span className="text-sm text-gray-400">({reviews.length} reviews)</span>
          </div>

          <p className="text-3xl font-bold text-yellow-500 mb-8">
            ₦{product.price}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
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

          {/* Review Form */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Leave a Review</h2>

            <div className="flex items-center mb-4">
              <span className="text-white mr-2">Rating:</span>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`cursor-pointer ${
                    i < userRating ? "text-yellow-400" : "text-gray-600"
                  }`}
                  onClick={() => setUserRating(i + 1)}
                />
              ))}
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 mb-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Comment"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              className="w-full px-4 py-2 mb-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              onClick={handleSubmitReview}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Submit Review
            </button>
          </div>

          {/* Display Reviews */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Reviews</h2>
            {reviews.length === 0 ? (
              <p className="text-gray-400">No reviews yet. Be the first! ⭐</p>
            ) : (
              reviews
                .slice()
                .reverse()
                .map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg mb-4 shadow-inner"
                  >
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < review.rating ? "text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
