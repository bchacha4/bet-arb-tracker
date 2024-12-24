import { Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Announcement = () => {
  return (
    <Alert className="mb-6 bg-blue-50 border-blue-200">
      <Info className="h-5 w-5 text-blue-500" />
      <AlertDescription className="text-blue-700">
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
      </AlertDescription>
    </Alert>
  );
};

export default Announcement;