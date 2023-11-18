import React from 'react'

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

export default function Map() {

  return (
    <div className='h-full w-full bg-amber-400'>
        {list.map((x) => list.map((y) => <div className='bg-red p-5'>{x}, {y}</div>))}
    </div>
  )
}
