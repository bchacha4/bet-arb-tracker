import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import OddsScoutTable from '@/components/OddsScoutTable/OddsScoutTable';

const OddsScout = () => {
  useEffect(() => {
    console.log('OddsScout component mounted');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Odds Scout</h2>
        </div>
        <OddsScoutTable />
      </div>
    </div>
  );
};

export default OddsScout;