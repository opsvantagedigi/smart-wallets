'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Heart, Repeat2, Share, ExternalLink, Verified, TrendingUp } from 'lucide-react';

interface Tweet {
  id: string;
  author: string;
  handle: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
  timestamp: string;
  verified: boolean;
  avatar: string;
}

export default function SocialFeed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock social media data - In production, this would come from Twitter API
  const mockTweets: Tweet[] = [
    {
      id: '1',
      author: 'CryptoWhale',
      handle: '@cryptowhale_eth',
      content: 'Just tried @MarzWallet and WOW! The gas optimization saved me $300 this week alone. This is the future of Web3 UX! 🚀 #MarzWallet #Web3',
      likes: 1247,
      retweets: 423,
      replies: 89,
      timestamp: '2h',
      verified: true,
      avatar: '🐋'
    },
    {
      id: '2',
      author: 'DeFi Sarah',
      handle: '@defi_sarah',
      content: 'The @MarzWallet NFT portfolio view is absolutely stunning. Finally, a wallet that makes my art collection look as beautiful as it should! 🎨✨',
      likes: 892,
      retweets: 267,
      replies: 56,
      timestamp: '4h',
      verified: false,
      avatar: '🎨'
    },
    {
      id: '3',
      author: 'Web3 Builder',
      handle: '@web3_builder',
      content: 'Been building on @MarzWallet\'s API for the past month. The developer experience is incredible - clean docs, great support team! 🛠️ #BuildingOnMarz',
      likes: 654,
      retweets: 189,
      replies: 34,
      timestamp: '6h',
      verified: true,
      avatar: '⚡'
    },
    {
      id: '4',
      author: 'Crypto Researcher',
      handle: '@crypto_research',
      content: 'Just published our analysis of smart wallet solutions. @MarzWallet ranks #1 for security, UX, and innovation. Full report: [link] 📊',
      likes: 2156,
      retweets: 876,
      replies: 234,
      timestamp: '8h',
      verified: true,
      avatar: '📊'
    },
    {
      id: '5',
      author: 'NFT Collector',
      handle: '@nft_collector_99',
      content: 'Switched to @MarzWallet last month. The analytics helped me identify a blue-chip project before it mooned. Portfolio up 400%! 💎🙌',
      likes: 1876,
      retweets: 645,
      replies: 156,
      timestamp: '12h',
      verified: false,
      avatar: '💎'
    }
  ];

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setTweets(mockTweets);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Live Social Buzz</h3>
          <div className="flex items-center text-green-400">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span className="text-sm">Trending</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 animate-pulse">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-600 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-24"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-600 rounded w-full"></div>
                <div className="h-4 bg-gray-600 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Live Social Buzz</h3>
          <div className="flex items-center text-green-400">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span className="text-sm">Trending</span>
          </div>
        </div>
        
        <a 
          href="https://twitter.com/search?q=%23MarzWallet" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 flex items-center"
        >
          <span className="text-sm mr-1">View all</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {tweet.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-semibold truncate">{tweet.author}</h4>
                  {tweet.verified && (
                    <Verified className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  )}
                  <span className="text-gray-400 text-sm truncate">{tweet.handle}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{tweet.timestamp}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors">
                  {tweet.content}
                </p>
                
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{formatNumber(tweet.replies)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 hover:text-green-400 transition-colors cursor-pointer">
                    <Repeat2 className="h-4 w-4" />
                    <span className="text-sm">{formatNumber(tweet.retweets)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 hover:text-red-400 transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{formatNumber(tweet.likes)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 hover:text-purple-400 transition-colors cursor-pointer">
                    <Share className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Join the conversation and share your MARZ experience!
        </p>
        <div className="flex justify-center space-x-4 mt-3">
          <a 
            href="https://twitter.com/intent/tweet?text=Just%20tried%20@MarzWallet%20and%20it's%20amazing!%20%23MarzWallet%20%23Web3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Tweet about MARZ
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="https://twitter.com/MarzWallet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Follow @MarzWallet
          </a>
        </div>
      </div>
    </div>
  );
}