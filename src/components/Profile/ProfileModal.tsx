import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string | undefined;
}

const ProfileModal = ({ isOpen, onClose, userEmail }: ProfileModalProps) => {
  const handleUpdatePassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(userEmail || '');
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Password reset email sent. Please check your inbox.",
      });
    }
  };

  const handleDeleteAccount = async () => {
    // This would require an edge function to properly handle account deletion
    toast({
      title: "Coming Soon",
      description: "Account deletion will be available soon.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Email</h3>
            <p className="text-sm text-gray-500">{userEmail}</p>
          </div>
          <div className="space-y-2">
            <Button onClick={handleUpdatePassword} variant="outline" className="w-full">
              Update Password
            </Button>
          </div>
          <div className="space-y-2">
            <Button 
              onClick={handleDeleteAccount} 
              variant="destructive" 
              className="w-full"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;