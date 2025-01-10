import React, { useState } from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Alert className="relative cursor-pointer bg-gradient-to-r from-primary/5 to-primary/10" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <AlertDescription className="text-foreground">
            {isExpanded ? (
              <>
                <p className="font-semibold mb-2">New Features Alert! 🎯</p>
                <p className="text-sm text-foreground/80">
                  We've rolled out some key improvements to help you find the best odds faster:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Table headers now stay visible as you scroll - track odds more easily 📊</li>
                  <li>Added a last updated timer showing data freshness (updates every 25 minutes)</li>
                  <li>Fixed the bug that was limiting prop visibility - now showing all available options</li>
                  <li>New sportsbook filter lets you focus on your preferred books</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  We're working on faster update intervals to give you even fresher odds. 
                  Got feedback? Hit the user menu in the top right to let us know what you think. 💪
                </p>
              </>
            ) : (
              <p className="font-medium">
                New features deployed! 🎯 Better table navigation, fresh data tracking, and custom sportsbook filters now live.
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