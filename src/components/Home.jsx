import React from 'react'
import { motion } from 'framer-motion'
import Reviews from './Reviews'
import { textVariants, yVariants, yDownVariants, containerVariants,appearVariants } from './Variants'
import { Numbers } from './Numbers'
import InfiniteCarousel from './InfiniteCarousel'


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
    <div className='bg-gray-50 pt-[72px]'>
      <motion.div
        variants={yDownVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='h-[33vh] bg-inherit'
            style={{ backgroundImage: `url(/imgs/home/working_1.webp)`,
              backgroundPosition: 'center',  // Center the image
              backgroundSize: 'cover',       // Ensure it covers the div 
              backgroundRepeat: 'no-repeat',  // No repeat
            }}
          >
          </div>
          <div className='h-[33vh] bg-inherit'
            style={{ backgroundImage: `url(/imgs/home/roofing.jpeg)`,
              backgroundPosition: 'center',  // Center the image
              backgroundSize: 'cover',       // Ensure it covers the div 
              backgroundRepeat: 'no-repeat'  // No repeat
            }}
          >
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p className='p-5 font-extrabold text-center text-4xl bg-logo_blue'
          variants={appearVariants}
        >
          Central Texas Experts in <span className='text-dark_blue'><br />Roofing</span> & <span className='text-dark_blue'>Rain Gutter</span> Installation
        </motion.p>
      </motion.div>
      <div className='pt-20 font-extrabold text-3xl text-center'>
        <p className='pb-3'>Our Gutter and Roofing Services</p>
      </div>
      <motion.div className='p-10 grid grid-cols-1 lg:grid-cols-4 bg-gray-50 gap-5 h-[50vh]'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='col-span-1 bg-dark_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href='/gutters'>
            <motion.p className='flex items-center justify-center text-gray-50 text-3xl font-extrabold text-center h-full'
              variants={textVariants}
            >
              Gutter Installation
            </motion.p>
          </a>
        </motion.div>
          <motion.div className='col-span-1 bg-dark_blue rounded-lg'
            variants={yVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='/gutters/covers'>
              <motion.p className='flex items-center justify-center text-gray-50 text-3xl font-extrabold text-center pt-3 h-full'
                variants={textVariants}
              >
                Gutter Cover
              </motion.p>
            </a>
          </motion.div>
        <motion.div className='col-span-1 bg-dark_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.p className='flex items-center justify-center text-gray-50 text-3xl font-extrabold text-center pt-3 h-full'
            variants={textVariants}
          >
            Gutter Cleaning
          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 bg-dark_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href='/roofing'>
            <motion.p className='flex items-center justify-center h-full text-gray-50 text-3xl font-extrabold text-center pt-3'
              variants={textVariants}
            >
              Roofing
            </motion.p>
          </a>
        </motion.div>
      </motion.div>
      {/* <div className='py-20'>
        <Reviews />
      </div> */}
      <div className='pt-20 font-extrabold text-3xl text-center'>
        <p className='pb-3'>Expert Craftsmanship in Every Roof and Gutter Installation</p>
      </div>
      <div className='pt-10 pb-20'>
        <InfiniteCarousel images={imgs}/>
      </div>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 p-20 bg-dark_blue gap-5 text-gray-50'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div className='col-span-1 md:col-span-2 order-1'
          variants={yVariants}
        >
          <p className='font-extrabold text-3xl pb-3'>G&J Seamless Rain Gutters - Gutter Installtion Company in Central TX</p>
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
        <div className="rounded-xl h-[533px] bg-inherit shadow-xl order-4 md:order-3"
          style={{ backgroundImage: `url(/imgs/home1.webp)`,
                    backgroundPosition: 'center',  // Center the image
                    backgroundSize: 'cover',       // Ensure it covers the div 
                    backgroundRepeat: 'no-repeat'  // No repeat
                }}
        >
        </div>
        <div className='col-span-1 md:col-span-2 order-3 md:order-4'>
          <p className='flex flex-col items-center justify-center font-bold text-3xl pt-10 text-center pb-3'>
            What Sets Us Apart from the Rest
          </p>
          <hr className='mx-auto'/>
          <Numbers />
        </div>
      </motion.div>
    </div>
  )
}
