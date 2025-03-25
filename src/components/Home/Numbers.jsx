import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { animate, useInView } from "framer-motion";
import { containerVariants } from "../Variants";
import { yVariants } from "../Variants";

export const Numbers = () => {
  return (
    <motion.div className="mx-auto max-w-4xl px-4 pt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <motion.div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10"
        variants={yVariants}
      >
        <Stat
          num={20}
          suffix="+"
          subheading="Exceeding 20 years of experience"
        />
        <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" />
        <Stat
          num={500}
          suffix="K+"
          subheading="Over 500K Feet of Gutters Installed"
        />
        {/* <div className="h-[1px] w-12 sm:h-12 sm:w-[1px]" />
        <Stat
          num={25}
          suffix="K+"
          subheading="Over 25K Signs Installed"
        /> */}
      </motion.div>
    </motion.div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading, delay=100 }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || hasAnimated) return; // Only run animation if it's in view and hasn't already run

    const timer = setTimeout(() => {
      setHasAnimated(true); // Set the state to prevent animation from running again

      animate(0, num, {
        duration: 2.5,
        onUpdate(value) {
          if (!ref.current) return;

          ref.current.textContent = value.toFixed(decimals);
        },
      });
    }, delay);

    // Cleanup timeout on component unmount or if dependencies change
    return () => clearTimeout(timer);
  }, [num, decimals, isInView, hasAnimated, delay]);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl text-logo_blue">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center">{subheading}</p>
    </div>
  );
};
