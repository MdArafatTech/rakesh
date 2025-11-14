import React from 'react';
import img from '../assets/resume.webp';

const Resume = () => {
  return (
    <div className="resume">
      {/* Header Section */}
      <div className="bg-black py-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-center text-white tracking-wide uppercase">
          Resume
        </h1>
      </div>

      {/* Image Section */}
      <div className="bg-white flex justify-center py-8 px-4">
        <img
          src={img}
          alt="Resume"
          className="max-w-full h-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
