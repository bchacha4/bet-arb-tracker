import React, { useState } from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  
  const isArbitrageTracker = location.pathname.includes('arbitrage-tracker');

  const renderContent = () => {
    if (isArbitrageTracker) {
      return isExpanded ? (
        <>
          <p className="font-semibold mb-2">Performance Update! 🚀</p>
          <p className="text-sm text-foreground/80">
            We've made some significant improvements to enhance your arbitrage tracking experience:
          </p>
          <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
            <li>Added a "Last Updated" indicator to help you track data freshness</li>
            <li>Optimized our algorithm to update data every 18 minutes for better efficiency</li>
            <li>Improved overall system performance for faster odds tracking</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-foreground/90">
            Keep an eye on the last updated timestamp to ensure you're working with the freshest data. 
            Got feedback? We'd love to hear from you in the user menu! 💪
          </p>
        </>
      ) : (
        <p className="font-medium">
          New update! 🚀 Added last updated tracking and faster 18-minute data refresh intervals.
        </p>
      );
    }

    return isExpanded ? (
      <>
        <p className="font-semibold mb-2">New Features Alert! 🎯</p>
        <p className="text-sm text-foreground/80">
          We've rolled out some key improvements to help you find the best odds faster:
        </p>
        <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
          <li>Table headers now stay visible as you scroll - track odds more easily 📊</li>
          <li>Added a last updated timer showing data freshness (now updating every 18 minutes)</li>
          <li>Fixed the bug that was limiting prop visibility - now showing all available options</li>
          <li>New sportsbook filter lets you focus on your preferred books</li>
        </ul>
        <p className="mt-3 text-sm font-medium text-foreground/90">
          We're working on even more improvements to give you the best odds tracking experience. 
          Got feedback? Hit the user menu in the top right to let us know what you think. 💪
        </p>
      </>
    ) : (
      <p className="font-medium">
        New features deployed! 🎯 Better table navigation, fresh data tracking (18-minute updates), and custom sportsbook filters now live.
      </p>
    );
  };

  return (
    <Alert className="relative cursor-pointer bg-gradient-to-r from-primary/5 to-primary/10" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <AlertDescription className="text-foreground">
            {renderContent()}
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