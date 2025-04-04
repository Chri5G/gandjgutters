import React from 'react'
import { motion } from 'framer-motion'
import { textVariants, yVariants, containerVariants } from '../Variants'
import InfiniteCarousel from '../InfiniteCarousel'

const imgs=[
  "/imgs/gutters/commercial/1.png",
  "/imgs/gutters/commercial/2.png",
  "/imgs/gutters/commercial/3.png",
  "/imgs/gutters/commercial/4.jpg",
  "/imgs/home/1.webp",
  "/imgs/home/2.jpeg",
  "/imgs/home/3.webp",
  "/imgs/home/4.webp",
  "/imgs/home/5.jpeg",
  "/imgs/home/6.webp",
]

export default function Commercial() {
  return (
    <div className='bg-gray-50 pt-32'>
      <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
      <div> 
          <div className='font-extrabold text-6xl text-left order-last md:order-first'>
            <p className='pb-3'>Commercial Gutter Installation</p>
            <hr className='w-1/2'/>
          </div>
            <motion.p className='pt-3'
              variants={textVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >At G&J Seamless Gutters, we understand that a well-functioning gutter system is critical to the protection and longevity of your commercial property. Serving Austin, TX, and Central Texas, we specialize in professional commercial gutter installation, repair, and maintenance. Whether you’re managing a retail store, office building, industrial facility, or multi-family property, our team delivers high-quality, durable, and efficient gutter systems designed to meet the specific needs of your commercial property.</motion.p>
        </div>
        <motion.div className='bg-inherit rounded-lg shadow-lg order-first md:order-last'
            style={{ backgroundImage: `url(/imgs/gutters/commercial/3.png)`,
              backgroundPosition: 'center',  // Center the image
              backgroundSize: 'cover',       // Ensure it covers the div 
              backgroundRepeat: 'no-repeat',  // No repeat
              minHeight: '300px',
            }}
            variants={yVariants}
            whileHover={{ scale: 1.1 }}

        >        
        </motion.div>
      </motion.div>
      <motion.div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-50 gap-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Why G&J</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >For over 20 years, G&J Seamless Gutters has helped homeowners and businesses across Central Texas protect their properties from costly water damage. We specialize in seamless gutter systems designed to withstand the elements while improving the look and functionality of your roofline, all backed by expert installation and trusted service.</motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Why Rain Gutters</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Rain gutters protect your property by redirecting water away from your foundation, roof, and landscaping. They prevent erosion, cracks, and water damage, while also reducing the risk of basement flooding. Seamless gutters enhance curb appeal and increase property value, making them a smart investment for any Central Texas home or business.
          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>What are Seamless Rain Gutters</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >Seamless rain gutters are the best choice for protecting your home from water damage. Without seams, they’re less likely to leak or clog, ensuring smooth water flow away from your foundation. They require less maintenance, last longer, and enhance your home’s curb appeal, making them a smart, long-term investment.</motion.p>

        </motion.div>
      </motion.div>
      <div className='pt-20 font-extrabold text-6xl text-center pb-10'>
        <p className='pb-3'>Quality Commercial Gutters, Expertly Installed.</p>
      </div>
      <div className='pb-20'>
        <InfiniteCarousel images={imgs}/>
      </div>
    </div>
  )
}
