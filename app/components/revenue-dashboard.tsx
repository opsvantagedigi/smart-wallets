'use client';

import { Button } from '@/components/ui/button';
import { 
  TrendingUp, TrendingDown, DollarSign, Users, Award, Calendar,
  BarChart3, PieChart, RefreshCw, Download, Filter, Eye, Target,
  Coins, Gift, Crown, Star, CheckCircle, ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface EarningsData {
  totalEarnings: number;
  monthlyEarnings: number;
  weeklyChange: number;
  activeReferrals: number;
  conversionRate: number;
  averageCommission: number;
  nextPayout: number;
  lifetimeStats: {
    totalReferred: number;
    totalCommissions: number;
    bestMonth: number;
    currentStreak: number;
  };
}

interface Transaction {
  id: string;
  type: 'referral' | 'commission' | 'bonus' | 'payout';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
  referralUser?: string;
}

export default function RevenueDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);
  const [showTransactions, setShowTransactions] = useState(true);

  const timeframes = ['7d', '30d', '90d', '1y', 'all'];

  const earningsData: EarningsData = {
    totalEarnings: 3250.75,
    monthlyEarnings: 890.25,
    weeklyChange: 15.8,
    activeReferrals: 47,
    conversionRate: 73.2,
    averageCommission: 28.50,
    nextPayout: 1250.30,
    lifetimeStats: {
      totalReferred: 124,
      totalCommissions: 8750.40,
      bestMonth: 1450.75,
      currentStreak: 12
    }
  };

  const recentTransactions: Transaction[] = [
    {
      id: '1',
      type: 'commission',
      amount: 45.75,
      description: 'Pro subscription commission',
      date: '2024-11-02',
      status: 'completed',
      referralUser: 'user@email.com'
    },
    {
      id: '2',
      type: 'referral',
      amount: 25.00,
      description: 'New user signup bonus',
      date: '2024-11-01',
      status: 'completed',
      referralUser: 'newuser@email.com'
    },
    {
      id: '3',
      type: 'bonus',
      amount: 100.00,
      description: 'Monthly milestone bonus',
      date: '2024-11-01',
      status: 'completed'
    },
    {
      id: '4',
      type: 'commission',
      amount: 32.50,
      description: 'Enterprise upgrade commission',
      date: '2024-10-30',
      status: 'processing',
      referralUser: 'enterprise@company.com'
    },
    {
      id: '5',
      type: 'payout',
      amount: -850.00,
      description: 'Monthly payout to wallet',
      date: '2024-10-15',
      status: 'completed'
    }
  ];

  const performanceMetrics = [
    {
      title: 'This Month',
      value: '$890.25',
      change: '+15.8%',
      positive: true,
      icon: TrendingUp,
      details: '47 active referrals'
    },
    {
      title: 'Conversion Rate',
      value: '73.2%',
      change: '+5.2%',
      positive: true,
      icon: Target,
      details: 'Above average'
    },
    {
      title: 'Avg Commission',
      value: '$28.50',
      change: '+12.3%',
      positive: true,
      icon: DollarSign,
      details: 'Per referral'
    },
    {
      title: 'Current Tier',
      value: 'Gold',
      change: '25% rate',
      positive: true,
      icon: Crown,
      details: '50+ referrals'
    }
  ];

  const topReferrals = [
    { user: 'user123@email.com', earnings: 245.50, referrals: 8, tier: 'Pro' },
    { user: 'company@business.com', earnings: 189.25, referrals: 3, tier: 'Enterprise' },
    { user: 'crypto@trader.com', earnings: 156.75, referrals: 12, tier: 'Pro' },
    { user: 'nft@collector.com', earnings: 134.00, referrals: 6, tier: 'Pro' },
    { user: 'defi@farmer.com', earnings: 98.50, referrals: 4, tier: 'Pro' }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'processing': return 'text-yellow-400';
      case 'pending': return 'text-gray-400';
      default: return 'text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'commission': return <Coins className="h-4 w-4 text-blue-400" />;
      case 'referral': return <Users className="h-4 w-4 text-green-400" />;
      case 'bonus': return <Gift className="h-4 w-4 text-purple-400" />;
      case 'payout': return <DollarSign className="h-4 w-4 text-yellow-400" />;
      default: return <Coins className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">📈 Revenue Dashboard</h2>
          <p className="text-gray-400">Track your earnings and referral performance</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            title="Select timeframe"
            aria-label="Select timeframe for data"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
          >
            {timeframes.map(timeframe => (
              <option key={timeframe} value={timeframe} className="bg-gray-800">
                {timeframe === 'all' ? 'All Time' : timeframe.toUpperCase()}
              </option>
            ))}
          </select>
          
          <Button 
            onClick={handleRefresh}
            variant="outline" 
            size="sm"
            disabled={isLoading}
            className="border-gray-600 text-gray-300 hover:bg-gray-600"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-400 font-medium">{metric.title}</h3>
              <metric.icon className={`h-5 w-5 ${metric.positive ? 'text-green-400' : 'text-red-400'}`} />
            </div>
            
            <div className="mb-2">
              <span className="text-2xl font-bold text-white">{metric.value}</span>
              <span className={`ml-2 text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">{metric.details}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Earnings Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Total Earnings Card */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Total Earnings</h3>
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>
            
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">${earningsData.totalEarnings}</span>
              <span className="ml-3 text-green-400 font-semibold">
                +{earningsData.weeklyChange}% this week
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-green-400 text-sm">This Month</p>
                <p className="text-white font-bold">${earningsData.monthlyEarnings}</p>
              </div>
              <div>
                <p className="text-green-400 text-sm">Next Payout</p>
                <p className="text-white font-bold">${earningsData.nextPayout}</p>
              </div>
              <div>
                <p className="text-green-400 text-sm">Active Refs</p>
                <p className="text-white font-bold">{earningsData.activeReferrals}</p>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button 
                  size="sm" 
                  variant={showTransactions ? "default" : "outline"}
                  onClick={() => setShowTransactions(!showTransactions)}
                  className={showTransactions ? "bg-purple-600" : "border-gray-600 text-gray-300 hover:bg-gray-600"}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  {showTransactions ? 'Hide' : 'Show'}
                </Button>
              </div>
            </div>
            
            {showTransactions && (
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(transaction.type)}
                      <div>
                        <p className="text-white font-semibold">{transaction.description}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-400">{transaction.date}</span>
                          {transaction.referralUser && (
                            <>
                              <span className="text-gray-600">•</span>
                              <span className="text-gray-400">{transaction.referralUser}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className={`font-bold ${transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount)}
                      </p>
                      <p className={`text-sm ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lifetime Stats */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="h-5 w-5 text-yellow-400 mr-2" />
              Lifetime Stats
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Referred:</span>
                <span className="text-white font-bold">{earningsData.lifetimeStats.totalReferred}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Commissions:</span>
                <span className="text-white font-bold">${earningsData.lifetimeStats.totalCommissions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Best Month:</span>
                <span className="text-white font-bold">${earningsData.lifetimeStats.bestMonth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current Streak:</span>
                <span className="text-white font-bold">{earningsData.lifetimeStats.currentStreak} days</span>
              </div>
            </div>
          </div>

          {/* Top Referrals */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Star className="h-5 w-5 text-purple-400 mr-2" />
              Top Referrals
            </h3>
            
            <div className="space-y-3">
              {topReferrals.map((referral, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{referral.user}</p>
                      <p className="text-gray-400 text-xs">{referral.referrals} referrals • {referral.tier}</p>
                    </div>
                  </div>
                  <span className="text-green-400 font-bold text-sm">${referral.earnings}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
            
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Request Payout
              </Button>
              
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-600 justify-start">
                <ExternalLink className="mr-2 h-4 w-4" />
                Share Referral Link
              </Button>
              
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-600 justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
              
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-600 justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}