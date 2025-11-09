import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const TimelineItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ color: isInView ? "#f87171" : "#fff" });
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative flex items-start mb-16">
      {/* Icon */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-900"
          animate={controls}
        >
          <FaCalendarAlt
            className={`transition-colors duration-500 ${
              isInView ? "text-red-500" : "text-white"
            }`}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="ml-6 flex-1">
        <motion.h4
          className="text-lg font-semibold text-red-400 mb-1"
          animate={controls}
        >
          {item.year}
        </motion.h4>
        <motion.h3
          className="text-xl font-bold mb-2 transition-colors duration-500"
          animate={controls}
        >
          {item.position}
        </motion.h3>
        <p className="text-gray-300">{item.organization}</p>
        <p className="text-gray-400">{item.location}</p>
      </div>
    </div>
  );
};

const Roles = () => {
  const [rolesData, setRolesData] = useState([]);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const [lineHeight, setLineHeight] = useState(0);
  const height = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  useEffect(() => {
    fetch("/roles.json")
      .then((res) => res.json())
      .then((data) => setRolesData(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      setLineHeight(timelineRef.current.scrollHeight);
    }
  }, [rolesData]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-[5%] py-16 relative">
      {/* Header */}
      <div className="mb-16">
        <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase mb-4">
          Roles
        </h1>
        <div className="h-[4px] bg-red-500 mx-auto mb-4"></div>
        <h2 className="font-bold text-2xl lg:text-3xl text-center tracking-[8px]">
          TIMELINE
        </h2>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="max-w-3xl mx-auto relative">
        <motion.div
          className="absolute left-5 top-0 w-[2px] bg-red-500 origin-top"
          style={{ height }}
        />

        {rolesData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Roles;
