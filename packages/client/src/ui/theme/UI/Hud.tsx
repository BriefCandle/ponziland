import React from 'react'

const ownedHouses : string[] = []

for (let i = 0; i < 4; i++) {
  ownedHouses.push('house')
}

export default function Hud() {
  return (
    <div className='fixed flex place-content-center top-0 left-0 z-40  h-3/5 w-1/6 bg-opacity-80 bg-[#052c76]'>
      <div className='flex flex-col'>
        <h3 className='text-white uppercase p-5 '>Your current Houses</h3>
        <div className='flex flex-col item'>
        {ownedHouses.map((house) => (
          <div className='p-2 text-white'>
            {house}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
 