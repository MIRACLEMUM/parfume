import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative bg-dark text-light min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/asad-removebg-preview.png')] bg-cover bg-center opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50"
      ></motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            <span className="text-gold">Luxury</span> in Every Scent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0 font-body"
          >
            Discover timeless perfumes crafted with elegance, confidence, and
            style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center md:justify-start"
          >
            <Link
              to="/shop"
              className="bg-gold text-dark px-8 py-3 rounded-2xl font-semibold shadow-lg hover:scale-110 hover:shadow-[0_0_30px_#D4AF37] transition-transform duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-gold text-gold px-8 py-3 rounded-2xl font-semibold hover:bg-gold hover:text-dark transition duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right Perfume Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Glow effect behind the bottle */}
          <div className="absolute w-[320px] md:w-[460px] h-[320px] md:h-[460px] rounded-full bg-gold/20 blur-3xl animate-pulse"></div>

          <motion.img
            src="/asad-removebg-preview.png"
            alt="Luxury Perfume"
            className="relative w-72 md:w-[420px] drop-shadow-[0_15px_40px_rgba(212,175,55,0.5)]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
