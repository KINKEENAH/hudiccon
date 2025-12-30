import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false}}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          }
        }
      }}
      className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.9 }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default Typewriter;