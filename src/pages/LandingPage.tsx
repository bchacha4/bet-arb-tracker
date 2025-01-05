import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, DollarSign, TrendingUp } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Maximize Your Edge with</span>
            <span className="block text-primary">Bettor-IQ</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The ultimate arbitrage betting platform. Find the best odds across major sportsbooks and secure guaranteed profits with our real-time analytics.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link to="/login">
                <Button className="w-full px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Bettor-IQ?
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Arbitrage Opportunities</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Find profitable betting opportunities across NFL and NBA markets with our advanced arbitrage detection system.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real-Time Updates</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Stay ahead with instant odds updates from major sportsbooks, ensuring you never miss a profitable opportunity.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Guaranteed Profits</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Calculate optimal bet sizes and see your potential returns before placing any bets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Start Winning?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-white/90">
                Join thousands of smart bettors who are already using Bettor-IQ to maximize their profits through arbitrage betting.
              </p>
              <div className="mt-8">
                <Link to="/login">
                  <Button variant="secondary" size="lg" className="hover:bg-white hover:text-primary">
                    Start Free <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white">NFL Coverage</h3>
                  <p className="mt-2 text-white/80">Player props, moneylines, and more</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white">NBA Markets</h3>
                  <p className="mt-2 text-white/80">Full range of basketball betting options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="sr-only">Bettor-IQ - Sports Arbitrage Betting Platform</h2>
            <p className="text-base text-gray-400">
              Bettor-IQ: Your trusted platform for sports arbitrage betting, covering NFL and NBA markets.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              © {new Date().getFullYear()} Bettor-IQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;