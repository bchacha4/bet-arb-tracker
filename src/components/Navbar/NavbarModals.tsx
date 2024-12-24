import ProfileModal from '../Profile/ProfileModal';
import FeedbackModal from '../Feedback/FeedbackModal';

interface NavbarModalsProps {
  isProfileOpen: boolean;
  isFeedbackOpen: boolean;
  onProfileClose: () => void;
  onFeedbackClose: () => void;
  userEmail?: string;
}

const NavbarModals = ({
  isProfileOpen,
  isFeedbackOpen,
  onProfileClose,
  onFeedbackClose,
  userEmail,
}: NavbarModalsProps) => {
  return (
    <>
      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={onProfileClose}
        userEmail={userEmail}
      />
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={onFeedbackClose}
      />
    </>
  );
};

export default NavbarModals;