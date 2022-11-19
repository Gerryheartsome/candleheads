import React from 'react'
import krypt from "../images/krypt.GIF";
import ghost from "../images/ghost.GIF";
import frank from "../images/frank.GIF";
import oz from "../images/oz.GIF";
import collins from "../images/collins.GIF";
import kene from "../images/kene.GIF";

import { motion } from 'framer-motion';
import antenna from '../images/antenna.jpg';
import {GiRoundKnob} from 'react-icons/gi';
import {FaPowerOff, FaArtstation, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Teams = () => {
  return (
    <div  className="px-8 md:px-14 lg:mx-40 mb-36 md:mt-5 lg:mb-32 lg:h-max relative">
        <div id='merch' className='absolute bottom-0'></div>
        <h1 className='font-bold text-5xl text-green-600 text-center mb-24'> Meet The <span className='font-bold text-5xl border-b-2 border-red-600 text-red-600'>Team</span></h1>

        <div className='lg:flex md:flex mb-10 md:mb-24  lg:mb-28 justify-between md:space-x-5 lg:space-x-0 '>

            <div className='relative mb-24 md:mb-0 rounded-2xl'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={krypt} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8  rounded-b-xl md:px-6 lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                        animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>
                        {/* <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' /> */}
                        <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' />
                        <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                    </div>
                </center>


                <h1 className='text-xl text-center text-red-600'>Krypt</h1>
                <h1 className='text-xl text-center mb-2'>Co-Founder</h1>
                
            </div>







            <div className='relative mb-24 md:mb-0'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={ghost} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8 rounded-b-xl md:px-6 lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                        animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>
                        {/* <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' /> */}
                        <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' />
                        <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                    </div>
                </center>

                <h1 className='text-xl text-center text-red-600'>Ghost Gear Project</h1>
                <h1 className='text-xl text-center'>Co-Founder</h1>
                
            </div>


            <div className='relative mb-24 md:mb-0'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={frank} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl ' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8 md:px-6 rounded-b-xl lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                       animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>
                        {/* <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' /> */}

                        <a href='https://twitter.com/frank__diba'>
                            <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' />
                        </a>

                        <a href='https://www.instagram.com/frank_diba/'>
                            <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                        </a>
                    </div>
                </center>

                <h1 className='text-xl text-center text-red-600'>Frank Diba</h1>
                <h1 className='text-xl text-center'>Artist</h1>
                
            </div>
            
        </div>


        <div className='lg:flex mb-10 md:mb-20 lg:mb-20 md:flex justify-between md:space-x-5 lg:space-x-0 '>

            <div className='relative mb-24 md:mb-0'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={collins} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8 rounded-b-xl  md:px-6 lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                         animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>
                        {/* <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' /> */}
                        
                        <a href='https://twitter.com/collikazy'>
                            <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' />
                        </a>

                        <a href='https://www.instagram.com/itz_collikazy/'>
                            <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                        </a>
                    </div>
                </center>


                <h1 className='text-xl text-center text-red-600'>Loony Kazy</h1>
                <h1 className='text-xl text-center'>Artist</h1>
                
            </div>







            <div className='relative mb-24 md:mb-0'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={oz} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl ' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8 rounded-b-xl  md:px-6 lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                        animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>
                        {/* <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' /> */}
                        <a href="https://twitter.com/oziomajesuloba">
                        <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' />
                        </a>

                        <a href="https://www.artstation.com/oziomajesuloba">
                        <FaArtstation  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                        </a>
                    </div>
                </center>


                <h1 className='text-xl text-center text-red-600'>OZ</h1>
                <h1 className='text-xl text-center'>Community Manager</h1>
                
            </div>


            <div className='relative mb-24 md:mb-0'>
                <div className='border-4 border-[#000]  shadow-md shadow-[#4C0165] mb-5  rounded-2xl'>
                    <img src={antenna} className='w-20 h-20 absolute top-[-75px] md:left-[80px] lg:left-[110px] left-[130px]' />
                    <img src={kene} className='object-cover w-full lg:w-[300px] lg:h-[300px]bmd:h-[200px] md:w-[300px] rounded-t-xl ' />

                    <div className='w-full h-[50px] flex justify-between items-center bg-green-600 border-t-2 border-black px-8 rounded-b-xl md:px-6 lg:px-8'>

                        <div className='flex justify-between w-[100px] space-x-1 items-center'>
                         <GiRoundKnob className='w-10 h-10' />
                         <GiRoundKnob className='w-10 h-10'/>
                         <GiRoundKnob className='w-10 h-10'/>
                        </div>


                        <motion.div
                        animate={{scale:[1.2,1], rotate:360}}
                        transition={{type:"spring", delay:2, duration:.9, repeatDelay:1, repeat:Infinity}}
                        >
                            <FaPowerOff className='w-6 h-6 text-red-600 shadow-sm shadow-black rounded-full cursor-pointer' />
                        </motion.div>
                    </div>
                </div>

                <center>
                    <div className=' mb-5  flex justify-around w-[200px] lg:w-[200px] md:w-[150px] items-center space-x-6 lg:space-x-6 cursor-pointer'>

                        <a href='https://www.linkedin.com/in/gerald-ndulue-474898217'>
                             <FaLinkedin className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-[#12ed65] lg:shadow-md shadow-black rounded-full p-1' />
                        </a>
                        {/* <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1' /> */}
                        
                        <a href='https://github.com/Gerryheartsome'>
                            <FaGithub  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-[#12ed65] lg:shadow-md shadow-black  rounded-full p-1'/>
                        </a>
                    </div>
                </center>


                <h1 className='text-xl text-center text-red-600'>Kene</h1>
                <h1 className='text-xl text-center'>Web Developer</h1>
                
            </div>
            
        </div>
    </div>
  )
}

export default Teams