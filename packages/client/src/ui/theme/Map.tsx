import React from 'react'
import Tile from './Tile';
import Hud from './UI/Hud/Hud';
import { plots } from './OnchainData';

const list : number[] = []

for (let i = 0; i < 64; i++) {
  list.push(i)
}

const totalWidth = 64 * 7 + 63 * 1;

export default function Map() {

  for (let i = 1; i <= 64; i++) {
    for (let j = 1; j <= 64; j++) {
      plots.push({
        x: i, 
        y: j,
        owner: `Owner ${i}-${j}`,
        taxToClaim: Math.random() * 1000,
        taxReserve: Math.random() * 1000,
        salePrice: Math.random() * 5000 
      });
    }
  }

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
  
