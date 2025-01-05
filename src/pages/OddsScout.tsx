import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import OddsScoutTable from '@/components/OddsScoutTable/OddsScoutTable';
import { Card, CardContent } from "@/components/ui/card";

const OddsScout = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    console.log('OddsScout component mounted');
    console.log('Current pathname:', location.pathname);
    console.log('Full URL:', window.location.href);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Odds Scout</h2>
          </div>

          <Card className="mb-4 bg-white">
            <CardContent className="pt-3">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">Welcome to Odds Scout – Find the Best Player Prop Deals!</h2>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>
                  Odds Scout is designed to help bettors like you find the best value for your player prop bets by comparing odds and lines across multiple sportsbooks.
                </p>
                
                <h3 className="text-base font-semibold mt-4 mb-2 text-[#222222]">What Can Odds Scout Do for You?</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Find the Best Deal:</span> Shop around for the most favorable odds and lines. Why settle for -180 when another sportsbook offers -120 for the same prop?</li>
                  <li><span className="font-medium">Identify Line Discrepancies:</span> Spot inconsistencies between sportsbooks, such as one offering a line at 22.5 while others have moved to 23.5 or 24.5. These differences could give you a unique betting advantage.</li>
                  <li><span className="font-medium">Stay Informed:</span> Monitor odds and line updates to make smarter, more profitable betting decisions.</li>
                </ul>

                <h3 className="text-base font-semibold mt-4 mb-2 text-[#222222]">How to Use Odds Scout</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Search and Filter:</span> Use the dropdown menu or search bar to find specific players, props, or teams.</li>
                  <li><span className="font-medium">Compare:</span> Review the odds and lines across sportsbooks to choose the best option for your bet.</li>
                  <li><span className="font-medium">Act:</span> Click on the odds in the table to be directed to the sportsbook and place your bet. Maximize your returns by betting on the sportsbook with the most advantageous line or odds.</li>
                </ul>

                <p className="text-sm text-gray-500 mt-4 italic">
                  Note: Odds are updated regularly to ensure you have the most accurate data available.
                </p>
              </div>
            </CardContent>
          </Card>

          <OddsScoutTable />
        </div>
      </div>
    </div>
  );
};

export default OddsScout;