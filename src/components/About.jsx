// AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gray-100 py-0 pt-36">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At <span className="font-bold text-logo_blue">G&J Seamless Gutters</span>, we provide reliable roofing and gutter services to homeowners in Central Texas. Our skilled team is committed to delivering durable solutions with exceptional craftsmanship and customer satisfaction, ensuring your home stays safe and secure.</p>
        <motion.div
          className="bg-white p-8 rounded-lg shadow-xl mx-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600">
            Our mission is to provide Central Texas homeowners with reliable roofing and gutter services, offering expert installations and durable solutions that protect your home. We are committed to customer satisfaction, delivering high-quality craftsmanship tailored to the unique needs of the region.</p>
        </motion.div>

        {/* Parallax Effect Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-24 w-24 rounded-full bg-dark_blue mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <h4 className="text-xl font-semibold text-gray-800">Our Team</h4>
            <p className="text-gray-600 mt-2">
            Our skilled gutter and roofing team delivers reliable, high-quality services to protect your home with expert installations and exceptional craftsmanship."            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-24 w-24 rounded-full bg-logo_blue mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
            <p className="text-gray-600 mt-2">
            Our vision is to be the trusted leader in roofing and gutter solutions, providing durable, efficient, and cost-effective services that enhance the safety and value of every home."
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <h4 className="text-xl font-semibold text-gray-800">Our Values</h4>
            <p className="text-gray-600 mt-2">
            Our values are integrity, quality, and customer satisfaction. We believe in delivering reliable, long-lasting solutions with a focus on transparency and excellence in every project.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Parallax Background */}
      <div className="relative bg-logo_blue">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,web')",
          }}
          whileInView={{ y: [0, 20], opacity: [0.5, 1] }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="relative z-10 py-10 text-center text-white">
          <h3 className="text-4xl font-extrabold mb-4">Our Story</h3>
          <p className="text-lg px-10">
            Our story began with a simple mission: to provide Central Texas homeowners with dependable roofing and gutter solutions. Over the years, we've built a reputation for quality, integrity, and customer-first service. What started as a small team with a passion for craftsmanship has grown into a trusted name in the industry. We take pride in every project, big or small, and are committed to enhancing the safety and value of homes throughout the region. Our story is one of dedication, hard work, and a relentless focus on delivering exceptional service to our community.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
