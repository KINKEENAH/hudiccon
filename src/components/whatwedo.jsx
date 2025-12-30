import React from "react";
import whatwedo from "../assets/images/whatwedo.png";
import { motion } from "framer-motion";

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16 "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 relative">
          {/* Large Decorative Code Icon Background */}
          <div className="absolute -top-20 -left-10 opacity-10 pointer-events-none">
            <svg
              className="w-96 h-96 text-blue-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>

          {/* Icon and Title */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="text-blue-600 text-4xl">
              {/* <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg> */}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {"What We Do "}
            </h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              Hudiccon put emphasis on the reproductive health of young people,
              and the sinking image of women in the society by empowering them
              socially and economically. <br />
              This empowerment prepares them to meet challenges of adolescent
              and adulthood through a coordinated progressive sense of
              activities and experience which help them become socially,
              morally, emotionally, physically and positively competent.
            </p>
          </motion.p>
        </div>

        {/* Right Side - Image with Text Overlay */}
        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img
            src={whatwedo}
            alt="Workspace with laptop and mouse"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Excellence Label */}
          <div className="absolute top-8 right-8 text-gray-400 text-sm font-semibold">
            Excellence
          </div>

          {/* Text Overlay - Lines slide from different directions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.4,
                },
              },
            }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
          >
            {/* Slides from left */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 0.9, x: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Learn
            </motion.h2>

            {/* Slides from right */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 0.9, x: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Build
            </motion.h2>

            {/* Slides from bottom */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 0.9, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Grow
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
