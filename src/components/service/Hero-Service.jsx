const HeroServices = () => {

    const content = [{
        title : "2 Billion",
        description : "People of halal market"
    },{
        title : "200%",
        description : "Profit of greater market share"
    },{
        title : "56+",
        description : "OIC countries export gateway"    
    }
]
    return (
      <section className="bg-[#F5FBF8] px-6 py-10 md:py-16 flex flex-wrap-reverse md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#014D30] mb-4">Our Services</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Giving opportunities for entrepreneurs to tap into the global market of $2 Trillion.
          </p>
  
          {/* Stats Cards */}
          <div className="flex  gap-4">
           {content.map((item, index) => (
            <div key={index} className="bg-[#e2eddf] max-w-40 w-fit shadow-md p-2 rounded-lg">
              <h3 className="text-sm text-start font-bold text-[#014D30]">{item.title}</h3>
              <p className="text-sm text-start text-gray-600">{item.description}</p>
            </div>
           ))}
           
           
           
           
            {/* <div className="bg-white w-fit shadow-md p-2 rounded-lg">
              <h3 className="text-xl font-bold text-[#014D30]">2 Billion</h3>
              <p className="text-sm text-gray-600">People of halal market</p>
            </div> */}
            
          </div>
        </div>
  
        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img 
            src="https://via.placeholder.com/400"  // Replace with actual image
            alt="Our Services"
            className="w-full max-w-md"
          />
        </div>
      </section>
    );
  };
  
  export default HeroServices;
  