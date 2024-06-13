import React from 'react'

const MailBtn = () => {
  return (
    <div className='fixed w-full bottom-8 flex px-5'>
        <div className='w-[1150px]  rounded-full px-3 py-2 h-[70px] bg-[#ff3500] text-[#ffffff] '>
            <div className='flex '>
                <h1 className='text-lg uppercase font-semibold'>Akuto studio uses cookies and collect data by using our website, you agree to our cookie
                policy.</h1>
                <div className='flex gap-2 items-center uppercase text-lg  font-semibold'>
                <a href="#">Accept</a>
                <a href="">Refuse</a>
                </div>
            </div>
        </div>
        <div className='w-[180px] h-[180px] px-2 absolute right-8  bottom-5 flex items-center justify-center rounded-full bg-[#ff3500] text-[#ffffff] '>
            <h1 className=' uppercase text-center font-semibold text-xl'>Mailing list</h1>
        </div>
    </div>
  )
}

export default MailBtn