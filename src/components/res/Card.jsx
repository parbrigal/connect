import React from 'react'
import { FaEnvelope } from 'react-icons/fa'


export const Card = (props) => {
    return (
        <div className='tc w-25 grow br3 pa3 bg-white  ma2 dib bw2 shadow-5'>
        <div>
          <h2>{props.name}</h2>
          <FaEnvelope /><p>{props.email}</p>
        </div>
      </div>
    )
}
