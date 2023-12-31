import React, { useState } from 'react';
import { useNetworkLayer } from '../../hooks/useNetworkLayer';
import { NetworkLayer } from '../../../layers/network/createNetworkLayer';

function combineUint32ToUint64(x: number, y: number): bigint {
  x >>>= 0;
  y >>>= 0;

  return (BigInt(x) << BigInt(32)) | BigInt(y);
}

export default function Modal({ onClose, buyData } : {onClose : () => void, buyData : any }){

  const networkLayer = useNetworkLayer();

  let runway : number;
  let runwayInDays : number;
  let blockTax : number;
  const taxPerBlock : number = 0.01 ; // In percent



  const handleBuyLand = () => {
    let tileId = combineUint32ToUint64(buyData.x, buyData.y);
    networkLayer?.systemCalls.purchase(tileId, BigInt(buyData.buyPrice), BigInt(buyData.sellPrice));
    onClose();
  }

  blockTax = parseFloat((buyData.sellPrice * taxPerBlock).toFixed(2));

  runway = parseFloat((buyData.tax / taxPerBlock).toFixed(2));

  runwayInDays = parseFloat((runway / 6400).toFixed(2));


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land Confirmation id: ({buyData.id})</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your will be buying this land for {buyData.buyPrice}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>You will be selling this land for {buyData.sellPrice}</div>
              <div className='py-3 pr-3'>You will pay {blockTax} per block</div>
            </div>

              <div className='py-3 pr-3'>With the {buyData.tax} tax deposit you have a runway of {runway} blocks which is aproximataly {runwayInDays} days</div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleBuyLand}
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
