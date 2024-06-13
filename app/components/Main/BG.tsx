import React from 'react'
import Specification from './Specification'
import Features from './Features'
import Footer from './Footer'

const BG = () => {
  return (
    <div className='relative w-screen  '>
         <div className=' absolute top-[500vh] w-screen h-screen bg-[#ff3500] '>
                 <img src="/eclipse-bg.png" alt="bg" className='mt-32 mx-5' width={1000} height={1000} />
                   <div className='h-[200vh] w-screen bg-[#ff3500] mt-16'>
                    
                 <h1 className='text-[110px] uppercase 
                 font-bold text-[#ffffff] mx-5'>Specifications</h1>
                 <Specification/>
                 <h1 className='text-[110px] uppercase 
                 font-bold text-[#ffffff] mx-5'>features</h1>
                 <Features/>
                   </div>

                   <Footer/>
               </div>

              
    </div>
  )
}

export default BG