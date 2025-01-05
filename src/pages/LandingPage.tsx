import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crosshair, LineChart, BarChart2, DollarSign, Scale, Trophy } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/f4fbf8ed-9805-4cac-b9e1-515f914f5bf2.png" alt="Bettor-IQ Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">Bettor-IQ</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="font-medium text-gray-300 hover:text-white">Log in</Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary-hover text-white font-medium">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-white mb-6">
            Turn Sports Betting Into
            <br />
            A Winning Strategy
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-8">
            Discover profitable arbitrage opportunities and compare odds across major sportsbooks. 
            Join thousands of smart bettors maximizing their returns with Bettor-IQ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
                Start Winning Today <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Powerful Tools for Smart Betting</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Arbitrage Tracker</h3>
              <p className="text-gray-300 mb-6">
                Automatically scan odds across multiple sportsbooks to find guaranteed profit opportunities. 
                Our smart algorithms identify arbitrage opportunities and calculate optimal bet sizes for maximum returns.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <Crosshair className="w-5 h-5 text-primary mr-2" />
                  Identify profitable arbitrage opportunities
                </li>
                <li className="flex items-center">
                  <LineChart className="w-5 h-5 text-primary mr-2" />
                  Calculate optimal bet distribution
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Track potential profits in real-time
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Odds Scout</h3>
              <p className="text-gray-300 mb-6">
                Compare odds across major sportsbooks in one place. Find the best values and make informed betting decisions 
                with our comprehensive odds comparison tool.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-primary mr-2" />
                  Compare odds from major sportsbooks
                </li>
                <li className="flex items-center">
                  <LineChart className="w-5 h-5 text-primary mr-2" />
                  Track line movements
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Find the best betting values
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Bettors" },
              { number: "$1M+", label: "Profit Generated" },
              { number: "15+", label: "Supported Sportsbooks" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Maximize Your Betting Profits?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful bettors who trust Bettor-IQ to find profitable opportunities.
          </p>
          <Link to="/login">
            <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
              Start Free Trial <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;