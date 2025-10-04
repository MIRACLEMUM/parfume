// src/pages/Cart.tsx
import { useCart } from "../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, deleteFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty! 🛒");
      return;
    }

    const phoneNumber = "2347064400428";
    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`
      )
      .join("\n");

    const message = `Hello Mimi Scent,\n\nI’d like to place an order:\n${orderDetails}\n\nTotal: ₦${totalPrice.toLocaleString()}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    toast(`Opening WhatsApp for checkout 💬`, { icon: "📲" });
  };

  const handleDelete = (itemId: number, itemName: string) => {
    if (window.confirm(`Are you sure you want to remove ${itemName} from the cart?`)) {
      deleteFromCart(itemId);
      toast.error(`${itemName} removed from cart 🗑️`);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-2xl rounded-2xl p-6 border border-gray-700">
        <h1 className="flex items-center justify-center text-3xl font-bold mb-6 text-yellow-400 gap-3">
          <FaShoppingCart className="text-yellow-500" />
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-gray-800 rounded-xl shadow-inner">
            <p className="text-xl text-gray-300 mb-6">🛒 Your cart is empty</p>
            <Link
              to="/shop"
              className="bg-yellow-500 text-black px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Mobile horizontal scroll, desktop vertical */}
            <div className="overflow-x-auto md:overflow-x-hidden">
              <ul className="flex md:flex-col gap-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row justify-between items-center min-w-[220px] md:min-w-full bg-gray-800 rounded-xl p-4 gap-4 flex-shrink-0"
                  >
                    {/* Image + Details */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-700"
                      />
                      <div className="flex flex-col overflow-hidden">
                        <h2 
                          className="text-lg font-semibold text-white truncate"
                          title={item.name}
                        >
                          {item.name}
                        </h2>
                        <p className="text-yellow-400 whitespace-nowrap">
                          ₦{item.price.toLocaleString()} × {item.quantity} = ₦{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center space-x-3 flex-shrink-0 mt-2 md:mt-0">
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          toast(`${item.name} quantity decreased ➖`);
                        }}
                        className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-700 transition"
                      >
                        –
                      </button>

                      <span className="text-lg font-bold">{item.quantity}</span>

                      <button
                        onClick={() => {
                          addToCart({ ...item, quantity: 1 });
                          toast(`${item.name} quantity increased ➕`);
                        }}
                        className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-700 transition"
                      >
                        +
                      </button>

                      <button
                        onClick={() => handleDelete(item.id, item.name)}
                        className="text-red-500 hover:text-red-700 transition ml-2"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total & Actions */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-yellow-400">
                Total: ₦{totalPrice.toLocaleString()}
              </h2>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear the cart?")) {
                      clearCart();
                      toast.error("Cart cleared 🧹");
                    }
                  }}
                  className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
                >
                  Clear Cart
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
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
