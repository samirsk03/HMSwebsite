const HeroHomeSection = () => {
    return (
      <section className="bg-[#F5F8F6] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-Montserrat text-[#164B35]">
                Halal Certification & Compliance
              </h1>
              <p className="mt-4 text-gray-600 text-sm md:text-base tracking-wide">
                STAY CLEAN | EAT GOOD | LIVE BETTER
              </p>
              <button className="mt-6 px-6 py-3 bg-[#008F78] text-white rounded-xl hover:opacity-90">
                View all services
              </button>
            </div>
  
            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="Certification Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroHomeSection;
  