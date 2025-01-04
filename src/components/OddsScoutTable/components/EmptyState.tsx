import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-medium text-gray-900">No odds data available</h3>
      <p className="mt-2 text-sm text-gray-500">
        Check back later for updated odds from various sportsbooks.
      </p>
    </div>
  );
};

export default EmptyState;