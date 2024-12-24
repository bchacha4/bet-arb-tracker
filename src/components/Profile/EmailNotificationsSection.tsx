import { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface EmailNotificationsSectionProps {
  userEmail?: string;
}

const EmailNotificationsSection = ({ userEmail }: EmailNotificationsSectionProps) => {
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
      
      if (data) {
        setEmailNotifications(data.email_notifications);
      }
    };

    fetchProfile();
  }, []);

  const handleEmailNotificationsChange = async () => {
    const newValue = !emailNotifications;
    
    const { error } = await supabase
      .from('profiles')
      .update({ email_notifications: newValue })
      .eq('id', (await supabase.auth.getUser()).data.user?.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update email notification preferences.",
        variant: "destructive",
      });
      return;
    }

    setEmailNotifications(newValue);
    toast({
      title: "Success",
      description: "Email notification preferences updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="email-notifications" className="text-sm font-medium text-gray-900">
            Email Notifications
          </Label>
          <div className="text-sm text-gray-500">
            Receive email notifications about arbitrage opportunities
          </div>
        </div>
        <Switch
          id="email-notifications"
          checked={emailNotifications}
          onCheckedChange={handleEmailNotificationsChange}
        />
      </div>
    </div>
  );
};

export default EmailNotificationsSection;