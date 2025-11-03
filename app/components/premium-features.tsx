'use client';

import { Button } from '@/components/ui/button';
import { 
  Crown, Zap, Shield, BarChart3, Users, Award, Infinity, Target,
  Lock, Sparkles, Bot, RefreshCw, Globe, Smartphone, CreditCard,
  CheckCircle, Star, TrendingUp, PieChart, Settings, Database
} from 'lucide-react';
import { useState } from 'react';

interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: any;
  tier: 'pro' | 'enterprise';
  benefits: string[];
  value: string;
  gradient: string;
}

export default function PremiumFeaturesShowcase() {
  const [selectedTier, setSelectedTier] = useState<'pro' | 'enterprise'>('pro');

  const premiumFeatures: PremiumFeature[] = [
    {
      id: 'advanced-analytics',
      title: 'Advanced Analytics Suite',
      description: 'Comprehensive insights into your portfolio performance, trading patterns, and market trends',
      icon: BarChart3,
      tier: 'pro',
      benefits: [
        'Real-time portfolio tracking',
        'Custom dashboard creation',
        'Predictive market analysis',
        'Export detailed reports',
        'Historical performance data'
      ],
      value: 'Save 10+ hours weekly',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'priority-support',
      title: 'Priority Support & Concierge',
      description: '24/7 dedicated support with personal account managers and instant response times',
      icon: Crown,
      tier: 'enterprise',
      benefits: [
        'Dedicated account manager',
        'Sub-1-hour response time',
        'Phone & video support',
        'Custom onboarding',
        'VIP community access'
      ],
      value: 'Enterprise-grade service',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'api-access',
      title: 'Advanced API & Integrations',
      description: 'Powerful APIs for custom integrations, automation, and building on top of MARZ infrastructure',
      icon: Database,
      tier: 'pro',
      benefits: [
        'RESTful API access',
        'Webhook notifications',
        'Custom integrations',
        'Automated workflows',
        'Developer documentation'
      ],
      value: 'Build custom solutions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'white-label',
      title: 'White-Label Solutions',
      description: 'Custom-branded wallet solutions for businesses and enterprises with full customization',
      icon: Sparkles,
      tier: 'enterprise',
      benefits: [
        'Custom branding & UI',
        'Private label deployment',
        'Custom domain setup',
        'Branded mobile apps',
        'Marketing co-op programs'
      ],
      value: 'Launch in 30 days',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'advanced-security',
      title: 'Enterprise Security Features',
      description: 'Military-grade security with custom policies, audit trails, and compliance tools',
      icon: Shield,
      tier: 'enterprise',
      benefits: [
        'Custom security policies',
        'Audit trail & logging',
        'Compliance reporting',
        'Multi-sig governance',
        'Insurance coverage'
      ],
      value: 'Bank-level security',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'automation',
      title: 'Smart Automation Engine',
      description: 'AI-powered automation for trading, portfolio rebalancing, and yield optimization',
      icon: Bot,
      tier: 'pro',
      benefits: [
        'Automated portfolio rebalancing',
        'Smart yield farming',
        'AI trading signals',
        'Risk management alerts',
        'Custom automation rules'
      ],
      value: 'Maximize returns 24/7',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredFeatures = premiumFeatures.filter(feature => feature.tier === selectedTier);

  const tierBenefits = {
    pro: {
      title: 'Professional Tier',
      subtitle: 'Perfect for active traders and collectors',
      price: '$19/month',
      features: ['Everything in Explorer', 'Advanced analytics', 'Priority transactions', 'API access', 'Custom themes']
    },
    enterprise: {
      title: 'Enterprise Tier', 
      subtitle: 'Built for businesses and institutions',
      price: '$99/month',
      features: ['Everything in Pro', 'White-label solutions', 'Dedicated support', 'Custom integrations', 'Revenue sharing']
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          ✨ Premium Features Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Unlock advanced capabilities, automation, and enterprise-grade features 
          designed to scale your Web3 operations.
        </p>
      </div>

      {/* Tier Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
          <div className="flex">
            <button
              onClick={() => setSelectedTier('pro')}
              className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center ${
                selectedTier === 'pro' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Crown className="h-5 w-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">{tierBenefits.pro.title}</div>
                <div className="text-sm opacity-75">{tierBenefits.pro.subtitle}</div>
              </div>
            </button>
            <button
              onClick={() => setSelectedTier('enterprise')}
              className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center ${
                selectedTier === 'enterprise' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Star className="h-5 w-5 mr-2" />
              <div className="text-left">
                <div className="font-semibold">{tierBenefits.enterprise.title}</div>
                <div className="text-sm opacity-75">{tierBenefits.enterprise.subtitle}</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Tier Overview */}
      <div className="mb-12">
        <div className={`bg-gradient-to-r ${selectedTier === 'pro' ? 'from-blue-500/20 to-cyan-500/20 border-blue-400/30' : 'from-purple-500/20 to-pink-500/20 border-purple-400/30'} rounded-2xl p-8 border`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{tierBenefits[selectedTier].title}</h3>
              <p className="text-gray-300 text-lg mb-4">{tierBenefits[selectedTier].subtitle}</p>
              <div className="text-4xl font-bold text-white mb-6">{tierBenefits[selectedTier].price}</div>
              
              <div className="space-y-2">
                {tierBenefits[selectedTier].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className={`${selectedTier === 'pro' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} px-12 py-4`}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Upgrade to {tierBenefits[selectedTier].title}
              </Button>
              <p className="text-gray-400 text-sm mt-3">
                {selectedTier === 'pro' ? '30-day free trial' : 'Custom enterprise pricing'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFeatures.map((feature) => (
          <div key={feature.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              {feature.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {feature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-white/20`}>
                <span className="text-white font-semibold text-sm">{feature.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ROI Calculator Section */}
      <div className="mt-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-400/30">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">📊 ROI Calculator</h3>
          <p className="text-gray-300">See how much you could save and earn with premium features</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2,400+</div>
            <div className="text-white font-semibold">Annual Gas Savings</div>
            <div className="text-gray-400 text-sm">With smart optimization</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">15 hrs</div>
            <div className="text-white font-semibold">Time Saved Weekly</div>
            <div className="text-gray-400 text-sm">Through automation</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">25%+</div>
            <div className="text-white font-semibold">Better Returns</div>
            <div className="text-gray-400 text-sm">With AI optimization</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-green-600 hover:bg-green-700 px-8">
            <PieChart className="mr-2 h-5 w-5" />
            Calculate Your ROI
          </Button>
        </div>
      </div>
    </div>
  );
}