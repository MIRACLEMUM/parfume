import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/asad-removebg-preview.png')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400">
          Discover Luxury Scents
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Elevate your presence with perfumes crafted for elegance and style.
        </p>
        <Link
          to="/shop"
          className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
