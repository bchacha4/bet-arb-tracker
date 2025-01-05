import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Alert className="mb-6 bg-[#9b87f5] bg-opacity-10 border-[#9b87f5] border shadow-sm">
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-primary mt-1" />
          <AlertDescription className="text-foreground">
            {isExpanded ? (
              <>
                <p className="font-medium mb-1">Welcome to Bettor-IQ! 🎉</p>
                <p>
                  We're excited to announce that we've expanded our coverage to include both NFL and NBA markets! 
                  You can now access:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Player Props for both NFL and NBA</li>
                  <li>Moneyline (Head-to-head) bets</li>
                  <li>Totals (Over/Under)</li>
                  <li>Point Spreads</li>
                </ul>
                <p className="mt-2">
                  We're continuously working to enhance your arbitrage betting experience! Coming soon:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Additional sports coverage</li>
                  <li>Enhanced features and user experience improvements</li>
                </ul>
                <p className="mt-2 font-medium">
                  Your feedback matters! Click the user menu in the top right corner to share your thoughts 
                  and help us build the best possible product for you. 💡
                </p>
              </>
            ) : (
              <p className="font-medium">Big update! 🎉 NBA markets are now available! Click to learn more about our expanded coverage for both NFL and NBA.</p>
            )}
          </AlertDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-primary/80 hover:bg-background/80 -mt-1"
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