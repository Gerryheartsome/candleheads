import React from 'react'
import candle from "../images/candle.GIF"
import candleship from "../images/candleship.png"
import {FaRocket} from "react-icons/fa";
import { motion } from 'framer-motion';
import Parallax from 'react-rellax';



const Hero = () => {
  return (
      <>
            <div id='hero' className='px-4 relative w-full h-full hero lg:h-screen md:h-[600px] lg:mb-48 md:px-14 lg:px-44'>
                    <div id='about' className='absolute bottom-0'></div>
                    <div className='md:grid grid-cols-2 w-full lg:h-full'>
                        <div className='w-full md:text-left text-center pt-32 space-y-8 md:pt-48 lg:pt-80 py-8 lg:space-y-10  px-5'>
                        <Parallax speed={5}>
                            <h2 className='  text-4xl font-bold md:text-4xl text-[#fff] text lg:text-5xl  mb-4'>
                            JOIN THE </h2>
                         </Parallax>

                            <Parallax speed={4}>
                              <h2 className=' text-5xl md:text-4xl font-bold text-red-600  lg:text-7xl mb-4 tracking-wider'>
                              CANDLE<span className='text-green-600 tracking-wider'>VERSE</span></h2>
                            </Parallax>

                            <Parallax speed={3}>
                              <h2 className='font-bold md:text-xl  text-2xl lg:text-2xl mb-4 text-[#fff]'>
                              Ya'll Know Krypt's crazy right?</h2>
                            </Parallax>
                           
                            <Parallax speed={2} className='absolute z-10 left-[130px] md:left-[70px] lg:left-[180px]'>
                            <a href='#about'>
                              <button className=' explore lg:ml-[20px]  mt-2 mx-auto md:mx-1 flex justify-between items-center uppercase text-xl font-bold duration-500  border-green-600  border-2 p-3 shadow-md shadow-black rounded-[.3rem] w-[140px] hover:text-red-600 text-slate-100 bg-green-600  hover:bg-transparent'> EXPLORE <FaRocket className='text-red-600 w-6 h-6 rocket' /></button>
                            </a>
                            </Parallax>
                          
                        </div>

                        <div className='w-full overflow-hidden md:overflow-visible'>
                            <motion.img src={candle} alt='candle' className=' md:hidden w-full h-full object-cover '
                            animate={{y:[120, -.9]}}
                            transition={{type:"tween", duration:3, yoyo:Infinity, damping:8, ease:"linear"}}
                            />


                            <motion.img src={candleship} alt='candleShip' className='hidden md:block lg:w-[430px] lg:h-[500px] md:w-[300px] md:h-[340px] md:ml-24 lg:ml-44 md:mt-44 object-cover '
                            animate={{y:[100, -50], scale:.4}}
                            transition={{type:"tween", duration:3, yoyo:Infinity, damping:8, ease:"linear"}}
                             />
                        </div>

                    </div>
            </div>
    </>
  )
}

export default Hero