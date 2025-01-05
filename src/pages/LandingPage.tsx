import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Target, DollarSign, Signal, Trophy, ChartBar, Lightning } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/f4fbf8ed-9805-4cac-b9e1-515f914f5bf2.png" alt="Bettor-IQ Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Bettor-IQ</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="font-medium">Log in</Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary-hover text-white font-medium">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-primary bg-clip-text text-transparent">
              Turn Sports Knowledge Into
              <br />
              Profitable Opportunities
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Discover arbitrage opportunities across major sportsbooks. Make data-driven decisions and maximize your returns with real-time odds comparison.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/login">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
                  Start Winning Today <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="pt-8 text-sm text-gray-500">
              Join thousands of smart bettors already using Bettor-IQ
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Win</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive tools designed for modern sports betting</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Signal className="w-6 h-6 text-primary" />,
                title: "Real-Time Odds",
                description: "Track live odds across all major sportsbooks instantly"
              },
              {
                icon: <Trophy className="w-6 h-6 text-primary" />,
                title: "Arbitrage Finder",
                description: "Automatically identify profitable betting opportunities"
              },
              {
                icon: <Lightning className="w-6 h-6 text-primary" />,
                title: "Instant Alerts",
                description: "Get notified when profitable opportunities arise"
              },
              {
                icon: <ChartBar className="w-6 h-6 text-primary" />,
                title: "Advanced Analytics",
                description: "Deep insights into betting trends and patterns"
              },
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: "Smart Filters",
                description: "Customize your search for specific opportunities"
              },
              {
                icon: <DollarSign className="w-6 h-6 text-primary" />,
                title: "Profit Tracking",
                description: "Monitor your performance and ROI over time"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "$2M+", label: "Profit Generated" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Start Making Smarter Bets?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful bettors who trust Bettor-IQ to find profitable opportunities.
          </p>
          <Link to="/login">
            <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
              Get Started Free <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;