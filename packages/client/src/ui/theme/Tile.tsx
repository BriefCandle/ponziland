import React from 'react'
import grass from '/assets/tiles/grass.jpg'
import house1 from '/assets/tiles/house1.png'

export default function Tile({ x, y} : {x: number, y: number}) {
  return (
    <div className='h-28 w-28 flex justify-center items-center '>
      <img src={grass} alt="" className='h-28 w-28'/>
      
        {x}, {y}
  </div>
  )
}
