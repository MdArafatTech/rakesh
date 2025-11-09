import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, useViewportScroll, useTransform } from "framer-motion";

const AwardItem = ({ award }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ color: isInView ? "#f87171" : "#fff" });
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-start mb-16"
    >
      {/* Icon */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-900"
          animate={controls}
        >
          <motion.span
            className={`transition-colors duration-500 ${
              isInView ? "text-red-500" : "text-white"
            }`}
          >
            🎖
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="ml-6 flex-1">
        <motion.h4
          className="text-lg font-semibold text-red-400 mb-1"
          animate={controls}
        >
          {award.year}
        </motion.h4>
        <motion.h3
          className="text-xl font-bold mb-2 transition-colors duration-500"
          animate={controls}
        >
          {award.title}
        </motion.h3>
        {award.organization && <p className="text-gray-400">{award.organization}</p>}
      </div>
    </motion.div>
  );
};

const Award = () => {
  const [awards, setAwards] = useState([]);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const [lineHeight, setLineHeight] = useState(0);
  const height = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  useEffect(() => {
    fetch("/award.json")
      .then((res) => res.json())
      .then((data) => setAwards(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      setLineHeight(timelineRef.current.scrollHeight);
    }
  }, [awards]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white px-[5%] py-16 relative"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase mb-4">
          My Awards
        </h1>
        <div className="h-[4px] bg-red-500 mx-auto mb-4"></div>
        <h2 className="font-bold text-2xl lg:text-3xl tracking-[8px] text-gray-300">
          Achievements
        </h2>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <motion.div
          className="absolute left-5 top-0 w-[2px] bg-red-500 origin-top"
          style={{ height }}
        />

        {/* Awards items */}
        {awards.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </motion.div>
  );
};

export default Award;
