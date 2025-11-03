'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, Zap, Coins, Layers, TrendingUp, Wallet, 
  ArrowRight, CheckCircle, Star, Globe, Smartphone,
  CreditCard, BarChart3, Lock, RefreshCw, Gem,
  Users, Bot, Play, Download, Award, Crown,
  Infinity, Target, Sparkles, Settings
} from 'lucide-react';
import { useState } from 'react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('security');

  const mainFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption with MPC technology",
      details: [
        "Multi-Party Computation (MPC) encryption",
        "Biometric authentication & face ID",
        "Hardware wallet compatibility",
        "Social recovery options",
        "SOC 2 Type II certified"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Gasless Transactions", 
      description: "Zero gas fees with account abstraction",
      details: [
        "Sponsored transactions",
        "Meta-transactions support",
        "Batch operations",
        "Auto gas optimization",
        "Cross-chain gas tokens"
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Layers,
      title: "Multi-Chain Support",
      description: "50+ networks in one unified wallet",
      details: [
        "Ethereum, Polygon, BSC, Solana",
        "Layer 2 solutions (Arbitrum, Optimism)",
        "Cross-chain bridges",
        "Auto-routing for best rates",
        "Network fee comparisons"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "DeFi & Staking",
      description: "Built-in yield farming and staking rewards",
      details: [
        "Auto-compound staking",
        "Yield farming optimization",
        "LP token management",
        "Risk assessment tools",
        "Portfolio analytics"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Gem,
      title: "NFT Vault",
      description: "Showcase, trade, and manage your digital collectibles",
      details: [
        "NFT display gallery",
        "Integrated marketplace",
        "Rarity analysis",
        "Floor price tracking",
        "Collection management"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: CreditCard,
      title: "Fiat On-Ramp",
      description: "Buy crypto with credit cards and bank transfers",
      details: [
        "Instant card purchases",
        "Bank transfer support",
        "40+ fiat currencies",
        "KYC/AML compliant",
        "Best rate aggregation"
      ],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const advancedFeatures = [
    {
      category: "Security & Privacy",
      features: [
        { name: "Zero-Knowledge Proofs", status: "Active" },
        { name: "Threshold Signatures", status: "Active" },
        { name: "Hardware Security Modules", status: "Active" },
        { name: "Decentralized Identity", status: "Beta" },
        { name: "Private Transactions", status: "Coming Soon" }
      ]
    },
    {
      category: "User Experience",
      features: [
        { name: "Social Login Integration", status: "Active" },
        { name: "Biometric Authentication", status: "Active" },
        { name: "One-Click Recovery", status: "Active" },
        { name: "Mobile-First Design", status: "Active" },
        { name: "Voice Commands", status: "Beta" }
      ]
    },
    {
      category: "DeFi Integration",
      features: [
        { name: "Auto Yield Optimization", status: "Active" },
        { name: "Flash Loan Protection", status: "Active" },
        { name: "MEV Protection", status: "Active" },
        { name: "Impermanent Loss Insurance", status: "Beta" },
        { name: "AI-Powered Trading", status: "Coming Soon" }
      ]
    }
  ];

  const networkSupport = [
    { name: "Ethereum", logo: "ETH", status: "Full Support", users: "15M+" },
    { name: "Polygon", logo: "MATIC", status: "Full Support", users: "8M+" },
    { name: "Binance Smart Chain", logo: "BSC", status: "Full Support", users: "12M+" },
    { name: "Solana", logo: "SOL", status: "Full Support", users: "6M+" },
    { name: "Arbitrum", logo: "ARB", status: "Full Support", users: "4M+" },
    { name: "Optimism", logo: "OP", status: "Full Support", users: "3M+" },
    { name: "Avalanche", logo: "AVAX", status: "Full Support", users: "2M+" },
    { name: "Fantom", logo: "FTM", status: "Beta", users: "1M+" }
  ];

  const tabs = [
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'defi', label: 'DeFi', icon: TrendingUp },
    { id: 'nft', label: 'NFTs', icon: Gem },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-cyan-400 font-semibold">✨ All Features</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">
              Modern Web3
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive smart wallet features designed for the future of finance. 
            Security-first, user-friendly, and built for scale.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-gray-400">Networks</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100M+</div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Network Support Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Multi-Chain <span className="text-cyan-400">Ecosystem</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkSupport.map((network, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {network.logo}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{network.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm">{network.status}</span>
                </div>
                <p className="text-gray-400 text-sm">{network.users} users</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Features Table */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Advanced <span className="text-purple-400">Capabilities</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {advancedFeatures.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2">
                      <span className="text-gray-300">{feature.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        feature.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        feature.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Explore by <span className="text-cyan-400">Category</span>
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            {activeTab === 'security' && (
              <div className="text-center">
                <Shield className="h-24 w-24 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Bank-Grade Security</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Your assets are protected by military-grade encryption, multi-signature wallets, 
                  and advanced threat detection systems.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Lock className="h-8 w-8 text-cyan-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">MPC Encryption</h4>
                    <p className="text-gray-400 text-sm">Distributed key management with threshold signatures</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Bot className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">AI Fraud Detection</h4>
                    <p className="text-gray-400 text-sm">Real-time monitoring and anomaly detection</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'defi' && (
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">DeFi Powerhouse</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Access the entire DeFi ecosystem with built-in yield optimization, 
                  staking rewards, and liquidity mining.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <BarChart3 className="h-8 w-8 text-green-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Auto Yield</h4>
                    <p className="text-gray-400 text-sm">Up to 15% APY</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <RefreshCw className="h-8 w-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Auto Compound</h4>
                    <p className="text-gray-400 text-sm">Maximize returns</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Target className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Risk Management</h4>
                    <p className="text-gray-400 text-sm">Smart protection</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nft' && (
              <div className="text-center">
                <Gem className="h-24 w-24 text-pink-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">NFT Ecosystem</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Discover, collect, and trade NFTs with built-in rarity analysis 
                  and marketplace integration.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Star className="h-8 w-8 text-yellow-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Rarity Scanner</h4>
                    <p className="text-gray-400 text-sm">AI-powered rarity analysis and floor price tracking</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Sparkles className="h-8 w-8 text-pink-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Gallery View</h4>
                    <p className="text-gray-400 text-sm">Beautiful showcase for your digital collectibles</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mobile' && (
              <div className="text-center">
                <Smartphone className="h-24 w-24 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Mobile-First Design</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Optimized for mobile with biometric authentication, 
                  offline capabilities, and seamless cross-device sync.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Settings className="h-8 w-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Biometric Auth</h4>
                    <p className="text-gray-400 text-sm">Face ID, fingerprint, and voice recognition</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6">
                    <Infinity className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">Cross-Device Sync</h4>
                    <p className="text-gray-400 text-sm">Seamless experience across all devices</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join millions of users who trust MARZ for their Web3 journey. 
              Get started in under 60 seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Download className="mr-2 h-6 w-6" />
                Download App
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10"
              >
                <Play className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}