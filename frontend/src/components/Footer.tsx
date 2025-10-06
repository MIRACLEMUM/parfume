import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* <h2 className="text-xl font-bold text-yellow-400">Mimi Scent</h2> */}
        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Mimi Scent. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/scent.bymira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex items-center gap-1"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://wa.me/2347064400428"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex items-center gap-1"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
