import React, { useState } from 'react';

type HouseData = { id : number, remainingTaxCharge : number, sellPrice : number }

export default function SellLandPage({ onClose, houseData } : {onClose : () => void, houseData : HouseData }){

    let runway : number;
    let runwayInDays : number;
    let blockTax : number;
    const taxPerBlock : number = 0.01 ; // In percent
  
    blockTax = parseFloat((houseData.sellPrice * taxPerBlock).toFixed(2));
  
    runway = parseFloat((houseData.remainingTaxCharge / taxPerBlock).toFixed(2));
  
    runwayInDays = parseFloat((runway / 6400).toFixed(2));

    const runSellLand = () => {
        //request contract to add tokens to this
    }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Sell this Land</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p>House Id: {houseData.id}</p>
            <p className="text-lg text-gray-500 pt-8">Your current remaining taxe funds are: {houseData.remainingTaxCharge}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>House sell price: {houseData.sellPrice}</div>
            </div>

              <div className='py-3 pr-3'>Runway left in blocks: {runway}</div>
              <div className='py-3 pr-3'>Runway aproximataly left in days: {runwayInDays}</div>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'></div>
            </div>
          </div>
          <div className="items-center flex flex-row px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-1/3 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Close
            </button>
            <button
              onClick={runSellLand}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-1/3 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
                Sell Land
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
