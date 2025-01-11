import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar/Navbar';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, RefreshCw, MousePointerClick, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const ArbitrageTracker = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(true);
  const [bettingAmount, setBettingAmount] = useState('1000');
  const [selectedSportsbook, setSelectedSportsbook] = useState('all');
  const [selectedProp, setSelectedProp] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Arbitrage Tracker - Find Sports Betting Arbitrage Opportunities</title>
        <meta name="description" content="Track and find sports betting arbitrage opportunities across multiple sportsbooks. Maximize your profits with our comprehensive arbitrage tracking tool." />
        <meta name="keywords" content="sports betting, arbitrage betting, betting arbitrage, sportsbooks, betting opportunities, arbitrage tracker" />
        <meta property="og:title" content="Arbitrage Tracker - Find Betting Opportunities" />
        <meta property="og:description" content="Find profitable arbitrage betting opportunities across multiple sportsbooks. Track and compare odds to maximize your returns." />
      </Helmet>

      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Arbitrage Tracker</h1>
          </div>

          {isMobile ? (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <Card className="mb-4 bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Welcome to Arbitrage Tracker</h2>
                    <CollapsibleTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="animate-accordion-down">
                    <div className="space-y-4 text-gray-600 text-sm">
                      <p className="leading-relaxed">
                        Find profitable arbitrage opportunities across multiple sportsbooks. Our tool automatically calculates potential profits and optimal bet amounts.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="text-base font-semibold mb-2 text-gray-900">What is Arbitrage Betting?</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Risk-Free Profit:</span> Place bets on all possible outcomes to guarantee returns.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Automated Calculations:</span> We calculate optimal bet amounts and potential profits.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Real-Time Updates:</span> Opportunities are updated regularly.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="text-base font-semibold mb-2 text-gray-900">How to Use the Tracker</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <DollarSign className="flex-shrink-0 h-4 w-4 mt-1 text-primary"/>
                              <span><span className="font-medium text-gray-900">Set Your Bankroll:</span> Enter your betting amount to calculate returns.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <RefreshCw className="flex-shrink-0 h-4 w-4 mt-1 text-primary"/>
                              <span><span className="font-medium text-gray-900">Monitor Opportunities:</span> Watch for new arbitrage opportunities.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <MousePointerClick className="flex-shrink-0 h-4 w-4 mt-1 text-primary"/>
                              <span><span className="font-medium text-gray-900">Place Bets:</span> Click to visit sportsbooks and place your bets.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 italic border-l-2 border-primary pl-3 mt-4">
                        Remember to act quickly as arbitrage opportunities can disappear rapidly.
                      </p>
                    </div>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
          ) : (
            <Card className="mb-4 bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Welcome to Arbitrage Tracker</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Find profitable arbitrage opportunities across multiple sportsbooks. Our tool automatically calculates potential profits and optimal bet amounts.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">What is Arbitrage Betting?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Risk-Free Profit:</span> Place bets on all possible outcomes to guarantee returns.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Automated Calculations:</span> We calculate optimal bet amounts and potential profits.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Real-Time Updates:</span> Opportunities are updated regularly.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">How to Use the Tracker</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <DollarSign className="flex-shrink-0 h-5 w-5 mt-1 text-primary"/>
                          <span><span className="font-medium text-gray-900">Set Your Bankroll:</span> Enter your betting amount to calculate returns.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <RefreshCw className="flex-shrink-0 h-5 w-5 mt-1 text-primary"/>
                          <span><span className="font-medium text-gray-900">Monitor Opportunities:</span> Watch for new arbitrage opportunities.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <MousePointerClick className="flex-shrink-0 h-5 w-5 mt-1 text-primary"/>
                          <span><span className="font-medium text-gray-900">Place Bets:</span> Click to visit sportsbooks and place your bets.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 italic border-l-2 border-primary pl-4 py-2 bg-gray-50 rounded-r-lg">
                    Remember to act quickly as arbitrage opportunities can disappear rapidly.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <FilterSection 
            bettingAmount={bettingAmount}
            onBettingAmountChange={setBettingAmount}
            selectedSportsbook={selectedSportsbook}
            onSportsbookChange={setSelectedSportsbook}
            selectedProp={selectedProp}
            onPropChange={setSelectedProp}
          />

          <ArbitrageTable
            bettingAmount={bettingAmount}
            selectedSportsbook={selectedSportsbook}
            selectedProp={selectedProp}
          />
        </div>
      </div>
    </div>
  );
};

export default ArbitrageTracker;