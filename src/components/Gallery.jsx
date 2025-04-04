import React from "react";
import { motion } from "framer-motion";

const images = [
  "/imgs/galvalume/galvalume/1.png",
  "/imgs/galvalume/half_round/1.png",
  "/imgs/gutters/box/1.png",
  "/imgs/gutters/box_collector/1.png",
  "/imgs/gutters/commercial/1.png",
  "/imgs/gutters/half_round/1.png",
  "/imgs/gutters_roofing/1.png",
  "/imgs/home/1.webp",
  "/imgs/home/2.jpeg",

  "/imgs/gutters/box/4.png",
  "/imgs/gutters/copper/1.png",

  "/imgs/galvalume/galvalume/2.png",
  "/imgs/galvalume/half_round/2.png",
  "/imgs/gutters/box/2.png",
  "/imgs/gutters/box_collector/2.png",
  "/imgs/gutters/commercial/2.png",
  "/imgs/gutters/half_round/2.png",
  "/imgs/gutters_roofing/2.png",
  "/imgs/home/3.webp",
  "/imgs/home/4.webp",


  "/imgs/galvalume/galvalume/3.png",
  "/imgs/galvalume/half_round/3.png",
  "/imgs/gutters/box/3.png",
  "/imgs/gutters/box_collector/3.png",
  "/imgs/gutters/commercial/3.png",
  "/imgs/gutters/half_round/3.png",
  "/imgs/gutters_roofing/3.png",
  "/imgs/home/5.jpeg",
  "/imgs/home/6.webp",
];

const Gallery = () => {
  return (
    <section className="px-6 pt-28 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-8">
          Gallery
        </h2>   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((src, index) => {
          // Randomly make some images span more rows/cols
          const isLarge = index % 5 === 0 || index % 7 === 0;
          const spanClass = isLarge ? "col-span-2 row-span-2" : "";

          return (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg ${spanClass}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
