import React from 'react'
import {About,Faq, Footer, Hero,Merch,Navbar,Roadmap,Teams,ParticleBg }from "../components"
import {motion} from "framer-motion";



const Home = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className="tracking-widest"
    >
        <div className="w-full">
            <Navbar />
            <Hero />
            <About />
        </div>
        
            <div className="w-full">
            <ParticleBg />
            <Roadmap />
            </div>

            <div className="absolute w-full">
            <Teams />
            <Merch />
            <Faq />
            <Footer />
            </div>   
    </motion.div>
  )
}

export default Home