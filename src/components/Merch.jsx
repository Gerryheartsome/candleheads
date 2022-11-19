import React from 'react'
import merch1 from '../images/merch1.PNG';
import merch2 from '../images/merch2.PNG';

const Merch = () => {
  return (
    <div  className='w-full h-full relative merch lg:h-max md:h-max lg:mb-48'>
        <div id='faq' className='absolute bottom-0 w-full'></div>
        <div className='bg-[#0000009f] w-full h-max p-10 md:px-14 lg:px-44'>

        <h1 className='font-bold text-5xl text-green-600 text-center mb-10'> Our <span className='font-bold text-5xl border-b-2 border-red-600 text-red-600'>Merch</span></h1>


            <div className='md:flex items-center justify-between pt-20 space-y-5 md:space-y-0 '>
                <div>
                    <p className='text-3xl text-white md:text-left text-center md:mb-10 w-full '>
                        Freaky merch for our fashion freaked candle heads <br /> At the Krypt store!
                    </p>

                    <a href='https://kryptstore.com/'>
                         <button className=' explore mt-2 uppercase text-xl font-bold duration-500  border-green-600  border-2 p-3 shadow-md shadow-black rounded-[.3rem] w-full  md:w-[190px] hover:text-red-600 text-slate-100 bg-green-600  hover:bg-transparent'> GO TO STORE</button>
                    </a>
                </div>
                <img src={merch1} width={400} alt={merch1}/>
            </div>


            <div className='md:flex flex flex-col-reverse md:flex-row items-center justify-between pt-20 space-y-5 md:space-y-0'>
                
                <img src={merch2} width={400} alt={merch2}/>

                <div className=''>
                    <p className='text-3xl text-white md:text-left text-center md:mb-10 w-full '>
                        We would "Wear" this if we "Wear" you, visit us <br /> At the Krypt store!
                    </p>
                    

                    <a href='https://kryptstore.com/'>
                         <button className=' explore text-center mt-2 uppercase text-xl font-bold duration-500  border-green-600  border-2 p-3 shadow-md shadow-black mb-3 rounded-[.3rem] w-full md:w-[190px] hover:text-red-600 text-slate-100 bg-green-600  hover:bg-transparent'> GO TO STORE</button>
                    </a>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Merch