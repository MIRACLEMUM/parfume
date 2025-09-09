// src/pages/Cart.tsx
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast"; // ✅ added

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, deleteFromCart } = useCart();

  // Calculate total
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // WhatsApp checkout
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty! 🛒");
      return;
    }

    const phoneNumber = "2347064400428"; // 👈 your WhatsApp number
    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const message = `Hello Mimi Scent,\n\nI’d like to place an order:\n${orderDetails}\n\nTotal: $${totalPrice.toFixed(2)}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    toast(`Opening WhatsApp for checkout 💬`, { icon: "📲" });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-yellow-500">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500 mb-4">🛒 Your cart is empty</p>
            <Link
              to="/shop"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>

                  {/* Quantity controls + Trash */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast(`${item.name} quantity decreased ➖`);
                      }}
                      className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition"
                    >
                      –
                    </button>

                    <span className="text-lg font-bold">{item.quantity}</span>

                    <button
                      onClick={() => {
                        addToCart({ ...item, quantity: 1 });
                        toast(`${item.name} quantity increased ➕`);
                      }}
                      className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-600 transition"
                    >
                      +
                    </button>

                    {/* Trash button */}
                    <button
                      onClick={() => {
                        deleteFromCart(item.id);
                        toast.error(`${item.name} removed from cart 🗑️`);
                      }}
                      className="text-red-600 hover:text-red-800 transition ml-2"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total & Actions */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h2>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    clearCart();
                    toast.error("Cart cleared 🧹");
                  }}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Clear Cart
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Checkout with WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
