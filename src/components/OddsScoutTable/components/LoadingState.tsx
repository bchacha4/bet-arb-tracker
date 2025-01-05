import React from 'react';
import { Loader2 } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
      <span className="ml-3 text-gray-600">Loading odds data...</span>
    </div>
  );
};

export default LoadingState;