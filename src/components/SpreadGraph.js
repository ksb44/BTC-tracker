import React from 'react';
import { Line } from 'react-chartjs-2';

const SpreadGraph = ({ spreadData }) => {
  const data = {
    labels: spreadData.map((_, index) => index),
    datasets: [
      {
        label: 'Spread',
        data: spreadData,
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default SpreadGraph;