const InfoService = ({ title, introText, description, imageUrl }) => {
    return (
        <>
        <h2 className="text-2xl px-6 pt-10  md:text-3xl font-bold text-[#005F38]">{title}</h2>
        <section className=" px-6 py-10 md:px-16 flex flex-col md:flex-row  items-center gap-6">
          
        
        {/* Left Content */}
        <div className="md:w-2/3">
          
          <p className="mt-2 text-xl text-black-700">{introText}</p> {/* Introductory text */}
          <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
  
        {/* Right Image */}
        <div className="md:w-1/3">
          <img
            src={imageUrl}
            alt="Objective Image"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      </>
    );
  };
  
  export default InfoService;
  