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
        const date = new Date(lastUpdated);
        setTimeAgo(formatDistanceToNow(date, { addSuffix: true }));
      }
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60000);
    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <div className="flex items-center justify-between border-t pt-4">
      <span className="text-sm text-gray-500">Last updated: {timeAgo}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onRefresh}
        className="h-9 w-9"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LastUpdatedSection;