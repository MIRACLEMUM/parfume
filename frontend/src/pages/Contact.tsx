// src/pages/Contact.tsx
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappNumber = "2347064400428";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello Mimi Scent, I’d like to know more about your perfumes.`;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-6 overflow-hidden">
      {/* Shimmer background effect */}
      <div className="absolute inset-0">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-[shimmer_8s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-yellow-500 shadow-2xl rounded-2xl p-8 transition duration-300 hover:shadow-yellow-600/40">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8 tracking-wide">
          Get in Touch
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-200 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:border-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold transition duration-300 hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/50"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp + Social Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-3">Or reach us directly:</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/40"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>

          <div className="flex justify-center space-x-8 mt-6 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-blue-500 transition duration-300 hover:text-blue-400 hover:scale-110"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-pink-500 transition duration-300 hover:text-pink-400 hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              className="text-white transition duration-300 hover:text-gray-300 hover:scale-110"
            >
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
