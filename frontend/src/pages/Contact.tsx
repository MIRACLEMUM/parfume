// src/pages/Contact.tsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-yellow-600 text-center mb-8">
          Get in Touch
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp + Social Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">Or reach us directly:</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" className="text-pink-600 hover:underline">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" className="text-black hover:underline">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
