import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">LOGO</div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-64 mr-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>
        
        {/* Menu Icon */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        
        {/* Nav Items */}
        <ul className={`md:flex space-x-6 text-gray-700 font-medium md:static absolute top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"}`}  onClick={() => setIsOpen(!isOpen)}>
          <li><Link to="/" className="hover:text-gray-900 block px-4 py-2">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-900 block px-4 py-2">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-900 block px-4 py-2">Services</Link></li>
          <li><Link to="/community" className="hover:text-gray-900 block px-4 py-2">Community</Link></li>
          <li>
            <Link
              to="/login"
              className="px-4 py-2 bg-[#008F78] text-white rounded-full hover:opacity-90 block text-center"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Bottom Bar */}
      <div className="bg-[#002721] text-white p-3 flex justify-between items-center text-sm">
        <div>
          Some text here <a href="#" className="underline">Click here</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:opacity-80"><FaLinkedin size={20} /></a>
          <a href="#" className="text-white hover:opacity-80"><FaInstagram size={20} /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
