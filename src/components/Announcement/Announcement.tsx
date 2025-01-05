import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Alert className="mb-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 shadow-sm">
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-primary mt-1" />
          <AlertDescription className="text-foreground">
            {isExpanded ? (
              <>
                <p className="font-semibold mb-2">Welcome to Bettor-IQ! 🎉</p>
                <p className="text-sm text-foreground/80">
                  We're excited to announce that we've expanded our coverage to include both NFL and NBA markets! 
                  You can now access:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Player Props for both NFL and NBA</li>
                  <li>Moneyline (Head-to-head) bets</li>
                  <li>Totals (Over/Under)</li>
                  <li>Point Spreads</li>
                </ul>
                <p className="mt-3 text-sm text-foreground/80">
                  We're continuously working to enhance your arbitrage betting experience! Coming soon:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Additional sports coverage</li>
                  <li>Enhanced features and user experience improvements</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  Your feedback matters! Click the user menu in the top right corner to share your thoughts 
                  and help us build the best possible product for you. 💡
                </p>
              </>
            ) : (
              <p className="font-medium">
                Big update! 🎉 NBA markets are now available! Click to learn more about our expanded coverage for both NFL and NBA.
              </p>
            )}
          </AlertDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-primary/80 hover:bg-primary/5 -mt-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </Button>
      </div>
    </Alert>
  );
};

export default Announcement;