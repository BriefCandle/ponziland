import React, { useState } from 'react';

interface BuyPageProps {
  onClose: () => void;
  buyData: {
    id: string;
    sellPrice: number;
    buyPrice: number;
    tax: number;
    owner: string | null;
  };
}

const BuyPage: React.FC<BuyPageProps> = ({ onClose, buyData }) => {
  const [sellPrice, setSellPrice] = useState(buyData.sellPrice);
  const [tax, setTax] = useState(buyData.tax);

  const handleValidate = () => {
    console.log('Validating Buy Data:', { ...buyData, sellPrice, tax });
    onClose(); // Close the modal after validation
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Land id: ({buyData.id})</h3>
          <div className="mt-2 pb-4 flex flex-col">
            <p className="text-lg text-gray-500 pt-8">Your buy price is ${buyData.buyPrice}</p>
            <div className='py-3 pr-3'>
              <label>Set sell price: </label>
              <input 
                type="number" 
                value={sellPrice} 
                onChange={(e) => setSellPrice(Number(e.target.value))}
                className='w-1/2 border border-gray-300'
              />
            </div>
            <div className='py-3 pr-3'>
              <label>Set tax: </label>
              <input 
                type="number" 
                value={tax} 
                onChange={(e) => setTax(Number(e.target.value))}
                className='w-1/2 border border-gray-300'
              />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleValidate}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-2/3 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
