import React from 'react'

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

export default function Map() {

    return (
      <div className='bg-amber-400'>
        <div className="overflow-x-auto">
            <div className="grid grid-cols-64 gap-1 ">
            {list.map((x, xi) => (
                list.map((y, yi) => (
                <div key={`${xi}-${yi}`} className='bg-red-500 h-30 w-30 flex justify-center items-center'>
                    {x}, {y}
                </div>
                ))
            ))}
            </div>
        </div>
      </div>
    );
  }
  
