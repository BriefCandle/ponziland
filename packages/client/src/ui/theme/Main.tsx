import React from 'react'
import Map from './Map';
import Hud from './UI/Hud/Hud';
import { plots } from './OnchainData';


const totalWidth = 64 * 7 + 63 * 1;

export default function Main() {

    // Populate the plots array
    for (let i = 1; i <= 64; i++) {
      for (let j = 1; j <= 64; j++) {
        plots.push({
          x: i,
          y: j,
          id: `${i}, ${j}`,
          owner: `Owner ${i}-${j}`,
          taxToClaim: 100,
          taxReserve: 100,
          salePrice: 100,
        });
      }
    }
  

    return (
      <div className='overflow-x-auto bg-[#466567]'>
        <Map />
        <Hud />
      </div>
    );
  }
  
