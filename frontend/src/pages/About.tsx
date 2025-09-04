// src/pages/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-black text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Mimi Scent
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A journey of elegance, confidence, and unforgettable fragrances.
        </motion.p>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Mimi Scent started with a simple belief: perfume is more than just a
            fragrance — it is an identity. We carefully create each scent to
            match sophistication, class, and timeless beauty. From everyday wear
            to special occasions, Mimi Scent is designed to leave a lasting
            memory.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To create fragrances that boost confidence and define elegance
              without compromise.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To be a trusted perfume brand recognized for authenticity, quality,
              and luxury experiences worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-yellow-500 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "🌹 Premium Quality", text: "Only the finest ingredients." },
            { title: "✨ Signature Scents", text: "Unique blends you won’t forget." },
            { title: "🎁 Elegant Packaging", text: "Perfect for you or as a gift." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-center py-16 px-6">
        <motion.h3
          className="text-2xl font-bold text-yellow-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Discover Your Signature Scent
        </motion.h3>
        <motion.a
          href="/shop"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
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
