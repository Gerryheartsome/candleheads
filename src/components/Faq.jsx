import React, {useState} from 'react'
import { data } from '../data'


const Faq = () => {
    const [clicked, setClicked] = useState(false)
     
    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }

        setClicked(index)
    }


  return (
    <div id='faq' className='px-8 md:px-14 lg:mx-36 mb-10 mt-10 lg:mb-32 lg:h-max py-5 z-10'>
        <h1 className='font-bold text-5xl text-green-600 text-center mb-10'>Fa<span className='font-bold text-5xl border-b-2 border-red-600 text-red-600'>Q</span></h1>
    
        {data.map((item, index) => (
            <div className='w-full h-max bg-green-700 p-3'>
                <div  onClick={() => toggle(index)} key={index} className='bg-white p-5 md:p-8 flex items-center justify-between cursor-pointer'>
                    <h1  onClick={() => toggle(index)} key={index} className='font-bold text-2xl text-black'>{item.Question}</h1>
                    <span className='text-3xl'>{clicked === index ? "-" : "+" } </span>
                </div>

                <div className={clicked === index ? 'text-white text-xl p-4 h-max duration-200' : "h-0 opacity-0 duration-200"}>
                    {item.Answer}
                </div>
            </div>
        ))}

    </div>
  )
}

export default Faq