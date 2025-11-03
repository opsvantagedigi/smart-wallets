'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, TrendingUp, TrendingDown, Eye, Heart, Share2, Filter,
  Grid3x3, List, BarChart3, PieChart, Calendar, Award, ExternalLink,
  Download, Upload, Wallet, Star, Activity, RefreshCw
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface UserNFT {
  id: string;
  name: string;
  collection: string;
  image: string;
  currentValue: number;
  purchasePrice: number;
  purchaseDate: string;
  rarity: string;
  traits: number;
  lastSale?: number;
  floorPrice: number;
  priceChange24h: number;
  volume24h: number;
}

interface PortfolioStats {
  totalValue: number;
  totalGain: number;
  gainPercentage: number;
  totalNFTs: number;
  uniqueCollections: number;
  totalVolume: number;
}

export default function NFTVaultComponent() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterBy, setFilterBy] = useState('All');
  const [sortBy, setSortBy] = useState('Value');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [isLoading, setIsLoading] = useState(false);

  const timeframes = ['24h', '7d', '30d', '90d', '1y'];
  const filterOptions = ['All', 'Art', 'Gaming', 'Music', 'Profile Pictures', 'Utility'];
  const sortOptions = ['Value', 'Gain/Loss', 'Name', 'Purchase Date', 'Rarity'];

  const portfolioStats: PortfolioStats = {
    totalValue: 45.8,
    totalGain: 12.3,
    gainPercentage: 36.7,
    totalNFTs: 127,
    uniqueCollections: 23,
    totalVolume: 156.4
  };

  const userNFTs: UserNFT[] = [
    {
      id: '1',
      name: 'Genesis Whale #1337',
      collection: 'MARZ Genesis',
      image: '/api/placeholder/300/300',
      currentValue: 15.5,
      purchasePrice: 12.8,
      purchaseDate: '2024-08-15',
      rarity: 'Legendary',
      traits: 7,
      lastSale: 14.2,
      floorPrice: 8.9,
      priceChange24h: 5.2,
      volume24h: 234.5
    },
    {
      id: '2',
      name: 'Cyber Punk #4206',
      collection: 'Digital Dreams',
      image: '/api/placeholder/300/300',
      currentValue: 3.2,
      purchasePrice: 4.1,
      purchaseDate: '2024-09-02',
      rarity: 'Rare',
      traits: 5,
      floorPrice: 2.8,
      priceChange24h: -12.3,
      volume24h: 87.2
    },
    {
      id: '3',
      name: 'Ocean Guardian #888',
      collection: 'Crypto Whales',
      image: '/api/placeholder/300/300',
      currentValue: 7.8,
      purchasePrice: 6.5,
      purchaseDate: '2024-07-20',
      rarity: 'Epic',
      traits: 6,
      lastSale: 7.2,
      floorPrice: 5.1,
      priceChange24h: 8.7,
      volume24h: 445.8
    },
    {
      id: '4',
      name: 'Space Explorer #2024',
      collection: 'MARZ Genesis',
      image: '/api/placeholder/300/300',
      currentValue: 4.7,
      purchasePrice: 3.9,
      purchaseDate: '2024-10-10',
      rarity: 'Uncommon',
      traits: 4,
      floorPrice: 3.2,
      priceChange24h: 2.1,
      volume24h: 156.3
    },
    {
      id: '5',
      name: 'Mystic Dragon #777',
      collection: 'Fantasy Legends',
      image: '/api/placeholder/300/300',
      currentValue: 8.9,
      purchasePrice: 7.2,
      purchaseDate: '2024-06-30',
      rarity: 'Epic',
      traits: 8,
      lastSale: 8.1,
      floorPrice: 6.8,
      priceChange24h: 15.6,
      volume24h: 678.9
    },
    {
      id: '6',
      name: 'Neon Cat #3456',
      collection: 'Pixel Pets',
      image: '/api/placeholder/300/300',
      currentValue: 2.1,
      purchasePrice: 2.8,
      purchaseDate: '2024-09-15',
      rarity: 'Common',
      traits: 3,
      floorPrice: 1.8,
      priceChange24h: -5.4,
      volume24h: 45.2
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'text-yellow-400 bg-yellow-400/20';
      case 'Epic': return 'text-purple-400 bg-purple-400/20';
      case 'Rare': return 'text-blue-400 bg-blue-400/20';
      case 'Uncommon': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const calculateGainLoss = (current: number, purchase: number) => {
    const difference = current - purchase;
    const percentage = ((difference / purchase) * 100);
    return { difference, percentage };
  };

  const handleRefreshPrices = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">🎨 My NFT Vault</h2>
          <p className="text-gray-400">Manage and track your digital collectibles</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            onClick={handleRefreshPrices}
            variant="outline" 
            size="sm"
            disabled={isLoading}
            className="border-gray-600 text-gray-300 hover:bg-gray-600"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh Prices
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Upload className="mr-2 h-4 w-4" />
            Add NFT
          </Button>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-green-400 font-semibold">Portfolio Value</h3>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">{portfolioStats.totalValue} ETH</p>
          <p className="text-green-400 text-sm">+{portfolioStats.gainPercentage}% total gain</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-blue-400 font-semibold">Total NFTs</h3>
            <Award className="h-5 w-5 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white">{portfolioStats.totalNFTs}</p>
          <p className="text-blue-400 text-sm">{portfolioStats.uniqueCollections} collections</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-purple-400 font-semibold">24h Gain/Loss</h3>
            <BarChart3 className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">+{portfolioStats.totalGain} ETH</p>
          <p className="text-green-400 text-sm">+{portfolioStats.gainPercentage}%</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-yellow-400 font-semibold">Total Volume</h3>
            <Activity className="h-5 w-5 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold text-white">{portfolioStats.totalVolume} ETH</p>
          <p className="text-yellow-400 text-sm">All-time trading</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
        <div className="flex flex-wrap gap-4">
          <select 
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            title="Filter by category"
            aria-label="Filter NFTs by category"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
          >
            {filterOptions.map(option => (
              <option key={option} value={option} className="bg-gray-800">
                {option}
              </option>
            ))}
          </select>

          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            title="Sort options"
            aria-label="Sort NFTs by"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
          >
            {sortOptions.map(option => (
              <option key={option} value={option} className="bg-gray-800">
                {option}
              </option>
            ))}
          </select>

          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            title="Select timeframe"
            aria-label="Select price change timeframe"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
          >
            {timeframes.map(timeframe => (
              <option key={timeframe} value={timeframe} className="bg-gray-800">
                {timeframe}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex border border-white/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              title="Grid view"
              aria-label="Switch to grid view"
              className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-white/10'} text-white hover:bg-purple-700 transition-colors`}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              title="List view"
              aria-label="Switch to list view"
              className={`p-2 ${viewMode === 'list' ? 'bg-purple-600' : 'bg-white/10'} text-white hover:bg-purple-700 transition-colors`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-600">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* NFT Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {userNFTs.map((nft) => {
          const { difference, percentage } = calculateGainLoss(nft.currentValue, nft.purchasePrice);
          
          return (
            <div key={nft.id} className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group ${
              viewMode === 'list' ? 'flex items-center p-4' : 'p-4'
            }`}>
              {viewMode === 'grid' ? (
                <>
                  <div className="relative mb-4">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full aspect-square rounded-xl object-cover"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button 
                        className="p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors"
                        title="View details"
                        aria-label="View NFT details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors"
                        title="Share NFT"
                        aria-label="Share NFT"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getRarityColor(nft.rarity)}`}>
                        {nft.rarity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {nft.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{nft.collection}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Current Value</p>
                        <p className="text-white font-semibold">{nft.currentValue} ETH</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Purchase Price</p>
                        <p className="text-white font-semibold">{nft.purchasePrice} ETH</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Gain/Loss</p>
                        <p className={`font-semibold ${difference >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {difference >= 0 ? '+' : ''}{difference.toFixed(2)} ETH
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">% Change</p>
                        <p className={`font-semibold ${percentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {percentage >= 0 ? '+' : ''}{percentage.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <div className="text-xs text-gray-400">
                        <p>Floor: {nft.floorPrice} ETH</p>
                        <p>{nft.traits} traits</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                          Sell
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          List
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-16 h-16 rounded-xl object-cover mr-4"
                  />
                  <div className="flex-1 grid grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-white font-semibold">{nft.name}</h3>
                      <p className="text-gray-400 text-sm">{nft.collection}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold">{nft.currentValue} ETH</p>
                      <p className="text-gray-400 text-xs">Current</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white">{nft.purchasePrice} ETH</p>
                      <p className="text-gray-400 text-xs">Purchase</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-semibold ${difference >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {difference >= 0 ? '+' : ''}{difference.toFixed(2)} ETH
                      </p>
                      <p className="text-gray-400 text-xs">Gain/Loss</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-semibold ${percentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {percentage >= 0 ? '+' : ''}{percentage.toFixed(1)}%
                      </p>
                      <p className="text-gray-400 text-xs">% Change</p>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                        Sell
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Analytics Summary */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <PieChart className="h-5 w-5 text-blue-400 mr-2" />
            Top Collections
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">MARZ Genesis</span>
              <span className="text-white font-semibold">35%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Crypto Whales</span>
              <span className="text-white font-semibold">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Digital Dreams</span>
              <span className="text-white font-semibold">20%</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Calendar className="h-5 w-5 text-green-400 mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Listed Ocean Guardian</span>
              <span className="text-green-400">+7.8 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Bought Space Explorer</span>
              <span className="text-red-400">-4.7 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Received Royalty</span>
              <span className="text-green-400">+0.3 ETH</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            Best Performers
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Mystic Dragon #777</span>
              <span className="text-green-400">+23.6%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Genesis Whale #1337</span>
              <span className="text-green-400">+21.1%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Ocean Guardian #888</span>
              <span className="text-green-400">+20.0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}