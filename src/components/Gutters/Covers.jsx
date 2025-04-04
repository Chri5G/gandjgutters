import React from 'react'
import { motion } from 'framer-motion'
import { textVariants, yVariants, containerVariants } from '../Variants'

export default function Covers() {
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
            backgroundImage: `url(/imgs/gutters/covers/main.jpg)`,
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
            <p className='pb-3'>Gutter Covers</p>
            <hr className='w-1/2'/>
          </div>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Looking to protect your gutters and home from debris buildup? At G&J Seamless Gutters, we specialize in professional gutter cover installation designed to keep your gutters flowing freely year-round. Serving Central Tx, we provide premium gutter guards that block leaves, twigs, and debris while ensuring water drains properly away from your property.
          </motion.p>
        </div>
      </motion.div>
      <div className='pt-20 font-extrabold text-6xl text-center px-10'>
        <p>Why Should You Get Gutter Covers</p>
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
          <p className='bold text-3xl pb-3'>Prevent Clogs & Water Damage</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            Gutter covers keep leaves, twigs, and debris out of your gutters. This helps water flow smoothly and prevents blockages that can lead to roof leaks, fascia rot, and foundation damage from overflowing water.
          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Reduce Maintenance</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            No more climbing ladders several times a year to clean out dirty, clogged gutters. Gutter guards significantly reduce the need for frequent cleanings, saving you time, effort, and money on maintenance.
          </motion.p>
        </motion.div>
        <motion.div className='col-span-1 p-10 bg-logo_blue rounded-lg'
          variants={yVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className='bold text-3xl pb-3'>Extend the Life of Your Gutters</p>
          <hr className='w-1/2'/>
          <motion.p className='pt-3'
            variants={textVariants}
          >
            By keeping debris out and reducing standing water, gutter covers help prevent rust, corrosion, and sagging. This extends the lifespan of your entire gutter system and protects your home’s exterior investment.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
