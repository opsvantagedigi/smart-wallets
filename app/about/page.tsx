'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, MapPin, Calendar, Globe, Linkedin, Twitter, 
  Github, Award, TrendingUp, Shield, Zap, Target,
  ArrowRight, Star, CheckCircle, Building, Rocket,
  Heart, Code, Briefcase, GraduationCap, Trophy
} from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('team');

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      bio: "Former VP Engineering at Coinbase. 15+ years in fintech and blockchain infrastructure.",
      avatar: "AC",
      location: "San Francisco, CA",
      linkedin: "#",
      twitter: "#",
      specialties: ["Product Strategy", "Blockchain Architecture", "Team Leadership"]
    },
    {
      name: "Sarah Rodriguez",
      role: "Co-Founder & CTO", 
      bio: "Ex-Principal Engineer at Ethereum Foundation. PhD in Cryptography from MIT.",
      avatar: "SR",
      location: "New York, NY",
      linkedin: "#",
      github: "#",
      specialties: ["Smart Contracts", "Cryptography", "Protocol Design"]
    },
    {
      name: "Marcus Kim",
      role: "Head of Security",
      bio: "Former Security Lead at Binance. Expert in MPC and zero-knowledge proofs.",
      avatar: "MK",
      location: "London, UK",
      linkedin: "#",
      specialties: ["Security Auditing", "MPC Implementation", "Risk Management"]
    },
    {
      name: "Elena Popov",
      role: "VP of Product",
      bio: "Ex-Product Director at MetaMask. 10+ years in UX design and product management.",
      avatar: "EP",
      location: "Berlin, Germany",
      linkedin: "#",
      twitter: "#",
      specialties: ["User Experience", "Product Strategy", "Market Research"]
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      bio: "Former Senior Engineer at Stripe. Full-stack expert with blockchain focus.",
      avatar: "DP",
      location: "Seoul, South Korea",
      linkedin: "#",
      github: "#",
      specialties: ["Full-Stack Development", "System Architecture", "DevOps"]
    },
    {
      name: "Lisa Johnson",
      role: "Head of Compliance",
      bio: "Former Regulatory Counsel at Circle. JD from Harvard, expert in crypto regulations.",
      avatar: "LJ",
      location: "Washington, DC",
      linkedin: "#",
      specialties: ["Regulatory Compliance", "Legal Framework", "Policy Development"]
    }
  ];

  const advisors = [
    {
      name: "Dr. Joseph Lubin",
      role: "Strategic Advisor",
      company: "ConsenSys Founder",
      bio: "Ethereum co-founder and blockchain infrastructure pioneer",
      avatar: "JL"
    },
    {
      name: "Katie Haun",
      role: "Board Member",
      company: "Haun Ventures",
      bio: "Former a16z crypto partner and ex-federal prosecutor",
      avatar: "KH"
    },
    {
      name: "Balaji Srinivasan",
      role: "Technical Advisor",
      company: "Former CTO Coinbase",
      bio: "Entrepreneur, investor, and cryptocurrency advocate",
      avatar: "BS"
    }
  ];

  const partners = [
    {
      name: "Alchemy",
      category: "Infrastructure",
      description: "Blockchain development platform and node infrastructure",
      logo: "🔮",
      partnership: "Technical Integration"
    },
    {
      name: "Chainlink",
      category: "Oracle Network",
      description: "Decentralized oracle network for smart contracts",
      logo: "🔗",
      partnership: "Price Feeds & Data"
    },
    {
      name: "Polygon",
      category: "Layer 2",
      description: "Ethereum scaling and infrastructure development",
      logo: "⬟",
      partnership: "Network Integration"
    },
    {
      name: "Coinbase",
      category: "Exchange",
      description: "Leading cryptocurrency exchange and custody provider",
      logo: "🟦",
      partnership: "Fiat On/Off Ramp"
    },
    {
      name: "OpenSea",
      category: "NFT Marketplace",
      description: "Largest NFT marketplace and trading platform",
      logo: "🌊",
      partnership: "NFT Integration"
    },
    {
      name: "Uniswap",
      category: "DEX",
      description: "Leading decentralized exchange protocol",
      logo: "🦄",
      partnership: "Trading Integration"
    },
    {
      name: "Circle",
      category: "Stablecoin",
      description: "USDC issuer and digital currency company",
      logo: "⭕",
      partnership: "Payment Rails"
    },
    {
      name: "1inch",
      category: "DEX Aggregator",
      description: "DEX aggregation protocol for best swap rates",
      logo: "1️⃣",
      partnership: "Swap Optimization"
    }
  ];

  const roadmapItems = [
    {
      phase: "Q4 2024",
      title: "Foundation & Security",
      status: "completed",
      items: [
        "Core wallet infrastructure",
        "MPC implementation",
        "Security audits (CertiK, Trail of Bits)",
        "SOC 2 Type II certification"
      ]
    },
    {
      phase: "Q1 2025",
      title: "Multi-Chain Expansion",
      status: "completed",
      items: [
        "Ethereum mainnet launch",
        "Polygon integration",
        "Binance Smart Chain support",
        "Mobile app beta release"
      ]
    },
    {
      phase: "Q2 2025",
      title: "DeFi Integration",
      status: "in-progress",
      items: [
        "Staking platform launch",
        "Yield farming features",
        "DEX aggregation",
        "NFT marketplace integration"
      ]
    },
    {
      phase: "Q3 2025",
      title: "Advanced Features",
      status: "planned",
      items: [
        "Cross-chain bridges",
        "Advanced trading tools",
        "Institutional custody",
        "API for developers"
      ]
    },
    {
      phase: "Q4 2025",
      title: "Global Expansion",
      status: "planned",
      items: [
        "European market launch",
        "Additional fiat currencies",
        "Regulatory compliance expansion",
        "Enterprise solutions"
      ]
    }
  ];

  const companyStats = [
    { label: "Founded", value: "2023", icon: Calendar },
    { label: "Employees", value: "45+", icon: Users },
    { label: "Countries", value: "12", icon: Globe },
    { label: "Funding Raised", value: "$25M", icon: TrendingUp }
  ];

  const awards = [
    {
      title: "Best Web3 Wallet 2024",
      issuer: "CryptoAwards",
      date: "December 2024",
      description: "Recognition for innovation in user experience and security"
    },
    {
      title: "Fintech Innovation Award",
      issuer: "TechCrunch",
      date: "November 2024", 
      description: "Outstanding achievement in financial technology"
    },
    {
      title: "Security Excellence Award",
      issuer: "CyberSec Global",
      date: "October 2024",
      description: "Industry-leading security implementation"
    }
  ];

  const tabs = [
    { id: 'team', label: 'Team', icon: Users },
    { id: 'company', label: 'Company', icon: Building },
    { id: 'partners', label: 'Partners', icon: Briefcase },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-indigo-400 font-semibold">🚀 About MARZ</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Building the Future of
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent block">
              Digital Finance
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're a team of passionate builders, researchers, and visionaries dedicated to making 
            Web3 accessible, secure, and user-friendly for everyone. Our mission is to bridge 
            the gap between traditional finance and the decentralized future.
          </p>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <stat.icon className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            {activeTab === 'team' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Meet Our <span className="text-indigo-400">Team</span>
                </h2>
                
                {/* Core Team */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-8">Leadership Team</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center group hover:border-indigo-400/50 transition-all duration-300">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                          {member.avatar}
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                        <p className="text-indigo-400 font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                        
                        <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {member.location}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {member.specialties.map((specialty, idx) => (
                            <span key={idx} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-center space-x-3">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              className="text-gray-400 hover:text-indigo-400 transition-colors"
                              title={`${member.name} LinkedIn profile`}
                              aria-label={`${member.name} LinkedIn profile`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {member.twitter && (
                            <a 
                              href={member.twitter} 
                              className="text-gray-400 hover:text-indigo-400 transition-colors"
                              title={`${member.name} Twitter profile`}
                              aria-label={`${member.name} Twitter profile`}
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}
                          {member.github && (
                            <a 
                              href={member.github} 
                              className="text-gray-400 hover:text-indigo-400 transition-colors"
                              title={`${member.name} GitHub profile`}
                              aria-label={`${member.name} GitHub profile`}
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advisors */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Advisors & Board</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {advisors.map((advisor, index) => (
                      <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                          {advisor.avatar}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{advisor.name}</h4>
                        <p className="text-yellow-400 font-semibold mb-2">{advisor.role}</p>
                        <p className="text-gray-400 text-sm mb-3">{advisor.company}</p>
                        <p className="text-gray-300 text-sm">{advisor.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'company' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Our <span className="text-indigo-400">Story</span>
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        To democratize access to decentralized finance by building the most secure, 
                        user-friendly, and feature-rich smart wallet platform. We believe that 
                        everyone should have the power to control their financial future.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Heart className="h-6 w-6 text-red-400" />
                        <span className="text-white font-semibold">Built with passion for the community</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        A world where traditional and decentralized finance seamlessly coexist, 
                        enabling financial freedom and innovation for billions of people worldwide. 
                        We envision MARZ as the bridge to that future.
                      </p>
                      <div className="flex items-center space-x-4">
                        <Target className="h-6 w-6 text-blue-400" />
                        <span className="text-white font-semibold">Focused on long-term impact</span>
                      </div>
                    </div>
                  </div>

                  {/* Values */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Our Values</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-white mb-3">Security First</h4>
                        <p className="text-gray-300">Your assets and privacy are our top priority in everything we build.</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-white mb-3">User-Centric</h4>
                        <p className="text-gray-300">We design with our users in mind, making Web3 accessible to everyone.</p>
                      </div>
                      <div className="text-center">
                        <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-white mb-3">Innovation</h4>
                        <p className="text-gray-300">We push boundaries and explore new technologies to stay ahead.</p>
                      </div>
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Recognition & Awards</h3>
                    <div className="space-y-4">
                      {awards.map((award, index) => (
                        <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center">
                          <Trophy className="h-12 w-12 text-yellow-400 mr-6" />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">{award.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{award.issuer} • {award.date}</p>
                            <p className="text-gray-300">{award.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'partners' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Strategic <span className="text-indigo-400">Partners</span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {partners.map((partner, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                      <p className="text-indigo-400 text-sm font-semibold mb-3">{partner.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                      <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full">
                        {partner.partnership}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Want to Partner with Us?</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    We're always looking for strategic partnerships that can help us build 
                    better products and serve our users more effectively.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold"
                  >
                    <Briefcase className="mr-2 h-5 w-5" />
                    Partnership Inquiries
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Product <span className="text-indigo-400">Roadmap</span>
                </h2>
                
                <div className="space-y-8">
                  {roadmapItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex flex-col items-center mr-8">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          item.status === 'completed' ? 'bg-green-500 border-green-500' :
                          item.status === 'in-progress' ? 'bg-yellow-500 border-yellow-500' :
                          'bg-gray-600 border-gray-600'
                        }`}>
                          {item.status === 'completed' && <CheckCircle className="h-4 w-4 text-white" />}
                        </div>
                        {index < roadmapItems.length - 1 && (
                          <div className="w-0.5 h-20 bg-gray-600 mt-2"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-400">{item.phase}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              item.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.status.replace('-', ' ').toUpperCase()}
                            </span>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {item.items.map((subItem, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <CheckCircle className={`h-4 w-4 mr-2 ${
                                item.status === 'completed' ? 'text-green-400' : 'text-gray-500'
                              }`} />
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <Rocket className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're building the future of digital finance, and we'd love to have you along for the ride. 
              Whether you're a user, developer, or potential team member, there's a place for you at MARZ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Users className="mr-2 h-6 w-6" />
                Join Our Team
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10"
                asChild
              >
                <Link href="/features">
                  <Star className="mr-2 h-6 w-6" />
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