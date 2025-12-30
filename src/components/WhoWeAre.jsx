

import { motion } from "framer-motion";
import community from '../assets/images/community.png'

export default function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16"
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Text fades in from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: false }}
          className="space-y-6 relative"
        >
          <div className="flex items-center gap-4 relative z-10">
            {/* <div className="text-blue-600 text-4xl">🌍</div> */}
            <svg
              className="w-12 h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {"Who We Are "}
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed relative z-10">
            Humanitarian development consent centre is an organization that was
            established in October, 2016 and duly registered with the registrar
            general in November 2022 refer CG084431122. It's main aim is to
            pursue programs aimed at eliminating poverty and hunger, reduce
            social exclusion and all forms of social inequalities and also the
            development of human and social capital through assess to education
            and skills training, comprehensive health and better nutrition.
          </p>
        </motion.div>

        {/* Right Side - Image with animated text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.0 }}
          viewport={{ once: false }}
          className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            // src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            src = {community}
            alt="Community"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Text appears after image loads */}

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8,  ease:"easeOut" }}
            viewport={{ amount: 0.4 }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            <motion.h2
              animate={{
                y: [0, -20, 0], // Moves up 20px, then back down
              }}
              transition={{
                duration: 3, // Takes 3 seconds
                repeat: Infinity, // Repeats forever
                ease: "easeInOut",
              }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center"
            >
              Empowering
              <br />
              Computer
              <br />
              Scientists
            </motion.h2>
          </motion.div> */}
          {/* Text Overlay - Fade with blur */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
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
            <motion.h2
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { opacity: 0.9, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Empowering
            </motion.h2>

            <motion.h2
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { opacity: 0.9, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Societal
            </motion.h2>

            <motion.h2
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { opacity: 0.9, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
            >
              Change
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
