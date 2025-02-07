import HeroHomeSection from "./Hero-home";
import GlobalAccreditations from "./GlobalAccreditations";
import InfoSection from "../infoSection";
import ContactForm from "../ContactForm";
import Events from './Events'

const HomePage = () => {
  return (
    <div>
      <HeroHomeSection />
      <GlobalAccreditations />

      <InfoSection
        title="Here’s What We Do"
        content={` Halal India Research Council is a NGO registered in India under section 8 by the Ministry of Corporate Affairs for service level activities. Which is providing Halal certificates for food, meat products, cosmetics and pharmaceutical products. Helps to all logistics partners world wide by its services.

          
        Halal is a term from the Quran that means "permitted" or "lawful". Therefore, in relation to        food, Halal is used for food and other consumables that are permissible for consumption and       used by Muslims, based on Islamic law, the Shariah. Halal promotes cleanliness in all       aspects of a person and halal foods ensure that food consumed by a person in their daily      lives are clean, hygienic and not detrimental to their health or well-being `}
        image="https://via.placeholder.com/300" // Replace with a real image URL
        reverse={false}
      />
      <Events />
      <ContactForm />
    </div>
  );
};

export default HomePage;
