import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import praveen from "../assets/praveen.jpg"
import faika from "../assets/faika.jpg"
import bhoomika from "../assets/bhoomika.jpg"

const Aboutus = () => {
  return (
    <div className="bg-black text-white py-12 px-6 h-[100vp]">
      {/* About Us Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-md md:text-lg max-w-6xl mx-auto text-left px-2">
          We are students from the CSE branch, Bhoomika M, Faika Mehvish,
          Praveen Kumar R. We have developed this as our internship
          project, the HRM System. It focuses on employee management, including
          features like Admin management, Employee leave applications, and other
          essential functionalities, under the mentorship of Mrs. MC Padma Madam.
        </p>
      </motion.div>

      {/* Team Members Section */}
      <motion.div
        className="text-center mb-12 mx-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <h3 className="text-3xl font-bold mb-6">Team Members</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Team Member Card 1*/}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <img
              src={bhoomika}
              alt="Team Member 1"
              className="rounded-full w-[200px] h-[200px] mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Bhoomika M</h4>
          </motion.div>

          {/* Team Member Card 2*/}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <img
              src={faika}
              alt="Team Member 2"
              className="rounded-full w-[200px] h-[200px] mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Faika Mehvish</h4>
          </motion.div>

          {/* Team Member Card 3*/}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <img
              src={praveen}
              alt="Team Member 3"
              className="rounded-full w-[200px] h-[200px] mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Praveen Kumar R</h4>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Aboutus;
