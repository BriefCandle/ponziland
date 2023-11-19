import React, { useState, useEffect } from 'react';
import grass from './grass.jpg';
import house1 from './house_1.png';
import BuyPage from './UI/BuyPage';
import { plots } from './OnchainData';

interface PlotProps {
  x: number;
  y: number;
}

interface PlotData {
  id: string;
  sellPrice: number;
  buyPrice: number;
  tax: number;
  owner: string | null;
}

const defaultPlotData: PlotData = {
  id: '',
  sellPrice: 0,
  buyPrice: 0,
  tax: 0,
  owner: null
};

export default function Plot({ x, y }: PlotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [buyData, setBuyData] = useState<PlotData>(defaultPlotData);

  useEffect(() => {
    const plot = plots.find(plot => plot.x === x && plot.y === y);
    if (plot) {
      setBuyData({
        id: plot.id,
        sellPrice: plot.salePrice,
        buyPrice: plot.salePrice,
        tax: plot.taxReserve,
        owner: plot.owner
      });
    }
  }, [x, y]);

  const handlePlotClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='h-28 w-28 flex justify-center items-center relative' onClick={handlePlotClick}>
        <img src={grass} alt="" className='h-28 w-28 absolute top-0 left-0'/>
        {x}, {y}
        {x !== 0 && (
          <img src={house1} alt="" className='h-28 w-28 absolute top-0 left-0'/>
        )}
      </div>

      {isOpen && (
        <BuyPage 
          onClose={handleClose}
          buyData={buyData}
        />
      )}
    </>
  );
}
