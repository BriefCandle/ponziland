import React from 'react'

const ownedHouses : string[] = []

for (let i = 0; i < 5; i++) {
  ownedHouses.push('house')
}

export default function OwnerHouseData() {
  return (
    <div className='flex place-content-center h-full pl-8'>
      <div className='flex flex-col'>
        <h3 className='text-white uppercase p-6'>Your current Houses</h3>
        <div className='flex flex-col items-start overflow-y-scroll max-h-[750px]'>
          {ownedHouses.map((house, index) => (
            <div key={index} className='pl-8 p-2 text-white'>
              {house}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}