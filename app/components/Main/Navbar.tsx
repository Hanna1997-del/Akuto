import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[30px]  z-30 flex justify-between items-center mt-5 '>
        <div className='flex items-center px-5'>
           <div className='w-[45px] h-[45px] bg-[#ff3500] rounded-full '>
            <div className='w-[15px] h-[15px] bg-[#ffffff] rounded-full absolute -top-1  left-8'></div>

           </div>
           <h1 className='text-3xl font-bold  uppercase px-3'>Akuto Studio</h1>
        </div>
        <button className='bg-[#ff3500] w-[150px] rounded-full font-semibold h-[50px] text-lg text-[#ffffff] mx-10 '>PRE-ORDER</button>
    </div>
  )
}

export default Navbar