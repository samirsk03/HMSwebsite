import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    setFormData({ emailOrPhone: "", password: "" });
    alert("submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E9F3ED]">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Logo & Heading */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h2 className="text-xl font-bold text-gray-800">Welcome to Halal India</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Please login to get access to all the services
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Email or Phone Number
            </label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter here"
              className="w-full p-3 mt-1 border rounded-lg text-gray-800 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 mt-1 border rounded-lg text-gray-800 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#008F78] text-white py-3 rounded-lg font-semibold hover:bg-[#007460] transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          New user?{" "}
          <a href="#" className="text-green-600 font-semibold hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
