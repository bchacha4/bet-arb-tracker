import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '../Auth/AuthProvider';
import { toast } from '@/components/ui/use-toast';
import { User, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileModal from '../Profile/ProfileModal';
import FeedbackModal from '../Feedback/FeedbackModal';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(false);
    setIsProfileOpen(true);
  };

  const handleFeedbackClick = () => {
    setIsDropdownOpen(false);
    setIsFeedbackOpen(true);
  };

  const handleSignOutClick = () => {
    setIsDropdownOpen(false);
    handleSignOut();
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Bettor-IQ</h1>
        {user && (
          <div className="flex items-center gap-2">
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
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
                  onClick={handleProfileClick}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleFeedbackClick}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Feedback
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleSignOutClick}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userEmail={user?.email}
      />

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </nav>
  );
};

export default Navbar;