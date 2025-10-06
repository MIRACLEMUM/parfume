import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "../context/useCart";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, cartCount } = useCart();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold tracking-wide text-yellow-400">
        Mimi Scent
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li className="hover:text-yellow-400 transition"><Link to="/">Home</Link></li>
        <li className="hover:text-yellow-400 transition"><Link to="/shop">Shop</Link></li>
        <li className="hover:text-yellow-400 transition"><Link to="/about">About</Link></li>
        <li className="hover:text-yellow-400 transition"><Link to="/contact">Contact</Link></li>
        <li className="relative hover:text-yellow-400 transition">
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="mr-1 w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile Icons */}
      <div className="flex md:hidden items-center space-x-4">
        {/* Cart Icon */}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative"
        >
          <ShoppingCart className="text-yellow-400 w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-yellow-400 text-3xl focus:outline-none"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-lg font-medium flex flex-col items-center space-y-4 py-6 shadow-lg z-20 md:hidden">
          <li className="hover:text-yellow-400 transition"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="hover:text-yellow-400 transition"><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
          <li className="hover:text-yellow-400 transition"><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li className="hover:text-yellow-400 transition"><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}

      {/* Mobile Sliding Cart */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-gray-900 text-white shadow-xl z-30 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X className="w-6 h-6 text-yellow-400" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-300">🛒 Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{item.name}</span>
                        <span className="text-yellow-400 text-xs">
                          ₦{item.price.toLocaleString()} × {item.quantity}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <Link
              to="/cart"
              onClick={() => setIsCartOpen(false)}
              className="bg-yellow-400 text-black text-center py-2 mt-4 rounded font-semibold"
            >
              Go to Checkout
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
