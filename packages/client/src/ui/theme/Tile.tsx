import React from 'react';
import grass from '/assets/tiles/grass.jpg';
import house1 from '/assets/tiles/house_1.png';

export default function Tile({ x, y } : { x: number, y: number }) {
  return (
    <div className='h-28 w-28 flex justify-center items-center relative'>
      <img src={grass} alt="" className='h-28 w-28 absolute top-0 left-0'/>
      {x}, {y}

      {x != 0 && (
        <img src={house1} alt="" className='h-28 w-28 absolute top-0 left-0'/>
      )}
    </div>
  );
}
