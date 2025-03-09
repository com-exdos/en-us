import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-cyber-secondary/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-glow">
            Welcome to <span className="text-cyber-primary">Exodus Wallet</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            The Next Generation of Cryptocurrency Management
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="p-6 rounded-xl neon-border bg-cyber-secondary/30"
              whileHover={{ scale: 1.05 }}
            >
              <Wallet className="w-12 h-12 text-cyber-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
              <p className="text-gray-400">Military-grade encryption for your digital assets</p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-xl neon-border bg-cyber-secondary/30"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-12 h-12 text-cyber-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
              <p className="text-gray-400">Multi-layer protection for your investments</p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-xl neon-border bg-cyber-secondary/30"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-12 h-12 text-cyber-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Instant transactions and real-time updates</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};