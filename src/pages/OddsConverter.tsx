
import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import OddsConverterForm from '@/components/OddsConverter/OddsConverterForm';
import { Card, CardContent } from '@/components/ui/card';

const OddsConverter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-gray-50 to-background">
      <Helmet>
        <title>Free Sports Betting Odds Converter - Convert Odds Formats | Bettor-IQ</title>
        <meta name="description" content="Convert between American, Decimal, Fractional, and Implied odds formats with our free odds converter. Calculate potential payouts instantly for smarter betting decisions." />
        <meta name="keywords" content="odds converter, betting odds calculator, american odds converter, decimal odds, fractional odds, implied probability calculator" />
        <meta property="og:title" content="Free Sports Betting Odds Converter - Convert Odds Formats | Bettor-IQ" />
        <meta property="og:description" content="Convert between American, Decimal, Fractional, and Implied odds formats with our free odds converter. Calculate potential payouts instantly for smarter betting decisions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Sports Betting Odds Converter - Convert Odds Formats | Bettor-IQ" />
        <meta name="twitter:description" content="Convert between American, Decimal, Fractional, and Implied odds formats with our free odds converter. Calculate potential payouts instantly for smarter betting decisions." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow max-w-[1400px] mx-auto p-4 md:p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Odds Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert between different odds formats and calculate potential payouts instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <OddsConverterForm />
          
          <Card className="bg-white shadow-lg border-border/50">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Understanding Odds Formats</h2>
                <p className="text-gray-600">
                  Different regions use different odds formats. American odds are popular in the US, 
                  while decimal odds are common in Europe. Our converter helps you understand and 
                  convert between these formats instantly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Odds Format Types</h3>
                <ul className="space-y-3">
                  <li className="text-gray-600">
                    <span className="font-semibold">American Odds:</span> Shows how much you need to bet to win $100 (negative number) or how much you win on a $100 bet (positive number)
                  </li>
                  <li className="text-gray-600">
                    <span className="font-semibold">Decimal Odds:</span> Shows the total payout including your stake (e.g., 2.50 means $250 total return on $100 bet)
                  </li>
                  <li className="text-gray-600">
                    <span className="font-semibold">Fractional Odds:</span> Shows the ratio of profit to stake (e.g., 5/1 means $500 profit on $100 stake)
                  </li>
                  <li className="text-gray-600">
                    <span className="font-semibold">Implied Odds:</span> Shows the probability percentage implied by the odds
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OddsConverter;
