import { Button } from "@/components/ui/button";
import { formatUrl, openUrl } from "../utils/urlUtils";

interface PlaceBetButtonProps {
  link: string;
  bookmaker: string;
  className?: string;
}

const PlaceBetButton = ({ link, bookmaker, className = '' }: PlaceBetButtonProps) => {
  const handleClick = () => {
    const url = formatUrl(link, bookmaker);
    openUrl(url);
  };

  return (
    <Button
      variant="outline"
      className={`w-full bg-primary text-white hover:bg-white hover:text-primary border-primary ${className}`}
      onClick={handleClick}
    >
      PLACE BET
    </Button>
  );
};

export default PlaceBetButton;