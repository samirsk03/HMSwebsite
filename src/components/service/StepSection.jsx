const StepSection = ({ stepNumber, title, description, points, footer }) => {
    return (
      <section className="bg-[#F4F8F7] px-6 py-6 md:px-10 rounded-lg shadow-md">
        {/* Step Number & Title */}
        <p className="text-sm text-gray-500 uppercase tracking-wide">Step {stepNumber}</p>
        <h2 className="text-xl md:text-2xl font-bold text-[#005F38]">{title}</h2>
  
        {/* Description */}
        <p className="mt-2 text-gray-700">{description}</p>
  
        {/* Bullet Points */}
        {points ?  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
          <ul className="list-disc list-inside text-gray-700">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          </div> : null} 
  
        {/* Footer */}
        {footer ? <p className="mt-4 text-gray-700">{footer}</p> : null }
      </section>
    );
  };
  
  export default StepSection;
  