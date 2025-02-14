
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ArbitrageCalculatorForm from '@/components/ArbitrageCalculator/ArbitrageCalculatorForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, ArrowRight, DollarSign, Percent } from 'lucide-react';

const ArbitrageCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50">
      <Helmet>
        <title>Free Arbitrage Betting Calculator - Find Guaranteed Profits | Bettor-IQ</title>
        <meta name="description" content="Calculate guaranteed arbitrage betting profits with our free calculator. Learn how to find and capitalize on arbitrage opportunities across different sportsbooks." />
        <meta name="keywords" content="arbitrage betting calculator, sports arbitrage, sure betting, arbing calculator, betting arbitrage, sports betting calculator" />
        <meta property="og:title" content="Free Arbitrage Betting Calculator - Find Guaranteed Profits | Bettor-IQ" />
        <meta property="og:description" content="Calculate guaranteed arbitrage betting profits with our free calculator. Learn how to find and capitalize on arbitrage opportunities across different sportsbooks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Arbitrage Betting Calculator - Find Guaranteed Profits | Bettor-IQ" />
        <meta name="twitter:description" content="Calculate guaranteed arbitrage betting profits with our free calculator. Learn how to find and capitalize on arbitrage opportunities across different sportsbooks." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow max-w-[1400px] mx-auto p-4 md:p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Arbitrage Betting Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your potential arbitrage betting profits instantly with our free calculator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ArbitrageCalculatorForm />
          
          <Card className="bg-white shadow-sm border-border/50">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">What is Arbitrage Betting?</h2>
                <p className="text-gray-600">
                  Arbitrage betting (also known as arbing) is a risk-free betting strategy that takes advantage of 
                  different odds offered by different bookmakers for the same event. By placing proportional bets 
                  on all possible outcomes, you can guarantee a profit regardless of the result.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Benefits of Arbitrage Betting</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Guaranteed profits when executed correctly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Percent className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Typical returns range from 1% to 5% per bet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calculator className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Mathematical approach to sports betting</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Try Our Arbitrage Tracker</h3>
                <p className="text-gray-600">
                  Want to find real arbitrage opportunities automatically? Our Arbitrage Tracker tool scans multiple 
                  sportsbooks in real-time to find profitable arbitrage opportunities for you.
                </p>
                <Link to="/login">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Sign Up Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArbitrageCalculator;
