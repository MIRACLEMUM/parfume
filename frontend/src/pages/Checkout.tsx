// src/pages/Checkout.tsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // calculate total
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields before placing your order.");
      return;
    }

    const phoneNumber = "2347064400428"; // 👈 your WhatsApp number
    const orderDetails = cart
      .map((item) => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");

    const message = `📦 New Order from ${name}\n\n📞 Phone: ${phone}\n🏠 Address: ${address}\n\nItems:\n${orderDetails}\n\nTotal: $${totalPrice.toFixed(
      2
    )}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    clearCart();
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-yellow-600">Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Add items before checkout 🛒</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOrder();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g. 08012345678"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter delivery address"
                rows={3}
                required
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h2>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Place Order via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Checkout;
