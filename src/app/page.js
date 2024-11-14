'use client';
import React from 'react';
import Orderbook from '../components/Orderbook';
import SpreadIndicator from '../components/SpreadIndicator';
import OrderbookImbalance from '../components/OrderbookImbalance';
import MarketDepthChart from '../components/MarketDepthChart';
import { useBinanceOrderbook } from '@/hooks/useBinanceorderbook';

const Home = () => {
  const { bids, asks, spread, loading, error } = useBinanceOrderbook();

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error fetching data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-4">BTC-USD Orderbook</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SpreadIndicator spread={spread} />
        <OrderbookImbalance bids={bids} asks={asks} />
      </div>
      <Orderbook bids={bids} asks={asks} />
      <MarketDepthChart bids={bids} asks={asks} />
    </div>
  );
};

export default Home;