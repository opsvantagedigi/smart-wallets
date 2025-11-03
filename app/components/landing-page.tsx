'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, Zap, Coins, Users, ArrowRight, Star, CheckCircle, 
  Smartphone, Globe, TrendingUp, Award, Download, Play,
  Wallet, Lock, Sparkles, BarChart3, Layers, Crown, ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [stats, setStats] = useState({ users: 20000000, transactions: 5000000, countries: 180 });
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 100),
        transactions: prev.transactions + Math.floor(Math.random() * 1000),
        countries: prev.countries
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Rotating stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { 
      name: "Sarah Chen", 
      role: "DeFi Trader", 
      avatar: "SC", 
      quote: "The best wallet UX I've ever experienced. Gasless transactions are a game changer!",
      company: "Crypto Capital",
      verified: true,
      savings: "$2,400+ saved in gas fees"
    },
    { 
      name: "Marcus Rodriguez", 
      role: "NFT Creator", 
      avatar: "MR", 
      quote: "Love the built-in NFT showcase. My art looks amazing in the MARZ wallet!",
      company: "Digital Arts DAO",
      verified: true,
      savings: "500+ NFTs managed"
    },
    { 
      name: "Dr. Emily Watson", 
      role: "Crypto Researcher", 
      avatar: "EW", 
      quote: "Enterprise-grade security with consumer-friendly design. Perfect balance.",
      company: "Web3 Labs",
      verified: true,
      savings: "Zero security incidents"
    }
  ];

  const socialProof = [
    { platform: "ProductHunt", award: "#1 Product of the Day", icon: "🏆" },
    { platform: "TechCrunch", award: "Rising Star in Web3", icon: "⭐" },
    { platform: "CoinDesk", award: "Best UX Design", icon: "🎨" },
    { platform: "Crypto Twitter", award: "10K+ Mentions", icon: "🐦" }
  ];

  const partners = [
    "Ethereum", "Polygon", "Binance", "Coinbase", "Uniswap", "OpenSea", "Chainlink", "Alchemy"
  ];

  const statLabels = ["Active Users", "Transactions", "Countries"];
  const statValues = [
    `${(stats.users / 1000000).toFixed(1)}M+`,
    `${(stats.transactions / 1000000).toFixed(1)}M+`, 
    `${stats.countries}+`
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MARZ</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-white">
            <Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link>
            <Link href="/security" className="hover:text-cyan-400 transition-colors">Security</Link>
            <Link href="/staking" className="hover:text-cyan-400 transition-colors">Staking</Link>
            <Link href="/nft-marketplace" className="hover:text-cyan-400 transition-colors">NFTs</Link>
            <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
            <Link href="/testimonials" className="hover:text-cyan-400 transition-colors">Reviews</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-cyan-400">
              Sign In
            </Button>
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-white">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-white">Audited by CertiK</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-white">4.9/5 Rating</span>
            </div>
          </div>

          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Smart Wallets
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience seamless Web3 interactions with enterprise-grade security, 
            gasless transactions, and intuitive design. Join millions of users 
            managing their digital assets with confidence in the future of finance.
          </p>

          {/* Live Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 transition-all duration-500">
                {statValues[currentStatIndex]}
              </div>
              <div className="text-sm text-gray-400">
                {statLabels[currentStatIndex]}
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">0%</div>
              <div className="text-sm text-gray-400">Gas Fees</div>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center mb-16">
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Download Stats */}
          <div className="flex justify-center items-center space-x-6 text-gray-400">
            <span className="flex items-center space-x-2">
              <Smartphone className="h-4 w-4" />
              <span>iOS & Android</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Browser Extension</span>
            </span>
            <span>•</span>
            <span>20M+ Downloads</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
            <p className="text-gray-300 leading-relaxed">MPC encryption, biometric authentication, and hardware wallet integration</p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Gasless Transactions</h3>
            <p className="text-gray-300 leading-relaxed">Sponsored transactions with account abstraction for seamless UX</p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Layers className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Multi-Chain Support</h3>
            <p className="text-gray-300 leading-relaxed">Ethereum, Polygon, BSC, Solana, Arbitrum & 50+ networks</p>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">DeFi & Staking</h3>
            <p className="text-gray-300 leading-relaxed">Built-in staking, yield farming, and DeFi protocol integration</p>
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-20 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Recognized by Industry Leaders</h3>
              <p className="text-gray-400">Featured across top Web3 platforms and publications</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl mb-2">{proof.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{proof.platform}</h4>
                  <p className="text-gray-400 text-xs">{proof.award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-cyan-400">Millions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their crypto experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-white font-semibold">{testimonial.name}</span>
                      {testimonial.verified && (
                        <CheckCircle className="h-4 w-4 text-green-400 ml-2" />
                      )}
                    </div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm font-semibold">
                      {testimonial.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                Read More Stories
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-32">
          <h2 className="text-2xl font-semibold text-gray-400 text-center mb-12">
            Trusted Partners & Integrations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl px-6 py-3 border border-white/10">
                <span className="text-white font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the smart wallet revolution. Experience seamless Web3 with enterprise security.
            </p>
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Get Started Free
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}