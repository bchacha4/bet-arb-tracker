import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Lock, TrendingUp, DollarSign, Target } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 fixed top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Bettor-IQ</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="font-medium">
                Log in
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary-hover text-white font-medium">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="py-24 md:py-32">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl">
                Maximize Your Sports Betting ROI with Smart Analytics
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Join thousands of smart bettors using Bettor-IQ to find arbitrage opportunities 
                and maximize their profits across multiple sportsbooks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button className="bg-primary hover:bg-primary-hover text-white font-medium text-lg px-8 py-6">
                    Get Started Free <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Everything You Need to Beat the Books
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Odds Tracking</h3>
                <p className="text-gray-600">
                  Monitor odds across major sportsbooks instantly, ensuring you never miss a profitable opportunity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Arbitrage Finder</h3>
                <p className="text-gray-600">
                  Automatically identify and analyze arbitrage opportunities across different sportsbooks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
                <p className="text-gray-600">
                  Get instant notifications when profitable betting opportunities match your criteria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Bettor-IQ?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of successful sports bettors who trust Bettor-IQ to maximize their profits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">
                    Your data is always protected. Our platform runs 24/7 to ensure you never miss an opportunity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    Our users consistently find profitable arbitrage opportunities across major sportsbooks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Winning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Bettor-IQ today and start finding profitable arbitrage opportunities across all major sportsbooks.
            </p>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary-hover text-white font-medium text-lg px-8 py-6">
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;