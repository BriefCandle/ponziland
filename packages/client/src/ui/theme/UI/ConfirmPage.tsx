import React, { useState } from 'react';

export default function Modal({ onClose, tax, sellPrice, buyPrice } : {onClose : () => void, tax : number, sellPrice : number, buyPrice : number }){

  let runway : number;
  let runwayInDays : number;
  let blockTax : number;
  const taxPerBlock : number = 0.01 ; // In percent

  blockTax = parseFloat((sellPrice * taxPerBlock).toFixed(2));

  runway = parseFloat((tax / taxPerBlock).toFixed(2));

  runwayInDays = parseFloat((runway / 6400).toFixed(2));


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land Confirmation</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your will be buying this land for {buyPrice}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>You will be selling this land for {sellPrice}</div>
              <div className='py-3 pr-3'>You will pay {blockTax} per block</div>
            </div>

              <div className='py-3 pr-3'>With the {tax} tax deposit you have a runway of {runway} blocks which is aproximataly {runwayInDays} days</div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-2/3 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
