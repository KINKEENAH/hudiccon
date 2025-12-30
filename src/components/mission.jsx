import React from "react";
import { motion } from "framer-motion";
import development from "../assets/images/development.png";
import Typewriter from "./typewriter";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 lg:px-16 "
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Image with Text Overlay */}
        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img
            src={development}
            alt="Innovation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />



          <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
            <Typewriter
              text="Shaping the"
              delay={0.5}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            />
            <Typewriter
              text="Future with"
              delay={1.2}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-2"
            />
            <Typewriter
              text="Positive "
              delay={1.9}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-2"
            />
            <Typewriter
              text="Competent"
              delay={2.1}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-2"
            />
          </div>
        </div>

        {/* Right Side - Vision Content */}
        <div className="space-y-6">
          {/* Icon and Title */}
          <div className="flex items-center gap-4">
            <div className="text-blue-900 text-4xl">🔭</div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
              {"Our Mission"}
            </h3>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              To work in partnership with development agencies, civil society
              groups, government and communities to improve and sustain the
              livlihood and the resources of the poor by increasing their
              capacity and skills to influence policies that affect them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
