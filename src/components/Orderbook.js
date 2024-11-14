import React from 'react';

const Orderbook = ({ bids, asks }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-green-500 text-xl font-semibold">Bids</h3>
          {bids.map(([price, amount], index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-green-400">{price.toFixed(2)}</span>
              <span>{amount.toFixed(4)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-red-500 text-xl font-semibold">Asks</h3>
          {asks.map(([price, amount], index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-red-400">{price.toFixed(2)}</span>
              <span>{amount.toFixed(4)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orderbook;
