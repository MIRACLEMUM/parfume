import { useCart } from "../context/CartContext";

const perfumes = [
  {
    id: 1,
    name: "Royal Oud",
    price: 120,
    image: "/perfume1.jpg",
  },
  {
    id: 2,
    name: "Amber Luxe",
    price: 95,
    image: "/perfume2.jpg",
  },
  {
    id: 3,
    name: "Velour Noir",
    price: 150,
    image: "/perfume3.jpg",
  },
  {
    id: 4,
    name: "Golden Mirage",
    price: 110,
    image: "/perfume4.jpg",
  },
];

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Shop Luxury Perfumes
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{perfume.name}</h3>
              <p className="text-gray-600 font-medium">${perfume.price}</p>
              <button
                onClick={() =>
                  addToCart({ ...perfume, quantity: 1 })
                }
                className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
