const Footer = () => {
    return (
      <footer className="bg-[#014D30] text-white">
        {/* Subscription Section */}
        <div className="bg-[#013822] flex flex-col md:flex-row justify-between items-center text-center py-4 px-6">
          <p className="text-sm mb-3 md:mb-0">Subscribe and stay up-to-date on the latest news and upcoming events</p>
          <div className="flex bg-white w-full md:w-fit rounded-full p-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="p-2 w-full md:w-64 text-gray-900 bg-white rounded-l-full outline-none"
            />
            <button className="bg-[#008F78] px-4 py-2 rounded-r-full hover:bg-[#006653]">
              Subscribe
            </button>
          </div>
        </div>
  
        {/* Footer Content */}
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-start md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="https://via.placeholder.com/80" // Replace with actual logo
              alt="Company Logo"
              className="mb-3"
            />
          </div>
  
          {/* Menu */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
            </ul>
          </div>
  
          {/* Information */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Terms & condition</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact us</h3>
            <p className="text-sm">919 EVR Periyar Salai 1st Lane, Purasawalkam, Chennai - 84, Tamil Nadu, India</p>
            <p className="text-sm mt-2">inquiry.hirc@gmail.com</p>
            <p className="text-sm mt-1">+91 9790 777 220</p>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center py-4 bg-[#013822] text-sm">
          Copyright © halalindia
        </div>
      </footer>
    );
  };
  
  export default Footer;
  