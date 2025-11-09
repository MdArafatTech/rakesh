import React from "react";
import pb1 from "../assets/pb1.jpg";
import pb2 from "../assets/pb2.webp";
import pb3 from "../assets/pb3.webp";
import pb4 from "../assets/pb4.webp";
import pb5 from "../assets/pb5.png";
import pb6 from "../assets/pb6.webp";
import galaryimg1 from "../assets/galary1.webp";
import galaryimg2 from "../assets/galary2.webp";
import galaryimg3 from "../assets/galary3.webp";

import { Link } from "react-router";
import PublicSlider from "../component/PublicSlider";

const Public = () => {
  return (
    <div className="px-[5%] bg-black text-white">
      <div className="public">

        {/* Speaking Section */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center gap-5 mb-10">
          <div className="text">
            <div className="h-[4px] w-1/2 bg-red-500 mb-4"></div>
            <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase mb-4">
              Speaking
            </h1>
            <h2 className="font-bold text-2xl lg:text-4xl tracking-wide uppercase mb-4">
              Justifying why research is important can be difficult.
            </h2>
            <p className="lg:text-xl tracking-wide mb-4">
              This is especially true when dealing with blue-skies research
              where applications and commercial routes are in the distant
              horizon. Meanwhile, blue-skies research is often the most exciting
              and most ambitious kind of projects one can work on.
              <br /><br />A trade-off! It’s therefore pertinent that we plan,
              optimise, and clearly communicate our ideas and efforts to the
              various stakeholders (public or private).
            </p>
          </div>
          <div className="img w-full">
            <img src={pb1} alt="Speaking" className="w-full h-auto" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-items-center gap-5 mb-10">
          <div className="img w-full">
            <img src={pb2} alt="Speaking" className="w-full h-auto" />
          </div>
          <div className="text lg:text-xl tracking-wide">
            <p className="mb-4">
              When speaking to a specialised or otherwise audience, I always
              choose my words judiciously such that they are both accurate in
              describing the purpose, function, and reasoning of my research,
              but also, I chose my words such that they instil an expansive
              character, thus encouraging the audience to pause and think of the
              implications and potential impact of what is being proposed. To
              date, I have presented, discussed and taught science in numerous
              international conferences, workshop events and fairs to the
              general public, university students, leading academics, VIP
              business executives, and members of the UK Parliament.
            </p>

            <p className="font-bold my-4">
              Get in touch if you’d like me to speak at your event or
              conference.
            </p>

            <Link>
              <div className="btn bg-orange-600 text-white h-12 w-40 mb-5 hover:bg-orange-300 hover:text-gray-700 flex items-center justify-center">
                Get In Touch
              </div>
            </Link>
          </div>
        </div>

        <div className="h-[4px] bg-red-500 my-10"></div>

        {/* Timeline Section */}


        {/* <div className="space-y-10">
          {[
            { img: pb3, title: "Dec 2024: IKSEA Conference", location: "Cambridge, UK" },
            { img: pb4, title: "Sep 2024: Silicon Valley Cybersecurity Institute", location: "San Jose, USA" },
            { img: pb5, title: "May 2024: DeveloperWeek Management", location: "San Francisco, USA" },
            { img: pb6, title: "Feb 2024: DeveloperWeek", location: "San Francisco, USA" },
          ].map((item, idx) => (
            <div key={idx} className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
              <Link>
                <img src={item.img} alt={item.title} className="w-full h-auto" />
              </Link>
              <div className="text">
                <h1 className="font-bold text-2xl lg:text-4xl tracking-wide uppercase mb-4 mt-5">
                  {item.title}
                </h1>
                <div className="h-[4px] w-16 bg-red-500 mb-3"></div>
                <h2 className="text-xl font-bold mb-5">{item.location}</h2>
              </div>
            </div>
          ))}

          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
            <div className="text">
              <h1 className="font-bold text-2xl lg:text-4xl tracking-wide uppercase mb-4 mt-5">
                April 2024: LinuxFest Northwest
              </h1>
              <div className="h-[4px] w-16 bg-red-500 mb-3"></div>
              <h2 className="text-xl font-bold mb-5">Blaine, Washington</h2>
            </div>
            <div className="w-full h-auto aspect-video overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZNE-YZysPF0?si=Rrms_FmspRfhQ4JO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div> */}

        <PublicSlider></PublicSlider>

        {/* Gallery Section */}
        <div className="galary mt-16">
          <h1 className="text-2xl lg:text-4xl font-bold text-center text-red-500 mb-6">
            Gallery
          </h1>
          <div className="galary-img grid sm:grid-cols-1 lg:grid-cols-3 gap-3">
            <img src={galaryimg1} alt="Gallery 1" className="w-full h-auto" />
            <img src={galaryimg2} alt="Gallery 2" className="w-full h-auto" />
            <img src={galaryimg3} alt="Gallery 3" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
