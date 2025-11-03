'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Calculator, TrendingUp, DollarSign, Calendar, 
  Zap, BarChart3, ArrowRight, RefreshCw, Target,
  Coins, Percent, Clock, Sparkles, Crown, Star
} from 'lucide-react';

export default function StakingPage() {
  const [selectedAsset, setSelectedAsset] = useState('ETH');
  const [stakeAmount, setStakeAmount] = useState(1000);
  const [stakeDuration, setStakeDuration] = useState(365);
  const [autoCompound, setAutoCompound] = useState(true);
  const [animatedEarnings, setAnimatedEarnings] = useState(0);

  const assets = [
    { 
      symbol: 'ETH', 
      name: 'Ethereum', 
      apy: 8.5, 
      minStake: 0.01,
      icon: '⟠',
      color: 'from-blue-500 to-purple-500',
      risk: 'Low',
      lockup: 'Flexible'
    },
    { 
      symbol: 'MATIC', 
      name: 'Polygon', 
      apy: 12.3, 
      minStake: 1,
      icon: '⬟',
      color: 'from-purple-500 to-pink-500',
      risk: 'Medium',
      lockup: '7 Days'
    },
    { 
      symbol: 'SOL', 
      name: 'Solana', 
      apy: 15.7, 
      minStake: 0.1,
      icon: '◉',
      color: 'from-green-500 to-blue-500',
      risk: 'Medium',
      lockup: '2 Days'
    },
    { 
      symbol: 'AVAX', 
      name: 'Avalanche', 
      apy: 11.2, 
      minStake: 0.1,
      icon: '▲',
      color: 'from-red-500 to-orange-500',
      risk: 'Medium',
      lockup: '14 Days'
    },
    { 
      symbol: 'DOT', 
      name: 'Polkadot', 
      apy: 14.8, 
      minStake: 1,
      icon: '●',
      color: 'from-pink-500 to-rose-500',
      risk: 'High',
      lockup: '28 Days'
    },
    { 
      symbol: 'ADA', 
      name: 'Cardano', 
      apy: 9.1, 
      minStake: 10,
      icon: '◆',
      color: 'from-blue-500 to-cyan-500',
      risk: 'Low',
      lockup: 'Flexible'
    }
  ];

  const stakingPools = [
    {
      name: 'Ethereum 2.0 Staking',
      apy: '8.5%',
      tvl: '$24.2B',
      participants: '847K',
      risk: 'Low',
      features: ['Liquid Staking', 'Auto Compound', 'Insurance']
    },
    {
      name: 'DeFi Yield Optimization',
      apy: '18.3%',
      tvl: '$1.8B', 
      participants: '156K',
      risk: 'High',
      features: ['Auto Rebalancing', 'Multi-Protocol', 'Flash Loan Protection']
    },
    {
      name: 'Stable Coin Farming',
      apy: '12.1%',
      tvl: '$890M',
      participants: '234K', 
      risk: 'Low',
      features: ['USDC/USDT/DAI', 'Impermanent Loss Protection', '24/7 Monitoring']
    }
  ];

  const currentAsset = assets.find(asset => asset.symbol === selectedAsset);
  
  // Calculate earnings
  const dailyRate = currentAsset?.apy ? currentAsset.apy / 100 / 365 : 0;
  const compoundFactor = autoCompound ? Math.E : 1;
  const totalEarnings = autoCompound 
    ? stakeAmount * (Math.pow(1 + dailyRate, stakeDuration) - 1)
    : stakeAmount * dailyRate * stakeDuration;
  
  const finalAmount = stakeAmount + totalEarnings;
  const dailyEarnings = stakeAmount * dailyRate;
  const monthlyEarnings = dailyEarnings * 30;

  // Animate earnings counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = totalEarnings / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalEarnings) {
        setAnimatedEarnings(totalEarnings);
        clearInterval(timer);
      } else {
        setAnimatedEarnings(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [totalEarnings, selectedAsset, stakeAmount, stakeDuration, autoCompound]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-green-400 font-semibold">🚀 Staking Rewards</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Smart Staking
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
              Calculator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Maximize your crypto earnings with our intelligent staking calculator. 
            Compare rewards, risks, and find the best opportunities for your portfolio.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Calculator Panel */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Calculate Your Rewards</h2>
            </div>

            {/* Asset Selection */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">Select Asset</label>
              <div className="grid grid-cols-2 gap-3">
                {assets.slice(0, 6).map((asset) => (
                  <button
                    key={asset.symbol}
                    onClick={() => setSelectedAsset(asset.symbol)}
                    className={`p-4 rounded-2xl border transition-all text-left ${
                      selectedAsset === asset.symbol
                        ? 'border-green-400 bg-green-400/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{asset.icon}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        asset.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                        asset.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {asset.risk}
                      </span>
                    </div>
                    <div className="text-white font-semibold">{asset.symbol}</div>
                    <div className="text-green-400 font-bold">{asset.apy}% APY</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stake Amount */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">Stake Amount ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                  placeholder="Enter amount"
                />
              </div>
              <div className="flex gap-2 mt-3">
                {[500, 1000, 5000, 10000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setStakeAmount(amount)}
                    className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-colors text-sm"
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4">Staking Duration</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={stakeDuration}
                  onChange={(e) => setStakeDuration(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-green-400 appearance-none"
                  title="Select staking duration"
                  aria-label="Select staking duration"
                >
                  <option value={30}>1 Month</option>
                  <option value={90}>3 Months</option>
                  <option value={180}>6 Months</option>
                  <option value={365}>1 Year</option>
                  <option value={730}>2 Years</option>
                </select>
              </div>
            </div>

            {/* Auto Compound */}
            <div className="mb-8">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoCompound}
                  onChange={(e) => setAutoCompound(e.target.checked)}
                  className="w-5 h-5 text-green-400 rounded focus:ring-green-400"
                />
                <span className="text-white font-semibold">Auto-Compound Rewards</span>
                <span className="text-green-400 text-sm">(+15% boost)</span>
              </label>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Projected Earnings</h2>
            </div>

            {/* Main Results */}
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/30">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Total Earnings</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    ${animatedEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-lg text-white">
                    Final Amount: ${finalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Daily</div>
                  <div className="text-xl font-bold text-blue-400">
                    ${dailyEarnings.toFixed(2)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <div className="text-sm text-gray-400 mb-1">Monthly</div>
                  <div className="text-xl font-bold text-purple-400">
                    ${monthlyEarnings.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Details */}
            {currentAsset && (
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-white font-semibold mb-4">Asset Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">APY</span>
                    <span className="text-green-400 font-semibold">{currentAsset.apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Stake</span>
                    <span className="text-white">{currentAsset.minStake} {currentAsset.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lock-up Period</span>
                    <span className="text-white">{currentAsset.lockup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Level</span>
                    <span className={`font-semibold ${
                      currentAsset.risk === 'Low' ? 'text-green-400' :
                      currentAsset.risk === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {currentAsset.risk}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <Button 
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Staking Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Staking Pools */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured <span className="text-green-400">Staking Pools</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stakingPools.map((pool, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pool.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                    pool.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {pool.risk}
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{pool.apy}</div>
                  <div className="text-sm text-gray-400">Annual Percentage Yield</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">TVL</span>
                    <span className="text-white font-semibold">{pool.tvl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Participants</span>
                    <span className="text-white font-semibold">{pool.participants}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Features</div>
                  <div className="flex flex-wrap gap-1">
                    {pool.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-2xl py-3"
                >
                  Join Pool
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-blue-400">MARZ Staking</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Auto-Compound</h3>
              <p className="text-gray-300">Automatically reinvest your rewards for maximum yield</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Risk Management</h3>
              <p className="text-gray-300">Smart contracts audited by leading security firms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Flexible Terms</h3>
              <p className="text-gray-300">Choose from flexible or fixed-term staking options</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Premium Support</h3>
              <p className="text-gray-300">24/7 dedicated support for all staking participants</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users earning passive income through our secure staking platform. 
              Get started with as little as $100.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Star className="mr-2 h-6 w-6" />
                Start Staking
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10"
                asChild
              >
                <Link href="/features">
                  <BarChart3 className="mr-2 h-6 w-6" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}