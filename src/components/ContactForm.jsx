import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
    enquiryFor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
        enquiryFor: "",
    });
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10 flex flex-wrap-reverse  md:flex-row items-center">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-[#034D26]">Contact us</h2>
        <p className="text-gray-600 mb-4">Please fill out the form and we will reach out to you soon</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Leave a message</label>
            <textarea
              name="message"
              placeholder="Type here"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Enquiry for</label>
            <select
              name="enquiryFor"
              value={formData.enquiryFor}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              required
            >
              <option value="">Select an option</option>
              <option value="Certification">Certification</option>
              <option value="Compliance">Compliance</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <button type="submit" className="w-full p-3 bg-[#008F78] text-white rounded-md hover:bg-[#006653]">
            Submit
          </button>
        </form>
      </div>
      
      

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="https://via.placeholder.com/300x250" // Replace with actual image URL
          alt="Contact"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
