
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
          <p className="font-semibold mb-2">NFL Season Update & System Improvements! 🏈</p>
          <p className="text-sm text-foreground/80">
            As the NFL season concludes, congratulations to the Kansas City Chiefs on their Super Bowl victory! 
            We've made some important updates to our system:
          </p>
          <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
            <li>NFL props and bets scanning has been paused until next season</li>
            <li>Improved data refresh frequency to every 10 minutes</li>
            <li>Currently preparing our software for MLS betting integration</li>
          </ul>
          <p className="mt-3 text-sm font-medium text-foreground/90">
            Stay tuned for our MLS integration! We're excited to bring you more betting opportunities soon. 
            Got feedback? We'd love to hear from you in the user menu! ⚽
          </p>
        </>
      ) : (
        <p className="font-medium">
          NFL Season Update! 🏈 Faster 10-minute data refresh & MLS integration coming soon! ⚽
        </p>
      );
    }

    return isExpanded ? (
      <>
        <p className="font-semibold mb-2">System Updates & NFL Season Wrap-up! 🏈</p>
        <p className="text-sm text-foreground/80">
          As we bid farewell to the NFL season, here are some important updates:
        </p>
        <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
          <li>Congratulations to the Kansas City Chiefs on their Super Bowl victory!</li>
          <li>NFL props tracking paused until next season</li>
          <li>Enhanced data refresh rate - now every 10 minutes 🚀</li>
          <li>MLS betting integration in development ⚽</li>
        </ul>
        <p className="mt-3 text-sm font-medium text-foreground/90">
          We're working hard to bring you even more opportunities with our upcoming MLS integration. 
          Your feedback helps shape our platform - share your thoughts via the user menu! 💪
        </p>
      </>
    ) : (
      <p className="font-medium">
        NFL Season Wrap-up! 🏈 Faster data updates (10-min refresh) & MLS integration coming soon! ⚽
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
