import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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

const PublicTimelineCarousel = () => {
  const containerRef = useRef(null);
  const [cards, setCards] = useState([...timelineData, ...timelineData]); // duplicate for infinite
  const [index, setIndex] = useState(0);

  const gap = 32; // gap between cards

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.querySelector(".timeline-card");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + gap;
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
    setIndex((prev) => prev + 1);

    if (index + 1 >= timelineData.length) {
      setTimeout(() => {
        container.scrollLeft = 0;
        setIndex(0);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.querySelector(".timeline-card");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + gap;
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setIndex((prev) => (prev - 1 < 0 ? timelineData.length - 1 : prev - 1));
  };

  return (
    <div className="px-[5%] py-16 bg-black text-white relative">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-wide uppercase mb-8 text-center">
        Timeline
      </h1>

      {/* Scroll buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black rounded-full p-3 z-10 hover:bg-red-400"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black rounded-full p-3 z-10 hover:bg-red-400"
      >
        &#10095;
      </button>

      {/* Carousel container */}
      <motion.div
        ref={containerRef}
        className="flex gap-8 overflow-hidden cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
      >
        {cards.map((item, i) => (
          <motion.div
            key={i}
            className="
              timeline-card
              flex-shrink-0
              w-[90%] sm:w-full md:w-[45%] lg:w-[30%]  /* responsive widths */
              bg-gray-900
              shadow-lg
              snap-center
            "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {item.type === "iframe" ? (
              <div className="w-full h-60 sm:h-64 lg:h-72 aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={item.media}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <Link>
                <img
                  src={item.media}
                  alt={item.title}
                  className="w-full h-60 sm:h-64 lg:h-72 object-cover"
                />
              </Link>
            )}
            <div className="p-4">
              <h1 className="font-bold text-xl lg:text-2xl tracking-wide mb-2">{item.title}</h1>
              <div className="h-[4px] w-16 bg-red-500 mb-2"></div>
              <h2 className="text-gray-300">{item.location}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PublicTimelineCarousel;
