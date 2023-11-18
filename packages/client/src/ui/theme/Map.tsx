import React from 'react'
import grass from '/assets/tiles/grass.jpg'
import house1 from '/assets/tiles/house1.png'

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

const totalWidth = 64 * 7 + 63 * 1;

export default function Map() {

    return (
      <div className='overflow-x-auto bg-[#466567]'>
      <div className="grid grid-cols-64 gap-4 p-10" style={{ minWidth: `${totalWidth}rem` }}>
            {list.map((x, xi) => (
                list.map((y, yi) => (
                <div key={`${xi}-${yi}`} className='h-28 w-28 flex justify-center items-center '>
                  <img src={grass} alt="" className='h-28 w-28'/>
                    {x}, {y}
                </div>
                ))
            ))}
            </div>
      </div>
    );
  }
  
