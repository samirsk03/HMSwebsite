const AllServicesSection = ({ title, description, services }) => {
    return (
      <section className="bg-[#F4F8F7] px-6 py-10 md:px-16">
        {/* Title & Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#005F38]">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
  
        {/* Services Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg min-w-[250px]">
              <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 bg-transparent bg-opacity-60 w-full text-white text-center py-2">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AllServicesSection;
  