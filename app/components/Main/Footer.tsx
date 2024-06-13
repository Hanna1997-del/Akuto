import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-screen px-5 mt-10 uppercase'>
       <h1 className='text-[85px] font-bold leading-none '><span className='text-[#ff3500]'>Sign up</span> to the mailing list to <span className='text-[#ff3500]'>stay in tune</span> with the last updates</h1>

       <div className='mt-[14rem] flex justify-between'>
        <div className='w-[300px] font-bold'>
            <p>Akuto Studio GMBH <br />
            Lausanne, Switzerland</p>
            <a href="#" className='text-[#ff3500] font-bold'>Hello@AkutoStudio.com</a>
        </div>
        <div className='flex gap-5 text-gray-400 font-bold px-10'>
            <a href="#">Privacy Policy</a>
            <a href="#">Faq</a>
        </div>
       </div>
    </div>
  )
}

export default Footer