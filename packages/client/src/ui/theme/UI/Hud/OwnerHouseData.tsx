import React, { useState, useEffect } from 'react';
import OwnerPage from './OwnerPage';
import AddTaxPage from './AddTaxPage';

type HouseData = { id : number, remainingTaxCharge : number, sellPrice : number }

export default function OwnerHouseData() {

  const [isOpen, setIsOpen] = useState(false);
  const [isTaxOpen, setIsTaxOpen] = useState(false);
  const ownedHouses : string[] = []

  for (let i = 0; i < 5; i++) {
    ownedHouses.push('house')
  }

  const [selectedHouse, setSelectedHouse] = useState<number>(0);
  const [houseData, setHouseData] = useState<HouseData[]>([]);

  // Function to generate random house data
  const generateRandomHouseData = () => {
    return {
      id: Math.floor(Math.random() * 1000),
      remainingTaxCharge: Math.floor(Math.random() * 10000),
      sellPrice: Math.floor(Math.random() * 500000)
    };
  };

  
  // Initialize houseData with random values
  useEffect(() => {
    const data = Array(5).fill(null).map(() => generateRandomHouseData());
    setHouseData(data);
  }, []);

  const remainingTaxCharge = houseData[selectedHouse]?.remainingTaxCharge ?? 'Loading...';
    

  const handlePageClose = () => {
    setIsOpen(false);
  };

  const handleAddTax = () => {
    setIsOpen(false);
    setIsTaxOpen(true);
  }

  const handleSellPlotClose = () => {
    setIsTaxOpen(false);
  }
  const handleClaim = () => {
    //run Clain function smart contract
  };

  const handleHouseSelect = (index: number) => {
    setSelectedHouse(index);
    setIsOpen(true);
  }


  
  return (
    <>    
      <div className='flex place-content-center h-full pl-8 bg-[#052c76] opacity-80'>
        <div className='flex flex-col'>
          <h3 className='text-white uppercase p-6'>Your current Houses</h3>
          <div className='flex flex-col items-start overflow-y-scroll max-h-[750px]'>
            {ownedHouses.map((house, index) => (
              <div className='flex flex-row p-2 text-white'>
              <button 
                key={index} 
                className=''
                onClick={() => handleHouseSelect(index)}
              >
                {house}
              </button>
              <button className='pl-4' onClick={handleClaim}>Claim taxes</button>
              <div className='pl-4'>{remainingTaxCharge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <OwnerPage 
          onClose={handlePageClose}
          addTaxStorage={handleAddTax}
          houseData={houseData[selectedHouse]}
        />
      )}
      {isTaxOpen && (
        <AddTaxPage
        onClose={handleSellPlotClose}
        houseData={houseData[selectedHouse]}
        />
      )}
    </>

  );
}