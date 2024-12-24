import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string | undefined;
}

const ProfileModal = ({ isOpen, onClose, userEmail }: ProfileModalProps) => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('email_notifications')
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }
      
      // If data exists, use it; otherwise, keep the default value (true)
      if (data) {
        setEmailNotifications(data.email_notifications);
      }
    };

    if (isOpen) {
      fetchProfile();
    }
  }, [isOpen]);

  const handleEmailPreferenceChange = async () => {
    const newValue = !emailNotifications;
    const { error } = await supabase
      .from('profiles')
      .update({ email_notifications: newValue })
      .eq('id', (await supabase.auth.getUser()).data.user?.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update email preferences",
        variant: "destructive",
      });
      return;
    }

    setEmailNotifications(newValue);
    toast({
      title: "Success",
      description: "Email preferences updated successfully",
    });
  };

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
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="emailNotifications" 
              checked={emailNotifications}
              onCheckedChange={handleEmailPreferenceChange}
            />
            <label
              htmlFor="emailNotifications"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Receive email notifications
            </label>
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
