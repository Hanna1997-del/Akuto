import { Chords } from '@/data/data'
import React from 'react'
import WayChord from '../Sub/WayChord'

const Way = () => {
  return (
    <div className='relative w-full h-full mt-[600px] '>
        <div className='absolute   bottom-[-300px]'>
            <h1 className='text-[100px] font-bold leading-none uppercase'>New Way Of Playing <span className='text-[#ff3500]'>chordS</span></h1>
            <img src="/akuto-render-1.webp" alt="render"  width={500} height={500} className='absolute right-8 rounded-3xl top-32'/>
            <div className='flex mt-[25rem] uppercase w-[180px]  items-center gap-3'>
            <p className='text-2xl font-bold  '>4991</p>
            <p className='text-md font-bold '>People Signed up</p>

          
            </div>
            <div className='  absolute botom-[-400px]'>
           {
                Chords.map((chord)=> (
                    
                  <div className=''>
                      <WayChord img={chord.img} title1={chord.title1} title2={chord.title2} details={chord.details}/>
                  </div>
                ))
            }
           </div>
        </div>
    </div>
  )
}

export default Way