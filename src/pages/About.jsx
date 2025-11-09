import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/about1.webp";
import img2 from "../assets/about2.jpg";

const About = () => {
  return (
    <div className="overflow-hidden bg-black text-white">
      <div className="px-[5%] py-10 space-y-20">

        {/* ---------- Section 1 ---------- */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10">
          {/* Text */}
          <motion.div
            className="text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.hr
              className="h-1 w-200 bg-red-500 border-none rounded-full my-5"
              initial={{ width: 0 }}
              whileInView={{ width: "190px" }}
              transition={{ duration: 0.8 }}
            />

            <h1 className="font-extrabold t text-3xl sm:text-4xl lg:text-5xl mb-5 tracking-wide uppercase">
              About
            </h1>

            <h2 className="text-2xl font-bold mb-7 t">
              Welcome to my world of adventures.
            </h2>

            <p className="text-lg  leading-relaxed">
              I have spent decades in the Network Software Development world as
              an Architect, Technical Leader, and Engineer. When you pick up
              your phone and dial a friend or family member, I am confident you
              use my code somehow. As an early architect of some of the world’s
              largest VOIP stacks, my work is utilized globally. When you open
              the Azure portal to create or delete resources, you use the
              software I made. Even when you fly with the biggest airlines in
              the USA and use the in-flight WiFi, you use my software. I love
              building networking software that powers the busiest
              infrastructures of the world. I thrive on cutting-edge projects
              and developing products used by billions worldwide. Collaborating
              with non-profits to enable new technologies is a passion of mine,
              with the hope that these innovations will one day make a real-world
              impact. Being surrounded by brilliant individuals who share the
              vision of “technology for good” inspires me. I’m humbled by their
              support and excited by the ever-growing challenges in my career,
              eager to take them on.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="img flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={img1}
              alt="About section"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* ---------- Section 2 ---------- */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-10">
          {/* Image */}
          <motion.div
            className="img flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={img2}
              alt="Networking software"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold  mb-5 text-right">
              I love building networking software
            </h1>

            <motion.hr
              className="h-1 w-200 bg-red-500 border-none rounded-full ml-auto my-5"
              initial={{ width: 0 }}
              whileInView={{ width: "190px" }}
              transition={{ duration: 0.8 }}
            />

            <p className="text-lg  leading-relaxed text-justify">
              This lights up the busiest infrastructures of the world. I thrive
              on cutting-edge projects and developing products used by billions
              worldwide. Collaborating with non-profits to enable new
              technologies is a passion of mine, with the hope that these
              innovations will one day make a real-world impact. Being surrounded
              by brilliant individuals who share the vision of “technology for
              good” inspires me. I’m humbled by their support and excited by the
              ever-growing challenges in my career, eager to take them on.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
