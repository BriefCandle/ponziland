import React, { useState, useEffect } from 'react';
import OwnerPage from './OwnerPage';
import AddTaxPage from './AddTaxPage';
import SellLandPage from './SellLandPage';
import { plots } from '../../OnchainData';

type PlotData = { id: string, taxReserve: number, salePrice: number, owner: string }


export default function OwnerHouseData() {

  const [isOpen, setIsOpen] = useState(false);
  const [isTaxOpen, setIsTaxOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  const [selectedPlot, setSelectedPlot] = useState<number>(0);
  const [plotData, setPlotData] = useState<PlotData[]>([]);


  useEffect(() => {
    const ownedPlots = plots.filter(plot => plot.x === 5); 
    setPlotData(ownedPlots);
  }, []);



    

  const handlePageClose = () => {
    setIsOpen(false);
  };

  const handleAddTax = () => {
    setIsOpen(false);
    setIsTaxOpen(true);
  }

  const handleAddTaxClose = () => {
    setIsTaxOpen(false);
  }

  const handleSellPlot = () => {
    setIsOpen(false);
    setIsSellOpen(true);
  }

  const handleSellPlotClose = () => {
    setIsSellOpen(false);
  }

  const handleClaim = () => {
    //run Clain function smart contract
  };

  const handlePlotSelect = (index: number) => {
    setSelectedPlot(index);
    setIsOpen(true);
  }


  
  return (
    <>    
      <div className='flex place-content-center h-full pl-8 bg-[#052c76] opacity-80'>
        <div className='flex flex-col'>
          <h3 className='text-white uppercase p-6'>Your current Houses</h3>
          <div className='flex flex-col items-start overflow-y-scroll max-h-[750px]'>
          {plotData.map((plot, index) => (
            <div key={index} className='flex flex-row p-2 text-white'> {/* Move key here */}
              <button 
                className=''
                onClick={() => handlePlotSelect(index)}
              >
                {plot.id}
              </button>
              <button className='pl-4' onClick={handleClaim}>Claim taxes</button>
              <div className='pl-4'>{plot.taxReserve}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <OwnerPage 
          onClose={handlePageClose}
          addTaxStorage={handleAddTax}
          addSellPlot={handleSellPlot}
          plotData={plotData[selectedPlot]}
        />
      )}
      {isTaxOpen && (
        <AddTaxPage
        onClose={handleAddTaxClose}
        plotData={plotData[selectedPlot]}
        />
      )}

      {isSellOpen && (
        <SellLandPage
        onClose={handleSellPlotClose}
        plotData={plotData[selectedPlot]}
        />
      )

      }
    </>

  );
}