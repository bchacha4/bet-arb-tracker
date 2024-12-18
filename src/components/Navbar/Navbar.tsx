import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '../Auth/AuthProvider';
import { toast } from '@/components/ui/use-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Arbitrage Tracker</h1>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;