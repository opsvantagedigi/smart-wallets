'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, Lock, Eye, CheckCircle, Award, Users, 
  FileCheck, Globe, AlertTriangle, Key, Fingerprint,
  Server, Zap, ArrowRight, Download, Star, Crown,
  Database, Wifi, Smartphone, Bot, Target, Layers
} from 'lucide-react';
import { useState } from 'react';

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const securityFeatures = [
    {
      icon: Key,
      title: "Multi-Party Computation (MPC)",
      description: "Distributed key generation and management",
      details: [
        "Private keys never exist in a single location",
        "Threshold signatures for enhanced security", 
        "Cryptographic proofs for all operations",
        "Resistant to single points of failure",
        "Industry-leading MPC protocols"
      ]
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Advanced biometric security measures",
      details: [
        "Face ID and fingerprint recognition",
        "Voice pattern authentication",
        "Behavioral biometrics analysis",
        "Multi-factor authentication (MFA)",
        "Hardware security module integration"
      ]
    },
    {
      icon: Database,
      title: "Secure Enclave Storage",
      description: "Hardware-level security for sensitive data",
      details: [
        "Hardware Security Modules (HSM)",
        "Trusted Execution Environment (TEE)",
        "Cold storage integration",
        "Encrypted data at rest and in transit",
        "Zero-knowledge architecture"
      ]
    },
    {
      icon: Bot,
      title: "AI Fraud Detection",
      description: "Machine learning powered security",
      details: [
        "Real-time transaction monitoring",
        "Behavioral anomaly detection",
        "Pattern recognition algorithms",
        "Risk scoring and alerts",
        "Adaptive security measures"
      ]
    }
  ];

  const complianceCertifications = [
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      status: "Certified",
      date: "2024",
      description: "Comprehensive security, availability, and confidentiality controls"
    },
    {
      name: "ISO 27001",
      issuer: "ISO",
      status: "Certified", 
      date: "2024",
      description: "Information security management system certification"
    },
    {
      name: "GDPR Compliant",
      issuer: "EU",
      status: "Compliant",
      date: "2024",
      description: "European data protection and privacy compliance"
    },
    {
      name: "CCPA Compliant",
      issuer: "California",
      status: "Compliant",
      date: "2024",
      description: "California Consumer Privacy Act compliance"
    },
    {
      name: "AML/KYC",
      issuer: "FinCEN",
      status: "Registered",
      date: "2024",
      description: "Anti-Money Laundering and Know Your Customer compliance"
    },
    {
      name: "PCI DSS",
      issuer: "PCI Council",
      status: "Level 1",
      date: "2024",
      description: "Payment Card Industry Data Security Standard"
    }
  ];

  const securityAudits = [
    {
      auditor: "CertiK",
      date: "Q4 2024",
      scope: "Smart Contracts & Infrastructure",
      score: "96/100",
      status: "Passed",
      findings: "0 Critical, 1 Medium, 3 Low"
    },
    {
      auditor: "ConsenSys Diligence",
      date: "Q3 2024", 
      scope: "Protocol Security Review",
      score: "94/100",
      status: "Passed",
      findings: "0 Critical, 2 Medium, 2 Low"
    },
    {
      auditor: "Trail of Bits",
      date: "Q2 2024",
      scope: "Cryptographic Implementation",
      score: "98/100", 
      status: "Passed",
      findings: "0 Critical, 0 Medium, 1 Low"
    }
  ];

  const securityStats = [
    { label: "Funds Protected", value: "$2.5B+", icon: Shield },
    { label: "Security Incidents", value: "0", icon: AlertTriangle },
    { label: "Uptime", value: "99.99%", icon: Server },
    { label: "Countries Compliant", value: "150+", icon: Globe }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'encryption', label: 'Encryption', icon: Lock },
    { id: 'compliance', label: 'Compliance', icon: Award },
    { id: 'audits', label: 'Audits', icon: FileCheck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-blue-400 font-semibold">🔒 Enterprise Security</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Bank-Grade
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Security & Compliance
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your digital assets are protected by military-grade encryption, advanced threat detection, 
            and comprehensive compliance frameworks trusted by institutions worldwide.
          </p>

          {/* Security Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {securityStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
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
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Multi-Layered Security Architecture
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'encryption' && (
              <div className="text-center">
                <Lock className="h-24 w-24 text-blue-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Cryptography</h2>
                <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                  Our encryption protocols use cutting-edge cryptographic techniques to ensure 
                  your assets remain secure against both current and future threats.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 rounded-2xl p-8">
                    <Key className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">AES-256 Encryption</h3>
                    <p className="text-gray-400">Military-grade encryption for all sensitive data storage and transmission</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-8">
                    <Layers className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">Elliptic Curve Cryptography</h3>
                    <p className="text-gray-400">Efficient public-key cryptography for digital signatures and key exchange</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-8">
                    <Eye className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">Zero-Knowledge Proofs</h3>
                    <p className="text-gray-400">Privacy-preserving verification without revealing sensitive information</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Global Compliance Standards
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {complianceCertifications.map((cert, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <Award className="h-8 w-8 text-yellow-400" />
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cert.status === 'Certified' || cert.status === 'Compliant' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{cert.description}</p>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Issued by: {cert.issuer}</span>
                        <span className="text-gray-500">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Regulatory Information */}
                <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Regulatory Compliance</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Data Protection</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          GDPR compliant data processing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Right to be forgotten implementation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Data minimization principles
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Transparent privacy policies
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Financial Regulations</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          FinCEN MSB registration
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          AML/KYC procedures
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Transaction monitoring
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Sanctions screening
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audits' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Independent Security Audits
                </h2>
                
                <div className="space-y-6">
                  {securityAudits.map((audit, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{audit.auditor}</h3>
                          <p className="text-gray-400">{audit.date}</p>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Scope</div>
                          <div className="text-white">{audit.scope}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Security Score</div>
                          <div className="text-green-400 font-bold text-xl">{audit.score}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Status</div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                            <span className="text-green-400 font-semibold">{audit.status}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{audit.findings}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-gray-300 mb-6">
                    All audit reports are publicly available for transparency and community review.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-2xl"
                  >
                    <FileCheck className="mr-2 h-5 w-5" />
                    View Audit Reports
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Measures Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Comprehensive <span className="text-blue-400">Protection</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">DDoS Protection</h3>
              <p className="text-gray-300">Advanced traffic filtering and rate limiting to prevent attacks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Device Security</h3>
              <p className="text-gray-300">Secure device binding and hardware attestation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Threat Intelligence</h3>
              <p className="text-gray-300">Real-time threat detection and response capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Access Control</h3>
              <p className="text-gray-300">Role-based permissions and privilege management</p>
            </div>
          </div>
        </div>

        {/* Bug Bounty Program */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-orange-400/30">
            <div className="text-center">
              <Crown className="h-16 w-16 text-orange-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Bug Bounty Program</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us maintain the highest security standards. Our bug bounty program 
                rewards security researchers for responsibly disclosing vulnerabilities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">$500K+</div>
                  <div className="text-gray-400">Total Rewards Paid</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">$100K</div>
                  <div className="text-gray-400">Maximum Reward</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24hrs</div>
                  <div className="text-gray-400">Response Time</div>
                </div>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-2xl font-semibold"
              >
                <Star className="mr-2 h-5 w-5" />
                Join Bug Bounty Program
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-16 border border-white/20">
            <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the peace of mind that comes with institutional-grade security. 
              Your assets are protected by the most advanced security measures in the industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Download className="mr-2 h-6 w-6" />
                Get Protected Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 backdrop-blur-lg bg-white/10"
                asChild
              >
                <Link href="/features">
                  <Eye className="mr-2 h-6 w-6" />
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