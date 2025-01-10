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
                <p className="font-semibold mb-2">Hey there! We've got some exciting updates for you! 🎉</p>
                <p className="text-sm text-foreground/80">
                  We've been working hard to make your odds comparison experience even better with these awesome improvements:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Your table headers now stay visible as you scroll - no more getting lost in the numbers! 📊</li>
                  <li>Added a handy last updated timer so you always know how fresh your data is (updates every 25 minutes)</li>
                  <li>Fixed that pesky bug that was hiding some props from you - now you can see everything! ✨</li>
                  <li>Customize your view with our new sportsbook filter - see exactly what matters to you</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  And guess what? We're working on making the updates even more frequent to give you the freshest odds possible! 
                  Got thoughts? We'd love to hear them - just click the user menu in the top right to share your feedback! 💭
                </p>
              </>
            ) : (
              <p className="font-medium">
                Hey! We've got some exciting new features for you! 🎉 Check out our improved table, fresh data timer, and custom filters!
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