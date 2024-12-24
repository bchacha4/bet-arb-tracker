import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Alert className="mb-6 bg-blue-50 border-blue-200">
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-blue-500 mt-1" />
          <AlertDescription className="text-blue-700">
            {isExpanded ? (
              <>
                <p className="font-medium mb-1">Welcome to Bettor-IQ! 🎉</p>
                <p>
                  We're excited to have you here! This product is new and actively being improved.
                  Currently, we're focused on NFL player props, but we'll be expanding to include:
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Game lines and other betting markets</li>
                  <li>NBA and other sports coverage</li>
                  <li>Enhanced features and user experience improvements</li>
                </ul>
                <p className="mt-2">
                  Stay tuned for regular updates as we continue to enhance your arbitrage betting experience!
                </p>
                <p className="mt-2 font-medium">
                  Your feedback matters! Click the user menu in the top right corner to share your thoughts 
                  and help us build the best possible product for you. 💡
                </p>
              </>
            ) : (
              <p className="font-medium">Welcome to Bettor-IQ! Click to learn more about upcoming features and how to share feedback. 🎉</p>
            )}
          </AlertDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-500 hover:text-blue-600 hover:bg-blue-100 -mt-1"
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