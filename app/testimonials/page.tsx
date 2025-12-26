'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, Users, Trophy, TrendingUp, ArrowLeft, Quote, MessageCircle, ThumbsUp, ExternalLink, CheckCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import SocialFeed from '@/app/components/social-feed';

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({
    users: 15000,
    transactions: 250000,
    saved: 150000,
    rating: 4.9
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 3),
        transactions: prev.transactions + Math.floor(Math.random() * 5),
        saved: prev.saved + Math.floor(Math.random() * 50),
        rating: 4.9
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DeFi Trader",
      company: "Crypto Capital",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "MARZ has completely transformed how I manage my crypto assets. The smart wallet features save me hours of manual work, and the security is unmatched.",
      highlight: "Saved 20+ hours weekly",
      verified: true,
      social: "@sarahchendefi"
    },
    {
      name: "Marcus Johnson",
      role: "NFT Collector",
      company: "Digital Arts DAO",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "The NFT management tools are incredible. I can track my entire collection, analyze floor prices, and execute trades all from one beautiful interface.",
      highlight: "Manages $500K+ portfolio",
      verified: true,
      social: "@marcusnfts"
    },
    {
      name: "Elena Rodriguez",
      role: "Smart Contract Developer",
      company: "Web3 Labs",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "As a developer, I appreciate the technical sophistication behind MARZ. The Account Abstraction implementation is flawless, and the API is developer-friendly.",
      highlight: "Built 15+ integrations",
      verified: true,
      social: "@elenadev"
    },
    {
      name: "David Kim",
      role: "Investment Advisor",
      company: "CryptoWealth Management",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "My clients love the user experience. Even those new to crypto find MARZ intuitive. The educational resources and guided setup are phenomenal.",
      highlight: "Onboarded 200+ clients",
      verified: true,
      social: "@davidkimcrypto"
    }
  ];

  const socialProof = [
    {
      platform: "ProductHunt",
      type: "award",
      title: "#1 Product of the Day",
      description: "Featured as the top product with 2,847 upvotes",
      date: "November 2024",
      icon: Trophy,
      color: "orange"
    },
    {
      platform: "TechCrunch",
      type: "media",
      title: "Rising Star in Web3 Wallets",
      description: "Featured in TechCrunch&apos;s Web3 innovation spotlight",
      date: "October 2024",
      icon: Star,
      color: "green"
    },
    {
      platform: "CoinDesk",
      type: "media",
      title: "Best User Experience Award",
      description: "Recognized for outstanding UX design in crypto",
      date: "September 2024",
      icon: Award,
      color: "blue"
    },
    {
      platform: "Crypto Twitter",
      type: "social",
      title: "Trending #SmartWallet",
      description: "10,000+ mentions and positive sentiment analysis",
      date: "This week",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const reviews = [
    {
      author: "CryptoReviewer.eth",
      rating: 5,
      platform: "Twitter",
      content: "Just switched to @MarzWallet and wow... this is what crypto UX should be. Gas optimization alone saved me $200 this month! 🔥",
      likes: 1247,
      retweets: 423,
      verified: true
    },
    {
      author: "DeFiDegen_",
      rating: 5,
      platform: "Reddit",
      content: "Been using MARZ for 3 months. The automated yield farming strategies are incredible. Set it and forget it, profits just keep coming.",
      upvotes: 856,
      awards: 3,
      verified: false
    },
    {
      author: "NFTCollector_99",
      rating: 5,
      platform: "Discord",
      content: "The NFT analytics in MARZ helped me identify a blue-chip project before it mooned. Portfolio up 400% since using their insights! 💎",
      reactions: 234,
      verified: true
    }
  ];

  const companies = [
    { name: "Polygon", logo: "🔷", users: "2.5K+ employees using MARZ" },
    { name: "Uniswap", logo: "🦄", users: "1.8K+ team members" },
    { name: "Chainlink", logo: "🔗", users: "1.2K+ developers" },
    { name: "Aave", logo: "👻", users: "900+ staff" },
    { name: "OpenSea", logo: "🌊", users: "750+ team" },
    { name: "MetaMask", logo: "🦊", users: "600+ employees" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-purple-400 font-semibold">💬 User Stories</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Users Say
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their crypto experience with MARZ. 
            Real stories from real people in the Web3 community.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Share Your Story
            </Button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {stats.users.toLocaleString()}+
            </div>
            <p className="text-gray-400">Active Users</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {stats.transactions.toLocaleString()}+
            </div>
            <p className="text-gray-400">Transactions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              ${stats.saved.toLocaleString()}K+
            </div>
            <p className="text-gray-400">Gas Fees Saved</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {stats.rating}/5.0
            </div>
            <p className="text-gray-400">User Rating</p>
          </div>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Stories</h2>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Testimonial Navigation */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'bg-purple-500/20 border border-purple-400/50' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Testimonial */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-8 w-8 text-purple-400" />
                    {testimonials[activeTestimonial].verified && (
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="h-5 w-5 mr-1" />
                        <span className="text-sm">Verified User</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    &quot;{testimonials[activeTestimonial].content}&quot;
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                      </p>
                      <p className="text-purple-400 text-sm mt-1">
                        {testimonials[activeTestimonial].social}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl px-4 py-2">
                        <p className="text-green-400 font-semibold">
                          {testimonials[activeTestimonial].highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof & Awards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recognition & Awards</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProof.map((proof, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  proof.color === 'orange' ? 'bg-orange-500/20' :
                  proof.color === 'green' ? 'bg-green-500/20' :
                  proof.color === 'blue' ? 'bg-blue-500/20' :
                  'bg-purple-500/20'
                }`}>
                  <proof.icon className={`h-6 w-6 ${
                    proof.color === 'orange' ? 'text-orange-400' :
                    proof.color === 'green' ? 'text-green-400' :
                    proof.color === 'blue' ? 'text-blue-400' :
                    'text-purple-400'
                  }`} />
                </div>
                
                <h3 className="text-white font-semibold mb-2">{proof.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{proof.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{proof.platform}</span>
                  <span className="text-xs text-gray-500">{proof.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Community Buzz</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Reviews */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold flex items-center">
                          {review.author}
                          {review.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-400 ml-1" />
                          )}
                        </h4>
                        <p className="text-gray-400 text-sm">{review.platform}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">&quot;{review.content}&quot;</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      {review.likes && (
                        <span className="text-gray-400 flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {review.likes}
                        </span>
                      )}
                      {review.upvotes && (
                        <span className="text-gray-400">↑ {review.upvotes}</span>
                      )}
                      {review.reactions && (
                        <span className="text-gray-400">❤️ {review.reactions}</span>
                      )}
                    </div>
                    
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Live Social Feed */}
            <div>
              <SocialFeed />
            </div>
          </div>
        </div>

        {/* Trusted by Companies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted by Leading Web3 Companies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl mb-3">{company.logo}</div>
                <h4 className="text-white font-semibold text-lg mb-2">{company.name}</h4>
                <p className="text-gray-400 text-sm">{company.users}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the MARZ Community Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of smart wallets and join thousands of satisfied users 
              who have transformed their crypto journey.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 px-8">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              No credit card required • 30-day free trial • Setup in under 2 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}