import React from 'react'

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

const totalWidth = 64 * 7 + 63 * 1;

export default function Map() {

    return (
      <div className='overflow-x-auto'>
      <div className="grid grid-cols-64 gap-4 p-10" style={{ minWidth: `${totalWidth}rem` }}>
            {list.map((x, xi) => (
                list.map((y, yi) => (
                <div key={`${xi}-${yi}`} className='h-28 w-28 flex border-4 border-slate-900 justify-center items-center '>
                    {x}, {y}
                </div>
                ))
            ))}
            </div>
      </div>
    );
  }
  
