import { SpecificationData } from '@/data/data'
import React from 'react'
import BorderCard from '../Sub/BorderCard'

const Specification = () => {
  return (
    <div className=' '>
       {SpecificationData.map((data)=>(
        <div  className=''>
          <BorderCard name={data.name} info={data.info}/>
        </div>
       ))}
    </div>
  )
}

export default Specification