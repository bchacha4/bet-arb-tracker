import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

interface LastUpdatedSectionProps {
  lastUpdated: string;
  onRefresh: () => void;
}

const LastUpdatedSection = ({ lastUpdated, onRefresh }: LastUpdatedSectionProps) => {
  const [timeAgo, setTimeAgo] = React.useState('');

  React.useEffect(() => {
    const updateTimeAgo = () => {
      if (lastUpdated) {
        try {
          const date = new Date(lastUpdated);
          setTimeAgo(formatDistanceToNow(date, { addSuffix: true }));
        } catch (error) {
          console.error('Error formatting date:', error);
          setTimeAgo('unknown');
        }
      }
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Last updated: {timeAgo}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onRefresh}
        className="h-9 w-9 hover:bg-gray-100 transition-colors duration-200"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LastUpdatedSection;