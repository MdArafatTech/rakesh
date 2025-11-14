import React from 'react';
import img from '../assets/portrait_2.jpg';

const Publications = () => {
  return (
    <div className="publication bg-black">

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-8 px-[5%]">

        {/* Text Section */}
        <div className="text flex flex-col">
          <div className="hidden lg:block w-full h-1 bg-red-500 mb-4"></div>

          <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase my-4">
            Publication
          </h1>

          <div className="block lg:hidden w-full h-1 bg-red-500 mt-4 mb-4"></div>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-5">
            <a
              href="https://scholar.google.com/citations?user=3XQW08wAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent bg-orange-500 text-white rounded-3xl text-center py-2"
            >
              GOOGLE SCHOLAR
            </a>

            <a
              href="https://www.researchgate.net/profile/Rakesh-Datta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent bg-orange-500 text-white rounded-3xl text-center py-2"
            >
              RESEARCH GATE
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="img flex justify-center">
          <img
            src={img}
            alt="Publication"
            className="w-full rounded object-cover"
          />
        </div>

      </div>

      {/* Journel Publications Section */}
      <div className="bg-white py-8 mt-8">
        <div className="px-[5%]">
          <h1 className="text-black text-2xl lg:text-3xl tracking-wide uppercase my-4">
            Journal Publications
          </h1>
          <div className="w-full h-1 bg-red-500 mb-6"></div>

          <ul className=" text-[16px] text-gray-800">
            <li>
              <strong>1. Datta, R., Choi, S., Chowdhary, A., & Park, Y. (2018).</strong> 
              P4Guard: Designing P4 Based Firewall. <a className="text-orange-500 underline" href="https://doi.org/10.1109/milcom.2018.8599726" target="_blank" rel="noopener noreferrer"> https://doi.org/10.1109/milcom.2018.8599726</a>
            </li>
            <li>
              <strong> 2. Mitra, A., Palit, S., Chaudhuri, B., Kundu, S., Pathak, S., & Datta, R. (2008).</strong> 
              A New Partial Image Encryption Method for Secured Multimedia Communication. <a className="text-orange-500 underline" href="https://www.researchgate.net/publication/327513663" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/327513663</a>
            </li>
            {/* Add more journal publications here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publications;
