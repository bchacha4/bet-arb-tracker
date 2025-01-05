import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import OddsScoutTable from '@/components/OddsScoutTable/OddsScoutTable';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Search, RefreshCw } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const OddsScout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(true);
  
  React.useEffect(() => {
    console.log('OddsScout component mounted');
    console.log('Current pathname:', location.pathname);
    console.log('Full URL:', window.location.href);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Odds Scout</h1>
          </div>

          {isMobile ? (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <Card className="mb-4 bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Welcome to Odds Scout</h2>
                    <CollapsibleTrigger className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="animate-accordion-down">
                    <div className="space-y-4 text-gray-600 text-sm">
                      <p className="leading-relaxed">
                        Find the best value for your player prop bets by comparing odds and lines across multiple sportsbooks.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="text-base font-semibold mb-2 text-gray-900">What Can Odds Scout Do for You?</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Find the Best Deal:</span> Shop around for the most favorable odds and lines.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Identify Line Discrepancies:</span> Spot inconsistencies between sportsbooks.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-primary"/>
                              <span><span className="font-medium text-gray-900">Stay Informed:</span> Monitor odds and line updates in real-time.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="text-base font-semibold mb-2 text-gray-900">How to Use Odds Scout</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Search className="flex-shrink-0 h-4 w-4 mt-1 text-primary"/>
                              <span><span className="font-medium text-gray-900">Search and Filter:</span> Find specific players, props, or teams.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <RefreshCw className="flex-shrink-0 h-4 w-4 mt-1 text-primary"/>
                              <span><span className="font-medium text-gray-900">Compare:</span> Review odds and lines across sportsbooks.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 italic border-l-2 border-primary pl-3 mt-4">
                        Odds are updated regularly to ensure you have the most accurate data available.
                      </p>
                    </div>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
          ) : (
            <Card className="mb-4 bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Welcome to Odds Scout</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Find the best value for your player prop bets by comparing odds and lines across multiple sportsbooks.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">What Can Odds Scout Do for You?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Find the Best Deal:</span> Shop around for the most favorable odds and lines.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Identify Line Discrepancies:</span> Spot inconsistencies between sportsbooks.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"/>
                          <span><span className="font-medium text-gray-900">Stay Informed:</span> Monitor odds and line updates in real-time.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">How to Use Odds Scout</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Search className="flex-shrink-0 h-5 w-5 mt-1 text-primary"/>
                          <span><span className="font-medium text-gray-900">Search and Filter:</span> Find specific players, props, or teams.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <RefreshCw className="flex-shrink-0 h-5 w-5 mt-1 text-primary"/>
                          <span><span className="font-medium text-gray-900">Compare:</span> Review odds and lines across sportsbooks.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 italic border-l-2 border-primary pl-4 py-2 bg-gray-50 rounded-r-lg">
                    Odds are updated regularly to ensure you have the most accurate data available.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <OddsScoutTable />
        </div>
      </div>
    </div>
  );
};

export default OddsScout;