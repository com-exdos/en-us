import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { CryptoTicker } from './components/CryptoTicker';
import { Hero } from './components/Hero';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <CryptoTicker />
        <Hero />
        
        <motion.main 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-glow">What is Exodus Wallet?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Exodus Wallet is a revolutionary cryptocurrency wallet that combines cutting-edge security with an intuitive user interface. Built for both newcomers and experienced crypto enthusiasts, Exodus provides a seamless experience for managing your digital assets.
            </p>
            <ul className="grid md:grid-cols-2 gap-6 mt-8">
              <li className="flex items-start space-x-4">
                <span className="text-cyber-primary text-xl">•</span>
                <span>Multi-cryptocurrency support with over 150+ assets</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-cyber-primary text-xl">•</span>
                <span>Built-in exchange functionality</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-cyber-primary text-xl">•</span>
                <span>24/7 customer support and community</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-cyber-primary text-xl">•</span>
                <span>Regular updates and new feature releases</span>
              </li>
            </ul>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-glow">Security Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl neon-border bg-cyber-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Advanced Encryption</h3>
                <p className="text-gray-300">
                  Your private keys never leave your device. All sensitive data is encrypted using state-of-the-art algorithms.
                </p>
              </div>
              <div className="p-6 rounded-xl neon-border bg-cyber-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Backup & Recovery</h3>
                <p className="text-gray-300">
                  Secure backup options ensure you never lose access to your funds, with easy-to-follow recovery procedures.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 animate-glow">Why Choose Exodus?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-cyber-secondary/30">
                <h3 className="text-xl font-bold mb-4">User-Friendly</h3>
                <p className="text-gray-300">
                  Intuitive interface designed for both beginners and experts
                </p>
              </div>
              <div className="p-6 rounded-xl bg-cyber-secondary/30">
                <h3 className="text-xl font-bold mb-4">Multi-Platform</h3>
                <p className="text-gray-300">
                  Available on desktop and mobile devices
                </p>
              </div>
              <div className="p-6 rounded-xl bg-cyber-secondary/30">
                <h3 className="text-xl font-bold mb-4">Built-in Exchange</h3>
                <p className="text-gray-300">
                  Swap cryptocurrencies without leaving your wallet
                </p>
              </div>
            </div>
          </section>
        </motion.main>

        <footer className="bg-cyber-secondary/30 backdrop-blur-md py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="text-sm text-gray-400 leading-relaxed text-center">
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors">Exodus Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Crypto Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Bitcoin Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Desktop Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Mobile Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Security</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Exchange</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus NFT Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus DeFi</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Staking</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Multi-Asset Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Hardware Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Web3 Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Ethereum Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Solana Wallet</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Portfolio</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Crypto Trading</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Management</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Private Keys</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Backup</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Recovery</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Support</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Updates</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Security Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Crypto Storage</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Exchange</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Crypto Portfolio</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Wallet Review</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Download</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Installation</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Setup Guide</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Tutorial</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Getting Started</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus User Guide</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus FAQ</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Help Center</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Community</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Blog</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus News</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Updates</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Development</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Technology</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Innovation</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Features List</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Security Guide</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Privacy</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Encryption</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Protection</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Security</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Wallet Security</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Safe Storage</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Backup Solution</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Recovery Tools</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Backup</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Wallet Backup</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Exchange Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Trading Platform</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Trading</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Crypto Exchange</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Portfolio Management</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Asset Tracking</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Investment Tools</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Market Data</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Price Charts</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Market Analysis</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Trading Tools</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Mobile App</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Desktop App</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Web Platform</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Cross-Platform</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Compatibility</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Performance</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Speed</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Reliability</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Stability</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus User Experience</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Interface</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Design</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Usability</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Accessibility</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Customer Support</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Technical Support</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Support Team</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Help</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Resources</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Documentation</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Knowledge Base</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Learning Center</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Education</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Guides</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Tips</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Best Practices</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Recommendations</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Solutions</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Benefits</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Advantages</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Features Overview</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Wallet Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Platform Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Security Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Trading Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Exchange Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Portfolio Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Support Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus User Features</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Platform Benefits</a> | 
              <a href="https://exodus.com" className="hover:text-cyber-primary transition-colors"> Exodus Wallet Benefits</a>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;