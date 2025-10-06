import { createContext, useContext } from "react";

export type CartItem = { id: number; name: string; price: number; quantity: number; image: string; };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
