import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';
import ParticleBg from '../components/particleBg';
import loading from "../images/loading.GIF"


const Landing = () => {
    const [uploading, setUpLoading] = useState(true)

    useEffect(() => {
     setTimeout(() =>{
        setUpLoading(false)
     },10000)
    },[])
    
  return (
      <div className='bg-black w-full h-screen'>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='flex flex-col items-center justify-center h-full '>
            <ParticleBg />
            {uploading ? 
            <div>

                <lottie-player  src="https://assets3.lottiefiles.com/packages/lf20_cgbjomca.json"  background="transparent"  speed="1"  style={{width:'300px', height:'300px'}} loop  autoplay></lottie-player>

                <p className='text-2xl  text-red-600 text-center '>Calculating Cordinates...</p>
                
            </div>


             : <Link className='absolute text-3xl text-green-600 duration-300 ease-in' to='/home' > <button className='p-2 rounded-md shadow-sm shadow-white uppercase tracking-wider'> Proceed to Candleverse </button></Link> }
            
            
        </motion.div>
      </div>
  )
}

export default Landing