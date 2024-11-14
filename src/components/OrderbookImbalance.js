import React from 'react';

const OrderbookImbalance = ({ bids, asks }) => {
  const calculateImbalance = () => {
    const totalBidVolume = bids.reduce((sum, [, amount]) => sum + amount, 0);
    const totalAskVolume = asks.reduce((sum, [, amount]) => sum + amount, 0);
    
    const imbalance = ((totalBidVolume - totalAskVolume) / 
                       (totalBidVolume + totalAskVolume)) * 100;
    
    return imbalance;
  };

  const imbalance = calculateImbalance();

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-white">Orderbook Imbalance</h3>
      <div className="flex items-center">
        <div 
          className={`h-2 ${imbalance > 0 ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ width: `${Math.abs(imbalance)}%` }}></div>
        <span className="ml-2 text-white">{imbalance.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default OrderbookImbalance;