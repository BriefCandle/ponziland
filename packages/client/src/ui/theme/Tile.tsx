import React, { useState } from 'react';
import grass from '/assets/tiles/grass.jpg';
import house1 from '/assets/tiles/house_1.png';
import BuyPage from './UI/BuyPage';
import ConfirmPage from './UI/ConfirmPage'
import { useMUD } from '../../store';

export default function Tile({ x, y } : { x: number, y: number }) {

  // const { networkLayer : { network : { playerEntity }}} = useMUD();
  const [isOpen, setIsOpen] = React.useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = React.useState(false);


  //Buy data
  const [sellPrice, setSellPrice] = React.useState<number>(0);
  const [buyPrice, setBuyPrice] = React.useState<number>(0);
  const [tax, setTax] = React.useState<number>(0);


  
  const [buyData, setBuyData] = useState({
    sellPrice: null,
    buyPrice: null,
    tax: null,
  });


  const handleBuyPageClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setIsOpen(false);
    setConfirmIsOpen(true);
  }

  const HandleLandPurchase = () => {
    setConfirmIsOpen(false)
    //Send data to the smart contract
  }


  return ( <>
    <div className='h-28 w-28 flex justify-center items-center relative' onClick={() => { setIsOpen(true)}}>
      <img src={grass} alt="" className='h-28 w-28 absolute top-0 left-0'/>
      {x}, {y}

      {x != 0 && ( 
        <img src={house1} alt="" className='h-28 w-28 absolute top-0 left-0'/>
      )}
    </div>

    {isOpen && (
      <BuyPage 
        onNext={handleNext}
        onClose={handleBuyPageClose} 
        buyData={buyData}
        setBuyData={setBuyData}
      />
    )}

    {confirmIsOpen && (
      <ConfirmPage 
      onClose={HandleLandPurchase}
      buyData={buyData}
       />
    )}
    </>
  );
}
