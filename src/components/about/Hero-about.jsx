const HeroAboutUs = () => {
    return (
      <section className="bg-[#F5FBF8] px-6 py-10 md:py-16 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#014D30] mb-4">About Us</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Halal India Research Council is a NGO registered in India under section 8 by the 
            Ministry of Corporate Affairs for service level activities. Which is providing 
            Halal certificates for food, meat products, cosmetics and pharmaceutical products. 
            Helps to all logistics partners worldwide by its services.
          </p>
          <button className="mt-6 bg-[#008F78] text-white px-5 py-2 rounded-md shadow-md hover:bg-[#006653]">
            Contact Us
          </button>
        </div>
  
        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            src="https://via.placeholder.com/400"  // Replace with actual image
            alt="About Us"
            className="w-full max-w-md"
          />
        </div>
      </section>
    );
  };
  
  export default HeroAboutUs;
  