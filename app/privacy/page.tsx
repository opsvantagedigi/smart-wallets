'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Eye, Lock, Database, Globe, Download, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 3, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-green-400 font-semibold">🔒 Privacy Protection</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Privacy
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Last updated: {lastUpdated}
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <Link href="/about">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            
            {/* GDPR Notice */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-12">
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">GDPR & CCPA Compliant</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy complies with the General Data Protection Regulation (GDPR) 
                    and California Consumer Privacy Act (CCPA). You have rights regarding your personal data.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                MARZ Technologies Inc. ("MARZ," "we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our wallet services, website, and mobile applications.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">2.1 Information You Provide</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Account information (email, username)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  KYC verification data (when required by law)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Communication preferences
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Support ticket information
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">2.2 Automatically Collected Information</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Device information (IP address, browser type, device ID)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Usage analytics and app performance data
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Transaction metadata (not transaction content)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Cookies and similar tracking technologies
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">2.3 Information We Do NOT Collect</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-6">
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Private keys or seed phrases
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Wallet balances or transaction amounts
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    Transaction recipients or origins
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p><strong>3.1 Service Provision:</strong> To provide, maintain, and improve our wallet services.</p>
                <p><strong>3.2 Security:</strong> To detect and prevent fraud, security threats, and unauthorized access.</p>
                <p><strong>3.3 Compliance:</strong> To comply with legal obligations, including AML/KYC requirements.</p>
                <p><strong>3.4 Communication:</strong> To send you service updates, security alerts, and support messages.</p>
                <p><strong>3.5 Analytics:</strong> To understand how our services are used and improve user experience.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">4. Legal Basis for Processing (GDPR)</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-3">Legitimate Interest</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Service improvement</li>
                    <li>• Security monitoring</li>
                    <li>• Analytics</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-3">Legal Obligation</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• KYC/AML compliance</li>
                    <li>• Regulatory reporting</li>
                    <li>• Tax obligations</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">5. Information Sharing</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  With your explicit consent
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  To comply with legal obligations or court orders
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  With trusted service providers under strict confidentiality agreements
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  In case of business merger or acquisition (with prior notice)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">6. Data Security</h2>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-6">
                <h4 className="text-blue-400 font-semibold mb-3">Security Measures</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <Lock className="h-4 w-4 text-blue-400 mr-2" />
                      AES-256 encryption
                    </li>
                    <li className="flex items-center">
                      <Database className="h-4 w-4 text-blue-400 mr-2" />
                      Secure data centers
                    </li>
                  </ul>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-blue-400 mr-2" />
                      Regular security audits
                    </li>
                    <li className="flex items-center">
                      <Eye className="h-4 w-4 text-blue-400 mr-2" />
                      Access monitoring
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">7. Your Rights (GDPR & CCPA)</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">GDPR Rights (EU Users)</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Right to access your data</li>
                    <li>• Right to rectification</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                    <li>• Right to withdraw consent</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">CCPA Rights (California Users)</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Right to know about data collection</li>
                    <li>• Right to delete personal information</li>
                    <li>• Right to opt-out of sale</li>
                    <li>• Right to non-discrimination</li>
                    <li>• Right to correct inaccurate data</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">8. Data Retention</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We retain your personal information only as long as necessary to provide our services and 
                comply with legal obligations. Account data is deleted within 30 days of account closure, 
                except where retention is required by law (typically 5-7 years for financial records).
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. International Data Transfers</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure adequate protection through Standard Contractual Clauses and other approved 
                transfer mechanisms under GDPR.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use cookies and similar technologies for:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Essential functionality (required for service operation)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Analytics (with your consent)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Security monitoring
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">11. Children's Privacy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our services are not intended for children under 18. We do not knowingly collect personal 
                information from children. If we become aware of such collection, we will delete the 
                information immediately.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes 
                via email or in-app notification at least 30 days before the changes take effect.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">13. Contact Us</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For privacy-related questions or to exercise your rights, contact our Data Protection Officer:
              </p>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white"><strong>Email:</strong> privacy@marzwallet.com</p>
                <p className="text-white"><strong>Data Protection Officer:</strong> dpo@marzwallet.com</p>
                <p className="text-white"><strong>Address:</strong> MARZ Technologies Inc., 100 Pine Street, Suite 1250, San Francisco, CA 94111</p>
                <p className="text-white"><strong>EU Representative:</strong> MARZ Europe GmbH, Friedrichstraße 68, 10117 Berlin, Germany</p>
              </div>

            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link href="/terms" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Terms of Service</h3>
                <p className="text-gray-400">Our terms and conditions</p>
              </div>
            </Link>
            
            <Link href="/cookies" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <Database className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">Cookie Policy</h3>
                <p className="text-gray-400">How we use cookies</p>
              </div>
            </Link>
            
            <Link href="/security" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <Lock className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">Security Statement</h3>
                <p className="text-gray-400">Our security practices</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}