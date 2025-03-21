// ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate name (required)
    if (!formData.name) {
      formErrors.name = 'Name is required.';
    }

    // Validate email (required and valid email format)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    // Validate service (required)
    if (!formData.service) {
      formErrors.service = 'Please select a service.';
    }

    // Validate message (required)
    if (!formData.message) {
      formErrors.message = 'Message is required.';
    }

    // Check if there are any errors
    if (Object.keys(formErrors).length === 0) {
      // Submit the form data (you can send this to the backend)
      console.log('Form data submitted:', formData);

    } else {
      setErrors(formErrors);
    }
  };

  // Declare service options with numeric values (0-4)
  const serviceOptions = [
    { value: 0, label: 'Select a Service' },
    { value: 1, label: 'Gutter Installation' },
    { value: 2, label: 'Gutter Cover' },
    { value: 3, label: 'Gutter Cleaning' },
    { value: 4, label: 'Roofing' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className="w-full max-w-lg text-gray-50 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="service">
              Service Needed
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-2">{errors.service}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
