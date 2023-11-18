import React from 'react'
import Tile from './Tile';
import Hud from './UI/Hud/Hud';

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

const totalWidth = 64 * 7 + 63 * 1;

export default function Map() {

    return (
      <div className='overflow-x-auto bg-[#466567]'>
        <div className="grid grid-cols-64 gap-4 p-10 select-none" style={{ minWidth: `${totalWidth}rem` }}>
            {list.map((x, xi) => (
                list.map((y, yi) => (
                    <Tile x={xi} y={yi} key={`${xi}-${yi}`} />
                ))
            ))}
        </div>
        <Hud />
      </div>
    );
  }
  
