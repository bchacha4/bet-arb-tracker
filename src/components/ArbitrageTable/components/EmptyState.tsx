import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const EmptyState = () => {
  return (
    <Alert className="bg-blue-50 border-blue-200">
      <Info className="h-5 w-5 text-blue-500" />
      <AlertDescription className="text-blue-700">
        There are currently no Arbitrage Bets available. We're continuously searching and will provide results as soon as they become available. Check back soon for new opportunities!
      </AlertDescription>
    </Alert>
  );
};

export default EmptyState;