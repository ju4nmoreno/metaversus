'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative p-10`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src='https://ju4nmoreno.github.io/metaversus/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain'
      />
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>METAVERSUS</h2>
      <img src='https://ju4nmoreno.github.io/metaversus/menu.svg' alt='menu' className='w-[24px] h-[24px]' />
    </div>
  </motion.nav>
)

export default Navbar
