import React from "react";
import { Link } from "react-router-dom";

// Images
import jd1 from "../assets/jd1.webp";
import jd2 from "../assets/jd2.webp";
import jd3 from "../assets/jd3.png";
import jd4 from "../assets/jd4.webp";
import jd5 from "../assets/jd5.png";
import jd6 from "../assets/md6.png";

const judgesData = [
  { img: jd1, title: "Bardon Hall Group Awards", link: "https://excellenceawards.brandonhall.com/tech-edtech-judges/" },
  { img: jd2, title: "Saas Awards", link: "https://www.khaleejtimes.com/kt-network/rakesh-datta-building-microsofts-disruptive-network-security-product" },
  { img: jd3, title: "Fortress Security Awards", link: "https://www.khaleejtimes.com/kt-network/rakesh-datta-building-microsofts-disruptive-network-security-product" },
  {
    img: jd4,
    title: "Rakesh Datta, Microsoft's Network Security leader, awarded with India's top honour Indian Achievers Award 2023",
    link: "https://www.khaleejtimes.com/kt-network/rakesh-datta-building-microsofts-disruptive-network-security-product",
  },
  { img: jd5, title: "Cloud Awards", link: "https://www.khaleejtimes.com/kt-network/rakesh-datta-building-microsofts-disruptive-network-security-product" },
  {
    img: jd6,
    title:
      "GOLD GLOBEE® WINNER Microsoft | Redmond, Washington, USA | Leading product development of Microsoft Entra Network Access | Rakesh Datta",
    link: "https://globeeawards.com/rakesh-datta/",
  },
];

const Judges = () => {
  return (
    <div className="judges bg-black text-white px-[5%] lg:px-[10%] py-16">
      <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase mb-5 mt-5 text-center">
        Invited Judges
      </h1>
      <div className="h-[4px] bg-red-500 mx-auto mb-10"></div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {judgesData.map((judge, index) => (
          <div
            key={index}
            className="  overflow-hidden shadow-lg hover:shadow-red-500/30 transition-all duration-300 p-4 flex flex-col items-center"
          >
            <Link to={judge.link} className="text-center">
              <img
                src={judge.img}
                alt={judge.title}
                className="w-full h-64 object-cover  mb-4"
              />
              <h2 className="text-red-500 font-bold text-xl lg:text-2xl">
                {judge.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
