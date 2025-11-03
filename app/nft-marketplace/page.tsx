'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, Search, Filter, Grid3x3, List, Eye, Heart, ShoppingCart, 
  TrendingUp, Award, Zap, Users, Star, ChevronDown, ExternalLink,
  Wallet, Lock, Verified, Calendar, BarChart3, Activity
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface NFT {
  id: string;
  name: string;
  collection: string;
  price: number;
  currency: string;
  image: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  likes: number;
  views: number;
  lastSale?: number;
  priceChange?: number;
  verified: boolean;
  traits: { trait_type: string; value: string; rarity: number }[];
}

interface Collection {
  id: string;
  name: string;
  floorPrice: number;
  volume: number;
  change24h: number;
  items: number;
  owners: number;
  verified: boolean;
  image: string;
}

export default function NFTMarketplacePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('Recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [connectedWallet, setConnectedWallet] = useState(false);

  const categories = ['All', 'Art', 'Gaming', 'Music', 'Sports', 'Collectibles', 'Utility'];
  const priceRanges = ['All', '< 0.1 ETH', '0.1 - 1 ETH', '1 - 10 ETH', '> 10 ETH'];
  const sortOptions = ['Recent', 'Price: Low to High', 'Price: High to Low', 'Most Liked', 'Rarity'];

  const collections: Collection[] = [
    {
      id: '1',
      name: 'MARZ Genesis',
      floorPrice: 2.5,
      volume: 1250.8,
      change24h: 15.2,
      items: 10000,
      owners: 7543,
      verified: true,
      image: '/api/placeholder/100/100'
    },
    {
      id: '2',
      name: 'Crypto Whales',
      floorPrice: 5.2,
      volume: 890.3,
      change24h: -8.1,
      items: 5000,
      owners: 3421,
      verified: true,
      image: '/api/placeholder/100/100'
    },
    {
      id: '3',
      name: 'Digital Dreams',
      floorPrice: 0.8,
      volume: 445.7,
      change24h: 23.4,
      items: 8888,
      owners: 5234,
      verified: false,
      image: '/api/placeholder/100/100'
    }
  ];

  const featuredNFTs: NFT[] = [
    {
      id: '1',
      name: 'Genesis Whale #1337',
      collection: 'MARZ Genesis',
      price: 15.5,
      currency: 'ETH',
      image: '/api/placeholder/300/300',
      rarity: 'Legendary',
      likes: 342,
      views: 1250,
      lastSale: 12.8,
      priceChange: 21.1,
      verified: true,
      traits: [
        { trait_type: 'Background', value: 'Cosmic Purple', rarity: 2.1 },
        { trait_type: 'Eyes', value: 'Laser Blue', rarity: 1.5 },
        { trait_type: 'Accessory', value: 'Golden Crown', rarity: 0.8 }
      ]
    },
    {
      id: '2',
      name: 'Cyber Punk #4206',
      collection: 'Digital Dreams',
      price: 3.2,
      currency: 'ETH',
      image: '/api/placeholder/300/300',
      rarity: 'Rare',
      likes: 156,
      views: 890,
      lastSale: 2.9,
      priceChange: 10.3,
      verified: false,
      traits: [
        { trait_type: 'Style', value: 'Neon Glow', rarity: 5.2 },
        { trait_type: 'Weapon', value: 'Energy Sword', rarity: 3.8 }
      ]
    },
    {
      id: '3',
      name: 'Ocean Guardian #888',
      collection: 'Crypto Whales',
      price: 7.8,
      currency: 'ETH',
      image: '/api/placeholder/300/300',
      rarity: 'Epic',
      likes: 234,
      views: 1124,
      lastSale: 6.5,
      priceChange: 20.0,
      verified: true,
      traits: [
        { trait_type: 'Element', value: 'Water', rarity: 12.5 },
        { trait_type: 'Power', value: 'Tsunami', rarity: 4.2 }
      ]
    },
    {
      id: '4',
      name: 'Space Explorer #2024',
      collection: 'MARZ Genesis',
      price: 4.7,
      currency: 'ETH',
      image: '/api/placeholder/300/300',
      rarity: 'Uncommon',
      likes: 89,
      views: 456,
      lastSale: 4.1,
      priceChange: 14.6,
      verified: true,
      traits: [
        { trait_type: 'Suit', value: 'Titanium', rarity: 8.9 },
        { trait_type: 'Helmet', value: 'Transparent', rarity: 15.3 }
      ]
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

  const handleConnectWallet = () => {
    setConnectedWallet(true);
    // In a real app, this would trigger wallet connection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-purple-400 font-semibold">🎨 NFT Marketplace</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Discover & Trade
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Digital Assets
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore the world's largest NFT marketplace. Buy, sell, and showcase your digital collectibles 
            with zero gas fees and instant transactions.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            {!connectedWallet ? (
              <Button onClick={handleConnectWallet} className="bg-purple-600 hover:bg-purple-700">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                <Verified className="mr-2 h-4 w-4" />
                Wallet Connected
              </Button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">2.5M+</div>
            <p className="text-gray-400">Total Volume</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">150K+</div>
            <p className="text-gray-400">Active Users</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">25K+</div>
            <p className="text-gray-400">Collections</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">Zero</div>
            <p className="text-gray-400">Gas Fees</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search NFTs, collections, creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                title="Select category"
                aria-label="Filter by category"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>

              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                title="Select price range"
                aria-label="Filter by price range"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range} className="bg-gray-800">
                    {range}
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

              <div className="flex border border-white/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-white/10'} text-white hover:bg-purple-700 transition-colors`}
                  aria-label="Switch to grid view"
                  title="Switch to grid view"
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600' : 'bg-white/10'} text-white hover:bg-purple-700 transition-colors`}
                  aria-label="Switch to list view"
                  title="Switch to list view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Top Collections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">🔥 Trending Collections</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div key={collection.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-purple-400 mr-3">#{index + 1}</span>
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-12 h-12 rounded-xl mr-3"
                    />
                    <div>
                      <h3 className="text-white font-semibold flex items-center">
                        {collection.name}
                        {collection.verified && (
                          <Verified className="h-4 w-4 text-blue-400 ml-1" />
                        )}
                      </h3>
                      <p className="text-gray-400 text-sm">{collection.items.toLocaleString()} items</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Floor Price</p>
                    <p className="text-white font-semibold">{collection.floorPrice} ETH</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">24h Volume</p>
                    <p className="text-white font-semibold">{collection.volume} ETH</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">24h Change</p>
                    <p className={`font-semibold ${collection.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {collection.change24h >= 0 ? '+' : ''}{collection.change24h}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Owners</p>
                    <p className="text-white font-semibold">{collection.owners.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured NFTs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">✨ Featured NFTs</h2>
          
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
            {featuredNFTs.map((nft) => (
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
                          title="Add to favorites"
                          aria-label="Add to favorites"
                        >
                          <Heart className="h-4 w-4" />
                        </button>
                        <button 
                          className="p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors"
                          title="View details"
                          aria-label="View NFT details"
                        >
                          <Eye className="h-4 w-4" />
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
                        <p className="text-gray-400 text-sm flex items-center">
                          {nft.collection}
                          {nft.verified && (
                            <Verified className="h-3 w-3 text-blue-400 ml-1" />
                          )}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-xs">Current Price</p>
                          <p className="text-white font-bold">{nft.price} {nft.currency}</p>
                        </div>
                        {nft.priceChange && (
                          <div className="text-right">
                            <p className="text-gray-400 text-xs">24h Change</p>
                            <p className="text-green-400 text-sm font-semibold">+{nft.priceChange}%</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-gray-400 text-xs">
                        <span className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {nft.likes}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {nft.views}
                        </span>
                      </div>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" disabled={!connectedWallet}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {connectedWallet ? 'Buy Now' : 'Connect Wallet to Buy'}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-20 h-20 rounded-xl object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold">{nft.name}</h3>
                          <p className="text-gray-400 text-sm">{nft.collection}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">{nft.price} {nft.currency}</p>
                          <p className="text-green-400 text-sm">+{nft.priceChange}%</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your NFT Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create, collect, and trade NFTs with zero gas fees. Join the future of digital ownership.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                <Award className="mr-2 h-5 w-5" />
                Create NFT
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 px-8">
                <BarChart3 className="mr-2 h-5 w-5" />
                Analytics
              </Button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              No gas fees • Instant transactions • Creator royalties protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}