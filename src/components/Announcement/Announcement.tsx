import React, { useState } from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Alert className="relative cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <AlertDescription className="text-foreground">
            {isExpanded ? (
              <>
                <p className="font-semibold mb-2">Welcome to the New Odds Scout! 🎉</p>
                <p className="text-sm text-foreground/80">
                  We've made some important improvements to enhance your odds comparison experience:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Fixed column headers now stay visible while scrolling through the table</li>
                  <li>Added a last updated timer to show data freshness (updates every 25 minutes)</li>
                  <li>Resolved the bug that was limiting the display of available props</li>
                  <li>New sportsbook filter to customize which odds you want to see</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  We're working on decreasing the update interval to provide you with even fresher odds! 
                  Have feedback? Click the user menu in the top right corner to share your thoughts. 💡
                </p>
              </>
            ) : (
              <p className="font-medium">
                New features are here! 🎉 Fixed headers, last updated timer, and custom sportsbook filters now available.
              </p>
            )}
          </AlertDescription>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isExpanded ? "transform rotate-180" : ""
          )}
        />
      </div>
    </Alert>
  );
};

export default Announcement;