import React from 'react'
import { motion } from 'framer-motion'
import { textVariants, yVariants, containerVariants } from '../Variants'
import InfiniteCarousel from '../InfiniteCarousel'

const imgs=[
  "/imgs/bh_1.webp",
  "/imgs/bh_2.webp",
  "/imgs/blue_1.webp",
  "/imgs/copper_1.webp",
  "/imgs/g_1_1.webp",
  "/imgs/g_1_2.webp",
  "/imgs/g_1_3.webp",
  "/imgs/g_1_4.webp"
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
        <motion.div className='col-span-1 bg-inherit rounded-lg shadow-lg'
          style={{
            backgroundImage: `url(/imgs/metal/main.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '300px' // Add a minimum height
          }}
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
        >
        </motion.div>        
        <div> 
          <div className='col-span-1 font-extrabold text-6xl text-left'>
            <p className='pb-3'>Metal Roofing Installation</p>
            <hr className='w-1/2'/>
          </div>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            When it comes to durability, energy efficiency, and long-lasting protection, metal roofing is the perfect choice for homeowners and businesses in Central Texas. At G&J Seamless Gutters, we specialize in providing expert metal roofing installation, repair, and maintenance services. Whether you’re building a new home, replacing an old roof, or upgrading your commercial property, our experienced team is here to deliver superior results.
          </motion.p>
        </div>
      </motion.div>
      <div className='pt-20 font-extrabold text-6xl text-center px-10'>
        <p>Why Choose Metal Roofing for Your Property?</p>
      </div>
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
          <p className='bold text-3xl pb-3'>Durability & Longevity</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Metal roofs are known for their resilience, able to withstand extreme weather conditions like heavy storms, high winds, and intense heat. With proper installation, a metal roof can last up to 50 years or more.

          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Energy Efficiency</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Metal roofs reflect heat, which helps keep your home or business cooler in the summer and reduces energy costs. This makes metal roofing an eco-friendly choice for properties in Central Texas.
          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Low Maintenance</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Unlike traditional roofing materials, metal roofs require minimal maintenance and are resistant to issues like rotting, cracking, or warping, saving you money on repairs and upkeep.          </motion.p>
        </motion.div>
      </motion.div>
      <div className='pt-20 font-extrabold text-6xl text-center pb-10'>
        <p className='pb-3'>Quality Metal Roofing, Expertly Installed.</p>
      </div>
      <div className='pb-20'>
        <InfiniteCarousel images={imgs}/>
      </div>
    </div>
  )
}
