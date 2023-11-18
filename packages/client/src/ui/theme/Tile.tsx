import React from 'react'

export default function Tile({ x, y} : {x: number, y: number}) {
  return (
    <div className='bg-red p-5'>
        {x}, {y}
    </div>
  )
}
