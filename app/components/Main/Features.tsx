import { Feacture_data } from '@/data/data'
import React from 'react'
import BorderCard from '../Sub/BorderCard'

const Features = () => {
  return (
    <div>
        {Feacture_data.map((f)=>(
            <div>
                <BorderCard name={f.name} info={''}/>
            </div>
        ))}
    </div>
  )
}

export default Features