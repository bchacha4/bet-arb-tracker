import { User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onProfileClick: () => void;
  onFeedbackClick: () => void;
  onSignOutClick: () => void;
}

const UserDropdownMenu = ({
  isOpen,
  onOpenChange,
  onProfileClick,
  onFeedbackClick,
  onSignOutClick,
}: UserDropdownMenuProps) => {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-gray-100"
        >
          <User className="h-5 w-5" />
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
      >
        <DropdownMenuItem 
          onClick={onProfileClick}
          className="cursor-pointer hover:bg-gray-100"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={onFeedbackClick}
          className="cursor-pointer hover:bg-gray-100"
        >
          Feedback
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={onSignOutClick}
          className="cursor-pointer hover:bg-gray-100"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;