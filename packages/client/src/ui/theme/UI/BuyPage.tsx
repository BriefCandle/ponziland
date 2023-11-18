import React, { useState } from 'react';


export default function Modal({ onNext, onClose, buyData, setBuyData } : { onNext : () => void, onClose : () => void, buyData : any, setBuyData : any }){

  const handleNext = () => {
      onNext();
  };



  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your buy price is ${buyData.price}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>At what price do you want to sell the land</div>
              <input 
                  type="number" 
                  value={buyData.sellPrice} 
                  onChange={(e) => {
                    setBuyData({...buyData, sellPrice : e.target.value})
                  }}
                  className='w-1/2 border border-gray-300'
              />
              <div className='py-3 pr-3'>Deposit tax money</div>
              <input 
                  type="number" 
                  value={buyData.tax} 
                  onChange={(e) => {
                    setBuyData({...buyData, tax : e.target.value})
                  }}
                  className='w-1/2 border border-gray-300'
              />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-2/3 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
