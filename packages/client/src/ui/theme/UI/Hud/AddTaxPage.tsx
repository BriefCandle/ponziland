import React, { useState } from 'react';

type PlotData = { x: number, taxReserve: number, salePrice: number, owner: string }

export default function AddTaxPage({ onClose, plotData } : {onClose : () => void, plotData : PlotData }){

    const [taxAdd, setTaxAdd] = useState<number>(0);

    const handleTaxAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaxAdd(Number(e.target.value));
    }

    const runTaxAdd = () => {
        //request contract to add tokens to this
    }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"  onClick={(e) => e.stopPropagation() }>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add taxe funds</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your current taxe funds are: {plotData.taxReserve}</p>
          </div>
          <div >
            <div className='flex flex-col py-3'>
              <div className='py-3 pr-3'>Add to the taxe funds:</div>
              <input 
                  type="number" 
                  value={taxAdd} 
                  onChange={handleTaxAdd}
                  className='w-1/2 border border-gray-300'
              />
              <div className='py-3 pr-3'>Deposit tax money</div>
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
              onClick={runTaxAdd}
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-1/3 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
                Add tax
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
