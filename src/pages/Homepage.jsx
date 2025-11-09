// import React from "react";
// import img1 from '../assets/portrait_2.jpg'
// import img2 from '../assets/40_under_40.jpeg'

// const Homepage = () => {
//   return (


//     <div>
//     <div className="px-[5%] py-10 grid lg:grid-cols-2 sm:grid-cols-1 items-center">
//       {/* Main Section */}
//       <div className="text">
//         {/* Name */}
//       <h1 className="text-xl sm:text-xl lg:text-3xl">
//           RAKESH DATTA
//         </h1>

//         {/* Red Line */}
//         <div className="my-4">
//           <hr className="  h-1 mr-[40%] bg-red-500 border-none " />
//         </div>

//         {/* Titles */}
//         <div className="flex flex-col items-start text-left font-bold gap-2 leading-tight">
//           <h1 className="text-xl sm:text-3xl lg:text-5xl">
//             ENGINEERING LEADER.
//           </h1>
//         <h1 className="text-xl sm:text-3xl lg:text-5xl">
//             TECHNOLOGIST.
//           </h1>
//         <h1 className="text-xl sm:text-3xl lg:text-5xl">
//             RESEARCHER.
//           </h1>
//         </div>
//       </div>
// <div className="img">
//     <img className="my-5 " src={img1} alt="" />
// </div>



//     </div>
// <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold px-[10%] mb-10 leading-snug text-left">
//   An industry veteran in the networking and security space, experienced researcher with a track record at leading R&D teams, developing high-scale products, whilst being passionate about deep-tech innovation that leads to impact.
// </h1>


// <div className="bg-white grid lg:grid-cols-2 ">
    
//     <img src={img2} alt="" />

//     <div className="text bg-gray-200  text-black">
//         <h1 className="text-3xl font-bold text-center mt-5">Biography</h1>

//          <div className="my-4 ">
//           <hr className="  h-2  mx-[20%]   bg-red-500 border-none " />
//         </div>

//         <h1 className="ml-5 text-xl mb-10">Welcome to my world of adventures. I have spent decades in the Network Software Development world as an Architect, Technical Leader, and Engineer.​ When you pick up your phone and dial a friend or family member, I am confident you use my code somehow. As an early architect of some of the world’s largest VOIP stacks, my work is utilized globally. When you open the Azure portal to create or delete resources, you use the software I made. Even when you fly with the biggest airlines in the USA, and use the in-flight wifi, you use my software. I love building networking software, that lights up the busiest infrastructures of the world. I thrive on cutting-edge projects and developing products used by billions worldwide. Collaborating with non-profits to enable new technologies is a passion of mine, with the hope that these innovations will one day make a real-world impact. Being surrounded by brilliant individuals who share the vision of “technology for good” inspires me. I’m humbled by their support and excited by the ever-growing challenges in my career, eager to take them on</h1>
//  <div className="btn bg-orange-600 text-xl rounded-3xl px-13 py-8 ml-5 border-none my-10 hover:bg-gray-200 hover:text-orange-600 ">About Me</div>
        
//     </div>
// </div>

//     </div>
//   );
// };

// export default Homepage;


import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/portrait_2.jpg";
import img2 from "../assets/40_under_40.jpeg";

const Homepage = () => {
  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <div className="px-[5%] py-10 grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-10">
        {/* Left Content */}
        <motion.div
          className="text "
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-xl sm:text-xl lg:text-3xl font-semibold tracking-wide">
            RAKESH DATTA
          </h1>

          <motion.div
            className="my-4"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <hr className="h-1 bg-red-500 border-none rounded-full" />
          </motion.div>

          <div className="flex flex-col items-start text-left font-bold gap-2 leading-tight">
            {["ENGINEERING LEADER.", "TECHNOLOGIST.", "RESEARCHER."].map(
              (title, index) => (
                <motion.h1
                  key={index}
                  className="text-xl sm:text-3xl lg:text-5xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.2,
                  }}
                >
                  {title}
                </motion.h1>
              )
            )}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="img flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            src={img1}
            alt="Rakesh Datta portrait"
          />
        </motion.div>
      </div>

      {/* Intro Text */}
      <motion.h1
        className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold px-[10%] mb-10 leading-snug text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        An industry veteran in the networking and security space, experienced
        researcher with a track record at leading R&D teams, developing
        high-scale products, whilst being passionate about deep-tech innovation
        that leads to impact.
      </motion.h1>

      {/* Biography Section */}
      <div className="bg-white grid lg:grid-cols-2 shadow-inner">
        <motion.img
          src={img2}
          alt="Award photo"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          className="text bg-gray-100 text-black px-5 lg:px-10 py-8"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-center mt-2">Biography</h1>

          <motion.div
            className="my-4"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            transition={{ duration: 1 }}
          >
            <hr className="h-2 mx-auto bg-red-500 border-none rounded-full" />
          </motion.div>

          <p className="text-lg mb-10 leading-relaxed text-justify">
            Welcome to my world of adventures. I have spent decades in the
            Network Software Development world as an Architect, Technical
            Leader, and Engineer. When you pick up your phone and dial a friend
            or family member, I am confident you use my code somehow. As an
            early architect of some of the world’s largest VOIP stacks, my work
            is utilized globally. When you open the Azure portal to create or
            delete resources, you use the software I made. Even when you fly
            with the biggest airlines in the USA and use the in-flight WiFi, you
            use my software. I love building networking software that lights up
            the busiest infrastructures of the world. I thrive on cutting-edge
            projects and developing products used by billions worldwide.
            Collaborating with non-profits to enable new technologies is a
            passion of mine, with the hope that these innovations will one day
            make a real-world impact. Being surrounded by brilliant individuals
            who share the vision of “technology for good” inspires me.
          </p>

          <motion.button
            className="bg-orange-600 text-white text-lg rounded-full px-8 py-3 border-none my-5 hover:bg-gray-200 hover:text-orange-600 transition-colors duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
