import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // 👈 run: npm install lucide-react
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide text-yellow-400"
      >
        Mimi Scent
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li className="hover:text-yellow-400 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-400 transition">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:text-yellow-400 transition">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-yellow-400 transition">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="relative hover:text-yellow-400 transition">
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="mr-1" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-lg font-medium flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg z-20">
          <li className="hover:text-yellow-400 transition">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-yellow-400 transition">
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          </li>
          <li className="hover:text-yellow-400 transition">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="hover:text-yellow-400 transition">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li className="relative hover:text-yellow-400 transition">
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <ShoppingCart className="mr-1" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
