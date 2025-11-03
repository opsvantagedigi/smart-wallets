'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, Crown, Star, CheckCircle, TrendingUp, Users, DollarSign,
  Gift, Award, Zap, Shield, BarChart3, Infinity, Target, RefreshCw,
  Share2, Copy, ExternalLink, Calculator, PieChart, Coins
} from 'lucide-react';
import { useState, useEffect } from 'react';
import RevenueDashboard from '@/app/components/revenue-dashboard';
import PremiumFeaturesShowcase from '@/app/components/premium-features';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  popular?: boolean;
  features: string[];
  limits: {
    transactions: string;
    nfts: string;
    analytics: string;
    support: string;
  };
  color: string;
}

interface ReferralStats {
  totalReferred: number;
  activeReferrals: number;
  totalEarned: number;
  monthlyEarning: number;
  nextPayout: string;
  conversionRate: number;
}

export default function MonetizationPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'year'>('month');
  const [referralCode, setReferralCode] = useState('MARZ-USER-2024');
  const [showReferralStats, setShowReferralStats] = useState(false);
  const [copied, setCopied] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      id: 'free',
      name: 'Explorer',
      price: 0,
      period: 'month',
      features: [
        'Basic wallet functionality',
        'Up to 5 NFTs in portfolio',
        'Standard transaction speeds',
        'Community support',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      limits: {
        transactions: '50/month',
        nfts: '5 NFTs',
        analytics: 'Basic reports',
        support: 'Community'
      },
      color: 'gray'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: selectedPeriod === 'month' ? 19 : 190,
      period: selectedPeriod,
      popular: true,
      features: [
        'Everything in Explorer',
        'Unlimited NFT portfolio',
        'Priority transaction speeds',
        'Advanced analytics & insights',
        'Email & chat support',
        'Custom portfolio themes',
        'API access (basic)',
        'Export portfolio data',
        'Real-time price alerts'
      ],
      limits: {
        transactions: 'Unlimited',
        nfts: 'Unlimited',
        analytics: 'Advanced reports',
        support: 'Email & Chat'
      },
      color: 'blue'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: selectedPeriod === 'month' ? 99 : 990,
      period: selectedPeriod,
      features: [
        'Everything in Professional',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced API access',
        'Priority support (24/7)',
        'Custom analytics dashboards',
        'Multi-user team access',
        'Revenue sharing program',
        'Early access to features'
      ],
      limits: {
        transactions: 'Unlimited',
        nfts: 'Unlimited',
        analytics: 'Custom dashboards',
        support: '24/7 Dedicated'
      },
      color: 'purple'
    }
  ];

  const referralStats: ReferralStats = {
    totalReferred: 47,
    activeReferrals: 32,
    totalEarned: 1250.80,
    monthlyEarning: 340.50,
    nextPayout: '2024-11-15',
    conversionRate: 68.1
  };

  const revenueSharing = [
    {
      tier: 'Bronze',
      requirement: '10+ referrals',
      commission: '15%',
      bonus: '$50/month',
      perks: ['Early access', 'Beta features']
    },
    {
      tier: 'Silver',
      requirement: '25+ referrals',
      commission: '20%',
      bonus: '$150/month',
      perks: ['Priority support', 'Custom branding', 'API credits']
    },
    {
      tier: 'Gold',
      requirement: '50+ referrals',
      commission: '25%',
      bonus: '$300/month',
      perks: ['Revenue sharing', 'Co-marketing', 'White-label access']
    },
    {
      tier: 'Platinum',
      requirement: '100+ referrals',
      commission: '30%',
      bonus: '$750/month',
      perks: ['Partnership program', 'Custom solutions', 'Dedicated success manager']
    }
  ];

  const feeStructure = [
    {
      category: 'Trading Fees',
      items: [
        { name: 'NFT Trading', fee: '2.5%', note: 'Per transaction' },
        { name: 'Cross-chain Swaps', fee: '0.3%', note: 'Minimum $1' },
        { name: 'DeFi Transactions', fee: '0.1%', note: 'Gas optimization included' }
      ]
    },
    {
      category: 'Premium Features',
      items: [
        { name: 'Priority Transactions', fee: '$0.50', note: 'Per priority tx' },
        { name: 'Advanced Analytics', fee: 'Included', note: 'Pro tier and above' },
        { name: 'API Usage', fee: '$0.01', note: 'Per API call (after free tier)' }
      ]
    },
    {
      category: 'Network Fees',
      items: [
        { name: 'Ethereum', fee: 'Gas + 0%', note: 'No markup on gas' },
        { name: 'Polygon', fee: 'Gas + 0%', note: 'Sponsored for Pro+' },
        { name: 'BSC', fee: 'Gas + 0%', note: 'Optimized routing' }
      ]
    }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://marzwallet.com/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTierColor = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-cyan-500';
      case 'purple': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTierBorder = (color: string) => {
    switch (color) {
      case 'blue': return 'border-blue-400/50';
      case 'purple': return 'border-purple-400/50';
      default: return 'border-gray-400/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-purple-400 font-semibold">💰 Monetization Hub</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Growth Plan
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock premium features, earn through referrals, and scale your Web3 operations 
            with transparent pricing and revenue sharing opportunities.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Calculator className="mr-2 h-4 w-4" />
              ROI Calculator
            </Button>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
            <div className="flex">
              <button
                onClick={() => setSelectedPeriod('month')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedPeriod === 'month' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPeriod('year')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 relative ${
                  selectedPeriod === 'year' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
              tier.popular ? 'border-purple-400/50 ring-2 ring-purple-400/20' : 'border-white/10'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${getTierColor(tier.color)} flex items-center justify-center`}>
                  {tier.id === 'free' && <Zap className="h-8 w-8 text-white" />}
                  {tier.id === 'pro' && <Crown className="h-8 w-8 text-white" />}
                  {tier.id === 'enterprise' && <Star className="h-8 w-8 text-white" />}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                
                {tier.id !== 'free' && selectedPeriod === 'year' && (
                  <div className="text-green-400 text-sm">
                    Save ${tier.id === 'pro' ? 38 : 198} annually
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 p-4 bg-white/5 rounded-2xl">
                <h4 className="text-white font-semibold">Usage Limits:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">Transactions:</span>
                    <div className="text-white font-semibold">{tier.limits.transactions}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">NFTs:</span>
                    <div className="text-white font-semibold">{tier.limits.nfts}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Analytics:</span>
                    <div className="text-white font-semibold">{tier.limits.analytics}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Support:</span>
                    <div className="text-white font-semibold">{tier.limits.support}</div>
                  </div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                    : tier.id === 'free'
                    ? 'bg-gray-600 hover:bg-gray-700'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {tier.id === 'free' ? 'Get Started Free' : `Upgrade to ${tier.name}`}
              </Button>
            </div>
          ))}
        </div>

        {/* Premium Features Showcase */}
        <div className="mb-20">
          <PremiumFeaturesShowcase />
        </div>

        {/* Referral Program */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              💸 Referral Program
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Earn up to 30% commission by referring new users. Build your passive income stream 
              while helping others discover the future of Web3 wallets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Referral Link Generator */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Share2 className="h-6 w-6 text-green-400 mr-3" />
                Your Referral Link
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm">Referral Code:</label>
                  <div className="flex mt-2">
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      placeholder="Enter your referral code"
                      title="Your referral code"
                      aria-label="Referral code input"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white focus:outline-none focus:border-purple-400"
                    />
                    <Button
                      onClick={copyReferralCode}
                      className="bg-purple-600 hover:bg-purple-700 rounded-l-none"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-400 text-sm">Full Referral URL:</label>
                  <div className="mt-2 p-3 bg-white/10 rounded-xl border border-white/20">
                    <p className="text-white text-sm break-all">
                      https://marzwallet.com/signup?ref={referralCode}
                    </p>
                  </div>
                </div>

                {copied && (
                  <div className="text-green-400 text-sm flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Copied to clipboard!
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Share on Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                    <Gift className="mr-2 h-4 w-4" />
                    Email Template
                  </Button>
                </div>
              </div>
            </div>

            {/* Referral Stats */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 text-blue-400 mr-3" />
                Your Performance
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/20 rounded-2xl p-4 border border-green-400/30">
                  <div className="text-2xl font-bold text-white">{referralStats.totalReferred}</div>
                  <div className="text-green-400 text-sm">Total Referred</div>
                </div>
                
                <div className="bg-blue-500/20 rounded-2xl p-4 border border-blue-400/30">
                  <div className="text-2xl font-bold text-white">{referralStats.activeReferrals}</div>
                  <div className="text-blue-400 text-sm">Active Users</div>
                </div>
                
                <div className="bg-purple-500/20 rounded-2xl p-4 border border-purple-400/30">
                  <div className="text-2xl font-bold text-white">${referralStats.totalEarned}</div>
                  <div className="text-purple-400 text-sm">Total Earned</div>
                </div>
                
                <div className="bg-yellow-500/20 rounded-2xl p-4 border border-yellow-400/30">
                  <div className="text-2xl font-bold text-white">{referralStats.conversionRate}%</div>
                  <div className="text-yellow-400 text-sm">Conversion Rate</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Earnings:</span>
                  <span className="text-white font-semibold">${referralStats.monthlyEarning}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Payout:</span>
                  <span className="text-white font-semibold">{referralStats.nextPayout}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                <DollarSign className="mr-2 h-4 w-4" />
                Request Payout
              </Button>
            </div>
          </div>

          {/* Revenue Sharing Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueSharing.map((tier, index) => (
              <div key={tier.tier} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-orange-500/20' :
                    index === 1 ? 'bg-gray-400/20' :
                    index === 2 ? 'bg-yellow-500/20' :
                    'bg-purple-500/20'
                  }`}>
                    <Award className={`h-6 w-6 ${
                      index === 0 ? 'text-orange-400' :
                      index === 1 ? 'text-gray-400' :
                      index === 2 ? 'text-yellow-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                  <h4 className="text-white font-bold text-lg">{tier.tier}</h4>
                  <p className="text-gray-400 text-sm">{tier.requirement}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{tier.commission}</div>
                    <div className="text-gray-400 text-sm">Commission Rate</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-400">{tier.bonus}</div>
                    <div className="text-gray-400 text-sm">Monthly Bonus</div>
                  </div>
                  
                  <div className="space-y-1">
                    {tier.perks.map((perk, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        <span className="text-gray-300">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Transparency */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              📊 Fee Transparency
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete transparency in all fees and charges. No hidden costs, 
              competitive rates, and clear pricing for every service.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {feeStructure.map((category, index) => (
              <div key={category.category} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  {index === 0 && <Coins className="h-6 w-6 text-yellow-400 mr-3" />}
                  {index === 1 && <Crown className="h-6 w-6 text-purple-400 mr-3" />}
                  {index === 2 && <Shield className="h-6 w-6 text-blue-400 mr-3" />}
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start p-4 bg-white/5 rounded-2xl">
                      <div>
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <p className="text-gray-400 text-sm">{item.note}</p>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${
                          item.fee === 'Included' ? 'text-green-400' :
                          item.fee.includes('0%') ? 'text-blue-400' :
                          'text-white'
                        }`}>
                          {item.fee}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              📈 Revenue Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your earnings, monitor referral performance, and optimize your revenue streams 
              with comprehensive analytics and real-time insights.
            </p>
          </div>

          <RevenueDashboard />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users building passive income through our referral program. 
              Start your Web3 monetization journey today.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Referring
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 px-8">
                <PieChart className="mr-2 h-5 w-5" />
                View Analytics
              </Button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              No upfront costs • Instant payouts • 24/7 tracking dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}