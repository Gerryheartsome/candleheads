import React from 'react'
import about from "../images/about.GIF"


const About = () => {
  return (
    <div className='relative md:flex justify-between flex flex-col-reverse md:flex-row px-8 md:px-14 lg:mx-40 mb-36 lg:mb-32 lg:h-[500px]'>
        <div id='roadmap' className='absolute bottom-0'> </div>
        <div className='mt-20 md:mt-36 mb-2 lg:mt-6  w-full'>
            <img className='lg:h-[500px] lg:w-[500px] md:h-[300px] md:w-[300px]  h-full w-full object-cover rounded-full shadow-md shadow-[#4C0165]' src={about} alt='about' />
        </div>


        <div className=' lg:h-full lg:text-xl abtSection  lg:py-8 lg:mt-12 mt-24 w-full text-slate-800 text-left'>
            <h1 className='font-bold text-3xl text-slate-900 text-center'> THE <span className='font-bold text-3xl border-b-2 border-red-600 text-red-600'>UNTOLD</span> STORY</h1>

            <p className='lg:ml-10 h-full mt-5 text-base w-full lg:mt-16 font-normal tracking-widest'>
            CANDLE HEADS is a vibey collection of NFTs on the etherum blockchain that combine beautiful art with a passion for fashion, community, culture, utility & education.  <br /> <br />
            
            Aiming to educate people about the Web 3.0 space and fostering a community of likeminded people.  Candle heads by krypt aims to provide long term value combining digital & physical experiences while simultaneously introducing the KRYPT BRAND to the world.
            </p>
        </div>

    </div>
  )
}

export default About