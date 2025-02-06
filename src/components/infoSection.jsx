const InfoSection = ({ title, content, image, reverse }) => {
  return (
    <section className="bg-[#F5F8F6] py-12">
      <div
        className={`container mx-auto px-4 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
      >
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#164B35]">
            {title}
          </h2>
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="mt-4 text-gray-600 text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
