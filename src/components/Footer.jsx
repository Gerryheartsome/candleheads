import React from 'react'
import logo from "../images/candleLogo.png";
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className='footer w-full'>
        <div className='bg-[#000000be] w-full'>
             <div className='px-8 md:px-14 lg:mx-36 lg:h-max py-5 h-max '>
                <div className='md:grid md:grid-cols-3 space-x-5'>

                    {/* GRID 1 */}
                    <div className='space-y-5 mb-5'>
                        <a href='#hero'>
                            <img style={{padding:'0'}} className="md:ml-[-59px] w-full lg:w-[500px] md:h-[90px] h-[90px] lg:ml-[-110px] object-cover"  src={logo} alt='logo' />
                        </a>

                        <p className='text-white text-center md:text-left'>
                        CANDLE HEADS is a vibey collection of NFTs on the etherum blockchain that combine beautiful art with a passion for fashion, community, culture, utility & education.
                        </p>

                        <div className='flex justify-between items-center space-x-8 lg:space-x-6 mx-10 md:mx-0 md:w-[250px] cursor-pointer z-10'>
                            <FaDiscord className='text-white text-4xl hover:-scale-x-95 hover:bg-red-600 duration-700 bg-green-600 lg:shadow-md shadow-black rounded-full p-1' />
                            <a href='https://twitter.com/candle_heads'>
                                <FaTwitter  className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-green-600 lg:shadow-md shadow-black  rounded-full p-1' />
                            </a>
                            
                            <a href='https://www.instagram.com/candle_heads_nft/'>
                                <FaInstagram   className='text-white text-4xl  hover:-scale-x-95 duration-700 hover:bg-red-600  bg-green-600 lg:shadow-md shadow-black  rounded-full p-1'/>
                            </a>
                        </div>
                    </div>

                      {/* GRID 2 */}
                    <div className='lg:flex lg:flex-row  md:flex md:flex-row md:my-auto items-center justify-between uppercase md:px-5 lg:px-20'>
                        <div className='text-center md:text-left text-lg flex flex-col text-white'>
                            <a href="#about"> about </a>
                            <a href="#roadmap"> Roadmap </a>
                            <a href="#teams"> Teams </a>
                        </div>

                        <div className='text-center md:text-left text-lg flex flex-col text-white'>
                            <a href="#merch"> Merch </a>
                            <a href="#faq"> Faq </a>
                        </div>
                    </div>


                      {/* GRID 3 */}
                    <div className='md:flex md:flex-col md:my-auto mx-auto'>
                        <form className=''>
                            <p className='text-green-600 font-bold text-center  text-xl mt-2 lg:text-2xl mb-2 uppercase'>Join our Newsletter</p>
                            <input type='email' name='email' autoComplete='email' className='w-full outline-none p-3 rounded-md' />

                            <button className='explore text-center mt-2 place-self-center uppercase text-xl font-bold duration-500 tracking-widest border-green-600  border-2 p-2 shadow-md shadow-black rounded-[.3rem] w-full hover:text-red-600 text-red-600 bg-transparent hover:bg-transparent'> subscribe</button>
                        </form>
                    </div>
                </div>

                <p className='text-center md:text-xl text-red-600 mt-3'> Copyright &copy;{(new Date().getFullYear())} Candleheads. All Rights Reserved</p>

            </div>
        </div>
      </div>
  )
}

export default Footer