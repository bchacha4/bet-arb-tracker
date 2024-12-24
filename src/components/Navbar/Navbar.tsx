import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '../Auth/AuthProvider';
import { toast } from '@/components/ui/use-toast';
import UserDropdownMenu from './UserDropdownMenu';
import NavbarModals from './NavbarModals';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
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
            <UserDropdownMenu 
              isOpen={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
              onProfileClick={handleProfileClick}
              onFeedbackClick={handleFeedbackClick}
              onSignOutClick={handleSignOutClick}
            />
          </div>
        )}
      </div>

      <NavbarModals 
        isProfileOpen={isProfileOpen}
        isFeedbackOpen={isFeedbackOpen}
        onProfileClose={() => setIsProfileOpen(false)}
        onFeedbackClose={() => setIsFeedbackOpen(false)}
        userEmail={user?.email}
      />
    </nav>
  );
};

export default Navbar;