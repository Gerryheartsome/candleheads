import React, { useState } from 'react'
import logo from "../images/candleLogo.png";
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import { links } from '../data';




const Navbar = () => {

    const [color, setColor] = useState(null)

    const toggler = () => {
        if(window.scrollY >= 87){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', toggler);

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
}

  return (
      <>
    <div className={color ? 'fixed h-[87px] w-full bg-[#000000dc]  px-4 md:px-10 lg:px-44 lg:pt-2 flex justify-between items-center z-30' : 'fixed h-[87px] w-full bg-transparent  px-4 md:px-10 lg:px-44 lg:pt-2 flex justify-between items-center z-30'}>
        <div className='pb-2 z-10'>
        <a href='#hero'>
            <img style={{padding:'0'}} className="md:ml-[-59px] ml-[-60px] w-[350px] lg:w-[500px] md:h-[90px] h-[70px] lg:ml-[-65px] object-cover"  src={logo} alt='logo' />
        </a>
        </div>

        <ul   className='hidden viga cursor-pointer text-lg lg:flex md:w-80 justify-between lg:w-[40em] text-white uppercase font-bold md:ml-24 lg:ml-[9em]'>
            {links.map((link) => (
                <a href={link.url}  key={link.id} className='mr-7' style={{textShadow: "3px 3px 3px #4C0165"}} >{link.text}</a>
            ))}
        </ul>

        <div className=' hidden md:flex justify-between items-center space-x-8 lg:space-x-6 lg:ml-[10rem] cursor-pointer z-10'>
            <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-green-600 lg:shadow-md shadow-black rounded-full p-1' />
            <a href='https://twitter.com/candle_heads'>
                <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-green-600 lg:shadow-md shadow-black  rounded-full p-1' />
            </a>

            <a href='https://www.instagram.com/candle_heads_nft/'>
                <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-green-600 lg:shadow-md shadow-black  rounded-full p-1'/>
            </a>
        </div>


        <div className='lg:hidden z-10'>
        { nav ? <HiMenuAlt3 className='h-10 w-10' style={{color:"#12ED65"}} onClick={handleNav} /> :  <AiOutlineClose className='h-10 w-10' style={{color:"#FF0528"}} onClick={handleNav} /> }
            
        </div>
        
      
            <ul className={ !nav ? "lg:hidden pt-16 text-sm absolute left-0 top-0 flex flex-col justify-center items-center h-max nav w-full text-white uppercase font-bold duration-500"  : "absolute left-0 top-16 duration-500 flex-col justify-center items-center w-full overflow-hidden h-0" }>
                {links.map(link => (
                    <a href={link.url} onClick={handleNav} key={link.id} className='mr-7 py-6'>{link.text}</a>
                ))}
               
            </ul>

    </div>
        </>
  )
}

export default Navbar