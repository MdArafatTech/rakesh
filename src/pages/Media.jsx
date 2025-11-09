import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import images
import news1 from "../assets/md1.png";
import news2 from "../assets/md2.png";
import news3 from "../assets/md3.png";
import news4 from "../assets/md4.png";
import news5 from "../assets/md5.png";
import news6 from "../assets/md6.png";
import news7 from "../assets/md7.png";

const images = [news1, news2, news3, news4, news5, news6, news7];

const Media = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/media.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error loading media:", err));
  }, []);

  return (
    <div className="media bg-black text-white px-[2%] lg:px-[10%] py-16">
      <h1 className="font-bold text-3xl lg:text-6xl tracking-wide uppercase mt-5 mb-10 text-center">
        Media Coverage
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/30 transition-all duration-300"
          >
            {images[index] && (
              <img
                src={images[index]}
                alt={article.title}
                className="w-full object-cover h-64"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold text-red-400 mb-2">{article.title}</h2>
              <p className=" text-sm">{article.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Media;
