import { useRef } from "react";

const events = [
  {
    image: "https://via.placeholder.com/300", // Replace with actual image
    title: "Society Interaction",
    description: "Basic Level interaction with elder generation peoples for society empowerment.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "School & College Meetup",
    description: "Visiting younger generation to meet their needs and requirements.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "End Hunger Program",
    description: "Stop hunger everyday with hand to hand effect. Day to Day visit to city.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Celebrating leader’s day",
    description: "Celebrating elder leaders day to empower peoples all over the world.",
  },
];

const UpcomingEvents = () => {
  const scrollRef = useRef(null);

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold text-[#014D30] mb-6">Upcoming Events</h2>
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div ref={scrollRef} className="flex gap-6">
          {events.map((event, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[250px] lg:min-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                <a href="#" className="text-[#008F78] font-semibold mt-4 inline-block">
                  View more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
