import HeroService from "./Hero-Service";
import ContactForm from "../ContactForm";
import InfoService from "./Info";
import AllServicesSection from "./AllServices";
import StepSection from "./StepSection";

const ServicePage = () => {
  const infoDets = [
    "To help alleviate poverty by enabling access to the basic necessities of life including clean, safe and nutritious food, clean and safe drinking water, shelter, education and livelihoods for people deprived from such access.",
    "To advise/identify/certify the clean and safe Food & Better Lifestyle for the society with mindful of encouragement.",
    "To globalize the idea of clean lifestyle including food, wealthy lifestyle for all human.",
    "To promote social welfare activities intended for the general welfare of the public...",
  ];
  const infoDets1 = [
    "Neither is nor consist of or contains any part on matter of an animal that a Muslim is prohibited by Shariah to consume or that has not been slaughtered in accordance with Shariah..",
    "Does not contain anything which is considered to be impure according to Shariah.",
    "Has not been prepared, processed on manufactured using an instrument that was not free from anything impure according to Shariah.",
    "Has not in the course of preparation, processing or storage been in contact with or close proximity to any food that fails to satisfy paragraph (a) (b) or (c) or anything that is considered to be impure according to Hukum Shariah.",
  ];

  const AllservicesData = [
    {
      title: "Medical Tourism Assistance in India",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image
    },
    {
      title: "Halal Certificate",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Member Enrolment",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Medical Tourism Assistance in India",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  const steps = {
        stepData: {
            stepNumber: 1,
            title: "Application",
            description:
              "The business will submit an application form to the Halal Certification Body. The application form will include the following information:",
            points: null,
            footer: null,
        },

        stepData1 : {
            stepNumber: 2,
            title: "Audit",
            description:
              "Once the application information is verified, Auditors (usually one Shariah Auditor and one Technical Auditor) will visit the business for inspection. The Auditors will verify if the following areas are acceptable for Halal Certification:",
            points: [
              "Documentation",
              "Processing, handling and product distribution",
              "Storage, display and product serving",
              "Cleanliness, sanitary and food safety",
              "The overall aspects of the premises",
              "Tools, apparatus and machines",
              "Packaging and labeling",
            ],
            footer:
              "During the audit, the business might have to provide criteria of acceptance of raw materials (ingredients), certificate of analysis and Halal certificate of individual ingredient. Once the audit is completed, an audit report will be prepared and signed by both parties.",
          },
        stepData2 : {
            stepNumber: 3,
            title: "Certification",
            description:
              "If the business passes the audit, the Halal Certification Body will issue a Halal Certificate. The Halal Certificate will include:",
            points: null,
            footer: null,
        }
    }
  
   

  return (
    <div>
      <HeroService />
      <AllServicesSection
        title="Our Services"
        description="We provide the following services to our clients:"
        services={AllservicesData}
      />
      <InfoService
        title="Our Objective"
        introText="The objects for which the council is established are:"
        description={infoDets}
        imageUrl="https://via.placeholder.com/300" // Replace with actual image
      />
      <InfoService
        title="Our Process"
        introText=" While providing Halal certification, a competent authority audits and ensures that the business:"
        description={infoDets1}
        imageUrl="https://via.placeholder.com/300" // Replace with actual image
      />
        <StepSection {...steps.stepData} />
        <StepSection {...steps.stepData1} />
        <StepSection {...steps.stepData2} />
      <ContactForm />
    </div>
  );
};

export default ServicePage;
