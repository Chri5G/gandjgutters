import React from 'react'
import { motion } from 'framer-motion'
import Reviews from './Reviews'
import { cardVariants } from './Variants'
import { containerVariants } from './Variants'
import { yVariants } from './Variants'
import { textVariants } from './Variants'
import { Numbers } from './Numbers'
import UniformCarousel from './UniformCarousel'

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

export default function Home() {
  return (
    <div className='bg-gray-50 pt-36'>
      <motion.p className='p-20 font-extrabold text-center text-6xl bg-logo_blue'
        variants={yVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        Central Texas Experts in <span className='text-dark_blue'>Roofing</span> & <span className='text-dark_blue'>Rain Gutter</span> Installation
      </motion.p>
      <motion.div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-50 gap-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='col-span-1 p-10 bg-dark_blue rounded-lg'
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
        <motion.div className='col-span-1 p-10 bg-dark_blue rounded-lg'
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
        <motion.div className='col-span-1 p-10 bg-dark_blue rounded-lg'
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
      {/* <div className='py-20'>
        <Reviews />
      </div> */}
      <div className='py-10'>
        <UniformCarousel images={imgs} />
      </div>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 p-20 bg-dark_blue gap-5'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='col-span-1 md:col-span-2 order-1'
          variants={yVariants}
        >
          <p className='font-extrabold text-4xl pb-3'>G&J Seamless Rain Gutters - Gutter Installtion Company in Central TX</p>
          <hr className='w-1/2'/>
          <p className='pt-3'>Our company, G&J Seamless Rain Gutters, is dedicated to providing top-quality seamless gutter installation and repair services to our valued customers. We are a team of highly skilled professionals who take pride in our work and strive for excellence in every project we undertake. Our customers are our top priority and we always go the extra mile to ensure their complete satisfaction. With 20 years of experience in the industry, we have established ourselves as a trusted and reliable source for all your rain gutter needs. We believe in transparency, honesty, and integrity, which are the core values that drive our business. Our goal is to provide you with a seamless experience from start to finish.</p>
        </motion.div>
        <div className="rounded-xl h-96 bg-inherit shadow-xl order-2"
          style={{ backgroundImage: `url(/imgs/guards.webp)`,
                    backgroundPosition: 'center',  // Center the image
                    backgroundSize: 'cover',       // Ensure it covers the div 
                    backgroundRepeat: 'no-repeat'  // No repeat
                }}
        >
        </div>
        <div className="rounded-xl h-96 bg-inherit shadow-xl order-4 md:order-3"
          style={{ backgroundImage: `url(/imgs/home1.webp)`,
                    backgroundPosition: 'center',  // Center the image
                    backgroundSize: 'cover',       // Ensure it covers the div 
                    backgroundRepeat: 'no-repeat'  // No repeat
                }}
        >
        </div>
        <div className='col-span-1 md:col-span-2 order-3 md:order-4'>
          <p className='flex flex-col items-center justify-center font-bold text-xl pt-10'>
            What Sets Us Apart from the Rest
          </p>
          <Numbers />
        </div>
      </motion.div>
    </div>
  )
}
