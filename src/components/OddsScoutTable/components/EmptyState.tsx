import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const EmptyState = () => {
  return (
    <Alert className="bg-blue-50 border-blue-200">
      <Info className="h-5 w-5 text-blue-500" />
      <AlertDescription className="text-blue-700">
        No odds data available at the moment. Please check back later for updated odds.
      </AlertDescription>
    </Alert>
  );
};

export default EmptyState;