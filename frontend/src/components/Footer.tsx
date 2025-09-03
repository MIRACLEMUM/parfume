const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-yellow-400">Mimi Scent</h2>
        <p className="mt-4 md:mt-0">© {new Date().getFullYear()} Mimi Scent. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">TikTok</a>
          <a href="#" className="hover:text-yellow-400">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
