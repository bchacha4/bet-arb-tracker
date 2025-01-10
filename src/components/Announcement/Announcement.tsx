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
                <p className="font-semibold mb-2">Welcome to the New Odds Scout! 🎉</p>
                <p className="text-sm text-foreground/80">
                  We've made some exciting improvements to enhance your experience:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 text-sm text-foreground/80 space-y-1">
                  <li>Improved layout for better readability</li>
                  <li>Enhanced filters for easier odds comparison</li>
                  <li>More compact and organized desktop view</li>
                  <li>Better mobile experience with optimized layout</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-foreground/90">
                  We're continuously working to make Odds Scout better for you! Have feedback? 
                  Click the user menu in the top right corner to let us know what you think. 💡
                </p>
              </>
            ) : (
              <p className="font-medium">
                Check out our latest updates! 🎉 We've improved the layout and added new features to make odds comparison easier.
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