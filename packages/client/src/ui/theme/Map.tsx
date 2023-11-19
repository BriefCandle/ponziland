import React from 'react'
import Plot from './Plot';
import Hud from './UI/Hud/Hud';
import { plots } from './OnchainData';

const totalWidth = 64 * 7 + 63 * 1;

export default function Map() {

  return (
    <div className='overflow-x-auto bg-[#466567]'>
      <div className="grid grid-cols-64 gap-4 p-10 select-none" style={{ minWidth: `${totalWidth}rem` }}>
        {plots.map((plot, index) => (
          <Plot key={index} x={plot.x} y={plot.y} />
        ))}
      </div>
      <Hud />
    </div>
  );
}
