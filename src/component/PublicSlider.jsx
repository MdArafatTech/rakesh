import React from "react";
import { Link } from "react-router-dom";

// Images
import pb3 from "../assets/pb3.webp";
import pb4 from "../assets/pb4.webp";
import pb5 from "../assets/pb5.png";
import pb6 from "../assets/pb6.webp";

const timelineData = [
  { title: "Dec 2024: IKSEA Conference", location: "Cambridge, UK", media: pb3 },
  { title: "Sep 2024: Silicon Valley Cybersecurity Institute", location: "San Jose, USA", media: pb4 },
  { title: "May 2024: DeveloperWeek Management", location: "San Francisco, USA", media: pb5 },
  { title: "Feb 2024: DeveloperWeek", location: "San Francisco, USA", media: pb6 },
  {
    title: "April 2024: LinuxFest Northwest",
    location: "Blaine, Washington",
    media: "https://www.youtube.com/embed/ZNE-YZysPF0?si=Rrms_FmspRfhQ4JO",
    type: "iframe",
  },
];

const PublicTimeline = () => {
  return (
    <div className="px-[5%] py-16 bg-black text-white">
      <h1 className="text-3xl lg:text-6xl font-bold text-center uppercase mb-8">
        Timeline
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {timelineData.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            {item.type === "iframe" ? (
              <iframe
                className="w-full h-48"
                src={item.media}
                title={item.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <Link>
                <img
                  src={item.media}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}

            <div className="p-4">
              <h1 className="font-bold text-lg mb-2">{item.title}</h1>
              <div className="h-[3px] w-12 bg-red-500 mb-2"></div>
              <p className="text-gray-300 text-sm">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicTimeline;
