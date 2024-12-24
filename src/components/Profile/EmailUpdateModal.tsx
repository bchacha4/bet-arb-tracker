import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface EmailUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEmail?: string;
}

const EmailUpdateModal = ({ isOpen, onClose, currentEmail }: EmailUpdateModalProps) => {
  const [newEmail, setNewEmail] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateEmail = async () => {
    if (!newEmail) {
      toast({
        title: "Error",
        description: "Please enter a new email address.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    setIsUpdating(false);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Verification email sent. Please check your inbox.",
    });
    setNewEmail('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Update Email</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Current Email</Label>
            <Input value={currentEmail} disabled className="bg-gray-100" />
          </div>
          <div className="space-y-2">
            <Label>New Email</Label>
            <Input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new email"
            />
          </div>
          <Button 
            onClick={handleUpdateEmail} 
            disabled={isUpdating}
            className="w-full"
          >
            {isUpdating ? "Updating..." : "Update Email"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailUpdateModal;