import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedDiv = ({ children, value, direction }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: value, opacity: 0 }}
      animate={controls}
      className=""
    >
      {children}
      
    </motion.div>
  );
};

export default AnimatedDiv;