import React from 'react'
import { motion } from 'framer-motion'
import { textVariants, yVariants, containerVariants } from '../Variants'
import InfiniteCarousel from '../InfiniteCarousel'

const imgs=[
  "/imgs/gutters/box/1.png",
  "/imgs/gutters/box_collector/1.png",
  "/imgs/gutters/half_round/1.png",
  "/imgs/gutters/box/2.png",
  "/imgs/gutters/box_collector/2.png",
  "/imgs/gutters/half_round/2.png",
  "/imgs/gutters/box/3.png",
  "/imgs/gutters/box_collector/3.png",
  "/imgs/gutters/half_round/3.png",
  "/imgs/gutters/box/4.png",
]

export default function Residential() {
  return (
    <div className='bg-gray-50 pt-32'>
      <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10 '
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div> 
          <div className='font-extrabold text-6xl text-left order-last md:order-first'>
            <p className='pb-3'>Residential Gutter Installation</p>
            <hr className='w-1/2'/>
          </div>
            <motion.p className='pt-3'
              variants={textVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Are you in need of reliable and efficient residential gutter installation in Central Texas? Look no further! At G&J Seamless Gutters, we specialize in providing top-notch gutter installation services that protect your home from water damage while enhancing its curb appeal. Whether you're building a new home or upgrading your current gutters, we are here to help with expert advice, quality materials, and precise installation.
            </motion.p>
        </div>
        <motion.div className='bg-inherit rounded-lg shadow-lg order-first md:order-last'
          style={{ backgroundImage: `url(/imgs/home/3.webp)`,
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
        <p className='pb-3'>Quality Residential Gutters, Expertly Installed.</p>
      </div>
      <div className='pb-20'>
        <InfiniteCarousel images={imgs}/>
      </div>
    </div>
  )
}
