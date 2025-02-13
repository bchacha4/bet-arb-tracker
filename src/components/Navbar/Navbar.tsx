
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '../Auth/AuthProvider';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import UserDropdownMenu from './UserDropdownMenu';
import NavbarModals from './NavbarModals';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-gray-900 whitespace-nowrap hover:text-gray-700">
            Bettor-IQ
          </Link>
          {user && (
            <div className="flex items-center space-x-6">
              <Link
                to="/arbitrage-tracker"
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  location.pathname === '/arbitrage-tracker' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                Arbitrage Tracker
              </Link>
              <Link
                to="/odds-scout"
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  location.pathname === '/odds-scout' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                Odds Scout
              </Link>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <UserDropdownMenu 
              isOpen={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
              onProfileClick={handleProfileClick}
              onFeedbackClick={handleFeedbackClick}
              onSignOutClick={handleSignOutClick}
            />
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="font-medium text-gray-600 hover:text-gray-900">
                  Log in
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-primary hover:bg-primary/90">
                  Sign up free
                </Button>
              </Link>
            </>
          )}
        </div>
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
