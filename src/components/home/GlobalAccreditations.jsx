const GlobalAccreditations = () => {
    const accreditationLogos = [
      "https://via.placeholder.com/100", 
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100"
    ];
  
    return (
      <section className="bg-[#F5F8F6] py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#164B35]">Global Accreditations</h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Accreditation is a formal, independent verification that a program or institution meets 
            established quality standards and is competent to carry out specific conformity assessment tasks.
          </p>
  
          {/* Horizontal Scrollable Logos */}
          <div className="mt-6 overflow-x-auto flex space-x-6 scrollbar-hide snap-x scroll-smooth" 
               style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
            {accreditationLogos.map((logo, index) => (
              <div key={index} className=" size-64 snap-center shrink-0">
                <img src={logo} alt="Accreditation Logo" className="w-32 h-32 object-contain"/>
              </div>
            ))}
          </div>
  
          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-4 space-x-2">
            {accreditationLogos.map((_, index) => (
              <span key={index} className="w-3 h-3 bg-gray-400 rounded-full"></span>
            ))}
          </div> */}
        </div>
      </section>
    );
  };
  
  export default GlobalAccreditations;

  