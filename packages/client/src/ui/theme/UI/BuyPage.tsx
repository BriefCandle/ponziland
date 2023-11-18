import React, { useState } from 'react';

export default function Modal({ onClose, price } : {onClose : () => void , price : number }){

  return (
    <div className='w-full h-full' onClick={onClose}>
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Your price is ${price}</p>
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
    </div>
  );
};
