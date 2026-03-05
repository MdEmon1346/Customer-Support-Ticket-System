import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg text-black font-semibold">CS — Ticket System</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-black transition duration-200"
              >
                {item}
              </a>
            ),
          )}

          <button className="bg-linear-to-r from-violet-600 to-purple-600 transition text-white px-5 py-2 rounded-md text-sm">
            + New Ticket
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden text-black overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-100 px-6 pb-6 pt-2 space-y-4 text-gray-700 shadow-md">
          {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={closeMenu}
                className="block hover:text-black transition"
              >
                {item}
              </a>
            ),
          )}

          <button
            onClick={closeMenu}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition"
          >
            + New Ticket
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
