import React, { useState } from 'react';

export default function Modal({ onClose, price } : {onClose : () => void , price : number }){

  return (
    <div className="absolute inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your buy price is ${price}</p>
          </div>
          <div >
            <div className='flex flex-col justify-center'>
              <div className='py-8 px-3'>At what price do you want to sell the land</div>
              <input type="number" defaultValue={price} />
            </div>
            <div className='flex flex-col'>
              <div className='py-8 px-3'>Deposit tax money</div>
              <input type="number" defaultValue={price} />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
