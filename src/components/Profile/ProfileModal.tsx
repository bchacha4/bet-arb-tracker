import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import EmailNotificationsSection from './EmailNotificationsSection';
import AccountSettingsSection from './AccountSettingsSection';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

const ProfileModal = ({ isOpen, onClose, userEmail }: ProfileModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <AccountSettingsSection userEmail={userEmail} />
          <Separator />
          <EmailNotificationsSection userEmail={userEmail} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;