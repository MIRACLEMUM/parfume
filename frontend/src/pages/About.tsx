// src/pages/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-[90vh] md:min-h-[100vh] px-6 bg-black overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[center_top] lg:bg-[center_20%] transition-all duration-700"
          style={{
            backgroundImage: "url('/images/la.png')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-yellow-400 tracking-wide font-serif drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Mimi Scent
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Luxury is not just a scent — it’s an experience.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-serif">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-300">
            Mimi Scent was born from the passion to create unforgettable perfumes. 
            Every fragrance we craft is designed to embody sophistication, elegance, 
            and timeless class. From your everyday moments to your most special 
            occasions, Mimi Scent is there to leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "Our Mission",
              text: "To create luxurious fragrances that define identity and elevate confidence.",
            },
            {
              title: "Our Vision",
              text: "To be a global perfume house celebrated for elegance, authenticity, and timeless luxury.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black border border-yellow-500/40 p-10 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 font-serif">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12 font-serif">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🌿", title: "Eco-Friendly", text: "Safe and sustainable perfume ingredients." },
            { icon: "💎", title: "Premium Quality", text: "Crafted with sophistication and care." },
            { icon: "🚚", title: "Fast Delivery", text: "Reliable shipping to your doorstep." },
            { icon: "❤️", title: "Customer Love", text: "Our customers are our top priority." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12 font-serif">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Ubong Edem", text: "I love Mimi Scent perfumes! Elegant and long-lasting." },
            { name: "Blessing", text: "High quality and fast delivery. Truly impressed." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black border border-yellow-500/40 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 italic">"{item.text}"</p>
              <h4 className="mt-4 text-yellow-400 font-semibold">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-center py-20 px-6">
        <motion.h3
          className="text-3xl font-bold text-black mb-6 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Find Your Signature Scent
        </motion.h3>
        <motion.a
          href="/shop"
          className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.a>
      </section>
    </div>
  );
};

export default About;
