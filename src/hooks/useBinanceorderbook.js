import { useState, useEffect } from 'react';
import axios from 'axios';

const BINANCE_WEBSOCKET_URL = 'wss://stream.binance.com:9443/ws/btcusdt@depth';

export const useBinanceOrderbook = () => {
  const [orderbook, setOrderbook] = useState({ bids: [], asks: [], spread: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(BINANCE_WEBSOCKET_URL);

    const fetchInitialOrderbook = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=20');
        processOrderbook(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    const processOrderbook = (data) => {
      const sortedBids = data.bids.map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]).sort((a, b) => b[0] - a[0]).slice(0, 10);
      const sortedAsks = data.asks.map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]).sort((a, b) => a[0] - b[0]).slice(0, 10);
      const spread = sortedAsks[0][0] - sortedBids[0][0];

      setOrderbook({ bids: sortedBids, asks: sortedAsks, spread });
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.b && data.a) {
        processOrderbook({ bids: data.b, asks: data.a });
      }
    };

    fetchInitialOrderbook();

    return () => {
      ws.close();
    };
  }, []);

  return { ...orderbook, loading, error };
};
