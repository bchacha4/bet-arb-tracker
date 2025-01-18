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
                <p className="font-semibold mb-2">Performance Update! 🚀</p>
                <p className="text-sm text-foreground/80">
                  We've made some significant improvements to enhance your experience:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Added a "Last Updated" indicator to help you track data freshness</li>
                  <li>Optimized our algorithm for faster updates - now refreshing every 18 minutes</li>
                  <li>Improved data processing efficiency for more reliable odds tracking</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  These updates help you stay on top of the latest odds with greater precision. 
                  Got feedback? We'd love to hear from you in the user menu! 💪
                </p>
              </>
            ) : (
              <p className="font-medium">
                New updates! 🚀 Added last updated tracking and faster 18-minute refresh intervals.
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