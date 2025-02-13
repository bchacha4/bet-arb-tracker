
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crosshair, LineChart, BarChart2, DollarSign, Scale, Trophy, Calculator } from 'lucide-react';
import Footer from '@/components/Footer/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Bettor-IQ</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/arbitrage-calculator">
                <Button variant="ghost" className="font-medium text-gray-600 hover:text-gray-900">
                  Arbitrage Calculator
                </Button>
              </Link>
              <Link to="/odds-converter">
                <Button variant="ghost" className="font-medium text-gray-600 hover:text-gray-900">
                  Odds Converter
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" className="font-medium text-gray-600 hover:text-gray-900">
                  Log in
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary-hover text-white font-medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Turn Sports Betting Into
            <br />
            A Winning Strategy
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            Discover profitable arbitrage opportunities and compare odds across major sportsbooks. 
            Join thousands of smart bettors maximizing their returns with Bettor-IQ.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Powerful Tools for Smart Betting</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-colors shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arbitrage Finder</h3>
              <p className="text-gray-600 mb-6">
                Automatically scan odds across multiple sportsbooks to find guaranteed profit opportunities. 
                Our smart algorithms identify arbitrage opportunities and calculate optimal bet sizes.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
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
              <Link to="/arbitrage-finder">
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                  Try Arbitrage Finder
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-colors shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arbitrage Calculator</h3>
              <p className="text-gray-600 mb-6">
                Calculate potential profits and optimal bet sizes for arbitrage opportunities you've found. 
                Make informed decisions with our easy-to-use betting calculator.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <Calculator className="w-5 h-5 text-primary mr-2" />
                  Calculate arbitrage profits instantly
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Determine optimal bet distribution
                </li>
                <li className="flex items-center">
                  <LineChart className="w-5 h-5 text-primary mr-2" />
                  View potential returns
                </li>
              </ul>
              <Link to="/arbitrage-calculator">
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                  Try Calculator
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-colors shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Odds Scout</h3>
              <p className="text-gray-600 mb-6">
                Compare odds across major sportsbooks in one place. Find the best values and make informed betting decisions 
                with our comprehensive odds comparison tool.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
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

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-colors shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Odds Converter</h3>
              <p className="text-gray-600 mb-6">
                Convert between American, Decimal, Fractional, and Implied odds formats instantly. Calculate potential payouts 
                and make informed decisions with our easy-to-use converter.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <Calculator className="w-5 h-5 text-primary mr-2" />
                  Convert between odds formats
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Calculate potential payouts
                </li>
                <li className="flex items-center">
                  <LineChart className="w-5 h-5 text-primary mr-2" />
                  View implied probabilities
                </li>
              </ul>
              <Link to="/odds-converter">
                <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                  Try Odds Converter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Ready to Maximize Your Betting Profits?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful bettors who trust Bettor-IQ to find profitable opportunities.
          </p>
          <Link to="/login">
            <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg font-medium">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
