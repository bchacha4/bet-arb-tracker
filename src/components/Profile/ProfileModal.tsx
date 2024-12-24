import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmailNotificationsSection from './EmailNotificationsSection';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

const ProfileModal = ({ isOpen, onClose, userEmail }: ProfileModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>
        <EmailNotificationsSection userEmail={userEmail} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;