'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Shield, AlertTriangle, CheckCircle, Download, ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = "November 3, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-blue-400 font-semibold">📄 Legal Documentation</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Terms of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Service
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
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            
            {/* Important Notice */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-12">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Notice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Please read these Terms of Service carefully before using our services. 
                    By accessing or using MARZ wallet services, you agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of MARZ wallet services, 
                including our website, mobile applications, and related services (collectively, the "Services"). 
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Services</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                MARZ provides a non-custodial smart wallet platform that enables users to:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Store, send, and receive digital assets
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Interact with decentralized applications (dApps)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Participate in staking and DeFi protocols
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Trade and manage NFTs
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Eligibility</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into contracts 
                in your jurisdiction. By using our Services, you represent and warrant that you meet 
                these eligibility requirements and that your use of the Services will not violate any 
                applicable laws or regulations.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">4. Non-Custodial Nature</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                MARZ is a non-custodial wallet service. We do not hold, control, or have access to your 
                private keys or digital assets. You are solely responsible for maintaining the security 
                of your wallet and private keys. Loss of your private keys may result in permanent loss 
                of your digital assets.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">5. User Responsibilities</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p><strong>5.1 Security:</strong> You are responsible for maintaining the confidentiality 
                of your account credentials and for all activities that occur under your account.</p>
                
                <p><strong>5.2 Compliance:</strong> You agree to comply with all applicable laws and 
                regulations in your use of the Services, including but not limited to anti-money 
                laundering (AML) and know-your-customer (KYC) requirements.</p>
                
                <p><strong>5.3 Prohibited Activities:</strong> You agree not to use the Services for 
                any illegal activities, money laundering, terrorist financing, or other prohibited purposes.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">6. Fees and Payments</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Certain features of our Services may be subject to fees. We will clearly disclose any 
                applicable fees before you incur them. Network fees (gas fees) for blockchain transactions 
                are separate and determined by the respective blockchain networks.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                We are committed to protecting your personal data in accordance with applicable privacy laws.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Intellectual Property</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The Services and all content, features, and functionality are owned by MARZ and are 
                protected by copyright, trademark, and other intellectual property laws. You may not 
                modify, distribute, or create derivative works based on our Services without our prior 
                written consent.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Disclaimers and Limitations</h2>
              <div className="text-gray-300 mb-6 space-y-4">
                <p><strong>9.1 No Warranty:</strong> The Services are provided "as is" and "as available" 
                without any warranties, express or implied.</p>
                
                <p><strong>9.2 Blockchain Risks:</strong> Digital assets and blockchain technology involve 
                inherent risks, including but not limited to market volatility, regulatory changes, and 
                technical vulnerabilities.</p>
                
                <p><strong>9.3 Third-Party Services:</strong> We are not responsible for the performance 
                or availability of third-party services, including blockchain networks and dApps.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">10. Indemnification</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You agree to indemnify and hold harmless MARZ and its affiliates from any claims, damages, 
                or expenses arising from your use of the Services, violation of these Terms, or infringement 
                of any third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Dispute Resolution</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Any disputes arising from these Terms or your use of the Services will be resolved through 
                binding arbitration in accordance with the rules of the American Arbitration Association. 
                You waive your right to participate in class action lawsuits.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Governing Law</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the State of 
                Delaware, United States, without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material 
                changes through our Services or other communication methods. Your continued use of the 
                Services after such changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">14. Contact Information</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white"><strong>Email:</strong> legal@marzwallet.com</p>
                <p className="text-white"><strong>Address:</strong> MARZ Technologies Inc., 100 Pine Street, Suite 1250, San Francisco, CA 94111</p>
                <p className="text-white"><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>

            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link href="/privacy" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Privacy Policy</h3>
                <p className="text-gray-400">Learn how we protect your personal data</p>
              </div>
            </Link>
            
            <Link href="/cookies" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <FileText className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">Cookie Policy</h3>
                <p className="text-gray-400">Understand our use of cookies</p>
              </div>
            </Link>
            
            <Link href="/security" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">Security Statement</h3>
                <p className="text-gray-400">Our commitment to security</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}