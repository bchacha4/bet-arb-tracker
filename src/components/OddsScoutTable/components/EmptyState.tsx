import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <Alert className="bg-gray-50 border border-gray-200 shadow-sm">
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <SearchX className="h-12 w-12 text-gray-400 mb-4" />
        <AlertDescription className="text-gray-600 text-lg">
          No odds available at the moment.
          <br />
          <span className="text-sm text-gray-500">Check back soon for new opportunities!</span>
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default EmptyState;