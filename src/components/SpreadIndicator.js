import React from 'react';

const SpreadIndicator = ({ spread }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between shadow-md">
      <span className="text-lg font-semibold text-white">Spread:</span>
      <span className="text-2xl font-bold text-yellow-400">{spread.toFixed(4)}</span>
    </div>
  );
};

export default SpreadIndicator;
