// src/pages/Contact.tsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to open WhatsApp depending on device
  const handleSendMessage = () => {
    const { name, email, message } = form;
    const text = `Hello Mimi Scent, I am ${name} (${email}). ${message}`;
    
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
    
    const whatsappUrl = isMobile
      ? `https://wa.me/2347064400428?text=${encodeURIComponent(text)}`
      : `https://web.whatsapp.com/send?phone=2347064400428&text=${encodeURIComponent(
          text
        )}`;

    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-yellow-500 shadow-2xl rounded-2xl p-8 transition duration-300 hover:shadow-yellow-600/40">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8 tracking-wide">
          Get in Touch
        </h1>

        {/* Contact Form */}
        <div className="space-y-6">
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
            type="button"
            onClick={handleSendMessage}
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold transition duration-300 hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/50"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
