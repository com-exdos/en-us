import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

const fetchCryptoPrices = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,dogecoin,avalanche-2,chainlink&vs_currencies=usd');
  return response.json();
};

export const CryptoTicker: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    refetchInterval: 30000,
  });

  if (isLoading) return <div>Loading prices...</div>;

  return (
    <motion.div 
      className="w-full bg-cyber-secondary/50 backdrop-blur-md p-4 overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-8 animate-scroll">
        {data && Object.entries(data).map(([coin, price]: [string, any]) => (
          <motion.div 
            key={coin}
            className="flex items-center space-x-2 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-orbitron text-cyber-primary">{coin.toUpperCase()}</span>
            <span className="text-white">${price.usd.toFixed(2)}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};