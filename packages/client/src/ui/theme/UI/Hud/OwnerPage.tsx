import React, { useState } from 'react';

type HouseData = { id : number, remainingTaxCharge : number, sellPrice : number }

export default function OwnerPage({ onClose, addTaxStorage, addSellPlot, houseData } : {onClose : () => void, addTaxStorage : () => void, addSellPlot : () => void, houseData : HouseData }){


    let runway : number;
    let runwayInDays : number;
    let blockTax : number;
    const taxPerBlock : number = 0.01 ; // In percent
  
    blockTax = parseFloat((houseData.sellPrice * taxPerBlock).toFixed(2));
  
    runway = parseFloat((houseData.remainingTaxCharge / taxPerBlock).toFixed(2));
  
    runwayInDays = parseFloat((runway / 6400).toFixed(2));
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">House Information</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">House Id: {houseData.id}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>Remaining stack: {houseData.remainingTaxCharge}</div>
              <div className='py-3 pr-3'>House sell price: {houseData.sellPrice}</div>
            </div>

              <div className='py-3 pr-3'>Runway left in blocks: {runway}</div>
              <div className='py-3 pr-3'>Runway aproximataly left in days: {runwayInDays}</div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Close
            </button>
            <button 
                className="px-4 py-2 bg-red-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={addSellPlot}
            >
                Sell Plot
            </button>
            <button 
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClick={addTaxStorage}
            >
                Add tax storage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
