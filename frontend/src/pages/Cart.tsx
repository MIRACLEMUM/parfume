import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, cartCount } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <Link
          to="/shop"
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart ({cartCount})</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-200 py-4"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold">${item.price * item.quantity}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* Total and actions */}
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
          <div className="flex space-x-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Clear Cart
            </button>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
