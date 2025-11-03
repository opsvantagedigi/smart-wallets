'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Database, Settings, Eye, BarChart3, Shield, Download, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function CookiePolicyPage() {
  const lastUpdated = "November 3, 2025";
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for basic website functionality and security",
      examples: ["Authentication tokens", "CSRF protection", "Session management"],
      canDisable: false,
      icon: Shield,
      color: "green"
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Google Analytics", "Usage statistics", "Performance metrics"],
      canDisable: true,
      icon: BarChart3,
      color: "blue"
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track ad performance",
      examples: ["Ad targeting", "Conversion tracking", "Social media pixels"],
      canDisable: true,
      icon: Eye,
      color: "purple"
    },
    {
      name: "Preference Cookies",
      description: "Remember your choices and personalize your experience",
      examples: ["Language settings", "Theme preferences", "UI customizations"],
      canDisable: true,
      icon: Settings,
      color: "yellow"
    }
  ];

  const handleCookieToggle = (type: string) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
              <span className="text-purple-400 font-semibold">🍪 Cookie Management</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Cookie
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
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
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          
          {/* Cookie Preferences Panel */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Manage Your Cookie Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                        type.color === 'green' ? 'bg-green-500/20' :
                        type.color === 'blue' ? 'bg-blue-500/20' :
                        type.color === 'purple' ? 'bg-purple-500/20' :
                        'bg-yellow-500/20'
                      }`}>
                        <type.icon className={`h-5 w-5 ${
                          type.color === 'green' ? 'text-green-400' :
                          type.color === 'blue' ? 'text-blue-400' :
                          type.color === 'purple' ? 'text-purple-400' :
                          'text-yellow-400'
                        }`} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                    </div>
                    
                    <div className="flex items-center">
                      {type.canDisable ? (
                        <button
                          onClick={() => handleCookieToggle(type.name.toLowerCase().split(' ')[0])}
                          title={`Toggle ${type.name}`}
                          aria-label={`Toggle ${type.name}`}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[type.name.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]
                              ? 'bg-green-600' : 'bg-gray-600'
                          }`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            cookiePreferences[type.name.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]
                              ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      ) : (
                        <span className="text-green-400 text-sm font-semibold">Always On</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                  
                  <div className="space-y-1">
                    <p className="text-gray-400 text-xs">Examples:</p>
                    {type.examples.map((example, idx) => (
                      <p key={idx} className="text-gray-400 text-xs">• {example}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                onClick={() => setCookiePreferences({ essential: true, analytics: false, marketing: false, preferences: false })}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-600"
              >
                Reject All
              </Button>
              <Button 
                onClick={() => setCookiePreferences({ essential: true, analytics: true, marketing: true, preferences: true })}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Accept All
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700"
              >
                Save Preferences
              </Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-white mb-6">1. What Are Cookies?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                keeping you logged in, and helping us understand how you use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">2.1 First-Party Cookies</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                These are cookies set directly by MARZ when you visit our website. We have full control 
                over these cookies and use them for essential functionality and analytics.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">2.2 Third-Party Cookies</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These are cookies set by external services we use, such as analytics providers or 
                support chat services. We carefully select our third-party partners and ensure they 
                meet our privacy standards.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Cookies</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    Security & Authentication
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Keep you logged in securely</li>
                    <li>• Prevent CSRF attacks</li>
                    <li>• Detect suspicious activity</li>
                    <li>• Secure session management</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
                    Analytics & Performance
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Understand user behavior</li>
                    <li>• Improve website performance</li>
                    <li>• Track feature usage</li>
                    <li>• Identify popular content</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">4. Specific Cookies Used</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-600 rounded-lg">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="border border-gray-600 px-4 py-3 text-left text-white">Cookie Name</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white">Purpose</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white">Duration</th>
                      <th className="border border-gray-600 px-4 py-3 text-left text-white">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">marz_session</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">User authentication</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">Session</td>
                      <td className="border border-gray-600 px-4 py-3">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Essential</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">marz_preferences</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">UI preferences</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">1 year</td>
                      <td className="border border-gray-600 px-4 py-3">
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Preference</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">_ga</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">Google Analytics</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">2 years</td>
                      <td className="border border-gray-600 px-4 py-3">
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Analytics</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">intercom-session</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">Customer support chat</td>
                      <td className="border border-gray-600 px-4 py-3 text-gray-300">1 week</td>
                      <td className="border border-gray-600 px-4 py-3">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Essential</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6 mt-8">5. Managing Cookies</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">5.1 Browser Settings</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You can control cookies through your browser settings. However, disabling certain cookies 
                may affect the functionality of our website.
              </p>
              
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">Important Note</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Blocking essential cookies may prevent you from using certain features of our service, 
                      including logging in and accessing your wallet.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">5.2 Cookie Consent Management</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You can manage your cookie preferences using the panel above. Your choices will be 
                remembered and you can change them at any time by revisiting this page.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Third-Party Services</h2>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Google Analytics</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    We use Google Analytics to understand how visitors use our website.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Privacy Policy: <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Intercom</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    We use Intercom for customer support and in-app messaging.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Privacy Policy: <a href="https://www.intercom.com/legal/privacy" className="text-blue-400 hover:underline">https://www.intercom.com/legal/privacy</a>
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">7. Data Retention</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We retain cookie data for different periods depending on the type of cookie:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Session cookies: Deleted when you close your browser
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Persistent cookies: Up to 2 years (varies by purpose)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Analytics cookies: 26 months (Google Analytics default)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">8. Updates to This Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may update this Cookie Policy from time to time. When we make significant changes, 
                we will notify you through our website or other communication channels.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white"><strong>Email:</strong> privacy@marzwallet.com</p>
                <p className="text-white"><strong>Subject:</strong> Cookie Policy Inquiry</p>
                <p className="text-white"><strong>Address:</strong> MARZ Technologies Inc., 100 Pine Street, Suite 1250, San Francisco, CA 94111</p>
              </div>

            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link href="/privacy" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">Privacy Policy</h3>
                <p className="text-gray-400">How we protect your data</p>
              </div>
            </Link>
            
            <Link href="/terms" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <Database className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">Terms of Service</h3>
                <p className="text-gray-400">Our terms and conditions</p>
              </div>
            </Link>
            
            <Link href="/security" className="group">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
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